"use client";
import styles from "@/app/page.module.css";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import { useRouter } from "next/navigation";

export default function History() {
  const router = useRouter();
  const isAuthenticated = useSelector(state => state.user.isAuthenticated);

  useEffect(() => {
    if (!(isAuthenticated)) {
      router.push('/login');
    }
  }, [isAuthenticated]);
  return (
    <h1 className={styles.page}>History</h1>
  );
}
