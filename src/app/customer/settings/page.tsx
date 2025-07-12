'use client'

import CustomerNavbar from "@/components/CustomerNavbar"
import { usePathname, useRouter } from "next/navigation"
import { useEffect, useState } from "react"
import { FaArrowRightLong } from "react-icons/fa6";
import { FaRegEye } from "react-icons/fa";
import { FaEyeSlash } from "react-icons/fa";
import { IoIosSend } from "react-icons/io";
import axios from "axios";

function page() {

  const pathname = usePathname();
  const [option, setOption] = useState('general');
  const [visible, setVisible] = useState(false);
  const router = useRouter();

  useEffect(() => {
    const verify = async () => {
      try {
        const res = await axios.get(`/api/customer/auth`, {
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
        <CustomerNavbar pathname={pathname} />

        <div className={`w-full flex justify-start items-center gap-2 px-5 py-2 lg:px-10 mt-5`}>
          <p onClick={() => setOption('general')} className={`w-auto px-4 py-2 border-b-2 ${option === 'general' ? "border-blue-500" : "border-white"} duration-200 ease-in-out font-Kanit text-sm cursor-pointer text-black`}>General</p>
          <p onClick={() => setOption('security')} className={`w-auto px-4 py-2 border-b-2 ${option === 'security' ? "border-blue-500" : "border-white"} duration-200 ease-in-out font-Kanit text-sm cursor-pointer text-black`}>Security</p>
          <p onClick={() => setOption('feedback')} className={`w-auto px-4 py-2 border-b-2 ${option === 'feedback' ? "border-blue-500" : "border-white"} duration-200 ease-in-out font-Kanit text-sm cursor-pointer text-black`}>Feedback</p>
        </div>

        <div className={`w-[95%] ${option === 'general' ? "block" : "hidden"} flex flex-col bg-gray-200 rounded-lg justify-start items-center px-4 py-5 mt-5`}>
          <p className={`w-full font-light text-start font-Kanit text-[10px] sm:text-sm mb-4`}>Take full control of your presence and customie your profile. These details will be used while you place a order.</p>

          <input type="text" className={`w-full py-3 px-3 outline-none font-Kanit text-sm bg-white text-black placeholder-gray-400 rounded-lg mb-3`} placeholder="Update name" />
          <input type="email" className={`w-full py-3 px-3 outline-none font-Kanit text-sm bg-white text-black placeholder-gray-400 rounded-lg mb-3`} placeholder="Update email address" />
          <div className={`w-full flex justify-between items-center gap-2 mb-4`}>
            <p className={`w-auto px-4 py-3 rounded-lg bg-white text-gray-400 font-Kanit text-sm font-light`}>+91</p>
            <input type="text" className={`w-full py-3 px-3 outline-none font-Kanit text-sm bg-white text-black placeholder-gray-400 rounded-lg`} placeholder="Update contact" />
          </div>
          <p className={`w-full py-3 text-center bg-blue-500 text-white font-Kanit flex justify-center items-center gap-3 hover:gap-6 rounded-lg cursor-pointer hover:bg-blue-600 duration-200 ease-in-out`}>Update Profile <FaArrowRightLong /></p>
        </div>

        <div className={`w-[95%] ${option === 'security' ? "block" : "hidden"} flex flex-col bg-gray-200 rounded-lg justify-start items-center px-4 py-5 mt-5`}>
          <p className={`w-full font-light text-start font-Kanit text-[10px] sm:text-sm mb-4`}>Your security is out top most priority and to keep your account secure we prefer you to keep changing your password every 7 days. </p>

          <div className={`w-full flex justify-center items-center mb-3 relative`}>
            <p onClick={() => setVisible(!visible)} className={`w-auto absolute top-1/2 right-5 opacity-50 cursor-pointer -translate-y-1/2 text-sm`}>{visible ? <FaRegEye /> : <FaEyeSlash />}</p>
            <input type={visible ? "text" : "password"} className={`w-full py-3 px-3 outline-none font-Kanit text-sm bg-white text-black placeholder-gray-400 rounded-lg`} placeholder="Enter new password" />
          </div>
          <div className={`w-full flex justify-center items-center mb-4 relative`}>
            <p onClick={() => setVisible(!visible)} className={`w-auto absolute top-1/2 right-5 opacity-50 cursor-pointer -translate-y-1/2 text-sm`}>{visible ? <FaRegEye /> : <FaEyeSlash />}</p>
            <input type={visible ? "text" : "password"} className={`w-full py-3 px-3 outline-none font-Kanit text-sm bg-white text-black placeholder-gray-400 rounded-lg`} placeholder="Confirm new password" />
          </div>
          <p className={`w-full py-3 text-center bg-blue-500 text-white font-Kanit flex justify-center items-center gap-3 hover:gap-6 rounded-lg cursor-pointer hover:bg-blue-600 duration-200 ease-in-out`}>Change Password<FaArrowRightLong /></p>
        </div>

        <div className={`w-[95%] ${option === 'feedback' ? "block" : "hidden"} flex flex-col bg-gray-200 rounded-lg justify-start items-center px-4 py-5 mt-5`}>
          <p className={`w-full font-light text-start font-Kanit text-[10px] sm:text-sm`}>Your words matter the most, thus we want to hear it out from you that what we can do to improve our services.</p>
          <p className={`w-full font-light text-start font-Kanit text-[10px] sm:text-sm mb-4`}>Please share any message with us and tell us what's on your mind. We would really appreciate that.</p>

          <input type="text" className="w-full py-3 px-3 rounded-lg outline-none bg-white mb-3" placeholder="Message title" />
          <textarea className="w-full py-3 h-36 px-3 rounded-lg outline-none bg-white mb-4" placeholder="Enter your message" />
          <p className={`w-full py-3 text-center bg-blue-500 text-white font-Kanit flex justify-center items-center gap-3 hover:gap-6 rounded-lg cursor-pointer hover:bg-blue-600 duration-200 ease-in-out`}>Send Feedback<IoIosSend /></p>
        </div>

      </div>
    </>
  )
}

export default page
