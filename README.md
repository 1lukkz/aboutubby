# 💜 Nuestro lugar favorito

SPA hecha con **Vite + React + Tailwind CSS v4 + Framer Motion + Lucide + canvas-confetti**.

## ▶️ Cómo verla

```bash
npm install      # solo la primera vez
npm run dev      # abre http://localhost:5173
```

> Para verla en tu celular: con `npm run dev` corriendo, abrí en el celu la dirección
> **Network** que aparece en la consola (ej: `http://192.168.0.10:5173`) estando en la misma WiFi.

## ✏️ Qué editar (todo en un solo archivo)

**`src/config.js`** tiene TODO lo personal:

| Qué | Dónde en `config.js` |
|---|---|
| Su nombre / tu firma | `names` |
| Fecha en que volvieron a hablar (contador de días) | `reunionDate` |
| Título, badge e intro del inicio | `hero` |
| Fotos, títulos y notitas de la galería | `gallery.photos` |
| Frase + contador del bento | `gallery.quote` |
| Las 4 tarjetas (frente / dorso / ícono) | `reasons.cards` |
| La pregunta y los textos del botón "No" | `pact` |
| La carta final | `letter` |
| Canción | `music` |

## 📸 Agregar más fotos

1. Copiá la foto a **`public/assets/`** (ej: `foto6.jpg`).
2. En `config.js` → `gallery.photos`, agregá un bloque:

```js
{
  src: './assets/foto6.jpg',
  fallback: 'https://images.unsplash.com/photo-1529634806980-85c3dd6d34ac?w=1200&q=80',
  title: 'Título corto',
  caption: 'Una notita sobre este momento.',
  size: 'normal', // 'big' | 'tall' | 'wide' | 'normal'
},
```

Tips de tamaño: fotos verticales → `tall`, horizontales → `wide`, la más linda → `big`.
La grilla se acomoda sola.

## 🎵 Poner su canción

Copiá el mp3 a `public/assets/cancion.mp3` (o cambiá `music.src`).
Podés definir en qué segundo arranca con `music.startTime` en `config.js` (ej: `40`).
Mientras no exista el mp3, suena un audio de muestra.

> Los navegadores bloquean el autoplay: la música arranca cuando ella toca ▶️
> o automáticamente al apretar **"Sí, para siempre"**.

## 🎨 Cambiar colores / tipografías

En `src/index.css`, bloque `@theme` (`--color-brand`, `--font-serif`, etc.).

## 🚀 Publicarla para mandarle el link

```bash
npm run build    # genera la carpeta /dist
```

Arrastrá la carpeta **`dist`** a https://app.netlify.com/drop y te da un link para mandarle. 💜

## 🗂️ Estructura

```
public/assets/        ← tus fotos y la canción
src/config.js         ← ✏️ TODOS los textos y fotos
src/index.css         ← tema (colores, fuentes, animaciones)
src/App.jsx           ← orden de las secciones
src/components/
  Hero.jsx            ← A. entrada con título animado
  Gallery.jsx         ← B. bento de fotos
  Lightbox.jsx        ←    visor a pantalla completa
  Reasons.jsx         ← C. flip cards
  Pact.jsx            ← D. el pacto + botón "No" que se escapa + confetti
  LetterModal.jsx     ←    carta final
  MusicPlayer.jsx     ← E. reproductor flotante
  CustomCursor.jsx    ←    halo violeta del cursor
  Navbar.jsx, Footer.jsx, Background.jsx, SmartImage.jsx, SectionHeading.jsx
```
