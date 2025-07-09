'use client'
import Link from "next/link";
import { useState } from "react";
import { GoPlus } from "react-icons/go";

function CustomerNavbar({ pathname }: { pathname: string }) {

    const [visible, setVisible] = useState(false);
    return (
        <>
            <div className={`w-full z-50 flex justify-center items-center lg:justify-between lg:px-8 py-4 sm:py-6 relative`}>
                <div className={`w-full md:w-auto flex justify-center items-center gap-2`}>
                    <h1 className={`text-2xl sm:text-4xl font-Italiana`}>STORY</h1>
                    <img src="/assets/logo.png" className="h-7 hover:rotate-180 duration-200 ease-in-out cursor-pointer" />
                </div>
                <span onClick={() => setVisible(!visible)} className={`text-2xl sm:text-3xl lg:hidden cursor-pointer absolute top-1/2 right-5 -translate-y-1/2 ${visible ? "rotate-45" : "rotate-0"} duration-200 ease-in-out z-30`}><GoPlus /></span>

                <div className={`fixed ${visible ? "translate-y-0" : "-translate-y-full"} rounded-b-2xl duration-300 ease-in-out top-0 w-full lg:hidden pt-16 bg-white pb-8 pl-5 shadow-xl z-20 flex flex-col justify-start items-start gap-3 sm:gap-6`}>
                    <Link href='/customer/dashboard' className={`text-3xl font-light font-Kanit ${pathname === '/customer/dashboard' ? "text-blue-600" : "text-black"}`}>Home</Link>
                    <Link href='/about' className={`text-3xl font-light font-Kanit ${pathname === '/about' ? "text-blue-600" : "text-black"}`}>About</Link>
                    <Link href='/usage' className={`text-3xl font-light font-Kanit ${pathname === '/usage' ? "text-blue-600" : "text-black"}`}>Usage</Link>
                    <Link href='/privacy' className={`text-3xl font-light font-Kanit ${pathname === '/privacy' ? "text-blue-600" : "text-black"}`}>Privacy</Link>
                    <Link href='/customer/wishlist' className={`text-3xl font-light font-Kanit ${pathname === '/customer/wishlist' ? "text-blue-600" : "text-black"}`}>Wishlist</Link>
                    <Link href='/customer/settings' className={`text-3xl font-light font-Kanit ${pathname === '/customer/settings' ? "text-blue-600" : "text-black"}`}>Settings</Link>
                </div>

                <div className={`w-auto lg:flex px-2 h-full justify-center items-center gap-5 hidden`}>
                    <Link href='/customer/dashboard' className={`text-2xl font-light font-Kanit cursor-pointer ${pathname === '/customer/dashboard' ? "text-blue-600" : "text-black"} hover:scale-90 duration-200 ease-in-out`}>Home</Link>
                    <Link href='/about' className={`text-2xl font-light font-Kanit cursor-pointer ${pathname === '/about' ? "text-blue-600" : "text-black"} hover:scale-90 duration-200 ease-in-out`}>About</Link>
                    <Link href='/usage' className={`text-2xl font-light font-Kanit cursor-pointer ${pathname === '/usage' ? "text-blue-600" : "text-black"} hover:scale-90 duration-200 ease-in-out`}>Usage</Link>
                    <Link href='/privacy' className={`text-2xl font-light font-Kanit cursor-pointer ${pathname === '/privacy' ? "text-blue-600" : "text-black"} hover:scale-90 duration-200 ease-in-out`}>Privacy</Link>
                    <Link href='/customer/wishlist' className={`text-2xl font-light font-Kanit cursor-pointer ${pathname === '/customer/wishlist' ? "text-blue-600" : "text-black"} hover:scale-90 duration-200 ease-in-out`}>Wishlist</Link>
                    <Link href='/customer/settings' className={`text-2xl font-light font-Kanit cursor-pointer ${pathname === '/customer/settings' ? "text-blue-600" : "text-black"} hover:scale-90 duration-200 ease-in-out`}>Settings</Link>
                </div>
            </div>
        </>
    )
}

export default CustomerNavbar
