'use client'

import CustomerNavbar from "@/components/CustomerNavbar"
import { usePathname } from "next/navigation"
import { useEffect, useState } from "react"
import { IoMdSearch } from "react-icons/io";
import { ImFilter } from "react-icons/im";
import { FaShoppingCart } from "react-icons/fa";
import { MdCloseFullscreen } from "react-icons/md";
import { contentCategory } from "@/data/contentCategory";

function page() {

    const pathname = usePathname();
    const [index, setIndex] = useState(0);
    const [filterVisible, setFilterVisible] = useState(false);
    const [searchVisible, setSearchVisible] = useState(false);

    const placeholders = [
        'Email template',
        'Canva template',
        'Ebook',
        'Farewell poster',
        'Illustration',
        'Powerpoint presentations',
    ];

    const filterOptions = [
        'price (low to high)',
        'price (high to low)',
        'rating (low to high)',
        'rating (high to low)',
    ]

    useEffect(() => {
        const interval = setInterval(() => {
            setTimeout(() => {
                setIndex((prev) => (prev + 1) % placeholders.length);
            }, 500);
        }, 5000);

        return () => clearInterval(interval);
    }, []);

    return (
        <>
            <div className={`w-full h-auto flex flex-col justify-start items-center relative overflow-hidden`}>
                <CustomerNavbar pathname={pathname} />

                <div className={`w-full md:mt-4 h-auto px-4 flex justify-between items-center gap-3 py-5 relative`}>
                    <p onClick={() => setSearchVisible(!searchVisible)} className={`w-full md:hidden flex justify-center items-center gap-2 px-4 py-2 rounded-full bg-black text-white font-Kanit font-light cursor-pointer`}>Search <IoMdSearch /></p>
                    <div className={`w-full hidden md:flex justify-center items-center relative`}>
                        <input type="text" className={`w-full py-3 px-5 pr-10 rounded-full bg-gray-200 text-black placeholder-zinc-400 font-Kanit outline-none`} placeholder={placeholders[index]} />
                        <span className={`absolute top-1/2 -translate-y-1/2 right-2 px-4 py-1 rounded-full bg-blue-600 text-white cursor-pointer flex justify-center items-center gap-2`}>Search <IoMdSearch /></span>
                    </div>
                    <p className={`w-full md:w-[20%] flex justify-center items-center gap-2 px-4 py-2 md:py-3 rounded-full bg-black text-white font-Kanit font-light cursor-pointer`}>Cart <FaShoppingCart /></p>
                    <p onClick={() => setFilterVisible(!filterVisible)} className={`w-full active:scale-95 duration-150 ease-in-out md:w-[20%] flex justify-center items-center gap-2 px-4 py-2 md:py-3 rounded-full bg-black text-white font-Kanit font-light cursor-pointer`}>Filter <ImFilter /></p>

                    {/* filter options */}
                    <div className={`w-auto ${filterVisible ? "block" : "hidden"} fixed top-36 sm:top-40 md:top-48 right-5 rounded-lg bg-white capitalize shadow-2xl p-1 flex flex-col justify-start items-start z-40`}>
                        {filterOptions.map((filter, index) => {
                            return <span key={index} className={`w-full text-start px-3 py-2 rounded-lg cursor-pointer hover:bg-gray-100 duration-150 ease-in-out`}>{filter}</span>
                        })}
                    </div>
                </div>

                {/* mobile search */}
                <div className={`w-full md:hidden ${searchVisible ? "opacity-100 scale-100" : "opacity-0 scale-0"} px-5 duration-200 ease-in-out transition-all h-screen backdrop-blur-3xl bg-black/60 flex flex-col justify-start items-center pt-20 fixed z-60`}>

                    <span onClick={() => setSearchVisible(!searchVisible)} className={`absolute top-5 right-5 text-white text-xl`}><MdCloseFullscreen /></span>

                    <div className={`w-full rounded-lg flex flex-col justify-start items-center py-4 px-3`}>
                        <input type="text" placeholder="Enter search term" className={`w-full rounded-full py-3 px-3 outline-none font-Kanit bg-gray-200 placeholder-gray-400 text-black`} />
                        <p className={`w-full py-2 text-center text-white mt-3 rounded-full bg-gradient-to-r from-blue-400 to-blue-600 flex justify-center items-center gap-3 cursor-pointer`}>Search <IoMdSearch /></p>
                    </div>
                </div>

                <div className="w-[90%] relative px-4 py-2 overflow-hidden">
                    <div className="absolute h-full w-[10%] bg-gradient-to-r from-white to-transparent z-20 left-0 top-0 pointer-events-none" />

                    <div className="overflow-x-auto flex justify-start items-start gap-3 md:gap-5 pr-4 scroll-smooth">
                        {contentCategory.map((content, index) => (
                            <div
                                key={index}
                                className="w-auto capitalize cursor-pointer shrink-0 font-Kanit px-3 py-2 rounded-lg bg-gray-200 hover:bg-black hover:text-white duration-200 ease-in-out text-black text-sm md:text-lg"
                            >
                                {content}
                            </div>
                        ))}
                    </div>

                    <div className="absolute h-full w-[10%] bg-gradient-to-l from-white to-transparent z-20 right-0 top-0 pointer-events-none" />
                </div>


            </div>
        </>
    )
}

export default page
