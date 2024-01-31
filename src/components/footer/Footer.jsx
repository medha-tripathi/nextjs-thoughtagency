import styles from "./footer.module.css";

export default function Footer() {
  return (
    <div className={styles.container}>
      <div className={styles.logo}></div>
      <div className={styles.text}>
        XYZ creative thought agency. All rights reserved.
      </div>
    </div>
  )
}
