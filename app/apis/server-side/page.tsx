type Post = {
    id: number,
    title: string,
    content: string,
    author: string,
    date: string,
    category: string
}

export default async function Page() {
  let response = await fetch('https://api.vercel.app/blog')
  let posts: Post[] = await response.json()

  console.log(posts[0]);
  return (
    <ul>
      {posts.map((post) => (
        <li key={post.id}>{post.title}</li>
      ))}
    </ul>
  )
}