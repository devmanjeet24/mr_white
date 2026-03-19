"use client";

import Image from "next/image";
import { useState } from "react";
import { PublicSans, workSans } from "@/lib/fonts";
import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from "@/components/ui/accordion";
import { Smile } from 'lucide-react';
import { ShoppingCart } from 'lucide-react';
import { GraduationCap } from 'lucide-react';
import { Droplet } from 'lucide-react';
import { Vault } from 'lucide-react';
import { RectangleCircle } from 'lucide-react';
import './product.css'

export default function ProductPage() {
    const [activeImg, setActiveImg] = useState(0);
    const [rating, setRating] = useState(0);

    const images = [
        "/product/subproduct3.png",
        "/product/subproduct1.png",
        "/product/subproduct2.png",
        "/product/subproduct3.png",
    ];

    return (
        <div className="bg-[#050505] text-white">

            <div>
                <Image
                    src="/product/collectionbanner.png"
                    width={1000}
                    height={1000}
                    alt="img"
                    className="w-full h-[400px] object-cover"
                />
            </div>

            <div className=" mx-auto px-6 py-[60px]">

                {/* TOP */}
                <div className="flex gap-[50px] mb-[60px]">

                    {/* LEFT */}
                    <div className="w-[520px]">
                        <div className="relative w-full border border-[#2A2A2A] rounded-md overflow-hidden">
                            <Image src={images[activeImg]} alt="" width={650} height={850} className="object-cover" />
                        </div>

                        <div className="flex gap-[10px] mt-[12px]">
                            {images.map((img, i) => (
                                <div
                                    key={i}
                                    onClick={() => setActiveImg(i)}
                                    className={`relative  border rounded-sm cursor-pointer overflow-hidden ${activeImg === i ? "border-[#D3B86A]" : "border-[#2A2A2A]"
                                        }`}
                                >
                                    <Image src={img} alt="" width={200} height={300} className="object-cover" />
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* RIGHT */}
                    <div className="flex-1">

                        {/* RATING */}
                        <div className="flex items-center gap-[6px] text-[14px]">
                            <span className="text-[#D3B86A] tracking-[2px]">★★★★★</span>
                            <span className="text-[#aaa]">4.9</span>
                            <span className="text-[#666]">• 435 reviews</span>
                        </div>

                        <h1 className={`text-[32px] mt-[12px] font-semibold ${workSans.className}`}>
                            3-in-1 Portable Travel Water Bottle
                        </h1>

                        <div className="flex justify-start items-center gap-1.5">
                            <p className={`text-[#fff] text-[22px] mt-[18px] ${PublicSans.className} line-through`}>
                                $32.99
                            </p>

                            <p className={`text-[#D3B86A] text-[26px] mt-[18px] ${PublicSans.className}`}>
                                $24.99
                            </p>
                        </div>



                        <p className={`text-[18px] text-[#9CA3AF] my-[55px] ${PublicSans.className}`}>
                            The Tail-Wagging Love Portable Hydration bottle is a convenient, pet-themed water bottle designed for dog lovers to stay hydrated on the go.
                        </p>

                        {/* BUTTONS */}
                        <div className="flex gap-[20px] mt-[55px] flex-wrap">


                            <div className="producticon-btn">
                                <p> <span><Smile /></span> 2-in-1 Hydration & Feeding</p>
                            </div>

                            <div className="producticon-btn">
                                <p> <span><Droplet /></span> Leak-Proof Portability</p>
                            </div>

                            <div className="producticon-btn">
                                <p> <span><Vault /></span> Safe, BPA-Free Material</p>
                            </div>

                            <div className="producticon-btn">
                                <p> <span><RectangleCircle /></span> One-Button Dispensing</p>
                            </div>
                        </div>


                        <div className="shipped mt-[35px]">

                            <div></div>
                            <p>Shipped within 24h</p>

                        </div>
                        <button className={`w-full bg-[#D3B86A] text-black py-[14px] rounded-b-[8px]  text-[20px] font-bold ${workSans.className} flex justify-center items-center gap-2`}>
                            <span><ShoppingCart /></span> Add to Cart
                        </button>

                        <div className="developed">
                            <span>
                                <GraduationCap />
                            </span>

                            <p className={`${workSans.className} font-semibold text-[16px] text-white`}>Developed with 50 years of dog-care knowledge.</p>
                        </div>

                        {/* COLORS */}

                        <div>
                            <p className={`${workSans.className} font-semibold text-[24px] text-white mt-[40px]`}>Colors</p>
                            <div className="flex gap-[8px] mt-[14px]">
                                <div className="w-[50px] h-[50px] border border-white" />
                                <div className="w-[50px] h-[50px] bg-[#D3B86A]" />
                                <div className="w-[50px] h-[50px] bg-[#EDE3C7]" />
                            </div>
                        </div>
                        {/* ACCORDION */}
                        <div className="mt-[18px]">
                            <Accordion type="single" collapsible>
                                <AccordionItem value="1">
                                    <AccordionTrigger className={`${workSans.className} text-[18px]`}>Details</AccordionTrigger>
                                    <AccordionContent className={`${workSans.className} text-[13px]`}>Details content...</AccordionContent>
                                </AccordionItem>
                                <AccordionItem value="2">
                                    <AccordionTrigger className={`${workSans.className} text-[18px]`}>Shipping</AccordionTrigger>
                                    <AccordionContent className={`${workSans.className} text-[13px]`}>Details content...</AccordionContent>
                                </AccordionItem>
                                <AccordionItem value="3">
                                    <AccordionTrigger className={`${workSans.className} text-[18px]`}>Cleaning</AccordionTrigger>
                                    <AccordionContent className={`${workSans.className} text-[13px]`}>Details content...</AccordionContent>
                                </AccordionItem>
                            </Accordion>
                        </div>

                    </div>
                </div>

                {/* REVIEWS */}
                <div className="mt-[100px]">

                    {/* TITLE */}
                    <h3 className={`text-center text-[36px] font-semibold mb-[50px] ${workSans.className}`}>
                        Word on the Streets
                    </h3>

                    {/* FORM */}
                    <div className="bg-gradient-to-b from-[#1a1a1a] to-[#0d0d0d] rounded-[12px] px-[50px] py-[40px] w-full">

                        <p className={`text-center text-[20px] mb-[25px] ${PublicSans.className}`}>
                            Leave a review
                        </p>

                        {/* STARS (PURE BLACK) */}
                        <div className="flex justify-center gap-[10px] mb-[30px]">
                            {[1, 2, 3, 4, 5].map((i) => (
                                <button
                                    key={i}
                                    onClick={() => setRating(i)}
                                    className={`text-[26px] ${i <= rating ? "text-[#000]" : "text-[#333]"}`}
                                >
                                    ★
                                </button>
                            ))}
                            <span className="text-[16px] text-[#888] ml-3">Your rating here</span>
                        </div>

                        {/* INPUTS */}
                        <div className="space-y-[20px]">

                            <input
                                placeholder="Name"
                                className={`w-full bg-black px-[18px] py-[14px] text-[16px] outline-none ${PublicSans.className}`}
                            />

                            <input
                                placeholder="Location"
                                className={`w-full bg-black px-[18px] py-[14px] text-[16px] outline-none ${PublicSans.className}`}
                            />

                            <textarea
                                placeholder="Your Message here"
                                className={`w-full bg-black px-[18px] py-[16px] text-[16px] outline-none h-[140px] ${PublicSans.className}`}
                            />

                        </div>

                        {/* BUTTON (MATCH ADD TO CART STYLE) */}
                        <button className={`w-full bg-[#D3B86A] text-black py-[16px] mt-[30px] text-[18px] font-bold rounded-[8px] flex items-center justify-center gap-2 ${workSans.className}`}>
                            ★ Leave Review
                        </button>

                    </div>


                    {/* REVIEW LIST */}
                    <div className="mt-[40px] space-y-[22px]">

                        {[1, 2, 3, 4].map((i) => (
                            <div
                                key={i}
                                className="bg-gradient-to-r from-[#1a1a1a] to-[#0d0d0d] rounded-[12px] px-[26px] py-[22px]"
                            >

                                <div className="flex items-start gap-[16px]">

                                    {/* AVATAR IMAGE */}
                                    <div className="w-[50px] h-[50px] rounded-full overflow-hidden">
                                        <Image
                                            src="/product/reviewman.png"
                                            alt="user"
                                            width={50}
                                            height={50}
                                            className="object-cover"
                                        />
                                    </div>

                                    <div className="flex-1">

                                        {/* NAME + STARS */}
                                        <div className="flex items-center gap-[12px] flex-wrap">

                                            <p className={`text-[18px] font-semibold ${workSans.className}`}>
                                                John Doe
                                            </p>

                                            {/* STARS (YELLOW + HALF STYLE FEEL) */}
                                            <div className="flex items-center gap-[4px] text-[18px] text-[#D3B86A]">
                                                ★★★★☆
                                            </div>

                                            <span className="text-[14px] text-[#888]">4.1/5</span>

                                        </div>

                                        {/* LOCATION */}
                                        <p className={`text-[14px] text-[#777] mt-[4px] ${PublicSans.className}`}>
                                            Seattle, Washington
                                        </p>

                                        {/* DIVIDER */}
                                        <div className="w-full h-[1px] bg-[#969696] my-[14px]" />

                                        {/* TEXT */}
                                        <p className={`text-[16px] text-[#B5B5B5] leading-[1.8] ${PublicSans.className}`}>
                                            “Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.”
                                        </p>

                                    </div>
                                </div>

                            </div>
                        ))}

                    </div>

                </div>

            </div>

        </div>
    );
}
