import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "路人甲的进阶之路",
  description: "星光不问赶路人,时光不负有心人",
  srcDir: './src',
  themeConfig: {
    nav: [
      { text: '首页', link: '/' },
      { text: '教程', link: '/categoryList' },
      { text: '随笔', link: '/article' },
      { text: '关于', link: '/markdown-examples' }
    ],
    socialLinks: [
      { icon: 'github', link: 'https://github.com/vuejs/vitepress' }
    ]
  }
})
