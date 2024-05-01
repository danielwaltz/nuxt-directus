# Nuxt 3 + Directus

This is a minimal starter template for Nuxt 3 with Directus. It includes a basic setup for a Nuxt 3 project with Directus API integration.

## Local Development

Start the Directus server with `pnpm directus:start` (requires docker) and access the admin panel at <http://localhost:8055/admin>. The default login credentials are generated and in the console output.

Then start the Nuxt 3 development server `pnpm dev` and access the front-end at <http://localhost:3000>. Create a data model for "posts" in Directus matching the schema defined in Nuxt server routes.

# Nuxt 3 Minimal Starter

Look at the [Nuxt 3 documentation](https://nuxt.com/docs/getting-started/introduction) to learn more.

## Setup

Make sure to install the dependencies:

```bash
pnpm install
```

## Development Server

Start the development server on `http://localhost:3000`:

```bash
pnpm run dev
```

## Production

Build the application for production:

```bash
pnpm run build
```

Locally preview production build:

```bash
pnpm run preview
```

Check out the [deployment documentation](https://nuxt.com/docs/getting-started/deployment) for more information.
