'use client'

import { useParams, useRouter } from "next/navigation"
import { useEffect, useState } from "react";
import { FaStar } from "react-icons/fa";
import { IoIosArrowRoundBack } from "react-icons/io";
import { IoIosCart } from "react-icons/io";
import { FaLocationArrow } from "react-icons/fa";
import Link from "next/link";
import axios from "axios";

interface product {
  id: number,
  name: string,
  sellerEmail: string,
  desc: string,
  image: string,
  category: string,
  imagePath: string,
  rating?: number,
  customerRating?: [],
  price: number,
  customerReviews?: []
}

function page() {

    const params = useParams();
    const productId = params.productId as string;
    const [productData, setProductData] = useState<product | null>(null);
    const router = useRouter();

    // useEffect(() => {
    //     if (params) {
    //         setProductId(params.productId as string);
    //     }
    // }, [params]);

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

    useEffect(() => {
        if(!productId){
            return;
        }

        const fetchProductData = async () => {
            console.log(productId);
            try {
                const res = await axios.get(`/api/customer/product?id=${productId}`, {
                    withCredentials: true
                });

                console.log(res.data.data);
                setProductData(res.data.data);
            } catch (err) {
                console.log(err);
            }
        }

        fetchProductData();

    }, [productId]);

    return (
        <>
            <div className={`w-full h-auto overflow-hidden pb-10 relative flex flex-col justify-start items-center`}>
                <div className={`w-full flex justify-center items-center gap-2 py-4 md:py-6`}>
                    <h1 className={`font-Italiana text-xl md:text-2xl lg:text-3xl text-black`}>STORY</h1>
                    <img src="/assets/logo.png" className={`h-5 lg:h-7 hover:rotate-180 duration-200 ease-in-out cursor-pointer`} />
                </div>

                <Link href='/customer/dashboard' className={`absolute md:flex justify-center items-center gap-2 p-2 text-sm rounded-full bg-gray-300 text-black top-10 left-5 hidden cursor-pointer shadow-lg hover:bg-black hover:text-white duration-200 ease-in-out`}><IoIosArrowRoundBack className="font-bold" /></Link>

                <div className={`w-full mt-5 md:mt-10 px-5 h-auto flex flex-col md:flex-row justify-start items-center md:items-start relative md:gap-5`}>
                    <div className={`w-full rounded-2xl h-[60vh] md:h-[70vh] overflow-hidden`}>
                        <img src={productData?.image} className={`w-full h-full object-cover`} />
                    </div>
                    <div className={`w-full h-auto md:h-[70vh] md:overflow-y-auto mt-8 md:mt-0 flex flex-col px-3 justify-start items-center`}>
                        <p className={`w-full text-start font-Kanit text-4xl font-semibold`}>₹{productData?.price}</p>
                        <p className={`w-full text-start font-Kanit text-3xl`}>{productData?.name}</p>
                        <p className={`w-full text-start font-Kanit text-sm mt-2 flex justify-start items-center gap-2`}><FaStar className={`text-yellow-500`} />{productData?.rating || 4.7} ({productData?.customerReviews?.length}) reviews</p>

                        <p className={`w-full text-start font-Kanit text-sm mt-5 font-light`}>{productData?.desc}</p>
                        <div className={`w-full flex justify-start items-center gap-2 mt-5`}>
                            <p className={`px-5 py-3 cursor-pointer rounded-lg bg-black text-white font-Kanit text-sm flex justify-center items-center gap-2`}>Add to Cart <IoIosCart /></p>
                            <p className={`px-5 py-3 cursor-pointer rounded-lg bg-blue-500 text-white font-Kanit text-sm flex justify-center items-center gap-2`}>Buy Now <FaLocationArrow /></p>
                        </div>
                        <div className={`w-full flex flex-col justify-start items-start`}>

                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default page
