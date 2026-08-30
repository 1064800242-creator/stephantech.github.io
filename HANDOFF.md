# HANDOFF.md — 任务交接说明

> 本文件由前任助手（WorkBuddy）生成于 2026-08-30 凌晨，用于向新接手的 AI 助手（Kimi CLI 或其他）交接未完成任务。
> 前任执行工具为 Codex（ChatGPT 模式），因额度耗尽中断。

## 必读文件（按顺序）

1. **`../MEMORY.md`**（项目完整记忆，约 300 行）——本项目的全部背景、产品决策、红线约束都在这里，接手前必须通读。
2. **`../AGENTS.override.md`**——本项目的协作规则。
3. 本文件。

## 项目是什么

黑客松 Demo：在现有 TOEFL 写作网站（Vue 3 + Vite + Firebase，GitHub Pages 部署）中新增「AI 学习教练」模块（路由 `#/learning-coach`），核心是"诊断 → 训练处方 → 同题修复 → 迁移验证 → 重新规划"的教学决策层，区别于现有 Coze 批改 Agent 的单篇反馈。

## 中断时的状态（2026-08-30 03:02）

**好消息：源码改动和构建都已完成，任务跑到了后半段。**

- 工作目录：本目录（`existing-toefl-site/`，git 仓库，main 分支，与 origin 同步）
- 未提交改动（`git diff --stat -- app/`）：
  - `app/src/views/LearningCoachView.vue`：+117/-3（主体工作）——正在实现诊断分类模块：句子骨架 / 时态与主谓一致 / 词汇与搭配 三类诊断，每类含信号强度、影响说明、真实证据句（来自匿名学生案例）
  - `app/src/views/DemoRecordsView.vue`：小改（10 行）
  - `app/src/views/DemoAcademicPracticeView.vue`：1 行小改
- **构建已成功**：`assets/` 与 `dist/` 均为 03:02 新产物（旧的 hash 文件被删、新 hash 文件未跟踪，这是正常的重建结果）
- 所有改动**未 commit**

## 剩余工作（按优先级）

1. **验收 Demo 流程能否跑通**（评审场景是最高目标）：`npm run dev`（或 preview）启动后走一遍 `#/learning-coach` 的 3 分钟演示模式——预载匿名真实案例（同题初稿 3.0 → 训练处方 → 二稿 4.5 → 官方 4.5→5.0 闭环），不登录、不现场生成。
2. 检查「从练习记录/批改反馈进入'生成下一步训练'」的入口是否已接通（`DemoRecordsView` 的改动应该与此相关）。
3. 跑通后 `git add -A && git commit`（**commit 信息用中文简述**）。**未经用户确认不要 `git push`**——线上站是真实学生在用的。

## 红线（违反会出事故）

- 不要读取或输出任何 Coze Token、API Key、环境变量值（见 ../MEMORY.md 相关条目）。
- 对外话术必须审慎：写「Agent 预估分从 3.0 升至 4.5」，不能说「官方评分提升」；「节省 3 小时」只能标注为教师个案估算。
- 学生案例必须匿名；路演前最好确认已获授权。
- 只改本目录内的文件；`../MEMORY.md` 有新结论时追加，不要删改旧条目。
