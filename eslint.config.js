import antfu from '@antfu/eslint-config'

// 代码检查工具，用于检查代码漏洞

export default antfu({
  vue: true,
  typescript: true,
  astro: true,
  formatters: {
    astro: true,
    css: true,
  },
})
