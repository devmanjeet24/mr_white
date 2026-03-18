import React from 'react'
import '../login/login.css'
import Image from 'next/image';
import { PublicSans } from '@/lib/fonts';

const page = () => {
    return (
        <>

            <div className='loginpage'>


                <div className='loginbox'>

                    <div className="logologoin">
                        <Image src="/auth/logo.png" width={620} height={200} alt='icon' />
                    </div>

                    <form action="" className='mt-[90px]'>

                         <div className='inputbox'>
                            <span>
                                <Image src="/auth/signin.png" width={60} height={60} alt='icon' />
                            </span>
                            <input type="text" placeholder='Username' />
                        </div>

                        <div className='inputbox'>
                            <span>
                                <Image src="/auth/signin.png" width={60} height={60} alt='icon' />
                            </span>
                            <input type="text" placeholder='Email' />
                        </div>

                        <div className='inputbox'>
                            <span>
                                <Image src="/auth/password.png" width={60} height={60} alt='icon' />
                            </span>
                            <input type="password" placeholder='Password' />
                        </div>

                       

                        <div className='mt-[50px] flex justify-between items-center'>
                            <p className={`text-white font-semibold text-[24px] leading-[100%] tracking-[-0.05em] text-left ${PublicSans.className} border-b-[3px] border-white`}><a href="/login">login</a></p>

                            <p className={`text-white font-semibold text-[24px] leading-[100%] tracking-[-0.05em] text-left ${PublicSans.className} border-b-[3px] border-white`}><a href="#">Lost your password?</a></p>
                        </div>

                        <div className='flex justify-center items-center gap-[45px] flex-col w-full mt-[50px]'>

                            <div className='bg-[#323232] flex justify-center items-center h-[100px] rounded-[22px] gap-[30px] w-full' >
                                <span>
                                    <Image src="/auth/Lightning.png" width={60} height={60} alt='icon' />
                                </span>
                                <p className={`${PublicSans.className} font-semibold text-[50px] leading-[100%] tracking-[-0.05em] text-center text-[#fff]`}>Login</p>
                            </div>

                            <div className='bg-[#323232] flex justify-center items-center h-[100px] rounded-[22px] gap-[30px] w-full'>
                              <span>
                                <Image src="/auth/Cardholder.png" width={60} height={60} alt='icon' />
                                </span>
                                <p className={`${PublicSans.className} font-semibold text-[50px] leading-[100%] tracking-[-0.05em] text-center text-[#fff]`}>Lost your password?</p>
                            </div>

                        </div>

                    </form>

                </div>

            </div>

        </>
    )
}

export default page;