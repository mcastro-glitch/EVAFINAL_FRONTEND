import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

export default defineConfig({
  plugins: [vue()]
})

module.exports = {
 publicPath: process.env.NODE_ENV === 'production'
 ? '/EVAFINAL_FRONTEND/'
 : '/'
}