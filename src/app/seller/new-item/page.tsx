'use client'

import SellerNavbar from "@/components/SellerNavbar"
import axios from "axios";
import { usePathname, useRouter } from "next/navigation"
import { useEffect, useState } from "react"
import { IoCloudUploadOutline } from "react-icons/io5";
import { IoMdArrowDropdown } from "react-icons/io";
import { contentCategory } from "@/data/contentCategory";
import { toast } from "sonner";

function page() {

  const pathname = usePathname();
  const [name, setName] = useState('');
  const [desc, setDesc] = useState('');
  const [price, setPrice] = useState(0);
  const [visible, setVisible] = useState(false);
  const [category, setCategory] = useState('select');
  const [image, setImage] = useState<File | null>(null);
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

  const addProduct = async () => {
    if(!name || !desc || !price){
      toast.error("All fields are required");
      return;
    }

    if(category === 'category'){
      toast.error("Please select category");
      return;
    }

    try {
      
    } catch (err) {
      
    }
  }

  return (
    <>
      <div className={`w-full h-screen flex flex-col justify-start items-center relative pb-10 overflow-hidden`}>
        <SellerNavbar pathname={pathname} />

        <div className={`w-full md:w-[70%] lg:w-[50%] h-auto overflow-y-auto px-5 py-5 mt-5 lg:px-10 flex flex-col justify-start items-center relative`}>
          <div className={`w-full shrink-0 mb-5 h-52 relative rounded-lg border-2 flex flex-col justify-center items-center border-dashed border-black overflow-hidden`}>
            <span className="text-6xl opacity-70 cursor-pointer"><IoCloudUploadOutline /></span>
            <p className={`${image === null ? "block" : "hidden"} w-full text-center font-Kanit text-black font-light italic text-sm`}>Upload an image</p>
            <p className={`${image !== null ? "block" : "hidden"} w-full text-center font-Kanit text-black font-light italic text-sm`}>{image?.name}</p>
            <input onChange={(e) => {
              const file = e?.target?.files?.[0];
              if (file) {
                setImage(file);
              }
            }} type="file" accept="image/*" className="absolute text-3xl z-20 md:text-9xl top-1/2 -translate-y-1/2 mx-auto opacity-0" />
            <p onClick={() => setImage(null)} className={`${image !== null ? "block" : "hidden"} z-30 w-auto text-center cursor-pointer py-2 px-5 mt-3 rounded-lg bg-red-500 font-Kanit text-white font-light italic text-sm`}>Remove</p>
          </div>

          <input type="text" className={`w-full shrink-0 py-3 border-b-[1px] border-gray-500 outline-none placeholder-gray-700 text-black font-Kanit text-sm px-2`} placeholder="Enter product name" />
          <textarea className={`w-full shrink-0 py-3 h-52 rounded-lg mt-4 bg-gray-200 outline-none placeholder-gray-700 text-black font-Kanit text-sm px-2`} placeholder="Enter product description" />
          <input type='number' className={`w-full shrink-0 py-3 border-b-[1px] border-gray-500 outline-none placeholder-gray-700 text-black font-Kanit text-sm px-2 mt-2`} placeholder="Enter product price in INR" />

          <div className={`w-full ${visible ? "block" : "hidden"} shrink-0 mt-2 z-20 h-56 overflow-y-auto flex flex-col justify-start items-center gap-2 py-1 px-1 rounded-xl bg-gray-200 shadow-md`}>
            {contentCategory.map((category, index) => {
              return <p key={index} className={`w-full text-start text-sm capitalize py-2 px-2 rounded-lg hover:bg-white duration-200 ease-in-out cursor-pointer`} onClick={() => {setCategory(category); setVisible(false)}}>{category}</p>
            })}
          </div>

          <p onClick={() => setVisible(!visible)} className="w-full px-5 py-2 bg-gray-200 rounded-lg mt-3 cursor-pointer font-Kanit capitalize text-start flex justify-between items-center">{category} <IoMdArrowDropdown className={`${visible ? "rotate-180" : "rotate-0"} z-10 duration-200 ease-in-out text-xl`} /></p>
          <p className={`w-full text-center py-2 rounded-lg cursor-pointer mt-3 bg-gradient-to-r from-blue-400 to-blue-600 duration-200 ease-in-out text-white font-Kanit font-light`}>Add Product</p>
        </div>

      </div>
    </>
  )
}

export default page
