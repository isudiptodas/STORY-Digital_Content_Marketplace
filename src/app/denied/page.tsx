'use client'

import Link from "next/link"

function page() {
  return (
    <>
    <div className={`w-full h-screen bg-[#101010] px-10 flex flex-col justify-center items-center relative`}>
        <h1 className={`text-xl text-white text-center font-light font-Kanit`}>Looks like you don't have permission for this page</h1>
        <Link href='/seller/auth' className={`w-auto px-5 py-2 rounded-full bg-gradient-to-r from-blue-300 to-blue-700 text-white font-light font-Kanit mt-5 cursor-pointer hover:bg-gradient-to-r hover:from-blue-500 hover:to-blue-900 duration-200 ease-in-out`}>Back to seller login</Link>
        <Link href='/customer/auth' className={`w-auto px-5 py-2 rounded-full bg-gradient-to-r from-yellow-300 to-yellow-700 text-white font-light font-Kanit mt-5 cursor-pointer hover:bg-gradient-to-r hover:from-yellow-500 hover:to-yellow-700 duration-200 ease-in-out`}>Back to customer login</Link>
        
        <h1 className={`w-full text-center font-Italiana text-8xl xl:text-[140px] mt-20 text-zinc-500`}>STORY</h1>
    </div> 
    </>
  )
}

export default page
