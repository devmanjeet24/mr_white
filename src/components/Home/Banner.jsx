import Image from 'next/image'
import React from 'react'
import Button from '../Button'
import { FaStar } from "react-icons/fa";
import { FaStarHalfAlt } from "react-icons/fa";
import { PublicSans, workSans } from '@/lib/fonts';

const Banner = () => {
    return (
        <>
            <div className='px-12 py-24 flex items-center justify-between bg-gradient-to-b from-[#FFFFFF0D] to-[#000000]'>

                <div className='w-[53%]'>

                    <div className='flex flex-col gap-y-10'>

                        <h1 className={`text-white ${workSans.className} font-bold text-[44px] leading-[1.2]`}>
                            Secrets of Paws and Humans,
                            revealed they are.
                        </h1>

                        <p className={`text-white/80 ${workSans.className} font-medium text-[24px]`}>
                            All the information for dogs and humans,
                            packed into one hub.
                        </p>


                        {/* FEATURES */}
                        <div className='grid grid-cols-2 gap-y-4 gap-x-6'>

                            <div className='flex justify-start items-center gap-2'>
                                <span>
                                    <Image src="/icon.png" width={17} height={17} alt='icon' />
                                </span>
                                <p className={`text-white ${workSans.className} font-medium text-[16px]`}>
                                    All-in-One Solution
                                </p>
                            </div>

                            <div className='flex justify-start items-center gap-2'>
                                <span>
                                    <Image src="/icon.png" width={17} height={17} alt='icon' />
                                </span>
                                <p className={`text-white ${workSans.className} font-medium text-[16px]`}>
                                    Knowledge to strengthen your bond
                                </p>
                            </div>

                            <div className='flex justify-start items-center gap-2'>
                                <span>
                                    <Image src="/icon.png" width={17} height={17} alt='icon' />
                                </span>
                                <p className={`text-white ${workSans.className} font-medium text-[16px]`}>
                                    For Every Dog & their human
                                </p>
                            </div>

                            <div className='flex justify-start items-center gap-2'>
                                <span>
                                    <Image src="/icon.png" width={17} height={17} alt='icon' />
                                </span>
                                <p className={`text-white ${workSans.className} font-medium text-[16px]`}>
                                    100% Human Support
                                </p>
                            </div>

                        </div>


                        {/* CTA BUTTON */}
                        <div className='pt-2'>
                            <Button title='View Subscriptions' icon='/buttonicn.png' href="/subscription" />
                        </div>


                        {/* REVIEW CARD */}
                        <div className='bg-[#111111] rounded-xl p-5 flex flex-col gap-4 w-full'>

                            <div className='flex items-center gap-4'>

                                <Image
                                    src="/Frame.png"
                                    width={48}
                                    height={48}
                                    alt='avatar'
                                    className='rounded-lg'
                                />

                                <div className='flex flex-col'>

                                    <div className='flex items-center gap-3'>

                                        <p className={`text-white ${workSans.className} font-semibold text-[15px]`}>
                                            Nancy S
                                        </p>

                                        <div className='flex gap-1'>
                                            {/* <Image src="/star.png" width={14} height={7} alt='star' />
                                            <Image src="/star.png" width={14} height={14} alt='star' />
                                            <Image src="/star.png" width={14} height={14} alt='star' />
                                            <Image src="/star.png" width={14} height={14} alt='star' />
                                            <Image src="/star-half.png" width={14} height={14} alt='star' /> */}
                                            <span><FaStar className='text-[#D3B86A]' /></span>
                                            <span><FaStar className='text-[#D3B86A]' /></span>
                                            <span><FaStar className='text-[#D3B86A]' /></span>
                                            <span><FaStar className='text-[#D3B86A]' /></span>
                                            <span><FaStarHalfAlt className='text-[#D3B86A]' /></span>

                                        </div>

                                    </div>

                                    <p className='text-gray-400 text-[13px]'>
                                        Auburn, WA
                                    </p>

                                </div>

                            </div>


                            <p className={`${PublicSans.className} text-gray-300 text-[14px] leading-relaxed`}>
                                Meeting Anahata Graceland and Arturo was a great experience: full of loving,
                                expert advice and attention to our needs.
                            </p>

                        </div>

                    </div>

                </div>


                {/* RIGHT IMAGE */}
                <div className='flex justify-end w-[43%]'>

                    <div className='relative w-full h-full rounded-2xl '>

                        <Image
                            src="/Right.png"
                            width={560}
                            height={560}
                            alt='banner'
                            className='object-cover w-full h-full'
                        />

                    </div>

                </div>

            </div>
        </>
    )
}

export default Banner