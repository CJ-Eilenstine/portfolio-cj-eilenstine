"use client";

import { useState } from "react";
import navStyles from "./nav.module.css";
import Link from "next/link";

export default function Nav() {
  // State to manage mobile menu toggle
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Function to toggle mobile menu
  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <nav className={navStyles.mainNav}>
      {/* Site name or logo */}
      <ul className={navStyles.name}>
        <li>
          <Link href="/">CJ Eilenstine</Link>
        </li>
      </ul>

      {/* Hamburger menu button */}
      <button
        className={navStyles.hamburger}
        onClick={toggleMobileMenu}
        aria-label="Toggle navigation menu"
      >
        <span className={navStyles.bar}></span>
        <span className={navStyles.bar}></span>
        <span className={navStyles.bar}></span>
      </button>

      {/* Navigation links */}
      <ul
        className={`${navStyles.links} ${
          isMobileMenuOpen ? navStyles.mobileMenuOpen : ""
        }`}
      >
        <li>
          <Link href="/about" onClick={() => setIsMobileMenuOpen(false)}>
            About
          </Link>
        </li>
        <li>
          <Link href="/projects" onClick={() => setIsMobileMenuOpen(false)}>
            Projects
          </Link>
        </li>
        <li>
          <Link href="/contact" onClick={() => setIsMobileMenuOpen(false)}>
            Contact
          </Link>
        </li>
      </ul>
    </nav>
  );
}
