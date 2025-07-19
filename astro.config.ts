import mdx from '@astrojs/mdx'
import sitemap from '@astrojs/sitemap'
import vue from '@astrojs/vue'
import { defineConfig } from 'astro/config'
import UnoCSS from 'unocss/astro'

// astro 配置文件

export default defineConfig({
  // 设置网站根 URL
  site: 'https://www.ray-shi.site/',
  // 配置开发服务器端口
  server: {
    port: 1977,
  },
  // 添加集成（如 Vue 支持、MDX 支持等）
  integrations: [
    mdx(),
    sitemap(),
    UnoCSS({
      injectReset: true,
    }),
    vue(),
  ],
  // 配置 Markdown 处理
  markdown: {
    shikiConfig: {
      themes: {
        light: 'github-light-default',
        dark: 'github-dark-default',
      },
      wrap: true,
    },
  },
})
