import Image from 'next/image'
import styles from './singlePost.module.css'

export default function SinglePostPage() {
  return (
    <div className={styles.container}>
      <div className={styles.imgContainer}>
        <Image src="https://images.pexels.com/photos/16373346/pexels-photo-16373346/free-photo-of-smiling-woman-with-flower.jpeg?auto=compress&cs=tinysrgb&w=400&lazy=load" fill className={styles.img}/>
      </div>
      <div className={styles.textContainer}>
        <h1 className={styles.title}>Title</h1>
        <div className={styles.detail}>
          <Image className={styles.avatar} src="https://images.pexels.com/photos/16373346/pexels-photo-16373346/free-photo-of-smiling-woman-with-flower.jpeg?auto=compress&cs=tinysrgb&w=400&lazy=load" alt='' width={50} height={50} />
          <div className={styles.detailText}>
            <span className={styles.detailTitle}>Author</span>
            <span className={styles.detailValue}>chinku</span>
          </div>
          <div className={styles.detailText}>
            <span className={styles.detailTitle}>Published</span>
            <span className={styles.detailValue}>16.08.2014</span>
          </div>
        </div>
        <div className={styles.content}>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ea, aspernatur? Eos necessitatibus molestiae molestias ea quasi ab dicta dolorem? Iure rerum neque maiores vel nesciunt.
        </div>
      </div>
    </div>
  )
}
