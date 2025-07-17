'use client'

import CustomerNavbar from "@/components/CustomerNavbar"
import axios from "axios";
import { usePathname, useRouter } from "next/navigation"
import { useEffect, useState } from "react";

function page() {

    const pathname = usePathname();
    const router = useRouter();
    const [userEmail, setUserEmail] = useState('');
    const[allWishlist, setAllWishlist] = useState();

    const navigate = (id: string) => {
        router.push(`/customer/product/${id}`);
    }

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
                setUserEmail(res.data.data.email);
            } catch (err) {
                console.log(err);
            }
        }

        verify();
    }, []);

    useEffect(() => {
        const fetchWishlist = async () => {
            try {
                const res = await axios.get(`/api/customer/product?type=wish&email=${userEmail}`, {
                    withCredentials: true
                });
                //console.log(res);
            } catch (err) {
                console.log(err);
            }
        }

        fetchWishlist();
    }, [userEmail]);

    return (
        <>
            <div className={`w-full h-auto flex flex-col justify-start items-center relative overflow-hidden`}>
                <CustomerNavbar pathname={pathname} />

                <div className={`w-full flex flex-col justify-start items-center relative overflow-hidden mt-5 px-5 lg:px-10 pt-5`}>

                    <h1 className={`w-full text-start font-Kanit text-xl `}>Total Wishlist Items : </h1>
                    <h1 className={`w-full text-start font-Kanit text-xl `}>Total Price : </h1>
                    <div className={`w-full h-auto py-5 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 justify-items-center gap-3 mt-5`}>

                    </div>
                </div>
            </div>
        </>
    )
}

export default page
