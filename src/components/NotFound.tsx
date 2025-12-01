import { Link } from '@tanstack/react-router';

export function NotFoundComponent() {
  return (
    <div>
      <h1> Sorry, this page doesn't exist! :c </h1>
      <p>
        <Link to="/">
          Go Home
        </Link>
      </p>
    </div>
  );
}