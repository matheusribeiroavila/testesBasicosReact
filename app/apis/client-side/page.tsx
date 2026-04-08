import { Suspense } from 'react'

import Posts from '@/components/Posts'

export type PostType = {
    id: number,
    title: string,
    content: string,
    author: string,
    date: string,
    category: string
}

const getPosts = async () => {
    const response = await fetch('https://api.vercel.app/blog')
    const posts: PostType[] = await response.json()

    return posts
}
 
export default function Page() {
  // Don't await the data fetching function
  const posts = getPosts()
 
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Posts posts={posts} />
    </Suspense>
  )
}