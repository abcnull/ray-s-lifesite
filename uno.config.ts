import {
  defineConfig,
  presetAttributify,
  presetIcons,
  presetTypography,
  presetUno,
  presetWebFonts,
  transformerDirectives,
  transformerVariantGroup,
} from 'unocss'

// UnoCSS的配置文件

export default defineConfig({
  shortcuts: [
    {
      'bg-main': 'bg-hex-eef5fc dark:bg-hex-0d1117',
      'text-main': 'text-hex-555555 dark:text-hex-bbbbbb',
      'text-link': 'text-dark dark:text-white ',
      'border-main': 'border-truegray-300 dark:border-truegray-600',
    },
    {
      'text-title': 'text-link text-4xl font-800',
      'nav-link': 'text-link opacity-70 hover:opacity-100 transition-opacity duration-200 cursor-pointer',
      'prose-link': 'text-link text-nowrap cursor-pointer border-b-1 !border-opacity-30 hover:!border-opacity-100 border-neutral-500 hover:border-truegray-600 dark:border-neutral-500 hover:dark:border-truegray-400 transition-border-color duration-200 decoration-none',
      'container-link': 'p-2 opacity-60 hover:opacity-100 cursor-pointer hover:bg-truegray-500 !bg-opacity-10 transition-colors transition-opacity duration-200',
    },
    {
      'hr-line': 'w-14 mx-auto my-8 border-solid border-1px !border-truegray-200 !dark:border-truegray-800',
    },
  ],
  presets: [
    presetAttributify(), // 确保此行存在
    presetUno(),
    presetIcons({
      scale: 1.2,
      prefix: 'i-',
      extraProperties: {
        display: 'inline-block',
      },
    }),
    presetTypography(),
    presetWebFonts({
      fonts: {
        sans: 'Inter:400,600,800',
        mono: 'DM Mono:400,600',
      },
    }),
  ],
  transformers: [transformerDirectives(), transformerVariantGroup()],
  safelist: [
    'i-ri-file-list-2-line',
    'i-carbon-campsite',
    'i-simple-icons-x',
    'i-simple-icons-linkedin',
    'i-simple-icons-instagram',
    'i-simple-icons-youtube',
    'i-simple-icons-bilibili',
    'i-simple-icons-zhihu',
    'i-simple-icons-wechat',
    'i-simple-icons-bytedance',
    'i-simple-icons-tiktok',
    'i-simple-icons-alipay',
    'i-ri-wechat-line',
    'i-simple-icons-qq',
    'i-simple-icons-steam',
    'i-simple-icons-epicgames',
    'i-simple-icons-sinaweibo',
    'i-ri-github-line',
    'i-ri-twitter-x-line',

    'i-simple-icons-jetbrains',
    'i-simple-icons-git',
    'i-simple-icons-postman',
    'i-simple-icons-excalidraw',
    'i-simple-icons-github',
    'i-simple-icons-gitlab',
    'i-ri-chrome-line',
    'i-simple-icons-markdown',
    'i-ri-java-line',
    'i-simple-icons-springboot',
    'i-simple-icons-mysql',
    'i-simple-icons-redis',
    'i-simple-icons-go',
    'i-simple-icons-gin',
    'i-simple-icons-javascript',
    'i-ri-vuejs-line',
    'i-simple-icons-element',
    'i-simple-icons-astro',
    'i-simple-icons-hugo',
    'i-simple-icons-selenium',
    'i-simple-icons-appium',
    'i-simple-icons-macos',
    'i-simple-icons-linux',
    'i-simple-icons-python',
    'i-simple-icons-godotengine',
    'i-simple-icons-vercel',
  ],
})
