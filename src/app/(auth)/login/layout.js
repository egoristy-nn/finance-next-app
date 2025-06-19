"use client";

import "@/app/globals.css";
import styles from "./page.module.css";
import { Provider } from "react-redux";
import store from "@/app/store";
import { Roboto } from "next/font/google";

const metadata = {
  title: "Finance App",
  description: "Finance App For Personal Use"
};

const roboto = Roboto({
  weight: "400",
  subsets: ["latin"]
});

export default function AuthLayout({ children }) {
    return (
        <>
            <head>
                <title>{metadata.title}</title>
                <meta name="description" content={metadata.description} />
            </head>
            <Provider store = {store}>
                <div className={styles.page}>{children}</div>
            </Provider>
        </>
        
    );
}