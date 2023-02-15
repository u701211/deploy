import { defineConfig } from 'vite'

export default defineConfig({
  base: '',
  build: {
    outDir: 'docs',
    emptyOutDir: true,
  },
  server: {
    open: true,
    host: '0.0.0.0',
    port: 80,
  },
})
