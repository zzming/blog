---
kind: frontend_style
name: Tailwind CSS + next-themes 主题与样式体系
category: frontend_style
scope:
    - '**'
source_files:
    - tailwind.config.js
    - postcss.config.js
    - src/app/globals.css
    - src/app/layout.tsx
    - src/components/ThemeToggle.tsx
    - src/components/ThemeProvider.tsx
    - src/context/ThemeContext.tsx
    - package.json
---

## 1. 系统与方法论
- **CSS 框架**：Tailwind CSS v3，通过 PostCSS + Autoprefixer 构建。
- **暗色模式**：`darkMode: 'class'`，配合 `next-themes` 在客户端切换 `<html class="dark">`，实现亮/暗双主题。
- **排版增强**：使用 `@tailwindcss/typography`（`prose` / `prose-invert`）统一 Markdown 渲染样式。
- **字体**：通过 `next/font/google` 加载 Inter，作为全局默认字体。
- **动画**：引入 `tailwindcss-animate`，组件内大量使用 `transition duration-* transform ease` 等原子类做微交互。
- **图标**：`lucide-react` 提供 SVG 图标，以 `stroke-current` 跟随文本颜色。

## 2. 关键文件与包
- 配置层：`tailwind.config.js`、`postcss.config.js`、`src/app/globals.css`
- 主题上下文：`src/components/ThemeProvider.tsx`、`src/context/ThemeContext.tsx`、`src/components/ThemeToggle.tsx`
- 根布局：`src/app/layout.tsx`（注入 Inter 字体、包裹 ThemeProvider）
- 依赖清单：`package.json`（tailwindcss、tailwind-merge、clsx、class-variance-authority、next-themes、@tailwindcss/typography 等）

## 3. 架构与约定
- **样式入口**：`globals.css` 仅声明 Tailwind 三层指令与 CSS 变量（`--foreground-rgb` / `--background-rgb`），body 通过 `rgb(var(...))` 绑定明暗主题色。
- **主题开关**：`layout.tsx` 用 `<ThemeProvider>` 包裹应用，`ThemeToggle.tsx` 通过 `useTheme()` 切换 `light/dark`；所有组件通过 Tailwind 的 `dark:` 前缀响应主题变化。
- **内容排版**：文章页使用 `<article className="prose dark:prose-invert max-w-none">` 交由 `@tailwindcss/typography` 接管标题、列表、代码块等语义化样式。
- **背景装饰**：首页/关于页/文章页普遍采用网格线加大圆模糊光晕的背景组合，通过重复的 Tailwind 原子类实现一致的视觉基调。
- **组件样式策略**：组件全部使用 Tailwind 原子类拼接，未引入独立 CSS 模块或 styled-components；条件样式借助 `clsx` / `tailwind-merge` / `class-variance-authority` 组合。

## 4. 开发者应遵循的规则
1. **优先使用 Tailwind 原子类**完成布局与外观，仅在确实需要时扩展 `tailwind.config.js` 的 `theme.extend`。
2. **主题色必须走 CSS 变量加 dark 前缀**，不要硬编码十六进制颜色；新增颜色应在 `globals.css` 中定义变量或在 `tailwind.config.js` 中扩展。
3. **Markdown 内容一律包裹在 prose 容器内**，避免手写排版样式。
4. **图标统一使用 lucide-react**，并通过 `stroke-current` 继承文本颜色以保持主题一致。
5. **过渡与动效使用 Tailwind 内置 transition 类**，必要时再考虑 `tailwindcss-animate` 提供的变体，避免手写 keyframes。
6. **不要在组件里写 style 标签或 import 额外 CSS 文件**，保持样式集中在 Tailwind 原子类与全局变量中。