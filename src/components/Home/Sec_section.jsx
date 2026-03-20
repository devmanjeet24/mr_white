import React from 'react'
import './home.css'
import Image from 'next/image'
import { secondsec } from '@/Data/seconddata'
import Button from '../Button'

const Secsection = () => {
    return (
        <>

            <div className='second-con'>

                <div>

                    <h3>Preserve, Learn, and Honor Your Dog’s Journey</h3>

                    <div className='secsecbg'>

                        {
                            secondsec.map((item, idd) => {

                                return (
                                    <div className='secsec_imgbox' key={idd}>


                                        <Image src={item.img} alt="img" width={430} height={240} />

                                        <div className='secsec_box'>


                                            <h3>{item.heading}</h3>
                                            <p>{item.para}</p>

                                            <p>{item.lastpara}</p>

                                        </div>

                                    </div>
                                )

                            })
                        }





                    </div>



                </div>

                <div className='mt-12 text-center flex justify-center'>

                    <Button title='Read More' icon='/buttonicn.png' href="/subscription" />

                </div>

            </div>

        </>
    )
}

export default Secsection