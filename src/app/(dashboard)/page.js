'use client';
import styles from "../page.module.css";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import { useRouter } from "next/navigation";


export default function Home() {
const router = useRouter();
const isAuthenticated = useSelector(state => state.user.isAuthenticated);

  useEffect(() => {
    if (!(isAuthenticated)) {
      router.push('/login');
    }
  }, [isAuthenticated]);

  return (
    <div className={styles.container}>
      <div className={styles.card_graph}></div>
      <div className={styles.card}></div>
      <div className={styles.card}></div>
    </div>
  );
}
