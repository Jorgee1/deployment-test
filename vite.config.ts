import { defineConfig } from 'vite'


export default defineConfig({
    build: {
        outDir: process.env.PUBLIC_DIR || 'public',
        emptyOutDir: true
    }
})

