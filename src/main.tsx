import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import {Link, createRouter, RouterProvider} from '@tanstack/react-router'
import './index.css'
import { routeTree } from './routeTree.gen'  

const router = createRouter({
  routeTree, 
  defaultNotFoundComponent: () => (
    <>
    <h1>Sorry this page doesn't exist! :c </h1>
    <Link to="/">Go Home</Link>
    </>
  )
});

declare module '@tanstack/react-router'{
  interface Register {
    router: typeof router;
  }
}

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RouterProvider router={router}/>
  </StrictMode>,
)
