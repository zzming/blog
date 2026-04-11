import { defineConfig } from 'astro/config';
import react from '@astrojs/react';
import markdoc from '@astrojs/markdoc';
import keystatic from '@keystatic/astro';
import cloudflare from '@astrojs/cloudflare'; // 这一行要确保有

// https://astro.build/config
export default defineConfig({
	// 关键：将输出模式改为 'hybrid'，以便支持 Keystatic 后台
  output: 'hybrid', 
  
  // 关键：指定使用 cloudflare 适配器
  adapter: cloudflare(),
  integrations: [react(), markdoc(), keystatic()],
});
