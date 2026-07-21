# Multiple Page Portfolio

A modern, responsive portfolio website built with Next.js 14, featuring multiple pages including a blog system, projects showcase, and about page.

## Quick Deploy

[![Deploy to Tencent Cloud](https://cdnstatic.tencentcs.com/edgeone/pages/deploy.svg)](https://edgeone.ai/pages/new?template=https://github.com/tomcomtang/minimalist-portfolio&output-directory=./out&build-command=npm%20run%20build&install-command=npm%20install)

## Preview

You can preview the project online at:

[https://multiplepage-portfolio.edgeone.app/](https://multiplepage-portfolio.edgeone.app/)

## Features

- 🎨 Modern and clean design with dark/light mode support
- 📱 Fully responsive layout
- 📝 Blog system with Markdown support
- 🚀 Project showcase
- 🔍 Search functionality for blog posts
- 🎯 SEO optimized
- 🌙 Dark/Light theme toggle
- 📦 Static site generation

## Tech Stack

- **Framework**: Next.js 14
- **Styling**: Tailwind CSS
- **Content**: Markdown with React Markdown
- **Syntax Highlighting**: React Syntax Highlighter
- **Theme**: next-themes
- **UI Components**: Custom components with Radix UI primitives

## Getting Started

1. Clone the repository:

```bash
git clone https://github.com/tomcomtang/multiplepage-portfolio.git
```

2. Install dependencies:

```bash
npm install
```

3. Run the development server:

```bash
npm run dev
```

4. Build for production:

```bash
npm run build
```

## Project Structure

```
├── src/
│   ├── app/                 # Next.js app directory
│   │   ├── about/          # About page
│   │   ├── posts/          # Blog posts
│   │   └── projects/       # Projects showcase
│   ├── components/         # Reusable components
│   └── config/            # Configuration files
├── scripts/               # Build scripts
└── public/               # Static assets
```

## Content Management

### Blog Posts

1. Create your markdown files in `src/content/posts/` directory
2. Each markdown file should follow this format:

```markdown
---
title: Your Post Title
description: A brief description of your post
date: 2024-03-21
readTime: 5 min
---

Your post content here...
```

3. After adding or modifying markdown files, run:

```bash
npm run generate-posts
```

### Page Content

You can customize the content of different pages by modifying these files:

- **About Page**: `src/app/about/page.tsx`
- **Projects Page**: `src/config/projects.ts`
- **Blog Posts**: `src/content/posts/*.md`

### Site Configuration

The main configuration files are:

- `src/config/content.ts`: Main content configuration including site name, description, and all page content
- `src/config/global.ts`: Global settings like navigation, footer, and social links
- `src/config/contact.ts`: Contact information and social media links
- `src/config/home.ts`: Home page specific configuration
- `src/config/posts.ts`: Blog posts configuration and content
- `src/config/projects.ts`: Projects showcase configuration
- `src/config/about.ts`: About page configuration

## Blog System

The blog system supports:

- Markdown content
- Code syntax highlighting
- Reading time estimation
- Search functionality
- Pagination

## Customization

1. Add new blog posts by creating Markdown files in the `src/content/posts` directory
2. Update project information in `src/config/projects.ts`
3. Modify site configuration in `src/config/content.ts` and `src/config/global.ts`

## License

ISC

## Author

[Your Name]
