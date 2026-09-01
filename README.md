# Madamu Matcha

Landing page tipo SPA para Madamu Matcha (L'Eixample, Valencia), basada en la plantilla de [La Finestra](https://github.com/samuelfagundez/la-finestra).

- **Stack:** React 19 + TypeScript + Vite 8, pre-renderizado con [`vite-react-ssg`](https://github.com/vite-pages/vite-react-ssg), Tailwind CSS 4, `react-helmet-async` para SEO/JSON-LD.
- **Contenido:** todo el texto, datos de contacto, horario y fotos del negocio vive en un único archivo: [`src/content.ts`](src/content.ts). Editar solo ahí para actualizar el sitio.
- **Contacto:** sin formularios ni backend — botón flotante de WhatsApp y CTAs de "Contáctanos" / "Hacer un pedido", todos con `wa.me` y mensaje predefinido.
- **Hosting:** GitHub Pages (gratis), vía GitHub Actions (`.github/workflows/deploy.yml`), sin secrets.

## Desarrollo local

```bash
npm ci
npm run dev       # servidor de desarrollo
npm run build     # build de producción (tsc -b && vite-react-ssg build)
npm run lint      # oxlint
```

## Pendientes conocidos

- Correo de contacto público: no facilitado por el listado de Google Maps.
- Facebook: no se encontró página pública en la ficha de Google Maps.
- Las fotos del local muestran el rótulo "Green Tale" (marca anterior); el sitio usa el nombre "Madamu Matcha" (Google Maps, Instagram, registro mercantil) por indicación del cliente.
