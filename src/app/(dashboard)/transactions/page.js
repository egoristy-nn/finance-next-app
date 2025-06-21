"use client";
import styles from "@/app/page.module.css";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import { useRouter } from "next/navigation";

export default function Transactions() {

  return (
    <h1 className={styles.page}>Transactions</h1>
  );
}
