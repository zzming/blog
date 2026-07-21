---
kind: external_dependency
name: Lottie 动画资源
slug: lottie-web
category: external_dependency
category_hints:
    - framework_behavior
scope:
    - '**'
source_files:
    - public/assets/animations/tech-background.json
---

项目包含 Lottie JSON 动画资源文件 `public/assets/animations/tech-background.json`，用于在首页或背景动效中播放矢量动画。虽然当前代码中未直接引入 lottie-web 播放器，但资源已就绪，后续如需启用需在组件中加载该 JSON 并交由 lottie-web 渲染。