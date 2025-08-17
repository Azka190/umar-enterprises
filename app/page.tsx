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
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl leading-tight lg:leading-[60px] text-Heading_01 font-kanit font-bold">
              Development company
            </h1>
            <p className="text-base sm:text-lg md:text-xl lg:text-[22px] text-Main_pallete_04 font-kanit mt-4">
              Forward-thinking real estate developer, owner and investor with a
              reputation
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
                  147
                </h1>
                <p className="text-[#EBECEE] font-kanit text-lg sm:text-[22px] -mt-6 sm:mt-[-40px] text-center sm:text-left">
                  Completed Projects
                </p>
              </div>
            </div>

            <div className="bg-[#4397A4] w-[290px] h-[235px] flex flex-col justify-center items-center">
              <div>
                <h1 className="font-kanit text-[70px] sm:text-[100px] font-semibold text-white -mt-8 sm:mt-[-50px]">
                  25+
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
              {/* Item 1 */}
              <div className="flex items-start sm:items-center gap-4 sm:gap-5">
                <Image src="/engineer.svg" width={50} height={50} alt="img" />
                <div>
                  <h3 className="text-[#486A6F] font-sans text-base sm:text-lg font-bold">
                    General Contract
                  </h3>
                  <p className="text-[#41444B] font-sans text-sm sm:text-base mt-1">
                    Quisque condimentum erat ac orci blandit, in sollicitudin
                    tellus vestibulum
                  </p>
                </div>
              </div>

              {/* Item 2 */}
              <div className="flex items-start sm:items-center gap-4 sm:gap-5 mt-6">
                <Image src="/ruler.svg" width={50} height={50} alt="img" />
                <div>
                  <h3 className="text-[#486A6F] font-sans text-base sm:text-lg font-bold">
                    Project Planning
                  </h3>
                  <p className="text-[#41444B] font-sans text-sm sm:text-base mt-1">
                    Nullam commodo tincidunt nisl, nec vehicula dui interdum nec
                  </p>
                </div>
              </div>

              {/* Item 3 */}
              <div className="flex items-start sm:items-center gap-4 sm:gap-5 mt-6">
                <Image src="/shape.svg" width={50} height={50} alt="img" />
                <div>
                  <h3 className="text-[#486A6F] font-sans text-base sm:text-lg font-bold">
                    Refurbishment
                  </h3>
                  <p className="text-[#41444B] font-sans text-sm sm:text-base mt-1">
                    Sed vitae aliquet ipsum, ut ornare lectus. Proin sed sem
                    risus. Sed nunc
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
              With our knowledge we guarente success
            </h3>
            <p className="text-[#00215B] font-sans font-bold text-sm sm:text-[15px] mt-4">
              Fusce id hendrerit lectus. Morbi vitae tortor sed turpis feugiat
              congue
            </p>
            <p className="font-sans text-sm sm:text-[15px] text-[#41444B] mt-5 sm:mt-7">
              Cras tincidunt tellus at mi tristique rhoncus. Etiam dapibus
              rutrum leo consectetur accumsan. Vivamus viverra ante turpis,
              dignissim condimentum elit egestas sit amet. Phasellus faucibus
              pellentesque
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

      <section id="projects" className="mt-16 px-4 sm:px-6 lg:px-0">
        <div className="flex flex-col lg:flex-row w-full">
          {/* Left Big Image */}
          <div className="w-full lg:w-[850px]">
            <Image
              src="/img1.png"
              width={850}
              height={600}
              alt="logo"
              className="w-full h-[100%]"
            />
          </div>

          {/* Right Cards */}
          <div className="flex flex-col sm:flex-row lg:flex-row flex-wrap lg:flex-nowrap w-full lg:ml-6">
            {/* Card 1 */}
            <div className="relative w-full sm:w-1/2 lg:w-[356px] mt-6 lg:mt-0">
              <Image
                src="/img2.png"
                width={356}
                height={203}
                alt="logo"
                className="w-full h-auto"
              />
              <div className="absolute top-6 sm:top-10 left-5 sm:left-9 pr-4">
                <h3 className="text-Heading_01 font-kanit text-2xl sm:text-[28px] md:text-[34px] lg:text-[40px] font-semibold leading-tight sm:leading-[40px]">
                  Research & Analysis
                </h3>
                <p className="text-[#41444B] font-sans text-sm sm:text-base md:text-[17px] font-medium mt-4 sm:mt-6">
                  Nullam tincidunt libero eu augue eleifend, vitae condimentum
                  lacus
                </p>
              </div>
              <div className="absolute bottom-4 sm:bottom-6 right-6 sm:right-10 bg-[#4397A4] w-[45px] h-[45px] sm:w-[55px] sm:h-[55px] flex justify-center items-center rounded-[5px]">
                <Image src="/arrow.svg" width={25} height={25} alt="logo" />
              </div>
            </div>

            {/* Card 2 */}
            <div className="relative w-full sm:w-1/2 lg:w-[356px] mt-6 lg:mt-0">
              <Image
                src="/img3.png"
                width={356}
                height={103}
                alt="logo"
                className="w-full h-auto"
              />
              <div className="absolute top-6 sm:top-10 left-5 sm:left-9 pr-4">
                <h3 className="text-white font-kanit text-2xl sm:text-[28px] md:text-[34px] lg:text-[40px] font-semibold leading-tight sm:leading-[40px]">
                  Industry Development
                </h3>
                <p className="text-white font-sans text-sm sm:text-base md:text-[17px] font-medium mt-4 sm:mt-6">
                  Fusce id hendrerit lectus. Morbi vitae tortor sed turpis
                  feugiat
                </p>
              </div>
              <div className="absolute bottom-4 sm:bottom-6 right-6 sm:right-10 bg-[#8DC8D0] w-[45px] h-[45px] sm:w-[55px] sm:h-[55px] flex justify-center items-center rounded-[5px]">
                <Image src="/arrow.svg" width={25} height={25} alt="logo" />
              </div>
            </div>

            {/* Card 3 */}
            <div className="relative w-full sm:w-full lg:w-[356px] mt-6 lg:mt-0">
              <Image
                src="/img4.png"
                width={356}
                height={103}
                alt="logo"
                className="w-full h-auto"
              />
              <div className="absolute top-6 sm:top-10 left-5 sm:left-9 pr-4">
                <h3 className="text-Heading_01 font-kanit text-2xl sm:text-[28px] md:text-[34px] lg:text-[40px] font-semibold leading-tight sm:leading-[40px]">
                  Production Launch
                </h3>
                <p className="text-[#41444B] font-sans text-sm sm:text-base md:text-[17px] font-medium mt-4 sm:mt-6">
                  Nullam tincidunt libero eu augue eleifend, vitae condimentum
                  lacus
                </p>
              </div>
              <div className="absolute bottom-4 sm:bottom-6 right-6 sm:right-10 bg-[#4397A4] w-[45px] h-[45px] sm:w-[55px] sm:h-[55px] flex justify-center items-center rounded-[5px]">
                <Image src="/arrow.svg" width={25} height={25} alt="logo" />
              </div>
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
          <div className="max-w-[1156px] mx-auto flex flex-col xl:flex-row gap-8 xl:gap-[58px] px-4 sm:px-6 lg:px-8 xl:px-0">
            {/* Address Card */}
            <div className="max-w-[480px] py-10 sm:py-16 px-6 sm:px-12 bg-white mt-[-60px] sm:mt-[-100px] shadow-2xl border-t-[7px] border-blue_1100">
              <p className="text-Black_1100 font-kanit text-sm font-light">
                Company Address
              </p>
              <h3 className="text-Heading_01 font-kanit font-medium text-[22px] sm:text-[28px] xl:text-[34px] leading-[28px] sm:leading-[34px] mt-3 sm:mt-4">
                Themeforest, Envato HQ 24 Fifth st., Los Angeles, USA
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
                    + 1 234 5678 098
                  </p>
                  <p className="text-blue_1200 font-kanit text-lg sm:text-[22px]">
                    + 1 634 7638 654
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
                    Dustro Emails
                  </p>
                  <p className="text-blue_1200 font-kanit text-lg sm:text-[22px] mt-1 sm:mt-3">
                    dustro@gmail.com
                  </p>
                  <p className="text-blue_1200 font-kanit text-lg sm:text-[22px]">
                    dustro.info@gmail.com
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
