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
                    <h1 className={`w-full mb-4 md:mb-6 pb-3 md:pb-5 border-b-[1px] border-gray-500 text-4xl lg:text-5xl font-Lalezar text-center`}>Usage</h1>
                    
                    <p className={`w-full text-start font-Kanit text-sm font-light mb-4 md:text-lg`}>Welcome to Story — where creators sell and customers discover inspiring 
                        digital products. This page outlines how our platform works for both sellers and customers, ensuring a smooth and rewarding experience for everyone involved.</p>

                    <p className={`w-full mb-3 mt-5 text-start font-Kanit font-bold text-sm md:text-xl`}>For Selleres : How to Sell on Story </p>
                    <p className={`w-full text-start font-Kanit text-sm font-light mb-4 md:text-lg`}><b>Create an Account :</b> Sign up as a seller by providing your name, email address, and payment information. After creation you can start listing your digital content.</p>
                    <p className={`w-full text-start font-Kanit text-sm font-light mb-4 md:text-lg`}><b>List Your Digital Product :</b> Upload your digital file (e.g., PDF, MP3, ZIP, etc.). <br/> Add a compelling title, detailed description, product preview (image or demo), and relevant tags. <br/> Set your price and assign a category. <br/></p>
                    <p className={`w-full text-start font-Kanit text-sm font-light mb-4 md:text-lg`}><b>Manage Storefront :</b> View all sales. <br/> Monitor performance with sale category, location and age group.</p>
                    <p className={`w-full text-start font-Kanit text-sm font-light mb-4 md:text-lg`}><b>Receive Payments :</b> Once a product is sold, your earnings will be credited to your seller account.</p>

                    <p className={`w-full mb-3 mt-5 text-start font-Kanit font-bold text-sm md:text-xl`}>For Customers: How to Buy Digital Products </p>
                    <p className={`w-full text-start font-Kanit text-sm font-light mb-4 md:text-lg`}><b>Create an Account :</b> Sign up as a customer by providing your name, email address, and basic details. After creation you can start exploring the marketplace.</p>
                    <p className={`w-full text-start font-Kanit text-sm font-light mb-4 md:text-lg`}><b>Explore the Marketplace :</b> Use our advanced search and filter tools to browse by category, price, file type, or rating. You can also view seller profiles and product reviews.</p>
                    <p className={`w-full text-start font-Kanit text-sm font-light mb-4 md:text-lg`}><b>Wishlist or Add to Cart :</b> If you find something you like, you can either: <br/> • Add it to your Wishlist to purchase later. <br/> • Add it to your Cart for immediate checkout.</p>
                    <p className={`w-full text-start font-Kanit text-sm font-light mb-4 md:text-lg`}><b>Secure Checkout :</b> Proceed to checkout and make payment via your preferred method. We support debit/credit cards, e-wallets, and other secure gateways.</p>
                    <p className={`w-full text-start font-Kanit text-sm font-light mb-4 md:text-lg`}><b>Instant Delivery :</b> After successful payment, you’ll receive: <br/> • A confirmation email with the order details. <br/>• A secure download link for your purchased content. <br/> • The content will also be available in your account download history if logged in.</p>


                    <h1 className={`mt-10 pb-10 sm:mt-14 font-Italiana text-9xl sm:text-[150px] lg:text-[200px] text-gray-300`}>STORY</h1>
                    
                </div>
            </div>
        </>
    )
}

export default page
