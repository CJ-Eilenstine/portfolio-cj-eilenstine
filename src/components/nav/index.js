"use client";

import { useState } from "react";
import navStyles from "./nav.module.css";
import Link from "next/link";

export default function Nav() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className={navStyles.mainNav}>
      {/* Site name/logo */}
      <div className={navStyles.brand}>
        <Link href="/">CJ Eilenstine</Link>
      </div>

      {/* Desktop navigation links */}
      <ul className={`${navStyles.navLinks} ${isOpen ? navStyles.open : ""}`}>
        <li>
          <Link href="/about">About</Link>
        </li>
        <li>
          <Link href="/projects">Projects</Link>
        </li>
        <li>
          <Link href="/contact">Contact</Link>
        </li>
      </ul>

      {/* Hamburger menu button */}
      <button
        className={navStyles.hamburger}
        onClick={toggleMenu}
        aria-label="Toggle navigation"
        aria-expanded={isOpen}
      >
        <span className={navStyles.bar}></span>
        <span className={navStyles.bar}></span>
        <span className={navStyles.bar}></span>
      </button>
    </nav>
  );
}
