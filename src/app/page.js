"use client";

import Image from "next/image";
import styles from "./page.module.css";
import SkillBox from "@/components/skill";

export default function Home() {
  return (
    <main>
      <div className={styles.background}>
        <div className={styles.bio}>
          <h1>
            I am CJ Eilenstine, an aspiring web developer and designer. With
            skills in back and front end development.
          </h1>
          <h1>
            My journey started with entering college and switching majors to
            something I had no clue about, Web Development. So far I have gained
            skills working with JavaScript, Sass, JQuery, etc. I now am working
            with different frameworks and have been to a few conferences
            already.
          </h1>
          <div className={styles.skills}>
            <SkillBox skill={"JavaScript"}></SkillBox>
            <SkillBox skill={"CSS"}></SkillBox>
            <SkillBox skill={"JQuery"}></SkillBox>
            <SkillBox skill={"Php"}></SkillBox>
            <SkillBox skill={"Figma"}></SkillBox>
            <SkillBox skill={"Next.js"}></SkillBox>
          </div>
        </div>
        <div className={styles.profilePic}></div>
      </div>
    </main>
  );
}
