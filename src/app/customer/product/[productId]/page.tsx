'use client'

import { useParams } from "next/navigation"
import { useEffect, useState } from "react";
import { FaStar } from "react-icons/fa";
import { IoIosArrowRoundBack } from "react-icons/io";
import { IoIosCart } from "react-icons/io";
import { FaLocationArrow } from "react-icons/fa";
import Link from "next/link";

function page() {

    const params = useParams();
    const [productId, setProductId] = useState<string | null>(null);
    const [productData, setProductData] = useState([{
        id: 1,
        name: `Story of us`,
        desc: `Lorem, ipsum dolor sit amet consectetur adipisicing elit. Totam, tempore optio. Quam ut totam, doloribus sed officia recusandae commodi numquam aspernatur, atque quo repellendus modi impedit perspiciatis quidem veniam ducimus!
          Soluta fuga facilis nisi enim eum, beatae libero ratione voluptatum doloremque! Ad omnis debitis cupiditate soluta sed esse voluptatem? Vero dolores modi delectus eos repellendus! Doloribus veritatis eligendi qui velit.
          Quae, reiciendis atque. Deserunt veritatis labore doloribus sapiente nobis magnam sunt porro mollitia. Ex itaque dicta hic cum facilis praesentium asperiores vel vitae, consectetur, aut debitis dolores aliquam. Facere, amet.`,
        img: `https://plus.unsplash.com/premium_photo-1722092223135-21fd4b5f9cc8?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8ZGlnaXRhbCUyMHByb2R1Y3RzfGVufDB8fDB8fHww`,
        rating: `4.2`,
        price: 3999,
        reviews: `13`
    }]);

    useEffect(() => {
        if (params) {
            setProductId(params.productId as string);
        }
    }, [params]);

    return (
        <>
            <div className={`w-full h-auto overflow-hidden pb-10 relative flex flex-col justify-start items-center`}>
                <div className={`w-full flex justify-center items-center gap-2 py-4 md:py-6`}>
                    <h1 className={`font-Italiana text-xl md:text-2xl lg:text-3xl text-black`}>STORY</h1>
                    <img src="/assets/logo.png" className={`h-5 lg:h-7 hover:rotate-180 duration-200 ease-in-out cursor-pointer`} />
                </div>

                <Link href='/customer/dashboard' className={`absolute md:flex justify-center items-center gap-2 p-2 text-sm rounded-full bg-gray-300 text-black top-10 left-5 hidden cursor-pointer shadow-lg hover:bg-black hover:text-white duration-200 ease-in-out`}><IoIosArrowRoundBack className="font-bold"/></Link>

                <div className={`w-full mt-5 md:mt-10 px-5 h-auto flex flex-col md:flex-row justify-start items-center md:items-start relative md:gap-5`}>
                    <div className={`w-full rounded-2xl h-[60vh] md:h-[70vh] overflow-hidden`}>
                        <img src={productData[0].img} className={`w-full h-full object-cover`} />
                    </div>
                    <div className={`w-full h-auto md:h-[70vh] md:overflow-y-auto mt-8 md:mt-0 flex flex-col px-3 justify-start items-center`}>
                        <p className={`w-full text-start font-Kanit text-4xl font-semibold`}>{productData[0].price.toLocaleString('en-IN', {
                            style: 'currency',
                            currency: 'INR'
                        })}</p>
                        <p className={`w-full text-start font-Kanit text-3xl`}>{productData[0].name}</p>
                        <p className={`w-full text-start font-Kanit text-sm mt-2 flex justify-start items-center gap-2`}><FaStar className={`text-yellow-500`}/>{productData[0].rating} ({productData[0].reviews}) reviews</p>

                        <p className={`w-full text-start font-Kanit text-sm mt-5 font-light`}>{productData[0].desc}</p>
                        <div className={`w-full flex justify-start items-center gap-2 mt-5`}>
                            <p className={`px-5 py-3 cursor-pointer rounded-lg bg-black text-white font-Kanit text-sm flex justify-center items-center gap-2`}>Add to Cart <IoIosCart /></p>
                            <p className={`px-5 py-3 cursor-pointer rounded-lg bg-blue-500 text-white font-Kanit text-sm flex justify-center items-center gap-2`}>Buy Now <FaLocationArrow  /></p>
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
