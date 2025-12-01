import { createFileRoute, useNavigate } from "@tanstack/react-router";

export const Route = createFileRoute("/contact")({
  component: RouteComponent,
});

function RouteComponent() {
  const navegate = useNavigate();

  return (
    <div>
      <h1>Contact Page</h1>
      <button onClick={() => navegate({to:"/"})}>Send</button>
    </div>
  );
}
