# TOEFL Writing Improver Coze Worker

这个 Worker 是网站和 Coze 智能体之间的轻量后端。

为什么需要它：
- GitHub Pages 是静态网站，不能安全保存 Coze Token。
- 如果把 Token 写进前端，学生打开浏览器就能看到。
- Worker 负责隐藏 Token，让学生不用跳转、不用登录 Coze，也能直接在网站里看到批改结果。

## 需要准备

1. Cloudflare 账号
2. Coze API Token
3. Coze 智能体的 Bot ID

## Cloudflare Worker 环境变量

在 Worker 的 Settings -> Variables 里添加：

| 名称 | 类型 | 说明 |
| --- | --- | --- |
| `COZE_API_TOKEN` | Secret | Coze API Token |
| `COZE_BOT_ID` | Variable | 批改智能体的 Bot ID |
| `ALLOWED_ORIGIN` | Variable | `https://1064800242-creator.github.io` |

部署后，把 Worker 地址填到网站构建环境变量：

```bash
VITE_COZE_GRADER_API_URL=https://你的-worker地址.workers.dev/grade
```

然后重新运行网站构建并上传到 GitHub Pages。

