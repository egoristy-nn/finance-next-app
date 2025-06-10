import "@/app/globals.css";
import styles from "./page.module.css";

export const metadata = {
  title: "Finance App",
  description: "Finance App For Personal Use"
};

export default function AuthLayout({ children }) {
    return (
        <div className={styles.page}>
            {children}
        </div>
    );
}