import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/posts/$students')({
  loader: async ({params}) => {

    const studentId = params.students;

    const response = await fetch(
      `https://wprogramming-diagnostic-test.onrender.com/student/${studentId}`
    )

    if (!response.ok) {
      throw new Error('Failed to fetch post')
    }

    return response.json()
  },

  component: StudentsComponent,
})

function StudentsComponent() {
  const student = Route.useLoaderData() as {
    id: number
    name: string
    lastname: string
    age: number
  }

  return (
    <div>
      <h1>Estudiante #{student.id}</h1>
      <p><strong>Nombre:</strong> {student.name}</p>
      <p><strong>Lastname:</strong> {student.lastname}</p>
      <p><strong>Age:</strong> {student.age}</p>
    </div>
  )
}
