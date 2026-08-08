import { defineConfig } from 'vitepress'
import { sidebar, nav } from './data/index.mts'

export default defineConfig({
  base:'/code-practitioner/',
  title: "code-practitioner",
  description: "++ 练习时长",
  head: [
    ['link', { rel: 'icon', href: '/favicon.ico' }],
  ],
  themeConfig: {
    nav: nav,
    sidebar: sidebar,

    logo: '/logo.svg',

    socialLinks: [
      { icon: 'github', link: 'https://github.com/Sonnenlicht77/code-practitioner' }
    ],
    
  }
})
