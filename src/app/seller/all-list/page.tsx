'use client'

import SellerNavbar from "@/components/SellerNavbar"
import axios from "axios"
import { usePathname, useRouter } from "next/navigation"
import { useEffect, useState } from "react"
import { toast } from "sonner"
import { IoMdRemoveCircle } from "react-icons/io";
import { FaStar } from "react-icons/fa";
import { IoMdInformationCircleOutline } from "react-icons/io";
import { supabase } from "@/config/supabase"

interface product {
  id: number,
  name: string,
  sellerEmail: string,
  desc: string,
  image: string,
  category: string,
  imagePath: string,
  rating: number,
  customerRating: [],
  price: number,
  customerReviews: []
}

function page() {

  const pathname = usePathname();
  const router = useRouter();
  const[processing, setProcessing] = useState(false);
  const [allProducts, setAllProducts] = useState<product[] | []>([]);
  const [email, setEmail] = useState('');

  useEffect(() => {
    const verify = async () => {
      try {
        const res = await axios.get(`/api/seller/auth`, {
          withCredentials: true
        });

        //console.log(res.data);
        if (res.status !== 200) {
          router.push('/denied');
        }
      } catch (err) {
        console.log(err);
      }
    }

    verify();
  }, []);

  const navigate = (id: number) => {
    router.push(`/seller/product/${id}`);
  }

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const res = await axios.get(`/api/seller/product?type=all`, {
          withCredentials: true
        });

        //console.log(res.data.data);
        setAllProducts(res.data.data);
      } catch (err: any) {
        console.log(err);
        if (err.response && err.response.data) {
          toast.error(err.response.data.message);
        }
        else {
          toast.error("Something went wrong");
        }
      }
    }

    fetchProducts();
  }, []);

  const unlistProduct = async (prod: product) => {
    const filePath = prod.imagePath;
    const id = prod.id;

    try {
      setProcessing(true);
      const { data, error } = await supabase.storage.from('story').remove([filePath]);
      if (data) {
        const res = await axios.delete(`/api/seller/product?id=${id}`, {
          withCredentials: true
        });

        if (res.status === 201) {
          toast.success("Product Unlisted");
          const filtered = allProducts.filter((product) => {
            return product.name !== prod.name
          });

          setAllProducts(filtered);
        }
      }
    } catch (err: any) {
      console.log(err);
      if (err.response && err.response.data) {
        toast.error(err.response.data.message);
      }
      else {
        toast.error("Something went wrong");
      }
    }
    finally{
      setProcessing(false);
    }
  }

  return (
    <>
      <div className={`w-full flex flex-col justify-start items-center relative overflow-hidden`}>
        <SellerNavbar pathname={pathname} />

        <div className={`w-full px-4 flex flex-wrap justify-start items-center gap-4 relative overflow-hidden py-5 lg:pt-8 rounded-lg mt-3`}>
          {allProducts.length > 0 && allProducts.map((prod, index) => {
            return <div key={index} className="w-full md:w-[40%] lg:w-[30%] h-auto cursor-pointer hover:scale-95 duration-200 ease-in-out shadow-lg overflow-hidden rounded-lg xl:rounded-xl flex flex-col py-2 px-2 justify-start items-center">
              <img src={prod.image} className={`h-36 w-full object-cover rounded-lg lg:rounded-xl`} />
              <h1 className={`w-full text-start pt-2 text-xl font-Kanit font-light`}>{prod.name}</h1>
              <h1 className={`w-full text-start text-sm font-Kanit font-light capitalize`}>{prod.category}</h1>
              <h1 className={`w-full text-start text-sm font-Kanit font-light flex justify-start items-center gap-2`}><FaStar className="text-yellow-500" />{prod.rating || 4.3}</h1>
              <div className={`w-full flex justify-between items-center gap-2 mt-3`}>
                <span className={`w-full py-2 rounded-lg bg-black text-white font-Kanit flex justify-center items-center gap-2 hover:opacity-85 duration-200 ease-in-out active:scale-95`} onClick={() => { navigate(prod.id) }}><IoMdInformationCircleOutline /> Info</span>
                <span className={`w-full py-2 rounded-lg bg-red-500 text-white font-Kanit flex justify-center items-center gap-2 hover:bg-red-700 duration-200 ease-in-out active:scale-95`} onClick={() => unlistProduct(prod)}><IoMdRemoveCircle /> {processing ? "Processing" : "Unlist"}</span>
              </div>
            </div>
          })}
        </div>
      </div>
    </>
  )
}

export default page
