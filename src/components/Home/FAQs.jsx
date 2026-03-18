"use client";

import { useState } from "react";
import Image from "next/image";
import { Work_Sans, Public_Sans } from "next/font/google";
import Button from "../Button";

const workSans = Work_Sans({ subsets: ["latin"], weight: ["700"] });
const PublicSans = Public_Sans({ subsets: ["latin"], weight: ["500"] });

const faqs = [
  {
    question: "Who is Mr. White?",
    answer:
      "Mr. White is a master of the dog world who, after a life of love and service, ascended to join a lineage of dog guardians throughout history. Now, as a digital guide inspired by Anatolian Grassland and powered by AI, Mr. White shares wisdom to deepen the bond between dogs and their people. Ask him about breeds, care, history, or dog-human connections, and he'll provide thoughtful answers to support your journey. Mr. White can also serve as an ageless and faithful assistant to all your dogs needs with alerts, store records etc. should you become an Elite Pack member.",
  },
  { question: "Can I use Mr. White for free?", answer: "Yes, basic access to Mr. White is available for free. You can ask questions about dogs, breeds, and care without any subscription." },
  { question: "What benefits come with the Elite Pack Membership?", answer: "Elite Pack Membership gives you access to advanced features including pet records management, priority support, exclusive content, and much more." },
  { question: "What is the BlockchainDNA NFT, and how does it secure my dog's bond with me?", answer: "The BlockchainDNA NFT creates an immutable digital record of your dog's identity and your ownership, secured on the blockchain for lifetime authenticity." },
  { question: "How does Mr. White build community for me and my dog?", answer: "Mr. White connects dog lovers through shared experiences, group discussions, local meetups, and community events tailored to your dog's breed and needs." },
  { question: "How does Mr. White support veterinarians and pet service professionals?", answer: "Mr. White offers dedicated tools for vets and pet service professionals to manage client records, share updates, and provide better care." },
  { question: "Is there a reduced rate for veterinarians and pet service professionals?", answer: "Yes, we offer special pricing plans for veterinary professionals and pet service providers. Contact us for details." },
  { question: "How does Mr. White support top dog product companies and other organizations?", answer: "Mr. White partners with leading dog product brands to provide curated recommendations and exclusive deals for our community members." },
  { question: "Can I talk to Mr. White about anything in life?", answer: "Mr. White specializes in dogs and their world, but his wisdom often extends to broader life lessons. Try asking — you might be surprised!" },
  { question: "How does Mr. White help me save money?", answer: "Through exclusive partnerships, discount codes, and smart product recommendations, Mr. White helps you get the best value for your pet care needs." },
  { question: "What kinds of products does Mr. White recommend?", answer: "Mr. White recommends high-quality, vetted products spanning nutrition, grooming, training, health, and lifestyle for dogs of all breeds and ages." },
  { question: "Are my pet's records safe with Mr. White?", answer: "Absolutely. All pet records are encrypted and stored securely. You retain full control over your data at all times." },
  { question: "How does Mr. White support dog-human relationships?", answer: "Through personalized advice, behavioral guidance, and community storytelling, Mr. White helps strengthen the unique bond between dogs and their humans." },
  { question: "What if I need help with a specific dog issue?", answer: "Simply describe the issue to Mr. White and he'll provide tailored guidance, or connect you with a professional if needed." },
  { question: "How do I join Mr. White's Elite pack?", answer: "Visit our membership page and select the Elite Pack plan. You'll get instant access to all premium features upon sign-up." },
];

function AccordionItem({ question, answer }) {
  const [open, setOpen] = useState(false);

  return (
    <div className="border-b border-[#2a2a2a]">
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex justify-between items-center py-4 text-left"
      >
        <span
          className="text-white text-[20px] font-medium pr-4"
          style={{ fontFamily: "sans-serif" }}
        >
          {question}
        </span>
        <span className="text-white flex-shrink-0">
          {open ? (
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
              <path d="M3 10L8 5L13 10" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          ) : (
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
              <path d="M3 6L8 11L13 6" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          )}
        </span>
      </button>
      {open && (
        <div className="pb-4 text-[#aaaaaa] text-[16px] leading-[1.6]" style={{ fontFamily: "sans-serif" }}>
          {answer}
        </div>
      )}
    </div>
  );
}

export default function FaqSection() {
  return (

    <>
    <section className="w-full bg-[#0d0d0d] min-h-screen flex flex-col py-[96px]">
      <div className="flex flex-col lg:flex-row w-full flex-1">
        {/* LEFT PANEL */}
        <div className="relative lg:w-[38%] bg-[#0d0d0d] flex flex-col overflow-hidden min-h-[500px] lg:min-h-screen">
          {/* Background glow / galaxy effect */}
          <div
            className="absolute inset-0 z-0"
            
          />

          {/* Content above image */}
          <div className="relative z-10 px-8 pt-10">
            <h2
              className={`${workSans.className} bold text-[32px] text-[#fff] leading-[1.15]`}
            >
              Discover Mr. White: Your Questions Answered
            </h2>
            <p
              className={`${PublicSans.className} font-medium text-[28px] leading-[100%] tracking-[-0.05em] text-[#D3B86A] mt-6`}
            >
              Frequently Asked Questions
            </p>

            {/* Still have questions card */}
            <div className="mt-8 bg-[#FFFFFF1A] p-5 max-w-[320px] z-50">
              <p className="text-white font-semibold text-[15px] mb-1">Still have questions?</p>
              <p className="text-[#888] text-[12px] mb-4">Can't find your question? Contact us directly!</p>
              {/* Dummy button matching site style */}
              <Button title="Contact Us" icon="/Home/footer/footerbtn.png" href="/contact" 
/>   
            </div>
          </div>

          {/* Dog image at bottom */}
          <div className="relative z-10 flex-1 flex items-end justify-center">
            <div className="relative w-full flex justify-center">
              <Image
                src="/bgFAQS.png"
                width={500}
                height={500}
                alt="dog"
                className="absolute -bottom-25 z-0"
              />
              
              
            </div>
          </div>
        </div>

        {/* RIGHT PANEL — FAQ Accordion */}
        <div className="lg:w-[62%] bg-[#272626] px-8 py-10 overflow-y-auto">
          <div className="max-w-full">
            {faqs.map((faq, i) => (
              <AccordionItem key={i} question={faq.question} answer={faq.answer} />
            ))}
          </div>
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
  );
}