
"use client";

import Image from "next/image";
import { PublicSans, workSans } from "@/lib/fonts";

export default function LegacyPage() {
    return (
        <div className="bg-black text-white">
            {/* BANNER */}
            <div>
                <Image
                    src="/hub/hubbanner.png"
                    width={1000}
                    height={1000}
                    alt="img"
                    className="w-full h-[400px] object-cover"
                />
            </div>

    
            <div className="max-w-[1100px] mx-auto px-6 py-[80px] space-y-[60px]">
        
                <div className="flex gap-10 items-start">
                    <div className="w-1/2 flex flex-col gap-5">
                        <h3 className={`hero-title ${workSans.className}`}>
                            Welcome to Legacy of Long Dog Hub
                        </h3>

                        <p className={`text-[14px] text-[#CFCFCF] leading-[1.6] ${PublicSans.className}`}>
                            Exclusively available to Elite Pack members, the Legacy of Love Living Hub is nothing like you’ve seen before! Imagine a dynamic, AI-powered sanctuary where every cherished memory and vital detail about your companion’s life is held with care, easily accessible anytime, anywhere. This isn’t just a digital journal — Mr. White is your personal assistant, your memory keeper, even an aid to custom publishing your dogs life in book form and your partner in ensuring your dog enjoys a long, healthy, joyful life.


                        </p>

                        <p className={`text-[14px] text-[#CFCFCF] leading-[1.6] ${PublicSans.className}`}>
                            With the Legacy of Love Living Hub, you’ll discover a new level of ease and confidence in managing your pup’s health, milestones, and adventures — all wrapped in a space designed to grow with you and your dog. Feel proud knowing that support and awareness are available 24/7, helping you make informed decisions and celebrate every step of your journey together.
                        </p>
                    </div>

                    <div className="w-1/2">
                        <div className="rounded-lg p-4">
                            <div className="w-full relative">
                                <Image
                                    src="/hub/Macbook.png"
                                    alt=""
                                    className="object-cover rounded"
                                    width={700}
                                    height={430}
                                />
                            </div>
                        </div>
                    </div>
                </div>

  
                <div>
                    <h3 className={`hero-title ${workSans.className}`}>
                        What is the Legacy of Long Dog Hub?
                    </h3>

                    <div className="grid grid-cols-2 gap-10">
                        <div className="mt-4">

                            <div>

                                <h5 className={`text-[16px] font-semibold text-[#CFCFCF] leading-[1.6] mt-4 ${PublicSans.className}`}>A Living, Evolving Companion Care Space </h5>
                                <p className={`text-[14px] text-[#CFCFCF] leading-[1.6]  ${PublicSans.className}`}>
                                    The Legacy of Love Living Hub is much more than a simple journal or folder of documents. It’s a vibrant, ever-growing space that captures the full story of your dog’s life. From health records and vet visits to daily activities and special moments, everything is thoughtfully organized in one place. This means you can easily track your dog’s progress, celebrate milestones, and keep important information handy—all designed to support a long, healthy life for your companion.
                                </p>

                            </div>

                            <div>

                                <h5 className={`text-[16px] font-semibold text-[#CFCFCF] leading-[1.6] mt-4 ${PublicSans.className}`}>A Living, Evolving Companion Care Space </h5>
                                <p className={`text-[14px] text-[#CFCFCF] leading-[1.6]  ${PublicSans.className}`}>
                                    The Legacy of Love Living Hub is much more than a simple journal or folder of documents. It’s a vibrant, ever-growing space that captures the full story of your dog’s life. From health records and vet visits to daily activities and special moments, everything is thoughtfully organized in one place. This means you can easily track your dog’s progress, celebrate milestones, and keep important information handy—all designed to support a long, healthy life for your companion.
                                </p>

                            </div>
                        </div>

                        <div className="mt-4">

                            <div>

                                <h5 className={`text-[16px] font-semibold text-[#CFCFCF] leading-[1.6] mt-4 ${PublicSans.className}`}>A Living, Evolving Companion Care Space </h5>
                                <p className={`text-[14px] text-[#CFCFCF] leading-[1.6]  ${PublicSans.className}`}>
                                    The Legacy of Love Living Hub is much more than a simple journal or folder of documents. It’s a vibrant, ever-growing space that captures the full story of your dog’s life. From health records and vet visits to daily activities and special moments, everything is thoughtfully organized in one place. This means you can easily track your dog’s progress, celebrate milestones, and keep important information handy—all designed to support a long, healthy life for your companion.
                                </p>

                            </div>

                            <div>

                                <h5 className={`text-[16px] font-semibold text-[#CFCFCF] leading-[1.6] mt-4 ${PublicSans.className}`}>A Living, Evolving Companion Care Space </h5>
                                <p className={`text-[14px] text-[#CFCFCF] leading-[1.6]  ${PublicSans.className}`}>
                                    The Legacy of Love Living Hub is much more than a simple journal or folder of documents. It’s a vibrant, ever-growing space that captures the full story of your dog’s life. From health records and vet visits to daily activities and special moments, everything is thoughtfully organized in one place. This means you can easily track your dog’s progress, celebrate milestones, and keep important information handy—all designed to support a long, healthy life for your companion.
                                </p>

                            </div>
                        </div>
                    </div>

                    {/* FULL IMAGE */}
                    <div className="w-full relative mt-6">
                        <Image
                            src="/hub/hubbannersm.png"
                            alt=""
                            width={1200}
                            height={500}
                            className="object-cover"
                        />
                    </div>

                    {/* SECTION 3 */}
                    <div className="flex gap-10 mt-10">
                        <div className="w-2/3">
                            <h3 className={`hero-title ${workSans.className}`}>
                                Key Areas Organized by Mr. White
                            </h3>
                            <div>

                                <h5 className={`text-[16px] font-semibold text-[#CFCFCF] leading-[1.6] mt-4 ${PublicSans.className}`}>A Living, Evolving Companion Care Space </h5>
                                <p className={`text-[14px] text-[#CFCFCF] leading-[1.6]  ${PublicSans.className}`}>
                                    The Legacy of Love Living Hub is much more than a simple journal or folder of documents. It’s a vibrant, ever-growing space that captures the full story of your dog’s life. From health records and vet visits to daily activities and special moments, everything is thoughtfully organized in one place. This means you can easily track your dog’s progress, celebrate milestones, and keep important information handy—all designed to support a long, healthy life for your companion.
                                </p>

                            </div>

                            <div>

                                <h5 className={`text-[16px] font-semibold text-[#CFCFCF] leading-[1.6] mt-4 ${PublicSans.className}`}>A Living, Evolving Companion Care Space </h5>
                                <p className={`text-[14px] text-[#CFCFCF] leading-[1.6]  ${PublicSans.className}`}>
                                    The Legacy of Love Living Hub is much more than a simple journal or folder of documents. It’s a vibrant, ever-growing space that captures the full story of your dog’s life. From health records and vet visits to daily activities and special moments, everything is thoughtfully organized in one place. This means you can easily track your dog’s progress, celebrate milestones, and keep important information handy—all designed to support a long, healthy life for your companion.
                                </p>

                            </div>



                            <div>

                                <h5 className={`text-[16px] font-semibold text-[#CFCFCF] leading-[1.6] mt-4 ${PublicSans.className}`}>A Living, Evolving Companion Care Space </h5>
                                <p className={`text-[14px] text-[#CFCFCF] leading-[1.6]  ${PublicSans.className}`}>
                                    The Legacy of Love Living Hub is much more than a simple journal or folder of documents. It’s a vibrant, ever-growing space that captures the full story of your dog’s life. From health records and vet visits to daily activities and special moments, everything is thoughtfully organized in one place. This means you can easily track your dog’s progress, celebrate milestones, and keep important information handy—all designed to support a long, healthy life for your companion.
                                </p>

                            </div>
                        </div>

                        <div className="w-1/3 relative ">
                            <Image
                                src="/hub/mandog.png"
                                alt=""
                                fill
                                className="object-cover rounded-lg"
                            />
                        </div>
                    </div>

                    {/* SECTION 4 */}
                    <div className="flex gap-10 mt-10">
                        <div className="w-1/2 relative">
                            <Image
                                src="/hub/manwomendog.png"
                                alt=""
                                fill
                                className="object-cover rounded-lg"
                            />
                        </div>

                        <div className="w-1/2">
                            <div>

                                <h5 className={`text-[16px] font-semibold text-[#CFCFCF] leading-[1.6] mt-4 ${PublicSans.className}`}>A Living, Evolving Companion Care Space </h5>
                                <p className={`text-[14px] text-[#CFCFCF] leading-[1.6]  ${PublicSans.className}`}>
                                    The Legacy of Love Living Hub is much more than a simple journal or folder of documents. It’s a vibrant, ever-growing space that captures the full story of your dog’s life. From health records and vet visits to daily activities and special moments, everything is thoughtfully organized in one place.
                                </p>

                            </div>

                            <div>

                                <h5 className={`text-[16px] font-semibold text-[#CFCFCF] leading-[1.6] mt-4 ${PublicSans.className}`}>A Living, Evolving Companion Care Space </h5>
                                <p className={`text-[14px] text-[#CFCFCF] leading-[1.6]  ${PublicSans.className}`}>
                                    The Legacy of Love Living Hub is much more than a simple journal or folder of documents. It’s a vibrant, ever-growing space that captures the full story of your dog’s life.
                                </p>

                            </div>



                            <div>

                                <h5 className={`text-[16px] font-semibold text-[#CFCFCF] leading-[1.6] mt-4 ${PublicSans.className}`}>A Living, Evolving Companion Care Space </h5>
                                <p className={`text-[14px] text-[#CFCFCF] leading-[1.6]  ${PublicSans.className}`}>
                                    The Legacy of Love Living Hub is much more than a simple journal or folder of documents. It’s a vibrant, ever-growing space that captures the full story of your dog’s life. From health records and vet visits to daily activities and special moments, everything is thoughtfully organized in one place.
                                </p>

                            </div>
                        </div>
                    </div>



                    {/* SECTION 6 */}
                    <div className="flex gap-10 mt-10">
                        <div className="w-1/3 relative">
                            <Image
                                src="/hub/mandoglap.png"
                                alt=""
                                fill
                                className="object-cover rounded-lg"
                            />
                        </div>

                        <div className="w-2/3">
                            <h3 className={`hero-title ${workSans.className}`}>
                                Additional Helpful Features
                            </h3>
                            <div>
                                <div>

                                    <h5 className={`text-[16px] font-semibold text-[#CFCFCF] leading-[1.6] mt-4 ${PublicSans.className}`}>A Living, Evolving Companion Care Space </h5>
                                    <p className={`text-[14px] text-[#CFCFCF] leading-[1.6]  ${PublicSans.className}`}>
                                        The Legacy of Love Living Hub is much more than a simple journal or folder of documents. It’s a vibrant, ever-growing space that captures the full story of your dog’s life. From health records and vet visits to daily activities and special moments, everything is thoughtfully organized in one place.
                                    </p>

                                </div>

                                <div>

                                    <h5 className={`text-[16px] font-semibold text-[#CFCFCF] leading-[1.6] mt-4 ${PublicSans.className}`}>A Living, Evolving Companion Care Space </h5>
                                    <p className={`text-[14px] text-[#CFCFCF] leading-[1.6]  ${PublicSans.className}`}>
                                        The Legacy of Love Living Hub is much more than a simple journal or folder of documents. It’s a vibrant, ever-growing space that captures the full story of your dog’s life.
                                    </p>

                                </div>



                                <div>

                                    <h5 className={`text-[16px] font-semibold text-[#CFCFCF] leading-[1.6] mt-4 ${PublicSans.className}`}>A Living, Evolving Companion Care Space </h5>
                                    <p className={`text-[14px] text-[#CFCFCF] leading-[1.6]  ${PublicSans.className}`}>
                                        The Legacy of Love Living Hub is much more than a simple journal or folder of documents. It’s a vibrant, ever-growing space that captures the full story of your dog’s life. From health records and vet visits to daily activities and special moments, everything is thoughtfully organized in one place.
                                    </p>

                                </div>
                                <div>

                                    <h5 className={`text-[16px] font-semibold text-[#CFCFCF] leading-[1.6] mt-4 ${PublicSans.className}`}>A Living, Evolving Companion Care Space </h5>
                                    <p className={`text-[14px] text-[#CFCFCF] leading-[1.6]  ${PublicSans.className}`}>
                                        The Legacy of Love Living Hub is much more than a simple journal or folder of documents. It’s a vibrant, ever-growing space that captures the full story of your dog’s life. From health records and vet visits to daily activities and special moments, everything is thoughtfully organized in one place.
                                    </p>

                                </div>
                            </div>
                        </div>
                    </div>

                    {/* FINAL */}
                    <div className="mt-10">
                        <h3 className={`hero-title ${workSans.className}`}>
                            How to Get Started
                        </h3>
                        <p className={`text-[14px] text-[#CFCFCF] mt-4 ${PublicSans.className}`}>
                            Ready to elevate the way you care for your companion? Unlock the full power of the (Your Dog’s Name) Legacy of Love Living Hub by joining the Elite Pack today.


                        </p>

                        <p className={`text-[14px] text-[#CFCFCF] mt-4 ${PublicSans.className}`}>


                            Not quite ready to commit? Explore a live preview or demo of the Living Hub to see how it works and how it can transform your daily care routine.

                        </p>


                        <p className={`text-[14px] text-[#CFCFCF] mt-4 ${PublicSans.className}`}>

                            Take the first step toward a deeper, more organized, and joyful companion care experience—because every moment with your dog deserves to be cherished and supported.
                        </p>
                    </div>
                </div>

                {/* CSS */}
                <style jsx>{`
          .hero-title {
            position: relative;
            padding-left: 20px;
            font-size: 20px;
            font-weight: 600;
          }

          .hero-title::before {
            content: "";
            background: #d3b86a;
            width: 13px;
            height: 24px;
            position: absolute;
            top: 50%;
            left: 0;
            transform: translateY(-50%);
          }
        `}</style>
            </div>

            {/* ✅ FIX: outer div close */}
        </div>
    );
}

