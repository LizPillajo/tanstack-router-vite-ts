import { createFileRoute, useNavigate } from "@tanstack/react-router";

export const Route = createFileRoute('/about')({
  component: RouteComponent,
})

function RouteComponent() {
  const navegate = useNavigate();

  return (
  <div>
    <h2>About TanStack Router</h2>  
    <p>File-based routing makes routes simple and typed.</p>
    <button onClick={() => navegate({to:"/"})}>Send</button>
  </div>
  )
}
