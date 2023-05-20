import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'


export default defineConfig({
  plugins: [react()],
  build: {
    // ...
    rollupOptions: {
      input: {
        main: "index.html"
      }
    }
  },
  server: {
    // serve files from the `public` directory
    publicDir: "assets"
  }
})
