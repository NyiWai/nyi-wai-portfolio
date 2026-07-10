import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  // GitHub Pages serves project sites from /<repo-name>/, not the domain root.
  // If your repo is named something other than "nyi-wai-portfolio", change this to match.
  base: '/nyi-wai-portfolio/',
  plugins: [react(), tailwindcss()],
})