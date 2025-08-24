import React from "react";
import Navbar from "./components/Navbar";
import Image from "next/image";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <div
        className="bg-cover bg-center min-h-screen w-full"
        style={{ backgroundImage: "url('/bg.svg')" }}
      >
        <div className="max-w-[1200px] mx-auto flex flex-col lg:flex-row justify-center items-center min-h-screen gap-10 lg:gap-[102px] px-6 pt-36 lg:pt-0">
          {/* Left Content */}
          <div className="w-full lg:w-1/2 text-center lg:text-left">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl leading-tight lg:leading-[60px] text-[#4397A4] font-kanit font-bold">
              Umar Enterprises
            </h1>
            <p className="text-base sm:text-lg md:text-xl lg:text-[22px] text-Main_pallete_04 font-kanit mt-4">
              Designing & building residential and commercial projects with
              modern style and lasting quality.{" "}
            </p>

            {/* Buttons */}
            <div className="flex  gap-5 mt-10 lg:mt-[103px] justify-center lg:justify-start">
              <a
                href="#"
                className="text-Main_pallete_00 bg-gradient-to-b from-[#4397A4] to-[#5BCCDE] hover:bg-gradient-to-t hover:from-[#4397A4] hover:to-[#5BCCDE] transition-[background-image] delay-150 duration-500 ease-in-out w-[118px] h-[55px] sm:h-[61px] flex justify-center items-center rounded-[5px] font-bold text-base font-sans"
              >
                Services
              </a>
              <a
                href="#"
                className="bg-[#C6DBFF] hover:bg-[#b6cef8] w-[257px] h-[55px] sm:h-[61px] flex justify-center items-center rounded-[5px] text-[#41444B] font-sans font-bold text-base"
              >
                About the company
              </a>
            </div>
          </div>

          {/* Right Image */}
          <div className="w-full lg:w-1/2 flex justify-center lg:justify-end mt-10 lg:mt-0">
            <Image
              src="/hero.png"
              alt="Hero"
              width={800}
              height={800}
              className="max-w-[90%] sm:max-w-[80%] lg:max-w-full h-auto"
            />
          </div>
        </div>
      </div>

      <section>
        <div className="max-w-[1080px] mx-auto flex flex-col lg:flex-row items-center gap-10 lg:gap-0 mt-10 px-4">
          {/* Left Stats */}
          <div className="max-w-[576px] flex flex-col sm:flex-row gap-6 lg:gap-0">
            <div className="bg-[#8DC8D0] w-[290px] h-[235px] flex flex-col justify-center items-center">
              <div>
                <h1 className="font-kanit text-[70px] sm:text-[100px] font-semibold text-white -mt-6 sm:mt-[-40px]">
                  65+
                </h1>
                <p className="text-[#EBECEE] font-kanit text-lg sm:text-[22px] -mt-6 sm:mt-[-40px] text-center sm:text-left">
                  Completed Projects
                </p>
              </div>
            </div>

            <div className="bg-[#4397A4] w-[290px] h-[235px] flex flex-col justify-center items-center">
              <div>
                <h1 className="font-kanit text-[70px] sm:text-[100px] font-semibold text-white -mt-8 sm:mt-[-50px]">
                  2+
                </h1>
                <p className="text-[#EBECEE] font-kanit text-lg sm:text-[22px] -mt-6 sm:mt-[-40px] text-center sm:text-left">
                  Years of Experience
                </p>
              </div>
            </div>
          </div>

          {/* Right Content */}
          <div className="bg-white shadow-2xl border-b-[7.2px] border-[#4397A4] rounded-b-xl py-6 px-6 sm:px-[40px] lg:px-[61px]">
            <h2 className="text-[#486A6F] font-kanit text-2xl sm:text-[28px] lg:text-[34px] font-semibold leading-snug lg:leading-[38px] text-center lg:text-left">
              We Construct and Manage Places and Infrastructures
            </h2>

            <div className="mt-8">
              <div className="flex items-start sm:items-center gap-4 sm:gap-5">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="#4397A4"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  className="w-10 h-10"
                  role="img"
                  aria-labelledby="ico-3d-2d"
                >
                  <title id="ico-3d-2d">Modern 2D & 3D Designs</title>

                  <path d="M12 3l6 3-6 3-6-3 6-3z" />
                  <path d="M18 6v6l-6 3-6-3V6" />
                  <path d="M12 9v6" />

                  <rect x="14.5" y="13.5" width="5" height="5" rx=".5" />
                </svg>
                <div>
                  <p className="text-[#41444B] font-sans text-sm sm:text-base mt-1">
                    Modern 2D & 3D Designs
                  </p>
                </div>
              </div>

              {/* Item 2 */}
              <div className="flex items-start sm:items-center gap-4 sm:gap-5 mt-6">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="#4397A4"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  className="w-10 h-10"
                  role="img"
                  aria-labelledby="ico-maps"
                >
                  <title id="ico-maps">Best Architectural Maps</title>
                  <rect x="3" y="4" width="18" height="16" rx="2" />
                  <path d="M9 4v16M15 4v16" />

                  <path d="M12 7a3 3 0 0 1 3 3c0 2.3-3 6-3 6s-3-3.7-3-6a3 3 0 0 1 3-3z" />
                  <circle cx="12" cy="10" r="1" />
                </svg>
                <div>
                  <p className="text-[#41444B] font-sans text-sm sm:text-base mt-1">
                    Best Architectural Maps
                  </p>
                </div>
              </div>

              {/* Item 3 */}
              <div className="flex items-start sm:items-center gap-4 sm:gap-5 mt-6">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="#4397A4"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  className="w-10 h-10"
                  role="img"
                  aria-labelledby="ico-finish"
                >
                  <title id="ico-finish">
                    Construction with Perfect Finishing
                  </title>

                  <path d="M3 10l9-7 9 7" />
                  <path d="M5 10v10h14V10" />
                  <path d="M10 20v-5h4v5" />

                  <path d="M7.5 15.5l1.8 1.8 3.2-3.2" />
                </svg>
                <div>
                  <p className="text-[#41444B] font-sans text-sm sm:text-base mt-1">
                    Construction with Perfect Finishing
                  </p>
                </div>
              </div>

              <div className="flex items-start sm:items-center gap-4 sm:gap-5 mt-6">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="#4397A4"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  className="w-10 h-10"
                  role="img"
                  aria-labelledby="ico-gov-private"
                >
                  <title id="ico-gov-private">
                    Government & Private Sector Projects
                  </title>

                  <path d="M3 9l9-6 9 6z" />
                  <path d="M4 20h16" />
                  <path d="M6 10v8M10 10v8M14 10v8M18 10v8" />

                  <rect x="8.5" y="12.5" width="7" height="5.5" rx="1" />
                  <path d="M10.5 12.5v-1.5h3v1.5" />
                </svg>
                <div>
                  <p className="text-[#41444B] font-sans text-sm sm:text-base mt-1">
                    Government & Private Sector Projects
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="aboutus" className="mt-[79px] px-4 sm:px-6">
        <div className="max-w-[1200px] mx-auto flex flex-col lg:flex-row gap-10 lg:gap-[94px] items-center">
          {/* Left Text */}
          <div className="w-full lg:w-1/2 text-center lg:text-left">
            <p className="text-[#41444B] font-kanit text-xs sm:text-sm font-medium uppercase">
              About Us
            </p>
            <h3 className="text-[#486A6F] font-kanit text-2xl sm:text-4xl lg:text-[55px] max-w-[555px] capitalize leading-snug lg:leading-[65px] font-semibold mx-auto lg:mx-0">
            Who We Are:
            </h3>
            <p className="text-[#41444B] font-sans  text-sm sm:text-[15px] mt-4">
            We’re a leading government contractor and general order supplier in roads, bridges, buildings, parks, irrigation, electrical, sewerage, and water supply. Partnering with the government and private sectors, we build with excellence and integrity.
            </p>
            
            {/* Button */}
            <a
              href="#"
              className="w-full sm:w-[240px] h-14 sm:h-16 gap-2 mt-6 sm:mt-[40px] text-white bg-gradient-to-b from-[#4397A4] to-[#5BCCDE] hover:bg-gradient-to-t hover:from-[#4397A4] hover:to-[#5BCCDE] transition-[background-image] delay-150 duration-500 ease-in-out flex justify-center items-center rounded-[5px] font-sans font-medium mx-auto lg:mx-0"
            >
              Learn more{" "}
              <span>
                <Image src="/arrow.svg" width="18" height="13" alt="logo" />
              </span>
            </a>
          </div>

          {/* Right Image */}
          <div className="w-full lg:w-1/2 mt-8 lg:mt-0">
            <Image
              src="/sec-2.png"
              width="2018"
              height="103"
              alt="logo"
              className="w-full h-auto"
            />
          </div>
        </div>
      </section>

      <section id="special-offers" className="mt-16 px-4 sm:px-6 lg:px-0">
        {/* Enhanced Section Header with Timer */}
        <div className="max-w-[1200px] mx-auto text-center mb-12">
          <p className="text-[#4397A4] font-kanit text-sm font-medium uppercase tracking-wider">
            Limited Time Offers
          </p>
          <h2 className="text-Heading_01 font-kanit text-3xl sm:text-4xl lg:text-[55px] font-semibold leading-tight mt-2">
            Special Construction Deals
          </h2>
          <p className="text-Main_pallete_04 font-sans text-lg mt-4 max-w-2xl mx-auto">
            Take advantage of our exclusive offers on construction services, materials, and project management
          </p>
        </div>

        <div className="max-w-[1200px] mx-auto gap-6 flex flex-wrap">
            <div className="relative overflow-hidden rounded-2xl shadow-2xl w-[65%]">
              <Image
                src="/img1.png"
                width={850}
                height={600}
                alt="Complete Construction Package"
                className="w-full h-[100%] transition-transform duration-700 group-hover:scale-105"
              />
              
              {/* Animated Discount Badge */}
              <div className="absolute top-6 left-6 animate-bounce">
                <div className="bg-gradient-to-r from-red-500 to-pink-500 text-white px-6 py-4 rounded-2xl shadow-2xl transform rotate-3">
                  <div className="text-center">
                    <div className="flex items-center justify-center gap-2 mb-1">
                      <span className="text-yellow-300 text-lg">🔥</span>
                      <span className="text-sm font-bold">FLASH SALE</span>
                    </div>
                    <p className="text-sm font-medium">SAVE UP TO</p>
                    <p className="text-4xl font-black">25%</p>
                    <p className="text-xs opacity-90">ON COMPLETE PROJECTS</p>
                  </div>
                </div>
              </div>

              {/* Enhanced Offer Details */}
              <div className="absolute bottom-6 left-6 right-6 bg-white/95 backdrop-blur-md p-6 rounded-2xl shadow-2xl border border-gray-100">
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <h3 className="text-Heading_01 font-kanit text-2xl font-bold mb-2">
                      Complete Construction Package
                    </h3>
                    <div className="flex items-center gap-2 mb-3">
                      <span className="text-green-600 text-sm font-medium">✓</span>
                      <span className="text-Black_1100 font-sans text-sm">Design & Planning</span>
                    </div>
                    <div className="flex items-center gap-2 mb-3">
                      <span className="text-green-600 text-sm font-medium">✓</span>
                      <span className="text-Black_1100 font-sans text-sm">Materials & Labor</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="text-green-600 text-sm font-medium">✓</span>
                      <span className="text-Black_1100 font-sans text-sm">Project Management</span>
                    </div>
                  </div>
                  
                  <div className="text-right">
                    <div className="bg-gradient-to-r from-[#4397A4] to-[#5BCCDE] text-white px-4 py-2 rounded-lg mb-2">
                      <span className="text-xs opacity-90">WAS</span>
                      <div className="text-lg font-bold line-through">$60,000</div>
                    </div>
                    <div className="text-3xl font-black text-[#4397A4]">$45,000</div>
                    <div className="text-sm text-green-600 font-bold">SAVE $15,000</div>
                  </div>
                </div>
                
                <div className="flex items-center justify-between pt-4 border-t border-gray-200">
                  <div className="flex items-center gap-2 text-sm text-gray-600">
                    <span className="w-2 h-2 bg-green-500 rounded-full"></span>
                    <span>Limited Availability</span>
                  </div>
                  <a href="#contact" className="bg-gradient-to-r from-[#4397A4] to-[#5BCCDE] hover:from-[#5BCCDE] hover:to-[#4397A4] text-white px-6 py-3 rounded-lg font-bold transition-all duration-300 transform hover:scale-105 shadow-lg">
                    Claim This Offer →
                  </a>
                </div>
              </div>
            </div>
            <div className="group relative overflow-hidden rounded-2xl shadow-xl w-[30%] hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
              <div className="relative">
                <Image
                  src="/img2.png"
                  width={356}
                  height={203}
                  alt="Design Services Special Offer"
                  className="w-full h-auto transition-transform duration-500 group-hover:scale-110"
                />
                
                {/* Enhanced Discount Badge */}
                <div className="absolute top-4 right-4">
                  <div className="bg-gradient-to-r from-red-500 to-red-600 text-white px-4 py-2 rounded-full shadow-lg transform rotate-12 animate-pulse">
                    <span className="text-sm font-black">-30%</span>
                  </div>
                </div>

                {/* Popular Badge */}
                <div className="absolute top-4 left-4">
                  <div className="bg-yellow-400 text-yellow-900 px-3 py-1 rounded-full text-xs font-bold">
                    ⭐ POPULAR
                  </div>
                </div>
              </div>

              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div>
              
              <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                <h3 className="font-kanit text-2xl font-bold mb-3">
                  Design Services
                </h3>
                <p className="text-white/90 font-sans text-sm mb-4 leading-relaxed">
                  Professional 2D & 3D architectural designs with modern software and expert consultation
                </p>
                
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-3">
                    <span className="text-3xl font-black text-yellow-300">$2,500</span>
                    <span className="text-lg text-white/70 line-through">$3,500</span>
                  </div>
                  <div className="text-right">
                    <div className="text-sm text-green-300 font-medium">You Save</div>
                    <div className="text-lg font-bold text-green-300">$1,000</div>
                  </div>
                </div>

                <div className="flex items-center gap-3 mb-4">
                  <div className="flex items-center gap-1 text-sm text-white/80">
                    <span>⏱️</span>
                    <span>2-3 weeks</span>
                  </div>
                  <div className="flex items-center gap-1 text-sm text-white/80">
                    <span>📱</span>
                    <span>Free consultation</span>
                  </div>
                </div>

                <button className="w-full bg-gradient-to-r from-[#4397A4] to-[#5BCCDE] hover:from-[#5BCCDE] hover:to-[#4397A4] text-white py-3 rounded-lg font-bold transition-all duration-300 transform hover:scale-105 shadow-lg flex items-center justify-center gap-2">
                  Get Design Package
                  <span className="text-lg">→</span>
                </button>
              </div>
            </div>
            <div className="group relative overflow-hidden rounded-2xl shadow-xl w-[30%] hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
              <div className="relative">
                <Image
                  src="/img3.png"
                  width={356}
                  height={103}
                  alt="Material Supply Special Offer"
                  className="w-full h-auto transition-transform duration-500 group-hover:scale-110"
                />
                
                {/* Enhanced Discount Badge */}
                <div className="absolute top-4 right-4">
                  <div className="bg-gradient-to-r from-green-500 to-green-600 text-white px-4 py-2 rounded-full shadow-lg transform -rotate-12">
                    <span className="text-sm font-black">-20%</span>
                  </div>
                </div>

                {/* Best Value Badge */}
                <div className="absolute top-4 left-4">
                  <div className="bg-blue-500 text-white px-3 py-1 rounded-full text-xs font-bold">
                    💎 BEST VALUE
                  </div>
                </div>
              </div>

              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div>
              
              <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                <h3 className="font-kanit text-2xl font-bold mb-3">
                  Material Supply
                </h3>
                <p className="text-white/90 font-sans text-sm mb-4 leading-relaxed">
                  Premium construction materials including cement, steel, and finishing materials at wholesale prices
                </p>
                
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-3">
                    <span className="text-3xl font-black text-[#8DC8D0]">$8,000</span>
                    <span className="text-lg text-white/70 line-through">$10,000</span>
                  </div>
                  <div className="text-right">
                    <div className="text-sm text-green-300 font-medium">You Save</div>
                    <div className="text-lg font-bold text-green-300">$2,000</div>
                  </div>
                </div>

                <div className="flex items-center gap-3 mb-4">
                  <div className="flex items-center gap-1 text-sm text-white/80">
                    <span>🚚</span>
                    <span>Free delivery</span>
                  </div>
                  <div className="flex items-center gap-1 text-sm text-white/80">
                    <span>🔒</span>
                    <span>Quality guarantee</span>
                  </div>
                </div>

                <button className="w-full bg-gradient-to-r from-[#8DC8D0] to-[#4397A4] hover:from-[#4397A4] hover:to-[#8DC8D0] text-white py-3 rounded-lg font-bold transition-all duration-300 transform hover:scale-105 shadow-lg flex items-center justify-center gap-2">
                  Order Materials
                  <span className="text-lg">→</span>
                </button>
              </div>
            </div>
            <div className="group relative overflow-hidden rounded-2xl shadow-xl w-[30%] hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
              <div className="relative">
                <Image
                  src="/img4.png"
                  width={356}
                  height={103}
                  alt="Project Management Special Offer"
                  className="w-full h-auto transition-transform duration-500 group-hover:scale-110"
                />
                
                {/* Enhanced Discount Badge */}
                <div className="absolute top-4 right-4">
                  <div className="bg-gradient-to-r from-blue-500 to-blue-600 text-white px-4 py-2 rounded-full shadow-lg transform rotate-6">
                    <span className="text-sm font-black">-15%</span>
                  </div>
                </div>

                {/* New Service Badge */}
                <div className="absolute top-4 left-4">
                  <div className="bg-purple-500 text-white px-3 py-1 rounded-full text-xs font-bold">
                    🆕 NEW
                  </div>
                </div>
              </div>

              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div>
              
              <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                <h3 className="font-kanit text-2xl font-bold mb-3">
                  Project Management
                </h3>
                <p className="text-white/90 font-sans text-sm mb-4 leading-relaxed">
                  Expert project supervision and management services ensuring quality and timely completion
                </p>
                
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-3">
                    <span className="text-3xl font-black text-[#4397A4]">$4,250</span>
                    <span className="text-lg text-white/70 line-through">$5,000</span>
                  </div>
                  <div className="text-right">
                    <div className="text-sm text-green-300 font-medium">You Save</div>
                    <div className="text-lg font-bold text-green-300">$750</div>
                  </div>
                </div>

                <div className="flex items-center gap-3 mb-4">
                  <div className="flex items-center gap-1 text-sm text-white/80">
                    <span>👨‍💼</span>
                    <span>Expert team</span>
                  </div>
                  <div className="flex items-center gap-1 text-sm text-white/80">
                    <span>📊</span>
                    <span>Daily reports</span>
                  </div>
                </div>

                <button className="w-full bg-gradient-to-r from-[#4397A4] to-[#5BCCDE] hover:from-[#5BCCDE] hover:to-[#4397A4] text-white py-3 rounded-lg font-bold transition-all duration-300 transform hover:scale-105 shadow-lg flex items-center justify-center gap-2">
                  Start Project
                  <span className="text-lg">→</span>
                </button>
              </div>
            </div>
        </div>

        
    
      </section>

      <section id="services" className="mt-[100px] max-w-[1180px] mx-auto px-4">
        <p className="text-center text-Black_1100 font-kanit font-medium text-sm">
          Our Works
        </p>
        <h2 className="text-Heading_01 font-kanit font-semibold text-[28px] sm:text-[40px] lg:text-[55px] text-center mt-[-10px]">
          Our Special Projects
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mt-10">
          {/* Big Image (takes 2 rows on lg only) */}
          <div className="lg:row-span-2">
            <Image
              src="/img5.png"
              alt="logo"
              width={850}
              height={600}
              className="w-full h-[250px] sm:h-[300px] lg:h-[96%] object-cover rounded"
            />
          </div>

          <div>
            <Image
              src="/img7.png"
              alt="logo"
              width={850}
              height={600}
              className="w-full h-[250px] sm:h-[300px] lg:h-[290px] object-cover rounded"
            />
          </div>

          <div>
            <Image
              src="/img8.png"
              alt="logo"
              width={850}
              height={600}
              className="w-full h-[250px] sm:h-[300px] lg:h-[290px] object-cover rounded"
            />
          </div>

          <div className="lg:col-start-2">
            <Image
              src="/img9.png"
              alt="logo"
              width={850}
              height={600}
              className="w-full h-[250px] sm:h-[300px] lg:h-[290px] object-cover rounded"
            />
          </div>

          <div>
            <Image
              src="/img10.png"
              alt="logo"
              width={850}
              height={600}
              className="w-full h-[250px] sm:h-[300px] lg:h-[290px] object-cover rounded"
            />
          </div>

          {/* Keep the empty block only for desktop to align */}
          <div className="hidden lg:block lg:col-start-3"></div>
        </div>
      </section>

        {/* Call to Action */}
        <div className="max-w-[1200px] mx-auto text-center mt-12 px-4">
          <div className="bg-gradient-to-r from-[#4397A4] to-[#5BCCDE] p-8 rounded-2xl text-white">
            <h3 className="font-kanit text-2xl sm:text-3xl font-semibold mb-4">
              Ready to Start Your Project?
            </h3>
            <p className="text-lg mb-6 max-w-2xl mx-auto">
              Contact us today to discuss your construction needs and take advantage of these special offers
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="#contact" className="bg-white text-[#4397A4] hover:bg-gray-100 px-8 py-3 rounded-lg font-semibold transition-colors">
                Get Free Quote
              </a>
              <a href="tel:+923359448216" className="border-2 border-white text-white hover:bg-white hover:text-[#4397A4] px-8 py-3 rounded-lg font-semibold transition-colors">
                Call Now
              </a>
            </div>
          </div>
        </div>

      <section id="contact" className="mt-[100px] mb-[50px]">
        <div>
          <Image
            src="/map.png"
            width={2020}
            height={1103}
            alt="logo"
            className="w-full h-auto object-cover"
          />

          {/* Container */}
          <div className="max-w-[1319px] mx-auto flex flex-col xl:flex-row gap-8 xl:gap-[58px] px-4 sm:px-6 lg:px-8 xl:px-0">
            {/* Address Card */}
            <div className="max-w-[480px] py-10 sm:py-16 px-6 sm:px-12 bg-white mt-[-60px] sm:mt-[-100px] shadow-2xl border-t-[7px] border-blue_1100">
              <p className="text-Black_1100 font-kanit text-sm font-light">
                Company Address
              </p>
              <h3 className="text-Heading_01 font-kanit font-medium text-[22px] sm:text-[28px] xl:text-[34px] leading-[28px] sm:leading-[34px] mt-3 sm:mt-4">
                Near Al-Syed Petroleum, Chakwal Road, Talagang
              </h3>
            </div>

            {/* Contact Info */}
            <div className="mt-6 xl:mt-[45px] flex flex-col sm:flex-row gap-8 sm:gap-10">
              {/* Phones */}
              <div className="flex gap-4 items-start sm:items-center">
                <div className="bg-blue_1100 w-14 h-14 sm:w-16 sm:h-16 flex justify-center items-center">
                  {/* phone icon */}
                  <svg
                    width="32"
                    height="32"
                    viewBox="0 0 42 42"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M35.6989 25.7565L40.9203 30.9777C42.3599 32.4172 42.3599 34.7594 40.9203 36.1989L39.0216 38.0975C33.8178 43.301 25.3961 43.3006 20.1928 38.0975L3.89316 21.79C-1.29776 16.5993 -1.29776 8.15309 3.89341 2.96223L5.79596 1.07625C7.23165 -0.359379 9.57399 -0.359379 11.0135 1.08002L16.2336 6.28343C17.6882 7.73785 17.6682 10.0729 16.235 11.506L13.8616 13.8792C12.7683 14.9724 12.7685 16.7416 13.8616 17.8347L24.1488 28.1302C25.239 29.22 27.0135 29.2203 28.1041 28.1298L30.4775 25.7565C31.9169 24.3171 34.2594 24.3171 35.6989 25.7565Z"
                      fill="white"
                    />
                  </svg>
                </div>
                <div>
                  <p className="text-Black_1100 font-kanit text-sm font-light">
                    Company Phones
                  </p>
                  <p className="text-blue_1200 font-kanit text-lg sm:text-[22px]">
                    +92 335 9448216
                  </p>
                  <p className="text-blue_1200 font-kanit text-lg sm:text-[22px]">
                    +92 335 9448216
                  </p>
                </div>
              </div>

              {/* Emails */}
              <div className="flex gap-4 items-start sm:items-center">
                <div className="bg-blue_1100 w-14 h-14 sm:w-16 sm:h-16 flex justify-center items-center">
                  {/* email icon */}
                  <svg
                    width="32"
                    height="32"
                    viewBox="0 0 45 42"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M0 19.6875C0 8.92001 9.89692 0 22.4121 0C34.9551 0 45 8.94014 45 19.6875C45 30.4288 34.962 39.375 22.4121 39.375C19.5045 39.375 16.6874 38.8964 14.0251 37.9513C11.333 40.5344 7.71187 42 3.95508 42C2.7813 42 2.19604 40.5826 3.02291 39.7594C5.00071 37.7904 5.79779 34.9345 5.14125 32.2393C1.82312 28.7184 0 24.2744 0 19.6875Z"
                      fill="white"
                    />
                  </svg>
                </div>
                <div>
                  <p className="text-Black_1100 font-kanit text-sm font-light">
                    Emails
                  </p>
                  <p className="text-blue_1200 font-kanit text-lg sm:text-[22px] mt-1 sm:mt-3">
                    umarenterprises1302@gmail.com
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
