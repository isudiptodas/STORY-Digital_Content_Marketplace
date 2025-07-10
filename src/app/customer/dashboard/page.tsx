'use client'

import CustomerNavbar from "@/components/CustomerNavbar"
import { usePathname, useRouter } from "next/navigation"
import { useEffect, useState } from "react"
import { IoMdSearch } from "react-icons/io";
import { ImFilter } from "react-icons/im";
import { FaShoppingCart } from "react-icons/fa";
import { MdCloseFullscreen } from "react-icons/md";
import { contentCategory } from "@/data/contentCategory";
import { productList } from "@/data/fakeProduct";
import { FaHeart } from "react-icons/fa";
import { FaStar } from "react-icons/fa";
import { GoDotFill } from "react-icons/go";
import { toast } from "sonner";

interface productProp {
    id: number,
    name: string,
    desc: string,
    img: string,
    rating: number,
    price: number,
    reviews: string,
    category: string
}

function page() {

    const pathname = usePathname();
    const [index, setIndex] = useState(0);
    const [filterVisible, setFilterVisible] = useState(false);
    const [searchVisible, setSearchVisible] = useState(false);
    const [option, setOption] = useState<null | string>(null);
    const [searchInput, setSearchInput] = useState<null | string>(null);
    const [allProducts, setAllProducts] = useState<productProp[] | []>(productList);
    const [filterOption, setFilterOption] = useState('');
    const router = useRouter();

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

    const navigate = (id: string) => {
        router.push(`/customer/product/${id}`);
    }

    useEffect(() => {
        const sortFilter = () => {
            if (filterOption === 'price (low to high)') {
                const sorted = allProducts.sort((a, b) => {
                    return a.price - b.price
                });
                setAllProducts(sorted);
                //console.log(sorted);
            }
            else if (filterOption === 'price (high to low)') {
                const sorted = allProducts.sort((a, b) => {
                    return b.price - a.price
                });
                setAllProducts(sorted);
                //console.log(sorted);
            }
            else if (filterOption === 'rating (low to high)') {
                const sorted = allProducts.sort((a, b) => {
                    return a.rating - b.rating
                });
                setAllProducts(sorted);
                //console.log(sorted);
            }
            else if (filterOption === 'rating (high to low)') {
                const sorted = allProducts.sort((a, b) => {
                    return b.rating - a.rating
                });
                setAllProducts(sorted);
                //console.log(sorted);
            }
        }

        sortFilter();
    }, [filterOption]);

    useEffect(() => {
        const categoryFilter = () => {
            if (option !== null) {
                const filtered = productList.filter((data) => {
                    return data.category === option
                });

                setAllProducts(filtered);
            }
            else {
                setAllProducts(productList);
            }
        }

        categoryFilter();
    }, [option]);

    const search = () => {
        if (!searchInput) {
            toast.error("Please enter search input");
            return;
        }

        const filtered = productList.filter((data) => {
            return data.name.toLowerCase().includes(searchInput.toLowerCase())
        });

        setAllProducts(filtered);
    }

    return (
        <>
            <div className={`w-full h-auto flex flex-col justify-start items-center relative overflow-hidden`}>
                <CustomerNavbar pathname={pathname} />

                <div className={`w-full md:mt-4 h-auto px-4 flex justify-between items-center gap-3 py-5 relative`}>
                    <p onClick={() => setSearchVisible(!searchVisible)} className={`w-full md:hidden flex justify-center items-center gap-2 px-4 py-2 rounded-full bg-black text-white font-Kanit font-light cursor-pointer`}>Search <IoMdSearch /></p>
                    <div className={`w-full hidden md:flex justify-center items-center relative`}>
                        <input onChange={(e) => setSearchInput(e.target.value)} type="text" className={`w-full py-3 px-5 pr-10 rounded-full bg-gray-200 text-black placeholder-zinc-400 font-Kanit outline-none`} placeholder={placeholders[index]} />
                        <span className={`absolute top-1/2 -translate-y-1/2 right-2 px-4 py-1 rounded-full bg-blue-600 text-white cursor-pointer flex justify-center items-center gap-2 hover:bg-blue-700 duration-200 ease-in-out`} onClick={search}>Search <IoMdSearch /></span>
                    </div>
                    <p className={`w-full md:w-[20%] flex justify-center items-center gap-2 px-4 py-2 md:py-3 rounded-full bg-black text-white font-Kanit font-light cursor-pointer hover:opacity-80 duration-200 ease-in-out`}>Cart <FaShoppingCart /></p>
                    <p onClick={() => setFilterVisible(!filterVisible)} className={`w-full active:scale-95 md:w-[20%] flex justify-center items-center gap-2 px-4 py-2 md:py-3 rounded-full bg-black text-white font-Kanit font-light cursor-pointer capitalize hover:opacity-80 duration-200 ease-in-out`}>Filter <ImFilter /></p>

                    {/* filter options */}
                    <div className={`w-auto ${filterVisible ? "block" : "hidden"} fixed top-36 sm:top-40 md:top-48 right-5 rounded-lg bg-white capitalize shadow-2xl p-1 flex flex-col justify-start items-start z-40`}>
                        {filterOptions.map((filter, index) => {
                            return <span key={index} className={`w-full text-start px-3 py-2 rounded-lg cursor-pointer hover:bg-gray-100 duration-150 ease-in-out flex justify-start items-center gap-3`} onClick={() => { setFilterOption(filter); setFilterVisible(false) }}>{filter} <span className={`text-blue-500 ${filterOption === filter ? "block" : "hidden"}`}><GoDotFill /></span></span>
                        })}
                    </div>
                </div>

                {/* mobile search */}
                <div className={`w-full md:hidden ${searchVisible ? "opacity-100 scale-100" : "opacity-0 scale-0"} px-5 duration-200 ease-in-out transition-all h-screen backdrop-blur-3xl bg-black/60 flex flex-col justify-start items-center pt-20 fixed z-[60] overflow-y-auto`}>

                    <span onClick={() => setSearchVisible(!searchVisible)} className={`absolute top-5 right-5 text-white text-xl cursor-pointer`}><MdCloseFullscreen /></span>

                    <div className={`w-full rounded-lg flex flex-col justify-start items-center py-4 h-full px-3`}>
                        <input onChange={(e) => setSearchInput(e.target.value)} type="text" placeholder="Enter search term" className={`w-full rounded-full py-3 px-3 outline-none font-Kanit bg-gray-200 placeholder-gray-400 text-black`} />
                        <p className={`w-full py-2 text-center text-white mt-3 rounded-full bg-gradient-to-r from-blue-400 to-blue-600 flex justify-center items-center gap-3 cursor-pointer`} onClick={search}>Search <IoMdSearch /></p>

                        <div className={`w-full h-full pb-10 mt-5 overflow-y-auto flex flex-col gap-4 py-3`}>
                            {allProducts.length > 0 && allProducts.map((prod, index) => {
                                return <div key={index} className={`w-full cursor-pointer rounded-lg lg:rounded-xl h-44 shrink-0 bg-gray-200 overflow-hidden relative z-20`} onClick={() => navigate(prod.id.toString())}>
                                    <img src={prod.img} className={`h-full w-full object-cover`} />
                                    <div className={`w-full absolute z-20 bottom-0 bg-gradient-to-t from-black to-transparent h-[60%]`}></div>
                                    <div className={`z-20 w-full h-auto absolute bottom-2 py-2 px-3 flex flex-col justify-start items-start`}>
                                        <p className={`w-full text-white font-Kanit text-lg font-semibold`}>{prod.price.toLocaleString('en-IN', {
                                            style: 'currency',
                                            currency: 'INR'
                                        })}</p>
                                        <p className={`w-full text-white font-Kanit text-lg`}>{prod.name}</p>
                                        <p className={`w-full text-white font-light font-Kanit text-[10px] flex justify-start items-center gap-2`}><FaStar className={`text-yellow-400`} />{prod.rating} ({prod.reviews}) reviews</p>
                                    </div>
                                </div>
                            })}
                        </div>
                    </div>
                </div>

                <div className="w-[90%] relative px-4 py-2 overflow-hidden">
                    <div className="absolute h-full w-[10%] bg-gradient-to-r from-white to-transparent z-20 left-0 top-0 pointer-events-none" />

                    <div className="overflow-x-auto flex justify-start items-start gap-3 md:gap-5 pr-4 scroll-smooth">
                        {contentCategory.map((content, index) => (
                            <div key={index} className={`w-auto capitalize cursor-pointer shrink-0 font-Kanit px-3 py-2 rounded-lg hover:bg-black hover:text-white duration-200 ease-in-out text-sm md:text-lg ${content === option ? "bg-blue-500 text-white hover:bg-blue-600" : "bg-gray-200 text-black"}`} onClick={() => setOption(content)}>
                                {content}
                            </div>
                        ))}
                    </div>
                    <div className="absolute h-full w-[10%] bg-gradient-to-l from-white to-transparent z-20 right-0 top-0 pointer-events-none" />
                </div>

                <div className={`w-full pb-10 mt-8 lg:mt-10 px-5 lg:px-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 justify-items-center gap-3`}>
                    {allProducts.length > 0 && allProducts.map((prod, index) => {
                        return <div key={index} className={`w-full cursor-pointer rounded-lg lg:rounded-xl h-48 bg-gray-200 overflow-hidden relative z-20`} onClick={() => navigate(prod.id.toString())}>
                            <img src={prod.img} className={`h-full w-full object-cover`} />
                            <div className={`w-full absolute z-20 bottom-0 bg-gradient-to-t from-black to-transparent h-[60%]`}></div>
                            <div className={`z-20 w-full h-auto absolute bottom-2 py-2 px-3 flex flex-col justify-start items-start`}>
                                <p className={`w-full text-white font-Kanit text-lg font-semibold`}>{prod.price.toLocaleString('en-IN', {
                                    style: 'currency',
                                    currency: 'INR'
                                })}</p>
                                <p className={`w-full text-white font-Kanit text-lg`}>{prod.name}</p>
                                <p className={`w-full text-white font-light font-Kanit text-[10px] flex justify-start items-center gap-2`}><FaStar className={`text-yellow-400`} />{prod.rating} ({prod.reviews}) reviews</p>
                            </div>
                        </div>
                    })}
                </div>


            </div>
        </>
    )
}

export default page
