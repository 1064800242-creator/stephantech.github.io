const DEFAULT_ALLOWED_ORIGIN = "https://1064800242-creator.github.io";

const json = (data, status = 200, origin = DEFAULT_ALLOWED_ORIGIN) =>
  new Response(JSON.stringify(data), {
    status,
    headers: {
      "Content-Type": "application/json; charset=utf-8",
      "Access-Control-Allow-Origin": origin,
      "Access-Control-Allow-Methods": "POST, OPTIONS",
      "Access-Control-Allow-Headers": "Content-Type",
    },
  });

const cors = (origin) =>
  new Response(null, {
    status: 204,
    headers: {
      "Access-Control-Allow-Origin": origin,
      "Access-Control-Allow-Methods": "POST, OPTIONS",
      "Access-Control-Allow-Headers": "Content-Type",
      "Access-Control-Max-Age": "86400",
    },
  });

const readCozeStream = async (response) => {
  const text = await response.text();
  const lines = text.split(/\r?\n/);
  const chunks = [];

  const pickContent = (value) => {
    if (!value) return "";
    if (typeof value === "string") {
      try {
        return pickContent(JSON.parse(value));
      } catch {
        return value;
      }
    }
    if (typeof value !== "object") return "";
    return (
      value.content ||
      value.message?.content ||
      value.messages?.[0]?.content ||
      value.data?.content ||
      pickContent(value.data) ||
      ""
    );
  };

  for (const line of lines) {
    if (!line.startsWith("data:")) continue;
    const raw = line.slice(5).trim();
    if (!raw || raw === "[DONE]") continue;

    try {
      const event = JSON.parse(raw);
      const content = pickContent(event);
      if (typeof content === "string" && content.trim()) chunks.push(content);
    } catch {
      if (raw.trim()) chunks.push(raw);
    }
  }

  return chunks.join("").trim();
};

const getConversationMessages = async (env, conversationId, chatId) => {
  const baseUrl = env.COZE_API_BASE_URL || "https://api.coze.cn";
  const url = `${baseUrl}/v3/chat/message/list?conversation_id=${encodeURIComponent(conversationId)}&chat_id=${encodeURIComponent(chatId)}`;
  const response = await fetch(url, {
    headers: {
      Authorization: `Bearer ${env.COZE_API_TOKEN}`,
    },
  });

  if (!response.ok) {
    throw new Error(`Coze message list failed: ${response.status}`);
  }

  const data = await response.json();
  const messages = data?.data || [];
  const answer = messages
    .filter((message) => message.role === "assistant" && message.type === "answer")
    .map((message) => message.content)
    .filter(Boolean)
    .join("\n\n")
    .trim();

  return answer;
};

const waitForChatResult = async (env, conversationId, chatId) => {
  const baseUrl = env.COZE_API_BASE_URL || "https://api.coze.cn";
  const url = `${baseUrl}/v3/chat/retrieve?conversation_id=${encodeURIComponent(conversationId)}&chat_id=${encodeURIComponent(chatId)}`;

  for (let attempt = 0; attempt < 45; attempt++) {
    const response = await fetch(url, {
      headers: {
        Authorization: `Bearer ${env.COZE_API_TOKEN}`,
      },
    });

    if (!response.ok) {
      throw new Error(`Coze retrieve failed: ${response.status}`);
    }

    const data = await response.json();
    const status = data?.data?.status;
    if (status === "completed") {
      return getConversationMessages(env, conversationId, chatId);
    }
    if (status === "failed" || status === "requires_action" || status === "canceled") {
      throw new Error(`Coze chat status: ${status}`);
    }

    await new Promise((resolve) => setTimeout(resolve, 1200));
  }

  throw new Error("Coze response timed out");
};

const gradeWithCoze = async (env, prompt, userId) => {
  const baseUrl = env.COZE_API_BASE_URL || "https://api.coze.cn";
  const response = await fetch(`${baseUrl}/v3/chat`, {
    method: "POST",
    headers: {
      Authorization: `Bearer ${env.COZE_API_TOKEN}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      bot_id: env.COZE_BOT_ID,
      user_id: String(userId || "toefl-writing-user").slice(0, 64),
      stream: true,
      auto_save_history: false,
      additional_messages: [
        {
          role: "user",
          content: prompt,
          content_type: "text",
        },
      ],
    }),
  });

  if (!response.ok) {
    const errorText = await response.text();
    throw new Error(`Coze request failed: ${response.status} ${errorText.slice(0, 300)}`);
  }

  const contentType = response.headers.get("content-type") || "";
  if (contentType.includes("text/event-stream")) {
    return readCozeStream(response);
  }

  const data = await response.json();
  const directAnswer =
    data?.messages?.find?.((message) => message.role === "assistant")?.content ||
    data?.data?.messages?.find?.((message) => message.role === "assistant")?.content ||
    data?.data?.content ||
    "";

  if (directAnswer) return directAnswer;

  const conversationId = data?.data?.conversation_id || data?.conversation_id;
  const chatId = data?.data?.id || data?.data?.chat_id || data?.id;
  if (conversationId && chatId) {
    return waitForChatResult(env, conversationId, chatId);
  }

  return JSON.stringify(data, null, 2);
};

export default {
  async fetch(request, env) {
    const allowedOrigin = env.ALLOWED_ORIGIN || DEFAULT_ALLOWED_ORIGIN;

    if (request.method === "OPTIONS") return cors(allowedOrigin);
    if (request.method !== "POST") return json({ error: "Only POST is supported." }, 405, allowedOrigin);

    if (!env.COZE_API_TOKEN || !env.COZE_BOT_ID) {
      return json({ error: "Coze Token 或 Bot ID 还没有配置。" }, 500, allowedOrigin);
    }

    let body;
    try {
      body = await request.json();
    } catch {
      return json({ error: "请求内容格式不正确。" }, 400, allowedOrigin);
    }

    const prompt = String(body.prompt || "").trim();
    if (!prompt) return json({ error: "缺少需要批改的作文内容。" }, 400, allowedOrigin);
    if (prompt.length > 20000) return json({ error: "作文内容过长，请缩短后再试。" }, 400, allowedOrigin);

    try {
      const result = await gradeWithCoze(env, prompt, body.userId);
      return json({ result }, 200, allowedOrigin);
    } catch (err) {
      return json({ error: err.message || "Coze 批改失败。" }, 502, allowedOrigin);
    }
  },
};
