import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { resolve } from 'path'

// 根据环境变量设置 base 路径
const base = process.env.NODE_ENV === 'production' ? '/website/' : '/'

export default defineConfig({
  base,
  plugins: [vue()],
  resolve: {
    alias: {
      '@': resolve(__dirname, 'src')
    }
  },
  // 确保正确处理中文编码
  esbuild: {
    charset: 'utf8'
  },
  css: {
    preprocessorOptions: {
      less: {
        // 可以在这里添加 Less 的全局配置
        // 例如：全局变量、混入等
        additionalData: `@import "@/styles/variables.less";`
      }
    }
  },
  build: {
    outDir: 'dist',
    assetsDir: 'assets',
    sourcemap: false,
    rollupOptions: {
      output: {
        // 简化资源文件命名，只使用 hash
        assetFileNames: 'assets/[hash].[ext]',
        chunkFileNames: 'assets/[hash].js',
        entryFileNames: 'assets/[hash].js'
      }
    }
  },
  server: {
    port: 3000,
    open: true
  }
})
