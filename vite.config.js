import { resolve } from 'path'
import { defineConfig } from 'vite'

export default defineConfig({
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        manichiura: resolve(__dirname, 'manichiura-pedichiura.html'),
        coafor: resolve(__dirname, 'coafor-extensii.html'),
        makeup: resolve(__dirname, 'make-up.html'),
        sprancene: resolve(__dirname, 'sprancene.html'),
        epilare: resolve(__dirname, 'epilare-definitiva.html'),
        pachete: resolve(__dirname, 'pachete-beauty.html'),
        galerie: resolve(__dirname, 'galerie.html'),
        despre: resolve(__dirname, 'despre-noi.html'),
        contact: resolve(__dirname, 'contact.html'),
      },
    },
  },
  server: {
    port: 3000,
    open: true,
  },
})
