// vite.config.js
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// Bu faylda tailwindcss ishlatilmaydi
export default defineConfig({
  plugins: [react()],
})
