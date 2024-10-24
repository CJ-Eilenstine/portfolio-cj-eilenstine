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
        <Project
          img="/armadillo.png"
          title="Armadillo Website"
          desc="Informative website about armadillo's that I worked on with 2 others. We implemented a useState feature and components in our Next.js project."
          href="https://group-project1-n-317.vercel.app/"
        ></Project>
      </div>
    </main>
  );
}
