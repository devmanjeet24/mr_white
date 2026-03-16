import React from 'react'
import Image from "next/image";
import { workSans } from "@/app/layout";

const Navbar = () => {
    return (
        <>

            <div className="px-12 py-6 bg-[#000]">
                <div className="flex items-center justify-between">

                    <div className="flex items-center gap-[80px]">
                        <div>
                            <Image src="/logo.png" width={145} height={46} alt="logo" className="" />
                        </div>

                        <div className="flex items-center gap-8 text-white text-[16px]">
                            <a href="#" className={`flex items-center gap-2 text-[#D3B86A] ${workSans.className}`}>
                                <span className="w-2 h-2 bg-[#D3B86A] rounded-full"></span>
                                Home
                            </a>

                            <a href="#" className={`hover:text-[#D3B86A] transition ${workSans.className}`}>
                                About
                            </a>

                            <a href="#" className={`hover:text-[#D3B86A] transition ${workSans.className}`}>
                                Subscriptions
                            </a>
                        </div>

                    </div>

                    <div className="flex items-center gap-6">

                        <button className="text-white flex items-center gap-2 hover:text-[#D3B86A] transition">
                            <Image src="/Login.png" width={18} height={18} alt="user" />
                            Login
                        </button>

                        <button className="bg-[#D3B86A] text-black px-5 py-2 rounded-lg font-medium flex items-center gap-2 hover:opacity-90 transition">
                            <Image src="/contact.png" width={16} height={16} alt="user" />
                            Contact
                        </button>

                    </div>
                </div>
            </div>
        </>
    )
}

export default Navbar