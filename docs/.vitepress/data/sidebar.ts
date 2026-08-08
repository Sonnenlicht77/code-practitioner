import type { DefaultTheme } from 'vitepress'

export const sidebar: Record<string, DefaultTheme.SidebarItem[]> = {
  // /notes/ 本身是索引页，这里放一个简单的目录导航
  '/notes/': [
    {
      text: '笔记目录',
      items: [
        { text: 'TypeScript', link: '/notes/typescript/' },
        { text: 'CSS', link: '/notes/css/' }
      ]
    }
  ],
  // 访问 /notes/typescript/ 开头的所有页面时，显示下面这套侧边栏
  '/notes/typescript/': [
    {
      text: 'TypeScript',
      link: 'index',  // 建议创建一个 index.md 作为该分类首页
      base: '/notes/typescript/',
      items: [
        { text: 'TypeScript 基础', link: 'base' }
      ]
    }
  ],
  '/notes/css/': [
    {
      text: 'CSS',
      link: 'index',
      base: '/notes/css/',
      items: [
        { text: 'CSS 基础', link: 'base' }
      ]
    }
  ]
}