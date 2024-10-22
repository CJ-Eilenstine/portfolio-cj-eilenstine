import skillStyles from "./skill.module.css";

export default function SkillBox({ skill }) {
  return <button className={skillStyles.skillBox}>{skill}</button>;
}
