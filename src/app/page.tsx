'use client'
import { IoIosRocket } from "react-icons/io";
import { MdOutlineKeyboardDoubleArrowRight } from "react-icons/md";
import { MdSell } from "react-icons/md";
import { IoBagCheck } from "react-icons/io5";
import { faq } from "@/data/accordianFAQ";
import { FaChevronDown } from "react-icons/fa";
import {Collapse} from 'react-collapse';
import { useState } from "react";
import Link from "next/link";

function page() {

  const[current, setCurrent] = useState(0);
  return (
    <>
      <div className={`w-full h-auto flex flex-col justify-start items-center overflow-hidden`}>

        {/* navbar */}
        <div className={`w-full py-4 sm:py-7 lg:px-7 xl:px-10 flex justify-center items-center gap-2 lg:justify-between`}>
          <p className={`font-Italiana text-xl sm:text-3xl lg:hidden`}>STORY</p>
          <img src="/assets/logo.png" className={`lg:hidden h-5 sm:h-7 hover:rotate-180 duration-200 ease-in-out cursor-pointer`} />

          <div className={`w-auto hidden lg:flex justify-center items-center gap-2`}>
            <p className={`font-Italiana text-3xl`}>STORY</p>
            <img src="/assets/logo.png" className={`h-7 hover:rotate-180 duration-200 ease-in-out cursor-pointer`} />
          </div>

          <div className={`w-auto lg:flex justify-center items-center gap-7 hidden`}>
            <p className={`font-Kanit text-xl cursor-pointer`}>About</p>
            <p className={`font-Kanit text-xl cursor-pointer`}>Usage</p>
            <p className={`font-Kanit text-xl cursor-pointer`}>Privacy Policy</p>
            <p className={`font-Kanit text-xl cursor-pointer`}>Contact</p>
          </div>
        </div>

        {/* hero section */}
        <div className={`w-full px-5 flex flex-col justify-start items-center`}>
          <div className={`w-full relative rounded-xl overflow-hidden h-[50vh] md:h-[70vh]`}>
            <img src="/assets/hero.jpg" className="w-full h-full object-cover" />
            <div className={`absolute z-20 top-1/2 -translate-y-1/2 w-full flex flex-col justify-center items-center gap-2`}>
              <div className={`w-full flex flex-col md:flex-row justify-center items-center gap-3`}>
                <h1 className={`font-Koulen text-white font-bold text-6xl md:text-7xl lg:text-8xl xl:text-[100px]`}>DIGITAL</h1>
                <h1 className={`font-Koulen text-white font-bold text-6xl md:text-7xl lg:text-8xl xl:text-[100px]`}>MARKETPLACE</h1>
              </div>
              <h1 className={`font-Kanit text-white text-lg md:text-xl lg:text-2xl text-center`}>Bring the most out of your digital content</h1>
              <Link href='/customer/dashboard' className={`group px-8 relative py-3 flex justify-center items-center gap-2 rounded-full bg-white my-2 cursor-pointer`}><span className={` font-bold font-Kanit bg-gradient-to-br from-[#e750cb] to-[#2ebde1] bg-clip-text text-transparent`}>EXPLORE</span><span><IoIosRocket className="absolute top-1/2 -translate-y-1/2 right-10 group-hover:right-4 group-hover:opacity-100 opacity-0 duration-300 transition-all ease-in-out"/></span></Link>
            </div>
          </div>

          <div className={`mt-5 md:mt-8 w-full flex flex-col justify-center items-center gap-4 md:flex-row md:justify-between md:items-center`}>
              <div className={`w-full hover:bg-[#1b1b1b] duration-200 ease-in-out cursor-pointer bg-black rounded-2xl flex flex-col justify-center items-center relative py-2 px-2`}>
                  <div className={`w-full rounded-xl h-20 md:h-28 flex justify-start items-center px-4 bg-gradient-to-r from-[#0084FF] to-[#002375]`}>
                      <h1 className={`font-Kanit font-semibold text-3xl lg:text-5xl text-white flex justify-center items-center gap-3 lg:gap-6`}>I want to sell <MdSell className="text-xl lg:text-3xl"/></h1>
                  </div>
                  <Link href='/seller/auth' className={`w-full cursor-pointer text-start text-white font-Kanit text-sm sm:text-lg lg:text-xl py-4 px-2 flex justify-start items-center gap-2 hover:gap-7 duration-200 ease-in-out`}>Continue as seller <MdOutlineKeyboardDoubleArrowRight className="text-lg lg:text-2xl"/></Link>
              </div>

              <div className={`w-full hover:bg-[#1b1b1b] duration-200 ease-in-out cursor-pointer bg-black rounded-2xl flex flex-col justify-center items-center relative py-2 px-2`}>
                  <div className={`w-full rounded-xl h-20 md:h-28 flex justify-start items-center px-4 bg-gradient-to-r from-[#FFAA00] to-[#9D7800]`}>
                      <h1 className={`font-Kanit font-semibold text-3xl lg:text-5xl text-white flex justify-center items-center gap-3 lg:gap-6`}>I want to buy <IoBagCheck  className="text-xl lg:text-3xl"/></h1>
                  </div>
                  <Link href='/customer/auth' className={`w-full cursor-pointer text-start text-white font-Kanit text-sm sm:text-lg lg:text-xl py-4 px-2 flex justify-start items-center gap-2 hover:gap-7 duration-200 ease-in-out`}>Continue as customer <MdOutlineKeyboardDoubleArrowRight className="text-lg lg:text-2xl"/></Link>
              </div>
          </div>
        </div>

        {/* middle section */}
        <div className={`w-full mt-7 flex flex-col justify-center items-center relative`}>
            <img src="/assets/books.png" className={`h-[40vh] z-10 sm:h-[60vh]`} />
            <div className={`w-full h-full bg-transparent absolute top-0 right-0 z-20`}></div>
            <p className={`w-full md:w-[70%] px-7 sm:px-10 text-[10px] sm:text-[14px] lg:text-lg mb-5 font-Kanit text-center`}>Story is a digital marketplace where anyone can buy or sell digital assets — from eBooks, PDFs, and design templates to ID cards, email kits, HD images, and more. Whether it's a zip file, social media post, or any digital content, this platform makes it easy to share, showcase, and monetize your digital identity. Think of it as the digital-age version of a creative shop.</p>
        </div>

        <div className={`w-full px-5 flex flex-col justify-center items-center gap-3 mt-5 mb-5`}>
          <div className={`w-full rounded-full h-14 bg-gradient-to-r from-[#B668A9] to-white`}></div>
          <div className={`w-full rounded-full h-10 bg-gradient-to-l from-[#0084FF] via-[#c4e3ff] to-white`}></div>
        </div>

        <div className={`w-full mt-5 px-5 flex flex-col justify-start items-start gap-3 md:flex-row md:justify-evenly md:items-center`}>
          <h1 className={`w-full md:w-auto text-black font-Koulen text-8xl text-shadow-lg lg:text-9xl`}>FAST</h1>
          <h1 className={`w-full md:w-auto text-black font-Koulen text-8xl text-shadow-lg lg:text-9xl`}>FLEXIBLE</h1>
          <h1 className={`w-full md:w-auto text-black font-Koulen text-8xl text-shadow-lg lg:text-9xl`}>FREE</h1>
        </div>

        <div className={`w-full overflow-hidden mt-10 pt-5 mb-5 pb-5 flex flex-col justify-start items-center gap-5 relative`}>
          {faq.length > 0 && faq.map((data, index) => {
           const open = current === index+1
              return <div className={`w-[90%] z-30 md:w-[60%] bg-[#212121] rounded-lg shadow-lg py-3 px-3 flex flex-col justify-start items-center`} key={index} onClick={() => setCurrent(data.id)}>
                <div className={`w-full ${open ? "bg-gradient-to-r from-[#f533d2] to-[#009cc3] py-3" : "bg-transparent"} rounded-lg duration-200 ease-in-out transition-all cursor-pointer flex justify-between items-center px-5`}>
                    <p className={`font-Kanit rounded-lg  text-[10px] sm:text-sm md:text-lg text-white`}>{data.title}</p>
                    <span className={`text-white`}><FaChevronDown className={`${open ? "rotate-180" : "rotate-0"} duration-200 ease-in-out`}/></span>
                </div>
                <Collapse isOpened={open}>
                <p className={`w-full text-start text-white border-t-[1px] border-gray-400 text-[10px] sm:text-sm px-4 py-3 mt-3 font-Kanit`}>{data.desc}</p>
                </Collapse>
              </div>
          })}
        </div>

        {/* mobile footer */}
        <div className={`md:hidden w-full flex flex-col justify-start items-center rounded-t-2xl py-5 px-3 bg-[#181818]`}>
            <img src="/assets/logo.png" className={`h-7 invert`} />
            <hr className={`w-[80%] h-[1px] bg-gray-500 mt-5 mb-5`}/>

            <p className={`w-full text-center font-Kanit text-white text-sm cursor-pointer mb-3`}>About</p>
            <p className={`w-full text-center font-Kanit text-white text-sm cursor-pointer mb-3`}>Usage</p>
            <p className={`w-full text-center font-Kanit text-white text-sm cursor-pointer mb-3`}>Privacy Policy</p>
            <p className={`w-full text-center font-Kanit text-white text-sm cursor-pointer mb-3`}>Contact</p>

            <p className={`w-full text-center opacity-30 mt-5 text-white font-Italiana text-8xl sm:text-9xl`}>STORY</p>
        </div>

        <div className={`hidden md:flex justify-center items-center mt-5`}>
          <p className={`w-full text-[200px] font-Italiana text-gray-300`}>STORY</p>
        </div>


      </div>
    </>
  )
}

export default page
