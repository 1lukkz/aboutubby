import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// base: './' -> las rutas quedan relativas, así podés subir la carpeta /dist
// a Netlify, Vercel o GitHub Pages sin tocar nada.
export default defineConfig({
  base: './',
  plugins: [react(), tailwindcss()],
  server: { host: true }, // host: true -> podés abrirla desde tu celular en la misma red WiFi
})
