---
kind: logging_system
name: 无专用日志系统（仅使用 console.log）
category: logging_system
scope:
    - '**'
---

本仓库是一个基于 Next.js Export 模式的静态个人博客与作品集站点，未引入任何专用日志框架或结构化日志方案。代码中仅存在三处原生 `console` 调用：
- `src/app/posts/[slug]/page.tsx` 中使用 `console.warn` 输出构建回退警告
- `src/components/tech-background.tsx` 中使用 `console.log` 记录鼠标事件（开发调试用途）

项目依赖清单（package.json）不包含任何日志库（如 winston、pino、bunyan、morgan、debug 等），`scripts/generate-posts.js` 脚本也未见日志输出逻辑。由于站点采用静态导出模式运行，不存在服务端运行时日志收集需求。

结论：该仓库不具备可识别的 logging_system，属于“低”适用度场景。