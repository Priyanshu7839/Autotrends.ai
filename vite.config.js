import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [tailwindcss(),react()],
  server: {
    host: '0.0.0.0',
    port: 3000, // optional but good to fix it
    hmr: {
      host: '10.164.8.106', // your Mac IP
    }
  }
})
