"use client";
import React from "react";
import Image from "next/image";


function Footer() {
  
  return (
    <footer className="flex flex-col md:flex-row font-sans">
      {/* Left Section */}
      <div className="bg-[#3A8A94] w-full md:w-[40%] py-10 px-6 sm:px-12 md:pl-32 text-white flex flex-col items-start">
        {/* Logo */}
        <h2 className="text-2xl font-bold capitalize">Umar Enterprises</h2>

        {/* Phone */}
        <p className="text-sm mt-6">CALL US TODAY</p>
        <p className="text-2xl sm:text-3xl font-semibold mt-1">
          + 1 634 7638 654
        </p>

        {/* Social Icons */}
        <div className="flex gap-3 sm:gap-4 mt-6 flex-wrap">
  <div className="bg-white w-9 h-9 sm:w-10 sm:h-10 flex justify-center items-center rounded-full">
    <img src="/twitter.svg" alt="twitter" className="w-5 h-5" />
  </div>

  <div className="bg-white w-9 h-9 sm:w-10 sm:h-10 flex justify-center items-center rounded-full">
    <img src="/facebook.svg" alt="facebook" className="w-5 h-5" />
  </div>

  <div className="bg-white w-9 h-9 sm:w-10 sm:h-10 flex justify-center items-center rounded-full">
    <img src="/linkedin.svg" alt="linkedin" className="w-5 h-5" />
  </div>

  <div className="bg-white w-9 h-9 sm:w-10 sm:h-10 flex justify-center items-center rounded-full">
    <img src="/youtube.svg" alt="youtube" className="w-5 h-5" />
  </div>
</div>

        {/* Description */}
        <p className="text-sm mt-8 sm:mt-10 max-w-sm leading-relaxed">
          Fusce eu magna quis velit efficitur rhoncus. Vivamus vehicula, neque a velit
        </p>
      </div>

      {/* Right Section */}
     {/* Right Section */}
<div className="bg-[#74B9C4] w-full md:w-[60%] py-10 px-6 sm:px-12 lg:px-20 text-white 
     grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-12">

  {/* Quick Links */}
  <div>
    <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
    <ul className="space-y-3 text-sm sm:text-base leading-relaxed">
      <li><a href="#">About Company</a></li>
      <li><a href="#">Our Services</a></li>
      <li><a href="#">Our Projects</a></li>
      <li><a href="#">Pricings</a></li>
      <li><a href="#">Contacts</a></li>
    </ul>
  </div>

  {/* Clients Support */}
  <div>
    <h3 className="text-lg font-semibold mb-4">Clients Support</h3>
    <ul className="space-y-3 text-sm sm:text-base leading-relaxed">
      <li><a href="#">Careers</a></li>
      <li><a href="#">Our Process</a></li>
      <li><a href="#">FAQs</a></li>
      <li><a href="#">Clients Testimonials</a></li>
      <li><a href="#">Our Blog</a></li>
    </ul>
  </div>

  {/* Our News */}
  <div>
    <h3 className="text-lg font-semibold mb-4">Our News</h3>
    <div className="mb-5">
      <a href="#" className="block font-medium text-sm sm:text-base leading-snug">
        Agile Construction Management Building
      </a>
      <p className="text-xs sm:text-sm text-gray-100">20 Nov 2020 by merkulove</p>
    </div>
    <div>
      <a href="#" className="block font-medium text-sm sm:text-base leading-snug">
        Top Saas Construction Products Information
      </a>
      <p className="text-xs sm:text-sm text-gray-100">29 Nov 2020 by merkulove</p>
    </div>
  </div>
</div>

    </footer>
  );
}

export default Footer;
