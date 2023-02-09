import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { resolve } from 'path'

export default defineConfig({
  // Development server config
  server: {
    host: true,
    port: 8080,
    https: false,
    open: true,
    cors: true,
  },
  resolve: {
    // Alias config
    alias: {
      '~/': `${resolve(__dirname, 'src')}/`,
    },
  },
  plugins: [vue()],
})
