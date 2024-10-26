"use client";

import contactStyles from "./contact.module.css";
import Link from "next/link";

export default function Contact() {
  return (
    <main className={contactStyles.contactMain}>
      <h1>Contact</h1>
      <input type="name" placeholder="Name"></input>
      <input type="email" placeholder="Email"></input>
      <textarea placeholder="Message"></textarea>
      <button>Submit</button>
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
