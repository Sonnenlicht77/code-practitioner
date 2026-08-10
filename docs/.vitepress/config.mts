import { defineConfig } from 'vitepress'
import { sidebar, nav } from './data/index.mts'

export default defineConfig({
  base: '/code-practitioner/',
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
      { icon: 'github', link: 'https://github.com/Sonnenlicht77/code-practitioner' },
      {
        icon: {
          svg: '<svg t="1786357984788" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="6634" width="48" height="48"><path d="M810.666667 170.666667H213.333333a128 128 0 0 0-128 128v426.666666a128 128 0 0 0 128 128h597.333334a128 128 0 0 0 128-128V298.666667a128 128 0 0 0-128-128z m0 85.333333l-277.333334 190.72a42.666667 42.666667 0 0 1-42.666666 0L213.333333 256z" p-id="6635" fill="#67676c"></path></svg>',
        },
        link: '/code-practitioner/contact/index.html',
        target: '_blank'
      }
    ],

  }
})
