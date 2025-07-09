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
                    <h1 className={`w-full mb-4 md:mb-6 pb-3 md:pb-5 border-b-[1px] border-gray-500 text-4xl lg:text-5xl font-Lalezar text-center`}>Privacy </h1>
                    
                    <p className={`w-full mb-3 text-start font-Kanit font-bold text-sm md:text-xl`}>July, 2025</p>
                    <p className={`w-full text-start font-Kanit text-sm font-light mb-4 md:text-lg`}>Your privacy is critically important to us. At Story, we are committed 
                        to protecting your personal data and respecting your privacy rights. This Privacy Policy explains how we collect, use, store, and share your information 
                        when you visit our website or use our services.</p>

                    <p className={`w-full mb-3 mt-5 text-start font-Kanit font-bold text-sm md:text-xl`}>Information We Collect </p>
                    <p className={`w-full text-start font-Kanit text-sm font-light mb-4 md:text-lg`}>We collect the following types of information to deliver and improve our services:</p>
                    
                    <p className={`w-full text-start font-Kanit text-sm font-light mb-4 md:text-lg`}><b>Personal Information :</b> Name, email address, payment details, and contact information when you register or make a purchase.</p>
                    <p className={`w-full text-start font-Kanit text-sm font-light mb-4 md:text-lg`}><b>Account Details :</b> Login credentials, profile information, content listings (for sellers), and transaction history.</p>
                    <p className={`w-full text-start font-Kanit text-sm font-light mb-4 md:text-lg`}><b>Communication Data :</b> Any messages you send to us, including support queries, feedback, or survey responses.</p>

                    <p className={`w-full mb-3 mt-5 text-start font-Kanit font-bold text-sm md:text-xl`}>Data Security </p>
                    <p className={`w-full text-start font-Kanit text-sm font-light mb-4 md:text-lg`}>We implement strong encryption, and access control measures to protect your data. All payments are processed using secure and reliable systems.</p>

                    <h1 className={`mt-10 pb-10 sm:mt-14 font-Italiana text-9xl sm:text-[150px] lg:text-[200px] text-gray-300`}>STORY</h1>
                    
                </div>
            </div>
        </>
    )
}

export default page
