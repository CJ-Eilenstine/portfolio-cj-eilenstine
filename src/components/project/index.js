import projectStyles from "./project.module.css";

export default function Project({ img, title, desc, href }) {
  return (
    <a href={href} target="_blank" className={projectStyles.anchorProj}>
      <div className={projectStyles.parent}>
        <img src={img} />
        <h1>{title}</h1>
        <p>{desc}</p>
      </div>
    </a>
  );
}
