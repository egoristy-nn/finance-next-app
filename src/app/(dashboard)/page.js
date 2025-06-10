'use client';
import styles from "../page.module.css";
import { useAuth } from "../global-state/auth-provider";
export default function Home() {
  const { isAuthenticated } = useAuth();
  if (!isAuthenticated) return null;

  return (
    <h1 className={styles.page}>Home</h1>
  );
}
