import React, { useState } from "react";
import Logo from "./Logo.png";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-blue-700">
      <nav className="flex justify-between items-center py-6 px-6 md:px-12 lg:px-32 bg-white shadow-md">
        {/* Logo */}
        <img src={Logo} alt="Logo" className="w-24 md:w-32 hover:scale-105 transition-transform" />

        {/* Desktop Menu (Hidden on Mobile) */}
        <ul className="hidden xl:flex items-center gap-8 font-medium text-base">
          {["Home", "About", "Contact", "Services", "HR"].map((item) => (
            <li
              key={item}
              className="p-3 hover:bg-sky-400 hover:text-white rounded-md transition-all cursor-pointer"
            >
              {item}
            </li>
          ))}
        </ul>

        {/* Mobile Menu Button */}
        <button
          className="xl:hidden text-3xl focus:outline-none"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? "✖" : "☰"}
        </button>
      </nav>

      {/* Mobile Dropdown Menu */}
      {isMenuOpen && (
        <div className="xl:hidden fixed top-16 left-0 w-full bg-white shadow-md flex flex-col items-center gap-6 py-6 z-50">
          {["Home", "About", "Contact", "Services", "HR"].map((item) => (
            <li
              key={item}
              className="list-none p-4 w-full text-center hover:bg-sky-400 hover:text-white transition-all cursor-pointer"
              onClick={() => setIsMenuOpen(false)}
            >
              {item}
            </li>
          ))}
        </div>
      )}
    </header>
  );
}
