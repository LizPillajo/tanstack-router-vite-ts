import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/posts/$id")({
  loader: async ({ params }) => {
    const postId = params.id;

    const response = await fetch(`http://localhost:8060/student/${postId}`);

    if (!response.ok) {
      throw new Error("Failed to fetch post");
    }

    return response.json();
  },

  component: PostDetailComponent,
});

function PostDetailComponent() {
  const post = Route.useLoaderData() as {
    id: number;
    firstName: string;
    lastName: string;
  };

  return (
    <div>
      <h1>
        Post #{post.id}: {post.firstName} {post.lastName}
      </h1>
      <hr />
      <p>{post.lastName}</p>
    </div>
  );
}
