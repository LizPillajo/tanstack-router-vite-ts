import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/posts/$id')({
  loader: async ({ params }) => {

    const postId = params.id;

    const response = await fetch(`https://wprogramming-diagnostic-test.onrender.com/student/${postId}`);

    if (!response.ok) {
      throw new Error('Failed to fetch post');
    }

    return response.json();
  },

  component: PostDetailComponent,
})

function PostDetailComponent() {

  const post = Route.useLoaderData() as { 
    firstName: string; 
    lastName: string;};

  return (
    <div >
      <h1 >Post #{post.firstName}: {post.lastName}</h1>
      <hr />
      <p>{post.firstName}</p>
    </div>
  )
}