import { defineConfig } from 'vite'
import { resolve } from 'path'

export default defineConfig({
  base: './',
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        about: resolve(__dirname, 'about.html'),
        contact: resolve(__dirname, 'contact.html'),
        service: resolve(__dirname, 'service.html'),
        team: resolve(__dirname, 'team.html'),
        testimonial: resolve(__dirname, 'testimonial.html'),
        haircut: resolve(__dirname, 'haircut.html'),
        makeup: resolve(__dirname, 'makeup.html'),
        manicure: resolve(__dirname, 'manicure.html'),
        pedicure: resolve(__dirname, 'pedicure.html'),
        massage: resolve(__dirname, 'massage.html'),
        skincare: resolve(__dirname, 'skincare.html'),
      },
    },
  },
})
