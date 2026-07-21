---
kind: external_dependency
name: 腾讯云 EdgeOne Pages 静态托管与部署
slug: tencent-cloud-edgeone-pages
category: external_dependency
category_hints:
    - vendor_identity
    - client_constraint
scope:
    - '**'
source_files:
    - next.config.js
    - README.md
    - README_zh-CN.md
    - src/config/projects.ts
---

本项目通过 `next.config.js` 的 `output: 'export'` + `trailingSlash: true` + `images.unoptimized: true` 输出纯静态站点，目标部署平台为腾讯云 EdgeOne Pages（`multiplepage-portfolio.edgeone.app`）。README 中提供了 EdgeOne Pages 一键部署按钮，构建命令为 `npm run build`，输出目录为 `./out`。由于使用静态导出，Next.js Image 组件需关闭优化；同时项目内多处引用 `edgeone.ai/pages/templates?usecase=portfolio` 作为项目链接占位。