import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/posts/$id')({
  loader: async ({ params }) => {

    const postId = params.id;

    const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${postId}`);

    if (!response.ok) {
      throw new Error('Failed to fetch post');
    }

    return response.json();
  },

  component: PostDetailComponent,
})

function PostDetailComponent() {

  const post = Route.useLoaderData() as { 
    id: number; 
    title: string; 
    body: string 
  };

  return (
    <div >
      <h1 >Post #{post.id}: {post.title}</h1>
      <hr />
      <p>{post.body}</p>
    </div>
  )
}