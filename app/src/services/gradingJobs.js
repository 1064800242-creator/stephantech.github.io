import { reactive } from "vue";

const STORAGE_KEY = "twi-grading-jobs-v1";
const GRADER_API_URL = import.meta.env.VITE_COZE_GRADER_API_URL
  || "https://toefl-writing-grader.stephaniefeng9.workers.dev/grade";
const jobs = reactive({});
const running = new Map();

try {
  Object.assign(jobs, JSON.parse(sessionStorage.getItem(STORAGE_KEY) || "{}"));
} catch {
  // Ignore stale or malformed browser state.
}

const persist = () => {
  const serializable = {};
  Object.entries(jobs).slice(-20).forEach(([key, value]) => {
    serializable[key] = value;
  });
  sessionStorage.setItem(STORAGE_KEY, JSON.stringify(serializable));
};

export const gradingJobs = jobs;

export const getGradingJob = (key) => jobs[key] || null;

export const runGradingJob = ({ key, prompt, userId }) => {
  if (running.has(key)) return running.get(key);
  if (jobs[key]?.status === "completed" && jobs[key]?.result) {
    return Promise.resolve(jobs[key].result);
  }

  jobs[key] = {
    status: "running",
    result: "",
    error: "",
    startedAt: new Date().toISOString(),
  };
  persist();

  const task = fetch(GRADER_API_URL, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ prompt, userId }),
  })
    .then(async (response) => {
      const data = await response.json().catch(() => ({}));
      if (!response.ok) throw new Error(data.error || "AI 批改暂时不可用。");
      const result = data.result || "AI 暂未返回批改内容。";
      jobs[key] = { ...jobs[key], status: "completed", result, completedAt: new Date().toISOString() };
      persist();
      return result;
    })
    .catch((error) => {
      jobs[key] = { ...jobs[key], status: "failed", error: error.message || "批改失败，请稍后重试。" };
      persist();
      throw error;
    })
    .finally(() => running.delete(key));

  running.set(key, task);
  return task;
};

export const retryGradingJob = (options) => {
  delete jobs[options.key];
  persist();
  return runGradingJob(options);
};
