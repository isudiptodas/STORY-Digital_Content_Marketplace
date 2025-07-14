'use client'

import SellerNavbar from "@/components/SellerNavbar"
import axios from "axios"
import { usePathname } from "next/navigation"
import { useEffect, useState } from "react"
import { toast } from "sonner"

function page() {

  const pathname = usePathname();
  return (
    <>
      <div className={`w-full flex flex-col justify-start items-center relative overflow-hidden`}>
        <SellerNavbar pathname={pathname} />
      </div>
    </>
  )
}

export default page
