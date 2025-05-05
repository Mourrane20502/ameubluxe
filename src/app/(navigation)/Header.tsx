"use client";

import { ChevronDown } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import logo from "../../assets/logo.jpg";

export default function MainHeader() {
  const [showDropdown, setShowDropdown] = useState(false);

  return (
    <header className="bg-white w-full shadow-md px-6 py-2">
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

        <nav className="hidden md:flex  space-x-6 text-[15px] font-medium text-gray-800">
          <Link href="/" className="hover:text-[#dbb350]">
            Accueil
          </Link>
          <Link href="#tapisserie" className="hover:text-[#dbb350]">
            Tapisserie sur mesure
          </Link>

          <div
            className="relative"
            onMouseEnter={() => setShowDropdown(true)}
            onMouseLeave={() => setShowDropdown(false)}
          >
            <button className="flex items-center gap-1 hover:text-[#dbb350]">
              Collections <ChevronDown size={16} />
            </button>

            {showDropdown && (
              <div className="absolute top-full left-0 mt-2 bg-white border rounded shadow-lg z-50">
                <Link
                  href="/collections/canape"
                  className="block px-4 py-2 hover:bg-gray-100"
                >
                  Canapé
                </Link>
                <Link
                  href="/collections/fauteuille"
                  className="block px-4 py-2 hover:bg-gray-100"
                >
                  Fauteuille
                </Link>
                <Link
                  href="/collections/lits"
                  className="block px-4 py-2 hover:bg-gray-100"
                >
                  Lits
                </Link>
                <Link
                  href="/collections/chaise"
                  className="block px-4 py-2 hover:bg-gray-100"
                >
                  Chaise
                </Link>
              </div>
            )}
          </div>

          <Link href="#nettoyage-service" className="hover:text-[#dbb350]">
            Nettoyage professionnelle
          </Link>
          <Link href="#contact" className="hover:text-[#dbb350]">
            Contact
          </Link>
        </nav>
      </div>
    </header>
  );
}
