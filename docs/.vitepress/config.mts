import { defineConfig } from 'vitepress'
import sidebar from "./sidebar.json"
// https://vitepress.dev/reference/site-config
export default defineConfig({
  markdown: {
    math: true
  },
  title: "路人甲的进阶之路",
  description: "星光不问赶路人,时光不负有心人",
  srcDir: './src',
  themeConfig: {
    outlineTitle: "页面导航",
    nav: [
      { text: '首页', link: '/' },
      { text: '书册', link: '/categoryList' },
      { text: '随笔', link: '/article/index' },
      { text: '学习资料', link: '/study' },
      { text: '关于', link: '/about' }
    ],
    socialLinks: [
      { icon: 'github', link: 'https://github.com/usernameisregistered/usernameisregistered.github.io' }
    ],
    sidebar: sidebar,
  }
})
