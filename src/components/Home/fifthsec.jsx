import Image from 'next/image';
import React from 'react'
import Button from '../Button';
import { PublicSans, workSans } from '@/app/layout';
import { Fifthsec as fifthData } from '@/Data/Fifthsec';

const Fifthsec = () => {
    return (
        <>

            <div className='fifsecdiv px-12 py-24'>

                <div className='flex justify-center items-center w-full'>
                    <div className='w-[45%]'>
                        <Image src="/fifdog.png" width={652} height={674} alt="img" />
                    </div>

                    <div className='w-[55%]'>
                        <h3 className={`text-white font-semibold text-[32px] ${workSans.className}`}>Get Started with Mr. White in 3 Easy Steps</h3>
                        <p className={`text-white font-medium text-[20px] ${PublicSans.className}`}>A short guide on how to get started with Mr White.</p>

                        <div className='mt-10 flex flex-col items-center gap-5'>


                        {
                            fifthData.map((item, id) => {
                                return (
                                    <div className='fifsec  flex gap-4 items-start' key={id}>

                                        <div className='count'>
                                            <span className={`${workSans.className} font-semibold`}>
                                                {id + 1}
                                            </span>
                                        </div>

                                        <div className='signupfif'>
                                            <h4 className={`${workSans.className}`}>{item.heading}</h4>
                                            <p className={`${PublicSans.className}`}>{item.para}</p>
                                        </div>

                                    </div>
                                )
                            })
                        }
</div>


                        <div className='flex justify-start items-center mt-10'>
                            <Button title="Sign Up" icon="/Login.png" className="fifsecbtn" />
                        </div>

                    </div>
                </div>

            </div>

        </>
    )
}

export default Fifthsec;