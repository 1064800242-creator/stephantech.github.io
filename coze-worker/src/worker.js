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
    const candidates = [
      value.text,
      value.answer,
      value.output,
      value.content,
      value.message,
      value.messages?.[0],
      value.data,
      value.delta,
    ];
    for (const candidate of candidates) {
      const content = pickContent(candidate);
      if (content) return content;
    }
    return "";
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

const gradeWithCoze = async (env, prompt, userId) => {
  const response = await fetch(env.COZE_PROJECT_API_URL, {
    method: "POST",
    headers: {
      Authorization: `Bearer ${env.COZE_API_TOKEN}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      content: {
        query: {
          prompt: [
            {
              type: "text",
              content: { text: prompt },
            },
          ],
        },
      },
      type: "query",
      session_id: String(userId || crypto.randomUUID()).slice(0, 64),
      project_id: Number(env.COZE_PROJECT_ID),
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
  return data?.data?.content || data?.content || data?.answer || JSON.stringify(data, null, 2);
};

export default {
  async fetch(request, env) {
    const allowedOrigin = env.ALLOWED_ORIGIN || DEFAULT_ALLOWED_ORIGIN;

    if (request.method === "OPTIONS") return cors(allowedOrigin);
    if (request.method !== "POST") return json({ error: "Only POST is supported." }, 405, allowedOrigin);

    if (!env.COZE_API_TOKEN || !env.COZE_PROJECT_ID || !env.COZE_PROJECT_API_URL) {
      return json({ error: "Coze project URL, project ID, or API Token is not configured." }, 500, allowedOrigin);
    }

    let body;
    try {
      body = await request.json();
    } catch {
      return json({ error: "Invalid JSON request body." }, 400, allowedOrigin);
    }

    const prompt = String(body.prompt || "").trim();
    if (!prompt) return json({ error: "The grading prompt is missing." }, 400, allowedOrigin);
    if (prompt.length > 20000) return json({ error: "The grading prompt is too long." }, 400, allowedOrigin);

    try {
      const result = await gradeWithCoze(env, prompt, body.userId);
      return json({ result }, 200, allowedOrigin);
    } catch (err) {
      return json({ error: err.message || "Coze grading failed." }, 502, allowedOrigin);
    }
  },
};
