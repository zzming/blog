export const globalConfig = {
  site: {
    name: "Your Portfolio Name",
    author: "zzming",
    description: "A brief description of your portfolio website",
    url: "/"
  },
  navigation: {
    aria: "Main Navigation",
    items: [
      {
        title: "首页",
        href: "/"
      },
      {
        title: "项目",
        href: "/projects"
      },
      {
        title: "博客",
        href: "/posts"
      },
      {
        title: "关于",
        href: "/about"
      }
    ]
  },
  footer: {
    aria: "Footer Navigation",
    copyright: "© 2026 zzming. All rights reserved.",
    social: {
      twitter: "https://x.com/1006606787",
      github: "https://github.com/zzming",
      email: "zzming@qq.com"
    }
  }
} as const; 
