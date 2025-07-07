'use client'

import { useRouter } from "next/navigation";
import { useState } from "react"
import { IoIosArrowRoundBack } from "react-icons/io";
import { FaRegEye } from "react-icons/fa";
import { FaRegEyeSlash } from "react-icons/fa";
import { FaCaretDown } from "react-icons/fa";
import { professionList } from "@/data/profession";

function page() {

    const [option, setOption] = useState('register');
    const [visible, setVisible] = useState(false);
    const [profession, setProfession] = useState('choose');
    const [dropdownVisible, setDropdownVisible] = useState(false);
    const[name, setName] = useState('');
    const[email, setEmail] = useState('');
    const[location, setLocation] = useState('');
    const[password, setPassword] = useState('');
    const[confirm, setConfirm] = useState('');
    const router = useRouter();

    const navigate = () => {
        router.push('/');
    }

    return (
        <>
            <div className={`w-full h-screen flex flex-col justify-start items-center overflow-hidden pb-10`}>
                <div className={`w-full py-4 flex justify-center items-center gap-2`}>
                    <h1 className={`text-2xl lg:text-3xl font-Italiana text-black`}>STORY</h1>
                    <img src="/assets/logo.png" className="h-6" />
                </div>

                <div className={`w-full h-full flex justify-center items-center md:gap-10 px-4 py-5 md:py-10`}>

                    <div className={`w-full hidden md:block h-full overflow-hidden rounded-3xl relative`}>
                        <img src="/assets/register.jpg" className="h-full w-full object-cover" />
                        <p onClick={navigate} className={`absolute font-Kanit bg-white cursor-pointer text-black top-4 left-4 flex justify-center items-center gap-2 rounded-full py-2 px-4`}><IoIosArrowRoundBack />Go Back</p>
                    </div>

                    <div className={`w-full py-4 px-4 h-full flex flex-col justify-start items-center rounded-3xl pt-12 md:pt-0`}>
                        <div className={`w-full shadow-md rounded-full p-1 flex justify-between items-center`}>
                            <p onClick={() => setOption('register')} className={`w-full font-Kanit text-lg cursor-pointer px-5 py-3 rounded-full duration-150 ease-in-out text-center border-2 ${option === 'register' ? "bg-black text-white" : "bg-transparent text-black border-white"}`}>Register</p>
                            <p onClick={() => setOption('login')} className={`w-full font-Kanit text-lg cursor-pointer px-5 py-3 rounded-full duration-150 ease-in-out text-center border-2 ${option === 'login' ? "bg-black text-white" : "bg-transparent text-black border-white"}`}>Login</p>
                        </div>

                        <div className={`w-full mt-10 ${option === 'register' ? "block" : "hidden"} h-full overflow-y-auto flex flex-col justify-start items-center gap-3 pb-5 relative`}>
                            <input value={name} onChange={(e) => setName(e.target.value)} type="text" placeholder="Enter full name" className="w-full px-3 py-3 border-b-[1px] border-gray-500 outline-none font-Kanit" />
                            <input value={email} onChange={(e) => setEmail(e.target.value)} type="email" placeholder="Enter email address" className="w-full px-3 py-3 border-b-[1px] border-gray-500 outline-none font-Kanit" />
                            <input value={location} onChange={(e) => setLocation(e.target.value)} type="text" placeholder="Enter location" className="w-full px-3 py-3 border-b-[1px] border-gray-500 outline-none font-Kanit" />
                            <div className={`w-full flex flex-col justify-center items-center gap-2 relative`}>
                                <input value={password} onChange={(e) => setPassword(e.target.value)} type={visible ? "text" : "password"} placeholder="Set a password" className="w-full px-3 py-3 border-b-[1px] border-gray-500 outline-none font-Kanit" />
                                <span onClick={() => setVisible(!visible)} className={`absolute top-1/2 right-5 -translate-y-1/2 opacity-40 cursor-pointer`}>{visible ? <FaRegEye /> : <FaRegEyeSlash />}</span>
                            </div>
                            <div className={`w-full flex flex-col justify-center items-center gap-2 relative`}>
                                <input value={confirm} onChange={(e) => setConfirm(e.target.value)} type={visible ? "text" : "password"} placeholder="Re-type password" className="w-full px-3 py-3 border-b-[1px] border-gray-500 outline-none font-Kanit" />
                                <span onClick={() => setVisible(!visible)} className={`absolute top-1/2 right-5 -translate-y-1/2 opacity-40 cursor-pointer`}>{visible ? <FaRegEye /> : <FaRegEyeSlash />}</span>
                            </div>
                            <p className={`w-full text-start py-3 px-2 text-sm font-Kanit`}>What best describes you ?</p>
                            <p onClick={() => setDropdownVisible(!dropdownVisible)} className={`w-full -mt-2 px-3 py-2 cursor-pointer rounded-lg bg-gray-200 text-start flex justify-between items-center`}>{profession} <FaCaretDown className={`${dropdownVisible ? "rotate-180" : "rotate-0"} duration-200 ease-in-out`} /></p>
                            <div className={`${dropdownVisible ? "block" : "hidden"} absolute top-5 overflow-y-auto w-full bg-gray-200 rounded-xl flex flex-col justify-start items-start px-1 py-1`}>
                                {professionList.map((prof, index) => {
                                    return <span key={index} className={`w-full text-start py-2 capitalize px-2 rounded-lg font-Kanit hover:bg-white duration-200 ease-in-out cursor-pointer`} onClick={() => {setProfession(prof); setDropdownVisible(false);}}>{prof}</span>
                                })}
                            </div>
                            <p className={`w-full rounded-full py-2 text-center bg-black text-white font-Kanit cursor-pointer`}>Submit</p>
                        </div>

                        <div className={`w-full mt-10 ${option === 'login' ? "block" : "hidden"} h-full overflow-y-auto flex flex-col justify-start items-center gap-3`}>
                            <input value={email} onChange={(e) => setEmail(e.target.value)} type="email" placeholder="Enter email address" className="w-full px-3 py-3 border-b-[1px] border-gray-500 outline-none font-Kanit" />
                            <div className={`w-full flex flex-col justify-center items-center gap-2 relative`}>
                                <input value={password} onChange={(e) => setPassword(e.target.value)} type={visible ? "text" : "password"} placeholder="Enter password" className="w-full px-3 py-3 border-b-[1px] border-gray-500 outline-none font-Kanit" />
                                <span onClick={() => setVisible(!visible)} className={`absolute top-1/2 right-5 -translate-y-1/2 opacity-40 cursor-pointer`}>{visible ? <FaRegEye /> : <FaRegEyeSlash />}</span>
                            </div>
                            <p className={`w-full rounded-full py-2 text-center bg-black text-white font-Kanit cursor-pointer`}>Continue</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default page
