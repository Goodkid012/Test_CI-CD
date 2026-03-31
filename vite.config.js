import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  base: '/<REPO_NAME>/', // Replace with your repository name
  // For custom domain, use: base: '/',
})