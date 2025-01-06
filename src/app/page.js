"use client";

import Image from "next/image";
import styles from "./page.module.css";
import Link from "next/link";
import SkillBox from "@/components/skill";

export default function Home() {
  return (
    <main>
      <section className={styles.sec}>
        <div className={styles.wave}>
          <span></span>
          <span></span>
          <span></span>
        </div>
        <div className={styles.background}>
          <div className={styles.bio}>
            <h1>CJ Eilenstine</h1>
            <p>Aspiring Web Developer and Designer</p>
            <div className={styles.skills}>
              <SkillBox skill={"JavaScript"}></SkillBox>
              <SkillBox skill={"CSS"}></SkillBox>
              <SkillBox skill={"JQuery"}></SkillBox>
              <SkillBox skill={"Php"}></SkillBox>
              <SkillBox skill={"Figma"}></SkillBox>
              <SkillBox skill={"Next.js"}></SkillBox>
              <SkillBox skill={"Godot"}></SkillBox>
              <SkillBox skill={"Python"}></SkillBox>
              <SkillBox skill={"Reading"}></SkillBox>
            </div>
          </div>
          <Link href={"./about"}>
            <div className={styles.profilePic}></div>
          </Link>
        </div>
      </section>
    </main>
  );
}
