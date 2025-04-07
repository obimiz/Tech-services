import React, { useState } from "react";
import Logo from "./Logo.png";
import { Link } from "react-router-dom"; // ✅ Corrected import

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Navigation links
  const navLinks = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Contact", path: "/contact" },
    { name: "Services", path: "/services" },
    { name: "HR", path: "/hr" },
  ];

  return (
    <header className="bg-blue-700">
      <nav className="flex justify-between items-center py-6 px-6 md:px-12 lg:px-32 bg-white shadow-md">
        {/* Logo */}
        <Link to="/">
          <img
            src={Logo}
            alt="Logo"
            className="w-24 md:w-32 hover:scale-105 transition-transform"
          />
        </Link>

        {/* Desktop Menu */}
        <ul className="hidden xl:flex items-center gap-8 font-medium text-base">
          {navLinks.map((link) => (
            <li key={link.name} className="p-3 hover:bg-sky-400 hover:text-white rounded-md transition-all cursor-pointer">
              <Link to={link.path}>{link.name}</Link>
            </li>
          ))}
        </ul>

        {/* Hamburger Button (Mobile) */}
        <button
          className="xl:hidden text-3xl focus:outline-none"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? "✖" : "☰"}
        </button>
      </nav>

      {/* Mobile Dropdown */}
      {isMenuOpen && (
        <div className="xl:hidden fixed top-16 left-0 w-full bg-white shadow-md flex flex-col items-center gap-6 py-6 z-50">
          {navLinks.map((link) => (
            <li
              key={link.name}
              className="list-none p-4 w-full text-center hover:bg-sky-400 hover:text-white transition-all cursor-pointer"
              onClick={() => setIsMenuOpen(false)}
            >
              <Link to={link.path}>{link.name}</Link>
            </li>
          ))}
        </div>
      )}
    </header>
  );
}
