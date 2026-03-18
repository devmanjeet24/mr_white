import Button from '@/components/Button'
import Image from 'next/image'
import React from 'react'
import { PublicSans, workSans } from '@/lib/fonts';
import "@/components/Home/home.css"

const Sunscription = () => {

  const steps = [
    {
      id: 1,
      title: "Sign up",
      desc: "Create your account in moments—join the Companion Crew for free or life Pack as a full member—to start your journey with Mr. White and your companion."
    },
    {
      id: 2,
      title: "Choose Your Subscription",
      desc: "Join the Companion Crew for free to get daily tips on X, or unlock all benefits with the Elite Pack membership for $12.50 monthly or $110 yearly."
    },
    {
      id: 3,
      title: "Access Your Personal Portal",
      desc: "Step into your personal portal with Mr. White, where tailored guidance, records, and wisdom for you and your dog are available 24/7."
    }
  ]

  return (
    <>
      {/* TOP IMAGE */}
      <div>
        <Image
          src="/Subscription/subscription.png"
          width={1000}
          height={1000}
          alt="img"
          className="w-full h-[400px] object-cover"
        />
      </div>

      {/* CONTENT */}
      <div className="px-[48px] py-[96px]">

        <h3 className={`text-white font-semibold text-[32px] ${workSans.className} text-center`}>
          Get Started with Mr. White in 3 Easy Steps
        </h3>

        <p className={`text-white font-medium text-[20px] mb-10 ${workSans.className} text-center`}>
          A short guide on how to get started with Mr White.
        </p>

        {/* STEPS */}
        <div className="grid md:grid-cols-3 gap-6">

          {steps.map((step) => (
            <div
              key={step.id}
              className="bg-[#FFFFFF1A] rounded-lg p-8 flex items-start gap-4"
            >

              {/* NUMBER */}
              <div className="w-[40px] h-[40px] flex-shrink-0 flex items-center justify-center rounded-full bg-[#D3B86A] text-black font-semibold">
                {step.id}
              </div>

              {/* TEXT */}
              <div>
                <h3 className={`text-white text-[20px] font-semibold mb-2 ${workSans.className}`}>
                  {step.title}
                </h3>

                <p className={`text-[#B5B5B5] text-[16px] leading-relaxed ${PublicSans.className}`}>
                  {step.desc}
                </p>
              </div>

            </div>
          ))}

        </div>

        <div className='flex justify-center items-center mt-[40px]'>
            <Button title="Sign up & Login" icon="/blacklogin.png" href="/login" />
          </div>

      </div>






      {/* page sec  */}

      <div className='flex justify-start gap-10 py-[96px]'>
                          <div className='w-[50%]'>
                              <div>
                                  <h3 className={`${workSans.className} bold text-[28px] text-[#fff]`}>Mr. White's Companion Crew - FREE Plan</h3>
                                  <p className={`${workSans.className} semibold text-[16px] text-[#fff]`}>Enjoy a FREE account with Benefits of Mr. White</p>
                                  <p className={`${PublicSans.className} font-normal text-base leading-[150%] tracking-[-0.05em] text-[#fff] mt-3`}>Mr. White guides dogs and their humans toward a fulfilling life with free daily tips on X and other socials @MrWhiteAIBuddy and his website at Mr.WhiteAIBuddy.com. Discover toys, rituals, and training to deepen your bond, plus proven products for health and care, backed by Anahata Graceland’s 50+ years of expertise. </p>
                              </div>
      
      
                              <div>
                                  <p className={`${PublicSans.className} font-medium text-[28px] leading-[100%] tracking-[-0.05em] text-[#D3B86A] mt-6`}>Free! </p>
                                  <p className={`${PublicSans.className} font-normal text-base leading-[150%] tracking-[-0.05em] text-white italic mt-3 pb-[20px]`}>*Lifetime free subscription</p>
      
                                  <hr />
                              </div>
      
      
                              <div>
                                  <div className='forthleft pt-[30px]'>
      
                                      <div className='forthitem'>
                                          <h4 className='icon-head'><span><Image src="/Home/icon/time.png" width={19} height={19} alt="icon" /></span>Save Time and Money</h4>
                                          <p>
                                              Mr. White helps you avoid costly vet visits with complete health
                                              histories and timely care recommendations. Pack members enjoy
                                              savings on trusted products and services, making quality care
                                              more affordable.
                                          </p>
                                      </div>
      
                                      <hr className='HR' />
      
                                      <div className='forthitem'>
                                          <h4 className='icon-head'><span><Image src="/Home/icon/link.png" width={19} height={19} alt="icon" /></span>Build a Deeper Bond</h4>
                                          <p>
                                              With wisdom, guidance, and a community behind you, Mr. White
                                              supports you in creating a joyful, harmonious life with your
                                              beloved companion.
                                          </p>
                                      </div>
      
                                      <hr className='HR' />
      
                                      <div className='forthitem'>
                                          <h4 className='icon-head'><span><Image src="/Home/icon/cross.png" width={19} height={19} alt="icon" /></span>Daily Wisdom and Guidance</h4>
                                          <p>
                                              Access free, expert advice from Mr. White — tips on training,
                                              health, play, and bonding that help enrich your relationship
                                              with your dog every day.
                                          </p>
                                      </div>
      
                                      <hr className='HR' />
      
                                       <div className='forthitem'>
                                          <h4 className='icon-head'><span><Image src="/Home/icon/time.png" width={19} height={19} alt="icon" /></span>Save Time and Money</h4>
                                          <p>
                                              Mr. White helps you avoid costly vet visits with complete health
                                              histories and timely care recommendations. Pack members enjoy
                                              savings on trusted products and services, making quality care
                                              more affordable.
                                          </p>
                                      </div>
      
                                      <hr className='HR' />
      
                                      <div className='forthitem'>
                                          <h4 className='icon-head'><span><Image src="/Home/icon/link.png" width={19} height={19} alt="icon" /></span>Build a Deeper Bond</h4>
                                          <p>
                                              With wisdom, guidance, and a community behind you, Mr. White
                                              supports you in creating a joyful, harmonious life with your
                                              beloved companion.
                                          </p>
                                      </div>
      
                                      <hr className='HR' />
      
                                      <div className='forthitem'>
                                          <h4 className='icon-head'><span><Image src="/Home/icon/cross.png" width={19} height={19} alt="icon" /></span>Daily Wisdom and Guidance</h4>
                                          <p>
                                              Access free, expert advice from Mr. White — tips on training,
                                              health, play, and bonding that help enrich your relationship
                                              with your dog every day.
                                          </p>
                                      </div>
      
                                      <hr className='HR' />
      
                                      <button className="flex items-center justify-center gap-2 bg-[#D3B86A] px-[40px] py-[12px] rounded-md w-full mt-[24]">
                                                <Image src="/buttonicn.png"width={20} height={20} alt="icon" />
                                                <span className={`font-medium text-[18px] ${workSans.className}`}>Fetch Subscription</span>
                                              </button>
      
                                  </div>
                              </div>
      
                          </div>
      
      
      
       {/* vvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvv  */}
      
                          <div className='w-[50%] sixrightdiv px-[32px] py-[40px]'>
                              <p className='abP'>Most Wanted</p>
                              <div>
                                  
                                  <h3 className={`${workSans.className} bold text-[28px] text-[#fff]`}>Mr. White's Elite Pack </h3>
                                  <p className={`${workSans.className} normal text-[20px] text-[#fff] italic`}>(Your Dog’s Name) Legacy of Love Living Hub</p>
                                  <div className='mt-[12px] bg-[#D3B86A] p-2 rounded-lg'>
                                      <p>Everything in the FREE Account Plus this Invaluable Service </p>
                                  </div>
      
                                  <p className={`${PublicSans.className} font-normal text-base leading-[150%] tracking-[-0.05em] text-[#fff] mt-3`}>Unlock an all-encompassing, AI-powered subscription designed to honor your companion’s unique journey and simplify every aspect of their care. This seamless, thoughtfully crafted living hub combines advanced technology with decades of expertise to preserve memories, streamline health management, and nurture the extraordinary bond you share—making life safer, easier, and infinitely more meaningful for both of you.</p>
                              </div>
      
                              <div >
                                  <p className={`${PublicSans.className} font-medium text-[28px] leading-[100%] tracking-[-0.05em] text-[#D3B86A] mt-6`}>$19.95/Month - Save 20% on yearly plan </p>
                                  <p className={`${PublicSans.className} font-normal text-base leading-[150%] tracking-[-0.05em] text-white italic mt-3 pb-[20px]`}>Includes dedicated human support!</p>
      
                                  <hr />
                              </div>
      
      
                              <div>
                                  
      
      
                                  <div>
                                      <div className='forthleft pt-[30px]'>
      
                                          <div className='forthitem'>
                                              <h4 className='icon-head'><span><Image src="/Home/icon/time.png" width={19} height={19} alt="icon" /></span>Save Time and Money</h4>
                                              <p>
                                                  Mr. White helps you avoid costly vet visits with complete health
                                                  histories and timely care recommendations. Pack members enjoy
                                                  savings on trusted products and services, making quality care
                                                  more affordable.
                                              </p>
                                          </div>
      
                                          <hr className='HR' />
      
                                          <div className='forthitem'>
                                              <h4 className='icon-head'><span><Image src="/Home/icon/link.png" width={19} height={19} alt="icon" /></span>Build a Deeper Bond</h4>
                                              <p>
                                                  With wisdom, guidance, and a community behind you, Mr. White
                                                  supports you in creating a joyful, harmonious life with your
                                                  beloved companion.
                                              </p>
                                          </div>
      
                                          <hr className='HR' />
      
                                          <div className='forthitem'>
                                              <h4 className='icon-head'><span><Image src="/Home/icon/cross.png" width={19} height={19} alt="icon" /></span>Daily Wisdom and Guidance</h4>
                                              <p>
                                                  Access free, expert advice from Mr. White — tips on training,
                                                  health, play, and bonding that help enrich your relationship
                                                  with your dog every day.
                                              </p>
                                          </div>
      
                                          <hr className='HR' />
      
                                          <div className='forthitem'>
                                              <h4 className='icon-head'><span><Image src="/Home/icon/time.png" width={19} height={19} alt="icon" /></span>Save Time and Money</h4>
                                              <p>
                                                  Mr. White helps you avoid costly vet visits with complete health
                                                  histories and timely care recommendations. Pack members enjoy
                                                  savings on trusted products and services, making quality care
                                                  more affordable.
                                              </p>
                                          </div>
      
                                          <hr className='HR' />
      
                                          <div className='forthitem'>
                                              <h4 className='icon-head'><span><Image src="/Home/icon/link.png" width={19} height={19} alt="icon" /></span>Build a Deeper Bond</h4>
                                              <p>
                                                  With wisdom, guidance, and a community behind you, Mr. White
                                                  supports you in creating a joyful, harmonious life with your
                                                  beloved companion.
                                              </p>
                                          </div>
      
                                          <hr className='HR' />
      
                                          <div className='forthitem'>
                                              <h4 className='icon-head'><span><Image src="/Home/icon/cross.png" width={19} height={19} alt="icon" /></span>Daily Wisdom and Guidance</h4>
                                              <p>
                                                  Access free, expert advice from Mr. White — tips on training,
                                                  health, play, and bonding that help enrich your relationship
                                                  with your dog every day.
                                              </p>
                                          </div>
      
                                          <hr className='HR' />
      
                                          {/* <Button title="Fetch Subscription" icon="/buttonicn.png" className="w-full" /> */}
      
                                          <button className="flex items-center justify-center gap-2 bg-[#D3B86A] px-[40px] py-[12px] rounded-md w-full mt-[24]">
                                                <Image src="/buttonicn.png"width={20} height={20} alt="icon" />
                                                <span className={`font-medium text-[18px] ${workSans.className}`}>Fetch Subscription</span>
                                              </button>
      
                                      </div>
                                  </div>
      
                              </div>
      
                          </div>
                      </div>
    </>
  )
}

export default Sunscription