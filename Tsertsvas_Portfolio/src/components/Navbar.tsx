import { useState } from "react";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="nav">
      <div className="container navInner">
        <div className="logo">My Portfolio</div>

        {/* desktop links */}
        <nav className="links">
          <a href="#about">About</a>
          <a href="#skills">Skills</a>
          <a href="#projects">Projects</a>
          <a href="#courses">Courses</a>
          <a href="#certificates">Certificates</a>
          <a href="#contact">Contact</a>
        </nav>

        {/* hamburger */}
        <button
          className="burger"
          onClick={() => setOpen(!open)}
          aria-label="menu"
        >
          ☰
        </button>
      </div>

      {/* mobile menu */}
      {open && (
        <div className="mobileMenu">
          <a onClick={() => setOpen(false)} href="#about">About</a>
          <a onClick={() => setOpen(false)} href="#skills">Skills</a>
          <a onClick={() => setOpen(false)} href="#projects">Projects</a>
          <a onClick={() => setOpen(false)} href="#courses">Courses</a>
          <a onClick={() => setOpen(false)} href="#certificates">Certificates</a>
          <a onClick={() => setOpen(false)} href="#contact">Contact</a>
        </div>
      )}
    </header>
  );
}
