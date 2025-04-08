"use client";

import contactStyles from "./contact.module.css";
import Link from "next/link";

export default function Resume() {
  return (
    <main className={contactStyles.contactMain}>
      <h1>Resume</h1>
      <iframe src="/Christian Eilenstine Resume.pdf" />
      <a
        href="/Christian Eilenstine Resume.pdf"
        download="Christian_Eilenstine_Resume.pdf"
      >
        Download Resume
      </a>
      <div className={contactStyles.socials}>
        <Link href={"https://github.com/CJ-Eilenstine"} target="_blank">
          <i className="fa-brands fa-github"></i>
        </Link>
        <Link
          href={"https://www.linkedin.com/in/cj-eilenstine/"}
          target="_blank"
        >
          <i className="fa-brands fa-linkedin"></i>
        </Link>
      </div>
    </main>
  );
}
