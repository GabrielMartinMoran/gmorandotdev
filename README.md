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

GitHub Actions compila el sitio y lo publica en Cloudflare Pages cada vez que se actualiza `main`, incluido el merge de un pull request. El workflow está en `.github/workflows/deploy.yml`.

La primera publicación requiere un proyecto de Cloudflare Pages llamado `gmoran-dev`, con `main` como rama de producción. Crealo con Wrangler:

```sh
npx wrangler pages project create gmoran-dev --production-branch main
```

Agregá estos secretos en **GitHub → Settings → Secrets and variables → Actions**:

- `CLOUDFLARE_ACCOUNT_ID`: el ID de tu cuenta de Cloudflare.
- `CLOUDFLARE_API_TOKEN`: un token con permiso **Account → Cloudflare Pages → Edit**.

Después de la primera publicación, agregá `gmoran.dev` en **Cloudflare → Workers & Pages → gmoran-dev → Custom domains**. El dominio raíz debe estar activo en Cloudflare DNS; al vincularlo desde Pages, Cloudflare configura el registro necesario.

## Agregar un proyecto

Agregá sus datos a `src/data/projects.ts`. Astro genera una página para cada proyecto en `/projects/<slug>/`.
