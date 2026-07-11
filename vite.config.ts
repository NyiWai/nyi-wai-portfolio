import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  // GitHub Pages serves project sites from /<repo-name>/, but Vercel (and local dev)
  // serve from the domain root. The GITHUB_PAGES env var is only set by the
  // GitHub Actions workflow, so this only kicks in for that build.
  base: process.env.GITHUB_PAGES ? '/nyi-wai-portfolio/' : '/',
  plugins: [react(), tailwindcss()],
})