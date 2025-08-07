"use client";

import useScroll from "@/hooks/useScroll"; 
import { ChevronDown, Menu, X } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import logo from "../../assets/logo-removebg-preview (1).png";

export default function MainHeader() {
  const [showDropdown, setShowDropdown] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const scrolled = useScroll(50);

  return (
    <header
      className={`w-full px-6 py-2 transition-all duration-500 ease-in-out ${
        scrolled ? "fixed top-0 left-0 w-full z-50 shadow-md bg-white" : ""
      }`}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <Link href="/" className="flex items-center space-x-2">
          <Image
            src={logo}
            alt="Logo"
            width={80}
            height={80}
            className="rounded"
          />
        </Link>

        <nav className="hidden md:flex space-x-6 text-[15px] font-medium text-gray-800">
          <Link href="/" className="hover:text-[#dbb350] transition-colors">
            Accueil
          </Link>
          <Link
            href="#about"
            className="hover:text-[#dbb350] transition-colors"
          >
            Tapisserie sur mesure
          </Link>

          <div
            className="relative"
            onMouseEnter={() => setShowDropdown(true)}
            onMouseLeave={() => setShowDropdown(false)}
          >
            <button className="flex items-center gap-1 hover:text-[#dbb350] transition-colors">
              <Link href="#collections">Collections</Link>{" "}
              <ChevronDown size={16} />
            </button>

            {showDropdown && (
              <div className="absolute top-full left-0 mt-2 bg-white border rounded shadow-lg z-50">
                {["canape", "fauteuille", "lits", "chaise"].map((item) => (
                  <Link
                    key={item}
                    href={item}
                    className="block px-4 py-2 hover:bg-gray-100 transition"
                  >
                    {item.charAt(0).toUpperCase() + item.slice(1)}
                  </Link>
                ))}
              </div>
            )}
          </div>

          <Link
            href="#realisations"
            className="hover:text-[#dbb350] transition-colors"
          >
             Réalisations
          </Link>
          <Link
            href="#contact"
            className="hover:text-[#dbb350] transition-colors"
          >
            Contact
          </Link>
        </nav>

        <button
          className="md:hidden text-gray-800 z-50"
          onClick={() => setMobileMenuOpen(true)}
        >
          <Menu size={28} />
        </button>
      </div>

      <div
        className={`fixed inset-0 z-40 bg-[#dbb350] text-white transform transition-transform duration-300 ease-in-out ${
          mobileMenuOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex justify-between items-center px-6 py-4 border-b border-white">
          <Image
            src={logo}
            alt="Logo"
            width={60}
            height={60}
            className="rounded"
          />
          <button onClick={() => setMobileMenuOpen(false)}>
            <X size={30} className="text-white" />
          </button>
        </div>

        <nav className="flex flex-col items-start gap-6 px-6 py-10 text-lg font-semibold">
          <Link href="/" onClick={() => setMobileMenuOpen(false)}>
            Accueil
          </Link>
          <Link href="#about" onClick={() => setMobileMenuOpen(false)}>
            Tapisserie sur mesure
          </Link>

          <div>
            <p className="mb-2">Collections</p>
            <div className="ml-4 space-y-2">
              {["canape", "fauteuille", "lits", "chaise"].map((item) => (
                <Link
                  key={item}
                  href={item}
                  onClick={() => setMobileMenuOpen(false)}
                  className="block"
                >
                  {item.charAt(0).toUpperCase() + item.slice(1)}
                </Link>
              ))}
            </div>
          </div>

          <Link
            href="#realisations"
            onClick={() => setMobileMenuOpen(false)}
          >
             Réalisations
          </Link>
          <Link href="#contact" onClick={() => setMobileMenuOpen(false)}>
            Contact
          </Link>
        </nav>
      </div>
    </header>
  );
}
