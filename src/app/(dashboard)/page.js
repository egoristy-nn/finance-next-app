'use client';
import styles from "../page.module.css";


export default function Home() {

  return (
    <div className={styles.container}>
      <div className={styles.card_graph}></div>
      <div className={styles.card}></div>
      <div className={styles.card}></div>
    </div>
  );
}
