import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/Hack-a-sol/',
  server: {
    fs: {
      allow: [
        'D:/Visual Studio Files/Hack-a-Sol/hack-a-sol/src/assets',
        'D:/Visual Studio Files/Hack-a-Sol/hack-a-sol',
        'D:/Visual Studio Files/hack/Hack-a-sol',  // Add this directory to allow Vite to access the correct path
      ]
    }
  }
})
