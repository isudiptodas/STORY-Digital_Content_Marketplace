'use client'

import SellerNavbar from "@/components/SellerNavbar"
import axios from "axios"
import { usePathname, useRouter } from "next/navigation"
import { useEffect, useState } from "react"

function page() {

  const pathname = usePathname();
  const router = useRouter();

  useEffect(() => {
    const verify = async () => {
      try {
        const res = await axios.get(`/api/seller/auth`, {
          withCredentials: true
        });

        //console.log(res.data.data);
        if (res.status !== 200) {
          router.push('/denied');
        }
      } catch (err) {
        console.log(err);
      }
    }

    verify();
  }, []);
  
  return (
    <>
      <div className={`w-full flex flex-col justify-start items-center relative overflow-hidden`}>
        <SellerNavbar pathname={pathname} />
      </div>
    </>
  )
}

export default page
