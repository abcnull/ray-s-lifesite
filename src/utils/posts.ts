import type { CollectionPosts, PostKey } from '@/types'
import { getCollection } from 'astro:content'

// 排序文章
export function sortPostsByDate(itemA: CollectionPosts, itemB: CollectionPosts) {
  return new Date(itemB.data.date).getTime() - new Date(itemA.data.date).getTime()
}

// 返回满足某种过滤条件的文章
export async function getPosts(path?: string, collection: PostKey = 'blog') {
  return (
    await getCollection(collection, (post) => {
      // 文章的 slug 一般由文件路径和文件名自动生成，例如：文章是 first-note 在 notes 目录下，slug 为 blog/notes/first-note
      return (import.meta.env.PROD ? post.data.draft !== true : true)
        && (path ? post.slug.includes(path) : true)
    })
  ).sort(sortPostsByDate)
}
