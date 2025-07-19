/// <reference path="../.astro/types.d.ts" />
/// <reference types="astro/client" />
/// <reference types="unocss/vue" />
import type { AttributifyAttributes } from '@unocss/preset-attributify'

// TypeScript的环境声明文件
// 为已有的JavaScript库提供类型定义,定义可以在整个项目中使用的类型,告诉TypeScript如何处理非JavaScript模块（如图片、CSS等）
// 这是TypeScript项目的标准做法，几乎所有TypeScript项目都会有这样的文件

declare module 'vue' {
  interface HTMLAttributes extends AttributifyAttributes {}
}
