"use client";

import projectStyles from "./projects.module.css";
import Project from "@/components/project";

export default function Projects() {
  return (
    <main>
      <div className={projectStyles.background}>
        <Project
          img="/mochi.png"
          title="Mochi Website"
          desc="E-commerce Website implementing HTML, CSS, and JQuery and displaying my Front-End Development Skills."
          href="https://mochi-five.vercel.app/"
        ></Project>
      </div>
    </main>
  );
}
