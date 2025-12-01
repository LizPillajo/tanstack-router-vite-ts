
import {Link, Outlet, createRootRoute } from '@tanstack/react-router' 

export const Route = createRootRoute({
  component: RootComponent,
})

function RootComponent() {
  return (
    <>
      <div>
        <Link to= "/"> Home</Link>
        <Link to= "/about"> About</Link>
      </div>
      <Outlet />
    </>
  )
}
