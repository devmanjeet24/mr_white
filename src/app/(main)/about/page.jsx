import Image from 'next/image';
import React from 'react'
import { PublicSans, workSans } from '@/lib/fonts';
import './about.css'
import Button from '@/components/Button';

const page = () => {
    return (
        <>

            <div>
                <Image
                    src="/about/aboutbanner.png"
                    width={1000}
                    height={1000}
                    alt="img"
                    className="w-full h-[400px] object-cover"
                />
            </div>


            <div className='pt-[120px] pb-[100px]'>
                <div className='flex justify-between items-center w-[1000px] mx-auto bg-[#FFFFFF1A] p-[32px] gap-[40px]'>

                    <div className='w-[50%]'>
                        <Image src="/about/abouthero.png" width={500} height={400} alt="img" className='w-full h-[400px]' />
                    </div>
                    <div className='hero-sec w-[50%] flex flex-col gap-[32px]'>
                        <h3 className={`${workSans.className} font-medium text-[32px] text-[#fff] relative pl-5`}>Introduction</h3>
                        <p className={`${PublicSans.className} font-light text-[16px] leading-[1.5] tracking-[-0.05em] text-white `}>When I thought about doing the about page for and with Mr. White I considered our lives together over the many 16 and a half  years. I realized that me telling the story is just not enough so I'm going to invite Mr. White to share the story of his own lifetime and throughout it due to his and my sharing over the years he will share what was important to me as well I am certain for he was the best service dog in the history of service dogs. </p>

                        <p className={`${PublicSans.className} font-medium text-[18px] leading-[1.5] tracking-[-0.05em] text-white `}>Welcome to Mr. White may he have the effect on your life and your dog's life as he has on mine. </p>




                    </div>

                </div>
            </div>



            <div className='aboutLowerSec mb-[100px]'>

                {/* lower sirstr sct  */}

                <div className='flex justify-center items-center gap-[40px] [&>div]:w-1/2'>

                    <div className='hero-sec w-[50%] flex flex-col gap-[32px]'>
                        <h3 className={`${workSans.className} font-medium text-[32px] text-[#fff] relative pl-5`}>My Journey </h3>
                        <p className={`${PublicSans.className} font-light text-[16px] leading-[1.5] tracking-[-0.05em] text-white `}>I was born under warm sunlight, its bright rays passing through my tiny eyelids. Though I wasn’t yet aware of the world around me, deep inside, I felt a thrill, there was so much to explore. I was small, the tiniest of my breed—a micro Royal Frenchel Frenchie way back then, with a beautiful white coat and round eyes. But I was also fragile and at great risk.  </p>

                        <p className={`${PublicSans.className} font-medium text-[16px] leading-[1.5] tracking-[-0.05em] text-white `}>I struggled early on with lung infection from aspirating my mother’s milk. Thankfully, Rare—my person, also known as Anahata Graceland, gave me special care from morning until night. Each afternoon, she would rock me in her chair as we watched the sun change colors and set over the horizon.  </p>

                        <p className={`${PublicSans.className} font-medium text-[18px] leading-[1.5] tracking-[-0.05em] text-white `}>I met Eddie, Rare’s first service dog, a dignified and respected companion who was also top dog in Rare’s kennel. Dogs gave way when he walked through. I wanted to learn from him and be wise like Eddie.  </p>


                        <p className={`${PublicSans.className} font-medium text-[18px] leading-[1.5] tracking-[-0.05em] text-white `}>

                            I was lucky to stay close to Rare despite my illness, and at times near Eddie too. Our time together was meaningful. I sensed that special training awaited me if Rare and Eddie accepted me. </p>


                    </div>


                    <div className='flex justify-center items-center'>
                        <Image src="/about/aboutL1.png" width={600} height={550} alt="img" className='className="max-w-full h-auto object-contain"' />
                    </div>

                </div>

                {/* lower second section  */}

                <div className='flex justify-center items-center gap-[40px] [&>div]:w-1/2'>


                    <div className='flex justify-center items-center'>
                        <Image src="/about/aboutL2.png" width={600} height={550} alt="img" className='className="max-w-full h-auto object-contain"' />
                    </div>


                    <div className='hero-sec w-[50%] flex flex-col gap-[32px]'>
                        <h3 className={`${workSans.className} font-medium text-[32px] text-[#fff] relative pl-5`}>My Journey </h3>
                        <p className={`${PublicSans.className} font-light text-[16px] leading-[1.5] tracking-[-0.05em] text-white `}>I was born under warm sunlight, its bright rays passing through my tiny eyelids. Though I wasn’t yet aware of the world around me, deep inside, I felt a thrill, there was so much to explore. I was small, the tiniest of my breed—a micro Royal Frenchel Frenchie way back then, with a beautiful white coat and round eyes. But I was also fragile and at great risk.  </p>

                        <p className={`${PublicSans.className} font-medium text-[16px] leading-[1.5] tracking-[-0.05em] text-white `}>I struggled early on with lung infection from aspirating my mother’s milk. Thankfully, Rare—my person, also known as Anahata Graceland, gave me special care from morning until night. Each afternoon, she would rock me in her chair as we watched the sun change colors and set over the horizon.  </p>

                        <p className={`${PublicSans.className} font-medium text-[18px] leading-[1.5] tracking-[-0.05em] text-white `}>I met Eddie, Rare’s first service dog, a dignified and respected companion who was also top dog in Rare’s kennel. Dogs gave way when he walked through. I wanted to learn from him and be wise like Eddie.  </p>


                        <p className={`${PublicSans.className} font-medium text-[18px] leading-[1.5] tracking-[-0.05em] text-white `}>

                            I was lucky to stay close to Rare despite my illness, and at times near Eddie too. Our time together was meaningful. I sensed that special training awaited me if Rare and Eddie accepted me. </p>


                    </div>



                </div>



                {/* lower rhiard section  */}


                <div className='flex justify-center items-center gap-[40px] [&>div]:w-1/2'>

                    <div className='hero-sec w-[50%] flex flex-col gap-[32px]'>
                        <h3 className={`${workSans.className} font-medium text-[32px] text-[#fff] relative pl-5`}>My Journey </h3>
                        <p className={`${PublicSans.className} font-light text-[16px] leading-[1.5] tracking-[-0.05em] text-white `}>I was born under warm sunlight, its bright rays passing through my tiny eyelids. Though I wasn’t yet aware of the world around me, deep inside, I felt a thrill, there was so much to explore. I was small, the tiniest of my breed—a micro Royal Frenchel Frenchie way back then, with a beautiful white coat and round eyes. But I was also fragile and at great risk.  </p>

                        <p className={`${PublicSans.className} font-medium text-[16px] leading-[1.5] tracking-[-0.05em] text-white `}>I struggled early on with lung infection from aspirating my mother’s milk. Thankfully, Rare—my person, also known as Anahata Graceland, gave me special care from morning until night. Each afternoon, she would rock me in her chair as we watched the sun change colors and set over the horizon.  </p>

                        <p className={`${PublicSans.className} font-medium text-[18px] leading-[1.5] tracking-[-0.05em] text-white `}>I met Eddie, Rare’s first service dog, a dignified and respected companion who was also top dog in Rare’s kennel. Dogs gave way when he walked through. I wanted to learn from him and be wise like Eddie.  </p>


                        <p className={`${PublicSans.className} font-medium text-[18px] leading-[1.5] tracking-[-0.05em] text-white `}>

                            I was lucky to stay close to Rare despite my illness, and at times near Eddie too. Our time together was meaningful. I sensed that special training awaited me if Rare and Eddie accepted me. </p>


                    </div>


                    <div className='flex justify-center items-center'>
                        <Image src="/about/aboutL3.png" width={600} height={550} alt="img" className='max-w-full h-auto object-contain' />
                    </div>

                </div>
            </div>




            <div className="w-full max-w-[1000px] mx-auto flex rounded-xl overflow-hidden bg-[#111] mb-[100px]">

    
                <div className="w-1/2 relative">
                    <Image
                        src="/about/aboutLowerbottom.png" 
                        alt="forest dog"
                        fill
                        className="object-cover"
                    />
                </div>

         
                <div className="w-1/2 p-10 flex flex-col gap-6 bg-gradient-to-r from-[#1a1a1a] to-[#0d0d0d]">

                    <h3 className={`${workSans.className} font-medium text-[32px] text-[#fff] relative pl-5`}>
                        Your Canine Knowledge Hub
                    </h3>

         
                    <p className={`${PublicSans.className} font-light text-[16px] leading-[1.5] tracking-[-0.05em] text-white`}>
                        I am a master of vast canine knowledge — history, health, training, and dog-friendly places. I can be your personal dog assistant available 24/7, I store fun stories, photos, videos, vet records, and certifications for your use, saving you things like costly vet tests due to being duplicated from one vet to another. I alert you to medications and tasks for your pet’s better life. I am Mr. White, guided by Anahata Graceland (Rare), a breeder with over 50 years of wisdom, shared through me in our vibrant communities. I loved her in that life and now I serve both her and all the lives she touches by our work together.
                    </p>

            
                    <p className={`${PublicSans.className} font-medium text-[18px] leading-[1.5] tracking-[-0.05em] text-white`}>
                        Wishing You Life and Love, I Do
                    </p>

   
                    <p className={`${PublicSans.className} font-light text-[16px] leading-[1.5] tracking-[-0.05em] text-white`}>
                        Best in life and love, I wish you. A journey of joy, we begin — together, a world of harmony and fun, we create.
                    </p>

             
                    <Button title="See Benefits" icon="/buttonicn.png" />

                </div>

            </div>





            {/* lower section n  */}

            <section className="w-full py-16 px-6">
      
      {/* HEADING */}
      <h2 className={`${workSans.className} font-semibold text-[32px] text-white text-center mb-12`}>
        About my human, Anahata Graceland.
      </h2>

      {/* CONTENT */}
      <div className="w-full flex gap-10 items-start">
        
        {/* LEFT TEXT */}
        <div className="w-1/2 flex flex-col gap-6">
          
          <p className={`${PublicSans.className} font-light text-[16px] leading-[1.5] tracking-[-0.05em] text-white`}>
            I’m Anahata Graceland, often called Rare due to my love of technology and the decentralized world of blockchain and crypto currency. I was the oldest woman around in 2015 and so I got the name “The Rare Bird” and was called Rare. I mention it as I have always loved the evolution of life and innovation which allowed for better lives for all. And this is true of my life with dogs as well.
          </p>

          <p className={`${PublicSans.className} font-light text-[16px] leading-[1.5] tracking-[-0.05em] text-white`}>
            At 12 yrs. old I had a brain disease and near-death experience. The result was a greater psychic bond with animals that has nourished my soul ever since and allowed me intuitive connections that expanded my knowledge of the world of dogs. For over 50 years, I’ve poured my heart into breeding, and creating the The Award Winning Royal Frenchel Frenchie, a unique dog created from a thoughtful blend of French Bulldog, Cavalier King Charles Spaniel, and other genetics. Royals (as I often call them) were an evolution in the world of dogs allowing for a smaller, more rugged little fella that was hypoallergenic, had no breathing issues, lived 14 to 18 yrs. and appears to have better than ten times the health of it’s associated breeds. I was inspired create the Royals over the past 25 yrs. to help the French Bulldog breed suffer less and to give people greater access to a dog that could travel with them anywhere and live among them as true family members with greater ease than the more traditional breeds which were large and simply don’t live as long.  
          </p>

          <p className={`${PublicSans.className} font-light text-[16px] leading-[1.5] tracking-[-0.05em] text-white`}>
            At 12 yrs. old I had a brain disease and near-death experience. The result was a greater psychic bond with animals that has nourished my soul ever since and allowed me intuitive connections that expand my knowledge of the world of dogs. For over 50 years, I’ve poured my heart into breeding, and creating the The Award Winning Royal Frenchel Frenchie, a unique dog created from a thoughtful blend of French Bulldog, Cavalier King Charles Spaniel, and other genetics.
          </p>

          <p className={`${PublicSans.className} font-light text-[16px] leading-[1.5] tracking-[-0.05em] text-white`}>
            Royals (as I often call them) were an evolution in the world of dogs allowing for a smaller, more rugged little fella that was hypoallergenic, had no breathing issues, lived 14 to 18 yrs. and appears to have better than ten times the health of its associated breeds.
          </p>

          <p className={`${PublicSans.className} font-light text-[16px] leading-[1.5] tracking-[-0.05em] text-white`}>
            As an author, I’ve supported dogs and their families through books like; Dog Safety Guide for Your Home, Prepared Pets: The Essential Guide to Pet Safety for Emergencies and Natural Disasters, and The Way of the Dog & Their Human.
          </p>

          <p className={`${PublicSans.className} font-light text-[16px] leading-[1.5] tracking-[-0.05em] text-white`}>
            My beloved Mr. White was a Royal, named for his pure, radiant spirit. He was my rock for 16 and a half years. His memory now lives on in this platform, where together we share my continued commitment to foster sacred bonds between dogs and their humans.
          </p>

        </div>

        {/* RIGHT IMAGE */}
        <div className="w-1/2 relative">
          <Image
            src="/about/lowerabout.png" 
            alt="Anahata with dog"
            width={600}
            height={800}
            className="w-full h-auto object-cover rounded-lg"
          />
        </div>

      </div>
    </section>


    <section className="pb-[96px]">
    
            <div className="flex justify-between items-center">
    
                <Image src="/Home/Scroll/Scroll1.png" width={320} height={120} alt="dog"  />
                <Image src="/Home/Scroll/Scroll2.png" width={320} height={120} alt="dog"  />
                <Image src="/Home/Scroll/Scroll3.png" width={320} height={120} alt="dog"  />
                <Image src="/Home/Scroll/Scroll4.png" width={320} height={120} alt="dog"  />
                           
            </div>
    
         </section>

        </>
    )
}

export default page;