# Portfolio — Juan David Carreño Arias

Portfolio personal en una sola página, bilingüe (español / inglés) y con tema claro y oscuro.

## Stack

- HTML y JavaScript vanilla (sin framework).
- [Tailwind CSS v4](https://tailwindcss.com/) para los estilos.
- Tipografías de Google Fonts: Bricolage Grotesque y Source Sans 3.

## Estructura

```
.
├── index.html          # Estructura de la página
├── favicon.svg         # Ícono de la pestaña
├── src/
│   ├── input.css       # Fuente de Tailwind: tokens de color, tema y animaciones
│   └── main.js         # Traducciones, cambio de idioma, tema y menú móvil
├── dist/
│   └── output.css      # CSS compilado (se commitea, no se genera en CI)
└── .github/workflows/
    └── pages.yml       # Despliegue a GitHub Pages
```

## Desarrollo local

Requisitos: Node.js 18 o superior.

```bash
npm install
npm run build
```

Después abre `index.html` en el navegador. No hace falta servidor, pero si prefieres uno:

```bash
npx serve .
```

## Compilar los estilos

`dist/output.css` se genera a partir de `src/input.css`. **Cada vez que cambies clases de Tailwind en `index.html` o `src/main.js`, vuelve a compilar y commitea el resultado:**

```bash
npm run build
git add dist/output.css
```

Si no lo haces, las clases nuevas no tendrán efecto en el sitio publicado.

## Despliegue en GitHub Pages

1. En el repositorio, ve a **Settings → Pages** y en *Source* elige **GitHub Actions**.
2. Haz push a `main`. El workflow `.github/workflows/pages.yml` publica el sitio.

La URL pública aparece en la pestaña **Environments → github-pages** o en la misma sección Pages.

### Pendiente

- Completar `og:url` y `og:image` en `index.html` con la URL pública del sitio. Sin ellos, la vista previa al compartir el enlace no mostrará imagen.

## Accesibilidad

- Enlace "Saltar al contenido" al empezar la página.
- Navegación con etiqueta, menú móvil con `aria-expanded`, y cierre con Escape.
- Respeta `prefers-reduced-motion` (desactiva la animación del Gantt y el desplazamiento suave).
- El diagrama de Gantt decorativo tiene `aria-hidden="true"`.
