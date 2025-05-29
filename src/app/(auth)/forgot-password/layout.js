import "@/app/globals.css";
import styles from "./page.module.css";
export default function AuthLayout({ children }) {
    return (
        <div className={styles.page}>
            {children}
        </div>
    );
}