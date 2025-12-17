# ray s 个人站点

本项目为个人站点项目。使用前端 astro 框架搭建个人站点，使用 vercel 进行部署

无需 pull，无需 fork 和 issues，可 star，但不接受 pr

需要遵守 LICENSE 参照最下方

# 项目结构学习
```
astro-project/
├── public/                  # 静态资源（直接复制到 dist）
│   ├── robots.txt
│   └── favicon.ico
├── src/
│   ├── components/          # 可复用的 Astro/React/Vue 组件
│   ├── content/             # 内容文件（如 Markdown、MDX）
│   │   ├── blog/            # 各种类型博客文章
│   │   │   ├── notes/       # 生活活类笔记文章
│   │   │   └── talks/       # 技术相关文章
│   │   ├── pages/           # 页面内容
│   │   └── config.ts        # 用于定义和验证你的Markdown/MDX内容
│   ├── layouts/             # 布局组件
│   │   └── BaseLayout.astro # 主布局，类似 Vue 中的 App.vue
│   ├── pages/               # 页面组件（自动映射路由）
│   │   ├── blog/            # 博客页面
│   │   ├── posts/           # 其他页面
│   │   ├── projects/        # 项目页面
│   │   └── index.astro      # 首页
│   ├── styles/              # 样式文件（如 CSS、Sass）
│   ├── utils/               # 工具函数。用于获取和处理博客文章数据
│   ├── env.d.ts             # TypeScript的环境声明文件，几乎所有TypeScript项目都会有这样的文件
│   ├── site-config.ts       # 项目站点配置
│   └── types.ts             # 全局类型定义
├── astro.config.ts          # Astro 配置文件
├── eslint.config.js         # ESLint 代码检查的配置文件
├── package.json             # 项目依赖
├── README.md                # 项目说明
├── tsconfig.json            # TypeScript编译器的配置文件，用于告诉TypeScript如何编译你的代码
└── uno.config.ts            # UnoCSS 配置文件
```

# 运行
首次项目拉取后
```shell
npm install
```

项目运行后访问控制台提供的链接即可访问网页
```shell
npm run dev
```

其他：
eslint 检查错误
```shell
npm run lint
```
eslint 自动修复可修复的问题
```shell
npm run lint:fix
```

# LICENSE
Based on [CC BY-NC-SA 4.0 License](https://creativecommons.org/licenses/by-nc-sa/4.0/).

This project was modified from origin project astro-theme-vitesse created by kieranwv.
