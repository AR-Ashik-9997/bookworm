import React from "react";
import logo from "@/assets/images/technet-logo-white.png";
import { RiFacebookBoxFill, RiInstagramLine } from "react-icons/ri";
export default function Footer() {
  const date = new Date();
  const year = date.getFullYear();

  return (
    <footer className="bg-[#242630] text-secondary p-20">
      <div>
        <div>
          <img className="h-10" src={logo} alt="Logo" />
        </div>
      </div>
    </footer>
  );
}
