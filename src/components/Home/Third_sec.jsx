import Image from 'next/image';
import React from 'react'

const Thirdsec = () => {
    return (
        <>

            <div className='thirdsec'>
                <div className='tirdsecbox'>
                    <div className='thirdimg'>
                        <Image src="/Dogpicture.png" width={400} height={400} alt="img" />
                    </div>
                    <div className='thirdcontent'>
                        <h3>Legacy of Love Dog Hub</h3>
                        <h4>A New Era in Caring for Your Best Friend</h4>
                        <p>“Where your dog’s health, story, and happiness come together.”</p>

                        <p> Unlock the Elite Pack and step into (Your Dog’s Name) Legacy of Love Living Dog Hub, your AI-powered sanctuary for celebrating and caring for your cherished companion. This one-of-a-kind living hub securely stores vital records, sets timely medication alerts, tracks vaccinations, and beautifully organizes stories and photos from your shared journey. It’s truly designed to keep every memory you cherish while helping life move smoothly and safely. Plus, you can effortlessly print a custom book of any section you choose, with Mr. White guiding you every step of the way. Inspired by The Way of the Dog by Anahata Graceland, this innovative personal assistant captures every milestone and joy you’ve shared—offering a connection and memory archive unmatched anywhere else.</p>
                    </div>
                </div>
            </div>



        </>
    )
}

export default Thirdsec;