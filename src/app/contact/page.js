"use client";

import contactStyles from "./contact.module.css";

export default function Contact() {
  return (
    <main className={contactStyles.contactMain}>
      <h1>Contact</h1>
      <input type="name" placeholder="Name"></input>
      <input type="email" placeholder="Email"></input>
      <textarea placeholder="Message"></textarea>
      <button>Submit</button>
      <div className={contactStyles.socials}></div>
    </main>
  );
}
