import Button from '@/components/Button'
import Image from 'next/image'
import React from 'react'
import { workSans } from '@/lib/fonts'

const Conatct = () => {
  return (
    <>
      <div>
        <Image src="/Contact/Contact.png" width={1000} height={1000} alt="img" className='w-full h-[400px]' />
      </div>

      <div className='pt-20 px-12 flex justify-between items-start'>

        {/* LEFT SIDE FORM */}
        <div className="space-y-4 w-[50%]">

  <input
    type="text"
    placeholder="Full Name*"
    className={`w-full bg-[#111] border border-[#FFFFFF1A] rounded-md px-4 py-3 focus:outline-none ${workSans.className} text-[16px] font-normal leading-[150%] tracking-[-0.05em] text-[#FFFFFFBF] placeholder:text-[#FFFFFFBF]`}
  />

  <input
    type="email"
    placeholder="E-mail*"
    className={`w-full bg-[#111] border border-[#FFFFFF1A] rounded-md px-4 py-3 focus:outline-none ${workSans.className} text-[16px] font-normal leading-[150%] tracking-[-0.05em] text-[#FFFFFFBF] placeholder:text-[#FFFFFFBF]`}
  />

  <input
    type="text"
    placeholder="Phone number"
    className={`w-full bg-[#111] border border-[#FFFFFF1A] rounded-md px-4 py-3 focus:outline-none ${workSans.className} text-[16px] font-normal leading-[150%] tracking-[-0.05em] text-[#FFFFFFBF] placeholder:text-[#FFFFFFBF]`}
  />

  <select
    className={`w-full bg-[#111] border border-[#FFFFFF1A] rounded-md px-4 py-3 focus:outline-none ${workSans.className} text-[16px] font-normal leading-[150%] tracking-[-0.05em] text-[#FFFFFFBF]`}
  >
    <option>Subject</option>
    <option>General Inquiry</option>
    <option>Project</option>
    <option>Support</option>
  </select>

  <textarea
    rows="5"
    placeholder="Write your message here"
    className={`w-full bg-[#111] border border-[#FFFFFF1A] rounded-md px-4 py-3 focus:outline-none ${workSans.className} text-[16px] font-normal leading-[150%] tracking-[-0.05em] text-[#FFFFFFBF] placeholder:text-[#FFFFFFBF]`}
  />

  <div className="pt-2 flex justify-center">
    <Button title="Send Message" icon="/Home/footer/footerbtn.png"/>
  </div>

</div>

        <div className='w-[50%]'>
          <Image src="/Contact/ContactL.png" width={540} height={621} alt="img" className='w-full' />
        </div>

      </div>
    </>
  )
}

export default Conatct



