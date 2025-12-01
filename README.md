my-tanstack-router-vite-ts
This is a base project configured with Vite, React, TypeScript, and the next-generation router TanStack Router. It leverages file-based routing for simple, type-safe route definition, and includes an example of data fetching using the loader function.

✨ Key Features
File-Based Routing: Routes are automatically defined by the directory structure in src/routes.

TanStack Router: 100% type-safe and secure routing.

Data Loading (Loader): Example of how to load data on the /posts/$id route before rendering.

Root Route (__root.tsx): Main layout component with global navigation.

404 Page: Custom Not Found component.

Vite: Modern and fast build tool.

TypeScript: Typed code for improved robustness.

🛠️ Installation and Initial Setup
To get started with the project, follow these installation steps. This includes initializing the project with Vite, installing TanStack Router, and configuring its plugin for file-based routing.

# 1. Create the project with Vite (React + TypeScript)
npm create vite@latest my-tanstack-router-vite-ts -- --template react-ts

# 2. Navigate to the project directory
cd my-tanstack-router-vite-ts

# 3. Install base React and Vite dependencies
npm install

# 4. Install TanStack Router as a dependency
npm install @tanstack/react-router

# 5. Install the Router plugin and Devtools as development dependencies
npm install -D @tanstack/router-plugin @tanstack/router-devtools
Once the installation is complete, you can run the development command:

npm run dev


⚙️ Router Configuration

vite.config.ts

The tanstackRouter() plugin is essential here, as it is responsible for scanning the src/routes folder and generating the typed route file routeTree.gen.ts.

import { defineConfig } from 'vite'

import react from '@vitejs/plugin-react'

import {tanstackRouter} from '@tanstack/router-plugin/vite'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [tanstackRouter(), react()], // Include the TanStack Router plugin
})


main.tsx

The main file where the router is initialized and the default component for the not found page (defaultNotFoundComponent) is defined.


📄 Key Routes (Code Examples)

🏡 Root Route: src/routes/__root.tsx

Defines the base layout with navigation links that will be applied to all routes.


import * as React from 'react'
import {Link, Outlet, createRootRoute } from '@tanstack/react-router' 

export const Route = createRootRoute({
  component: RootComponent,
})

function RootComponent() {
  return (
    <React.Fragment>
      <header>
        {/* Navigation links */}
        <Link to= "/"> Home</Link>
        <Link to= "/about"> About</Link>
      </header>
      {/* Outlet renders the current route component */}
      <Outlet />
    </React.Fragment>
  )
}
