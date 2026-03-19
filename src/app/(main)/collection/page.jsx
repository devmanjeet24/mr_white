"use client";

import Image from "next/image";
import { PublicSans, workSans } from "@/lib/fonts";
import { ShoppingCart } from 'lucide-react';

const products = new Array(4).fill(0).map((_, i) => ({
    id: i + 1,
    title: "3-in-1 Portable Travel Water Bottle",
    price: "$24.99",
    rating: 4.9,
    reviews: 435,
}));

export default function CollectionPage() {
    return (
        <div className="bg-[#050505] text-white">
            {/* HERO (NO HEADER/FOOTER) */}
            <div>
                <Image
                    src="/collection/collectionbanner.png"
                    width={1000}
                    height={1000}
                    alt="img"
                    className="w-full h-[400px] object-cover"
                />
            </div>

            {/* PRODUCTS */}
            <div className="max-w-[1200px] mx-auto px-6 py-[50px]">
                <div className="grid grid-cols-4 gap-6">

                    {products.map((p) => (
                        <div
                            key={p.id}
                            className="bg-[#0b0b0b] border border-[#1f1f1f] rounded-xl overflow-hidden flex flex-col"
                        >

                            {/* IMAGE */}
                            <div className="relative h-[280px] w-full">
                                <Image src="/collection/product.png" alt="" fill className="object-cover" />

                                {/* TAGS */}
                                <div className="absolute top-2 w-[96%] flex justify-between left-[4px] flex gap-2">
                                    <span className="bg-[#D3B86A] text-black text-[14px] px-2 py-1 rounded">Gentle Fed</span>
                                    <span className="bg-[#1a1a1a] text-white text-[14px] px-2 py-1 rounded border border-[#333]">Premium</span>
                                </div>
                            </div>

                            {/* CONTENT */}
                            <div className="p-4 flex flex-col flex-1 gap-[12px]">

                                {/* RATING */}
                                <div className={`text-[12px] text-[#9CA3AF] ${PublicSans.className}`}>
                                    ⭐⭐⭐⭐ {p.rating} ({p.reviews} reviews)
                                </div>

                                {/* TITLE */}
                                <h3 className={`text-[20px] font-semibold mt-2 ${workSans.className}`}>
                                    {p.title}
                                </h3>

                                {/* PRICE */}
                                <div className="flex justify-start gap-1 items-center">
                                <p className={`text-[#fff] text-[12px] mt-2 line-through ${PublicSans.className}`}>
                                    {p.price}
                                </p>
                                <p className={`text-[#D3B86A] text-[20px] mt-2 ${PublicSans.className}`}>
                                    {p.price}
                                </p>

                                </div>

                                {/* DESC */}
                                <p className={`text-[12px] text-[#9CA3AF] mt-2 leading-[1.5] ${PublicSans.className}`}>
                                    The ultimate companion for outdoor hydration and feeding.
                                </p>

                                {/* BUTTON */}
                                <button className="mt-auto bg-[#D3B86A] text-black text-[13px] py-2 rounded-md mt-4 flex justify-center items-center gap-[12px]">
                                    <span><ShoppingCart /></span>  <p className={`${PublicSans.className} font-semibold text-[16px] `}>Add to Cart</p>
                                </button>

                            </div>

                        </div>
                    ))}

                </div>
            </div>
        </div>
    );
}
