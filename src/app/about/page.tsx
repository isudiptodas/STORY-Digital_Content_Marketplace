'use client'

function page() {
    return (
        <>
            <div className={`w-full h-auto overflow-hidden relative flex flex-col justify-start items-center`}>
                <div className={`w-full flex justify-center items-center gap-2 py-4 md:py-6`}>
                    <h1 className={`font-Italiana text-xl md:text-2xl text-black`}>STORY</h1>
                    <img src="/assets/logo.png" className={`h-5`} />
                </div>

                <div className={`w-full px-7 md:px-10 mt-5 flex flex-col justify-start items-center`}>
                    <h1 className={`w-full mb-4 md:mb-6 pb-3 md:pb-5 border-b-[1px] border-gray-500 text-4xl lg:text-5xl font-Lalezar text-center`}>About Us</h1>
                    
                    <p className={`w-full mb-3 text-start font-Kanit font-bold text-sm md:text-xl`}>Welcome to Story — Where Creativity Finds a Home</p>
                    <p className={`w-full text-start font-Kanit text-sm font-light mb-4 md:text-lg`}>At Story, we believe in the power of digital creativity. We are a dynamic 
                        platform designed to empower creators, artists, and innovators to share their digital work with the world, while giving customers 
                        a seamless and secure space to discover, purchase, and enjoy high-quality digital content.</p>
                    <p className={`w-full text-start font-Kanit text-sm font-light md:text-lg`}>In today’s digital era, talent often goes unnoticed due to 
                        a lack of accessible and fair marketplaces. Our vision is to bridge the gap between creators and their audience by providing a 
                        transparent and efficient digital marketplace — one where digital artists and creators don’t just survive, but thrive.</p>
                    
                    <p className={`w-full mb-3 mt-5 text-start font-Kanit font-bold text-sm md:text-xl`}>What we offer ?</p>
                    <p className={`w-full text-start font-Kanit text-sm font-light mb-4 md:text-lg`}>Story is a two-sided platform tailored for two unique yet interconnected communities:</p>
                    
                    <p className={`w-full text-start font-Kanit text-sm font-light mb-4 md:text-lg`}>Whether you're a musician, author, designer, or educator, Story gives you the tools to monetize 
                        your digital creations. From music albums and eBooks to email templates and design assets, our platform allows you to list, price, and distribute your digital products with full 
                        control and security. Our seller dashboard helps you manage your portfolio, track performance, and engage with your audience.</p>
                    <p className={`w-full text-start font-Kanit text-sm font-light mb-4 md:text-lg`}>For those in search of valuable digital products, Story is a curated library of quality content. 
                        Our intelligent filters allow you to browse by category, price range, rating, and more, making it easy to discover the digital gems you need. From tools that boost productivity to 
                        creative assets that inspire, Story brings them all to your fingertips.</p>
                    
                    <h1 className={`mt-10 pb-10 sm:mt-14 font-Italiana text-9xl sm:text-[150px] lg:text-[200px] text-gray-300`}>STORY</h1>
                    

                </div>
            </div>
        </>
    )
}

export default page
