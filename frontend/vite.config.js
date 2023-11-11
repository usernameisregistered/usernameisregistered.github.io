import { defineConfig } from 'vite'
import path from "path"
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
console.log(`@import ${path.resolve(__dirname, './src/assets/style/var.less')};`,)
export default defineConfig({
  plugins: [vue()],
  css: {
    preprocessorOptions: {
      less: {
        additionalData: `@import "${path.resolve(__dirname, './src/assets/style/var.less')}";`,
      },

    },
  },
})
