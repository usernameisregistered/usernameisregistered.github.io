import { defineConfig } from 'vite'
import path from "path"
import vue from '@vitejs/plugin-vue'
import Components from 'unplugin-vue-components/vite';
import { AntDesignVueResolver } from 'unplugin-vue-components/resolvers';

export default defineConfig({
  plugins: [
    vue(),
    Components({
      resolvers: [
        AntDesignVueResolver({
          importStyle: false, // css in js
        }),
      ],
    })],
  css: {
    preprocessorOptions: {
      less: {
        additionalData: `@import "${path.resolve(__dirname, './src/assets/style/var.less')}";`,
      },
    },
  },
  build: {
    outDir: path.resolve(__dirname, '../public')
  },
  server: {
    proxy: {
      '/api': {
        target: 'http://localhost:4173/',
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api/, ''),
      },
    }
  }
})
