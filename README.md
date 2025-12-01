# my-tanstack-router-vite-ts

A minimal starter project using Vite, React, TypeScript and TanStack Router with file-based routing. Includes examples for loaders, a root layout, and a custom 404 page.

## Key features
- File-based routing via `src/routes/`
- Type-safe routing with TanStack Router
- Example `loader` for data fetching (e.g. `/posts/$id`)
- Root layout (`__root.tsx`) with global navigation
- Custom 404 page
- Vite for fast development and build

## Quick start

1. Create project (if needed)
```bash
npm create vite@latest my-tanstack-router-vite-ts -- --template react-ts
cd my-tanstack-router-vite-ts
```

2. Install dependencies
```bash
npm install
npm install @tanstack/react-router
npm install -D @tanstack/router-plugin @tanstack/router-devtools
```

3. Run dev server
```bash
npm run dev
```

## Scripts
- npm run dev — start dev server
- npm run build — build for production
- npm run preview — preview production build

## Vite config (example)
vite.config.ts
```ts
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { tanstackRouter } from '@tanstack/router-plugin/vite'

export default defineConfig({
  plugins: [tanstackRouter(), react()],
})
```

The `tanstackRouter()` plugin scans `src/routes/` and generates a typed `routeTree.gen.ts`.

## Main entry (basic idea)
main.tsx
```tsx
import React from 'react'
import { createRoot } from 'react-dom/client'
import { Router, RouterProvider } from '@tanstack/react-router'
// import your generated route tree and router setup
import { router } from './router'

createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
)
```

## Example root route
src/routes/__root.tsx
```tsx
import React from 'react'
import { Link, Outlet, createRootRoute } from '@tanstack/react-router'

export const Route = createRootRoute({
  component: Root,
})

function Root() {
  return (
    <>
      <header>
        <nav>
          <Link to="/">Home</Link> · <Link to="/about">About</Link>
        </nav>
      </header>
      <main>
        <Outlet />
      </main>
    </>
  )
}
```

## Example dynamic route with loader
src/routes/posts/$id.tsx
```tsx
import React from 'react'
import { useLoader } from '@tanstack/react-router'

export const loader = async ({ params }) => {
  const res = await fetch(`/api/posts/${params.id}`)
  return res.json()
}

export default function Post() {
  const post = useLoader<typeof loader>()
  return (
    <article>
      <h1>{post.title}</h1>
      <p>{post.body}</p>
    </article>
  )
}
```

## Tips & notes
- Keep route files under `src/routes/` to leverage file-based routing.
- Use `loader` for server data fetching before render.
- Use `@tanstack/router-devtools` in development for easier debugging.
- Review generated `routeTree.gen.ts` when the plugin runs.

## Contributing
PRs and improvements are welcome. Keep changes small and focused.

## License
MIT