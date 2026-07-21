---
kind: build_system
name: Next.js Export 静态站点构建系统
category: build_system
scope:
    - '**'
source_files:
    - package.json
    - next.config.js
    - tailwind.config.js
    - postcss.config.js
    - tsconfig.json
    - scripts/generate-posts.js
---

本项目采用 Next.js 的 `output: 'export'` 模式进行纯静态站点构建，通过 npm scripts 驱动整个编译、生成与部署流程。

## 构建工具链
- 框架：Next.js 16（配置为导出静态 HTML）
- 样式：Tailwind CSS 3 + PostCSS + Autoprefixer
- 类型：TypeScript 5（noEmit，由 Next 内部处理编译）
- Markdown：gray-matter 解析 frontmatter，marked 渲染 HTML
- Lint：ESLint（eslint-config-next）

## 核心构建脚本
根目录 package.json 暴露五个命令：
- npm run dev — 启动开发服务器
- npm run build — 执行 next build，输出到 out/ 目录
- npm start — 本地预览静态产物
- npm run lint — 代码检查
- npm run generate-posts — 运行 scripts/generate-posts.js，将 src/posts/*.md 解析并生成 src/config/posts.ts 与 generated/posts/*.html

## 构建产物与路径约定
- next.config.js 中 output: 'export' 使 next build 输出纯静态文件至 out/
- trailingSlash: true 确保 URL 以 / 结尾，便于 GitHub Pages / Vercel 等静态托管
- images.unoptimized: true 禁用 Next Image 优化，适配静态导出场景
- 博客文章通过脚本预生成，运行时直接导入 @/config/posts 常量，无需服务端渲染

## 内容生成流水线
scripts/generate-posts.js 是唯一的自定义构建步骤：
1. 扫描 src/posts/*.md
2. 用 gray-matter 提取 frontmatter（title、description、date、tags 等）
3. 用 marked 将 Markdown 转为 HTML
4. 生成 slug（基于文件名，小写+连字符）
5. 输出两份产物：
   - generated/posts/<slug>.html — 独立 HTML 文件
   - src/config/posts.ts — TypeScript 常量，被应用直接 import
该脚本需手动运行或在 CI 中作为前置步骤调用，生成的 posts.ts 会被纳入版本控制。

## 样式构建
tailwind.config.js 声明 content 扫描范围覆盖 src/app、src/components、src/pages；darkMode: 'class' 配合 next-themes 实现主题切换；postcss.config.js 串联 tailwindcss → autoprefixer 两个插件。

## 类型系统
tsconfig.json 使用 moduleResolution: 'bundler'、jsx: react-jsx、paths: { "@/*": ["./src/*"] }；额外提供 tsconfig.scripts.json 供 Node 脚本使用；next TypeScript 插件启用，用于 App Router 类型推导。

## 依赖管理
使用 package-lock.json 锁定依赖版本；无 monorepo 或 workspace 结构，单包管理；生产依赖与开发依赖按功能分组（UI 组件、Markdown 处理、样式、类型等）。

## 发布与部署
仓库未包含 Dockerfile、CI 配置文件、Makefile 或部署脚本。结合 output: 'export' 的配置，典型部署方式为：npm ci && npm run build，然后将 out/ 目录上传至任意静态托管服务（GitHub Pages、Vercel、Netlify、Cloudflare Pages 等）。

## 开发者约定
- 新增博客文章只需在 src/posts/ 下添加 .md 文件，然后运行 npm run generate-posts 重新生成配置
- 所有样式通过 Tailwind 原子类编写，避免手写 CSS
- 组件与页面统一放在 src/app 与 src/components 下，通过 @/* 别名引用
- 不修改 src/config/posts.ts，它由脚本自动生成