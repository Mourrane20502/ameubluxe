"use client";
import useScroll from "@/hooks/useScroll";
import { Phone } from "lucide-react";
import React from "react";
import { FaFacebookF, FaInstagram, FaTiktok } from "react-icons/fa";

const scrollThreshold = 50;

export default function TopHeader() {
  const scrolled = useScroll(scrollThreshold);

  return (
    <>
      {!scrolled && (
        <div className="w-full bg-[#dbb350] text-white px-4 sm:px-8 py-3 text-sm">
          <div className="flex flex-col md:flex-row items-center justify-between gap-2 md:gap-0">
            <div className="flex items-center gap-2 text-md">
              <Phone size={16} />
              <span className="font-medium">+212 661-673158</span>
            </div>

            <p className="text-center text-[15px] md:text-[16px]">
              Livraison à domicile partout au Maroc
            </p>

            <div className="flex items-center gap-4 text-lg">
              <a
                href="https://www.tiktok.com"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-white transition"
              >
                <FaTiktok />
              </a>
              <a
                href="https://www.instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-white transition"
              >
                <FaInstagram />
              </a>
              <a
                href="https://www.facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-white transition"
              >
                <FaFacebookF />
              </a>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
