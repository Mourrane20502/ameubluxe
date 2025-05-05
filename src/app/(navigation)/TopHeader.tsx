import { Phone } from "lucide-react";
import React from "react";
import { FaFacebookF, FaInstagram, FaTiktok } from "react-icons/fa";

export default function TopHeader() {
  return (
    <div className="w-full h-14 bg-[#dbb350] text-white px-4 sm:px-8 flex items-center justify-between text-sm">
      <div className="flex items-center gap-6">
        <div className="flex items-center gap-2 text-md ">
          <Phone size={16} />
          <span className="font-medium ">+212 661-673158</span>
        </div>
      </div>
      <div>
        {" "}
        <p className="text-[16px] max-md:text-[14px]">
          Livraison à domicile partout au Maroc
        </p>
      </div>

      <div className="flex items-center gap-4 text-lg max-md:hidden">
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
  );
}
