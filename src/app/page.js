"use client";

import Image from "next/image";
import styles from "./page.module.css";

export default function Home() {
  return (
    <main>
      <div className={styles.background}>
        <div className={styles.bio}>
          <h1>
            I am CJ Eilenstine, an aspiring web developer and designer. With
            skills in back and front end development,
          </h1>
          <h1>
            I enjoy a multitude of hobbies such as gaming, bouldering, and
            reading. I enjoy playing Elden Ring a lot and reading Brandon
            Sanderson books.
          </h1>
        </div>
        <div className={styles.profilePic}></div>
      </div>
    </main>
  );
}
