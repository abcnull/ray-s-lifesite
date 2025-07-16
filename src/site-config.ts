export const siteConfig = {

  author: 'Ray S',
  title: 'Ray S 小站',
  subtitle: '记录一些内容，记录一些生活',
  description: '记录一些内容，记录一些生活',
  image: { // todo 这里可能要删除？
    src: '/hero.jpg',
    alt: 'Website Main Image',
  },

  originAuthor: 'Kieran Wong',
  originProject: 'astro-theme-vitesse',

  // 主页邮箱
  email: 'raymondstone@163.com',

  // 主页 联系方式
  socialLinks: [
    {
      text: 'Wechat:a463279708',
      icon: 'i-simple-icons-wechat',
    },
    {
      text: 'GitHub',
      href: 'https://github.com/abcnull',
      icon: 'i-simple-icons-github',
    },
    {
      text: 'Steam',
      href: 'https://steamcommunity.com/id/abcnull/',
      icon: 'i-simple-icons-steam',
    },
    {
      text: 'EpicGames',
      href: '',
      icon: 'i-simple-icons-epicgames',
    },
    {
      text: 'Bilibili',
      href: '',
      icon: 'i-simple-icons-bilibili',
    },
  ],

  workWithLinks: [
    {
      text: 'JetBrains IDE',
      icon: 'i-simple-icons-jetbrains',
    },
    {
      text: 'Git',
      icon: 'i-simple-icons-git',
    },
    {
      text: 'Postman',
      icon: 'i-simple-icons-postman',
    },
    {
      text: 'ExcaliDraw',
      icon: 'i-simple-icons-excalidraw',
    },
    {
      text: 'Chrome',
      icon: 'i-ri-chrome-line',
    },
    {
      text: 'Markdown',
      icon: 'i-simple-icons-markdown',
    },
    {
      text: 'GitHub',
      icon: 'i-simple-icons-github',
    },
    {
      text: 'GitLab',
      icon: 'i-simple-icons-gitlab',
    },
    {
      text: 'Java',
      icon: 'i-ri-java-line',
    },
    {
      text: 'SpringBoot',
      icon: 'i-simple-icons-springboot',
    },
    {
      text: 'MySQL',
      icon: 'i-simple-icons-mysql',
    },
    {
      text: 'Redis',
      icon: 'i-simple-icons-redis',
    },
    {
      text: 'Go',
      icon: 'i-simple-icons-go',
    },
    {
      text: 'Gin',
      icon: 'i-simple-icons-gin',
    },
    {
      text: 'JavaScript',
      icon: 'i-simple-icons-javascript',
    },
    {
      text: 'Vue',
      icon: 'i-ri-vuejs-line',
    },
    {
      text: 'ElementPlus',
      icon: 'i-simple-icons-element',
    },
    {
      text: 'Astro',
      icon: 'i-simple-icons-astro',
    },
    {
      text: 'Hugo',
      icon: 'i-simple-icons-hugo',
    },
    {
      text: 'GodotEngine',
      icon: 'i-simple-icons-godotengine',
    },
    {
      text: 'Selenium',
      icon: 'i-simple-icons-selenium',
    },
    {
      text: 'Appium',
      icon: 'i-simple-icons-appium',
    },
    {
      text: 'MacOS',
      icon: 'i-simple-icons-macos',
    },
    {
      text: 'Linux',
      icon: 'i-simple-icons-linux',
    },
    {
      text: 'Vercel',
      icon: 'i-simple-icons-vercel',
    },
  ],

  // header 头图
  header: {
    logo: {
      src: '/img.png', // todo
      alt: 'Logo Image',
    },
    navLinks: [
      {
        text: '全部 All Notes',
        href: '/blog',
      },
      {
        text: '生活 Life',
        href: '/blog/notes',
      },
      {
        text: '学习 Study',
        href: '/blog/talks',
      },
      {
        text: '项目 Projects',
        href: '/projects',
      },
    ],
  },

  // 页面内展示
  page: {
    blogLinks: [
      {
        text: '全部 All Notes',
        href: '/blog',
      },
      {
        text: '生活 Life',
        href: '/blog/notes',
      },
      {
        text: '学习 Study',
        href: '/blog/talks',
      },
    ],
  },

  // 页脚
  footer: {
    navLinks: [
      {
        text: 'Posts Props',
        href: '/posts-props',
      },
      {
        text: 'Markdown Style',
        href: '/md-style',
      },
    ],
  },
}

export default siteConfig
