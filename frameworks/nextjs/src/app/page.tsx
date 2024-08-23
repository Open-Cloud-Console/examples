import Image from "next/image";
import styles from "./page.module.css";

export default function Home() {
  return (
    <main className={styles.main}>
      <div className={styles.description}>
        <p>
          Get started by editing&nbsp;
          <code className={styles.code}>src/app/page.tsx</code>
        </p>
      </div>
      <div className={styles.center}>
            <div className={styles.grid}>
                <a href="/object-storage/OBJ-1908A">
                    <h4>Bucket Labeling</h4>
                </a>
            </div>
      </div>
    </main>
  );
}
