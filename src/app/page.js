import Image from "next/image";
import styles from "./page.module.css";

export default function Home() {
  return (
    <main>
      <div className={styles.background}>
        <div className={styles.bio}>
          <h1>
            Hello, my name is CJ Eilenstine and I am an aspiring web developer
            and designer.
          </h1>
          <h1>
            I enjoy a multitude of hobbies such as gaming, bouldering, and
            reading.
          </h1>
        </div>
        <div className={styles.profilePic}></div>
      </div>
    </main>
  );
}
