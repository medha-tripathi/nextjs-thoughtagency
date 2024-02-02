import Image from 'next/image'
import styles from './singlePost.module.css'
import PostUser from '@/components/postUser/postUser'
import { getPost } from '@/lib/data'
import { Suspense } from 'react'

export const generateMetadata=async({params})=>{
  const {slug}=params
  const post=await getPost(slug)
  return {
    title:post.title,
    description:post.desc
  }
}

const getData = async (slug) => {
  const res = await fetch(`http://localhost:3000/api/blog/${slug}`, { next: { revalidate: 3600 } });
  if (!res.ok)
  throw new Error("Something went wrong")
  return res.json();
}

export default async function SinglePostPage({params}) {
  const {slug}=params 
  const post=await getData(slug)
  // const post=await getPost(slug)
  console.log(post)

  return (
    <div className={styles.container}>
      <div className={styles.imgContainer}>
        <Image src={post.img || "https://images.pexels.com/photos/16373346/pexels-photo-16373346/free-photo-of-smiling-woman-with-flower.jpeg?auto=compress&cs=tinysrgb&w=400&lazy=load"} fill className={styles.img}/>
      </div>
      <div className={styles.textContainer}>
        <h1 className={styles.title}>{post?.title}</h1>
        <div className={styles.detail}>
          {post && <Suspense fallback={<div>Loading...</div>}>
            <PostUser userId={post.userId}/>
          </Suspense>}
          <div className={styles.detailText}>
            <span className={styles.detailTitle}>Published</span>
            <span className={styles.detailValue}>{post.createdAt.toString().slice(4,16)}</span>
          </div>
        </div>
        <div className={styles.content}>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ea, aspernatur? Eos necessitatibus molestiae molestias ea quasi ab dicta dolorem? Iure rerum neque maiores vel nesciunt.
        </div>
      </div>
    </div>
  )
}
