# gmoran.dev

Portfolio bilingüe de Gabriel Martín Moran para compartir proyectos de ingeniería open source, herramientas para agentes y notas de ingeniería.

## Desarrollo local

Necesitás Node.js 22 o posterior. Instalá las dependencias y levantá Astro:

```sh
npm ci
npm run dev
```

Para generar el sitio estático en `dist/`:

```sh
npm run build
```

## Publicación

GitHub Actions compila y publica el sitio en GitHub Pages cada vez que se actualiza `main`, incluido el merge de un pull request. El workflow está en `.github/workflows/deploy.yml`.

En **GitHub → Settings → Pages**, elegí **GitHub Actions** como fuente de publicación y agregá `gmoran.dev` como dominio personalizado. Activá **Enforce HTTPS** cuando GitHub termine de emitir el certificado.

Cloudflare aplana automáticamente los CNAME en el dominio raíz. Podés apuntar `@` con un CNAME a `GabrielMartinMoran.github.io` y usar otro CNAME para `www`; no mezcles el CNAME de `@` con registros A o AAAA en ese mismo nombre. Dejá el proxy desactivado (**DNS only**) mientras GitHub valida el dominio y emite el certificado.

GitHub documenta esta configuración con registros A y AAAA para el dominio raíz, y CNAME para `www`:

| Tipo | Nombre | Valor |
| --- | --- | --- |
| A | `@` | `185.199.108.153` |
| A | `@` | `185.199.109.153` |
| A | `@` | `185.199.110.153` |
| A | `@` | `185.199.111.153` |
| AAAA | `@` | `2606:50c0:8000::153` |
| AAAA | `@` | `2606:50c0:8001::153` |
| AAAA | `@` | `2606:50c0:8002::153` |
| AAAA | `@` | `2606:50c0:8003::153` |
| CNAME | `www` | `GabrielMartinMoran.github.io` |

## Agregar un proyecto

Agregá sus datos a `src/data/projects.ts`. Astro genera una página para cada proyecto en `/projects/<slug>/`.
