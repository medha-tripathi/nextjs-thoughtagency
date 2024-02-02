import PostCard from '@/components/postCard/postCard'
import styles from './blog.module.css'
import { getPosts } from '@/lib/data'

// fetch data with an api
const getData = async () => {
  const res = await fetch("http://localhost:3000/api/blog", { next: { revalidate: 3600 } });
  if (!res.ok)
  throw new Error("Failed to fetch posts")
  return res.json();
}
export default async function Blog() {
  const posts = await getData();
  // const posts = await getPosts();
  return (
    <div className={styles.container}>
      {posts.map((post) => {
        return <div className={styles.post} key={post.id}>
          <PostCard post={post} />
        </div>
      })}
    </div>
  )
}
