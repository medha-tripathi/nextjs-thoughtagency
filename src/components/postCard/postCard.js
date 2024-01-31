import Image from 'next/image'
import styles from './postCard.module.css'
import Link from 'next/link'

export default function PostCard() {
  return (
    <div className={styles.container}>
        <div className={styles.top}>
            <div className={styles.imgContainer}>
                <Image src="https://images.pexels.com/photos/16373346/pexels-photo-16373346/free-photo-of-smiling-woman-with-flower.jpeg?auto=compress&cs=tinysrgb&w=400&lazy=load" alt='' fill className={styles.img} />
            </div>
            <span className={styles.date}>01.01.2023</span>
        </div>
        <div className={styles.bottom}>
            <h1 className={styles.title}>Title</h1>
            <p className={styles.desc}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Harum quae perspiciatis eligendi voluptates vitae aliquid. Debitis aliquam tenetur ea! Omnis?</p>
            <Link className={styles.link} href="/blog/post" >READ MORE</Link>
        </div>
    </div>
  )
}
