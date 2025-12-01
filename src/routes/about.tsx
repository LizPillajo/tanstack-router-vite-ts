import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute('/about')({
  component: RouteComponent,
})

function RouteComponent() {
  return (
  <div>
    <h2>About TanStack Router</h2>  
    <p>File-based routing makes routes simple and typed.</p>
  </div>
  )
}
