import navStyles from "./nav.module.css";
import Link from "next/link";

export default function Nav() {
  return (
    <nav className={navStyles.mainNav}>
      <ul className={navStyles.name}>
        <li>
          <Link href="/">CJ Eilenstine</Link>
        </li>
      </ul>
      <ul className={navStyles.links}>
        <li>
          <Link href="/projects">Projects</Link>
        </li>
        <li>
          <Link href="/contact">Contact</Link>
        </li>
      </ul>
    </nav>
  );
}
