import projectStyles from "./project.module.css";
import Link from "next/link";

export default function Project({ img, title, desc, href, git }) {
  return (
    <div className={projectStyles.parent}>
      <img src={img} />
      <h1>{title}</h1>
      <p>{desc}</p>
      <div className={projectStyles.projectLinks}>
        <Link href={git} target="_blank">
          <i className="fa-brands fa-github"></i>
        </Link>
        <Link href={href} target="_blank">
          <i className="fa-solid fa-link"></i>
        </Link>
      </div>
    </div>
  );
}
