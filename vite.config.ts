import { defineConfig } from 'vite'


export default defineConfig({
    build: {
        outDir: process.env.PUBLIC_DIR || 'public',
        emptyOutDir: true
    },
    server: {
        proxy: {
            '/trpc': 'http://localhost:3000'
        }
    }
})

