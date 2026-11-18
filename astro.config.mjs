import { defineConfig } from 'astro/config'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  site: 'https://b2marketingindustrial.com.br',
  vite: {
    plugins: [tailwindcss()],
  },
})
