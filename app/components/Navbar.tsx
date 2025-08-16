"use client";
import React, { useState } from "react";
import Image from "next/image";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="absolute w-full">
      <div className="max-w-[1200px] mx-auto mt-6 flex items-center justify-between px-4 md:px-0">
        <a href="#">
          <Image src="/logo.png" width="118" height="103" alt="logo" />
        </a>


        <ul className="hidden md:flex gap-12">
          <a
            href="#aboutus"
            className="text-Main_pallete_04 hover:text-[#41444B] font-medium text-base uppercase"
          >
            About
          </a>
          <a
            href="#services"
            className="text-Main_pallete_04 hover:text-[#41444B] font-medium text-base uppercase"
          >
            Services
          </a>
          <a
            href="#projects"
            className="text-Main_pallete_04 hover:text-[#41444B] font-medium text-base uppercase"
          >
            Projects
          </a>
          <a
            href="#contact"
            className="text-Main_pallete_04 hover:text-[#41444B] font-medium text-base uppercase"
          >
            Contact
          </a>
        </ul>

        {/* Desktop Button */}
        <a
          href="#"
          className="hidden md:flex text-Main_pallete_00 bg-gradient-to-b from-[#4397A4] to-[#5BCCDE] hover:bg-gradient-to-t hover:from-[#4397A4] hover:to-[#5BCCDE] transition-[background-image] delay-150 duration-500 ease-in-out w-[169px] h-10 justify-center items-center rounded-[5px] font-bold text-base"
        >
          Need a project?
        </a>

        {/* Mobile Hamburger */}
        <button
          className="md:hidden flex flex-col gap-1 focus:outline-none"
          onClick={() => setIsOpen(!isOpen)}
        >
          <span className="w-6 h-0.5 bg-black"></span>
          <span className="w-6 h-0.5 bg-black"></span>
          <span className="w-6 h-0.5 bg-black"></span>
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white shadow-lg mt-4 px-6 py-4 flex flex-col gap-4">
          <a
            href="#"
            className="text-Main_pallete_04 hover:text-[#41444B] font-medium uppercase"
          >
            About
          </a>
          <a
            href="#"
            className="text-Main_pallete_04 hover:text-[#41444B] font-medium uppercase"
          >
            Services
          </a>
          <a
            href="#"
            className="text-Main_pallete_04 hover:text-[#41444B] font-medium uppercase"
          >
            Projects
          </a>
          <a
            href="#"
            className="text-Main_pallete_04 hover:text-[#41444B] font-medium uppercase"
          >
            Contact
          </a>
          <a
            href="#"
            className="text-Main_pallete_00 bg-gradient-to-b from-[#4397A4] to-[#5BCCDE] hover:bg-gradient-to-t hover:from-[#4397A4] hover:to-[#5BCCDE] transition-[background-image] delay-150 duration-500 ease-in-out w-full h-10 flex justify-center items-center rounded-[5px] font-bold text-base"
          >
            Need a project?
          </a>
        </div>
      )}
    </div>
  );
}

export default Navbar;
