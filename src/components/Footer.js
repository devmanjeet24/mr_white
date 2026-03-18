import Image from "next/image";
import Link from "next/link";
import Button from "@/components/Button";

const navLinks = ["Home", "About", "Subscriptions"];
const communityLinks = ["Discord", "Telegram"];

const socialLinks = [
  {
    label: "Instagram",
    href: "#",
    type: "image",
    src: "/Home/footer/instagram.png",
  },
  {
    label: "Facebook",
    href: "#",
    type: "image",
    src: "/Home/footer/facebook.png",
  },
  {
    label: "X.com",
    href: "#",
    type: "image",
    src: "/Home/footer/x.png",
  },
  {
    label: "Youtube",
    href: "#",
    type: "image",
    src: "/Home/footer/youtube.png",
  },
];

export default function Footer() {
  return (
    <footer className="w-[1440px] mx-auto">

      <div className="bg-[linear-gradient(178.16deg,rgba(255,255,255,0.1)_1.45%,rgba(0,0,0,0.1)_98.35%)]  text-white px-[60px] pt-10">
        <div className="flex items-start justify-between gap-10 pb-8">

          {/* Brand */}
          <div className="flex flex-col gap-[14px] min-w-[180px] max-w-[205px]">
            {/* Logo + Name */}
            <div className="flex items-center gap-[10px]">
              {/* Dog Icon */}
              <div className=" rounded-[8px] flex items-center justify-center shrink-0">
                <Image
                  src="/Home/footer/Footerlogo.png"
                  width={213}
                  height={47}
                  alt="logo"
                  className=""
                />
              </div>



            </div>

            {/* Description */}
            <p
              className="text-[#cccccc] text-[14px] leading-[150%]"
              style={{
                fontFamily: "'Public Sans', sans-serif",
                fontWeight: 400,
                letterSpacing: "-0.05em",
              }}
            >
              Lorem ipsum dolor sit amet,<br />
              consectetur adipiscing elit, sed do ei.
            </p>
          </div>

          {/* ── COLUMNS ── */}
          <div className="flex gap-[80px] items-start">

            {/* Navigation */}
            <div className="flex flex-col">
              <h4
                className="text-[#C8A84B] text-[16px] mb-4 pl-[10px] relative pl-6 before:content-[''] before:absolute before:left-0 before:top-1/2 before:-translate-y-1/2 before:w-[1px] before:h-4 before:bg-white"
                style={{
                  fontFamily: "'Work Sans', sans-serif",
                  fontWeight: 600,
                  lineHeight: "150%",
                  letterSpacing: "-0.05em",
                }}
              >
                Navigation
              </h4>
              <ul className="flex flex-col gap-[10px] list-none p-0 m-0">
                {navLinks.map((item) => (
                  <li key={item}>
                    <Link
                      href="#"
                      className="text-[#cccccc] no-underline hover:text-white transition-colors"
                      style={{
                        fontFamily: "'Public Sans', sans-serif",
                        fontWeight: 500,
                        fontSize: "14px",
                        lineHeight: "150%",
                        letterSpacing: "-0.05em",
                      }}
                    >
                      {item}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Social Media */}
            <div className="flex flex-col">
              <h4
                className="text-[#C8A84B] text-[16px] mb-4 pl-[10px] relative pl-6 before:content-[''] before:absolute before:left-0 before:top-1/2 before:-translate-y-1/2 before:w-[1px] before:h-4 before:bg-white"
                style={{
                  fontFamily: "'Work Sans', sans-serif",
                  fontWeight: 600,
                  lineHeight: "150%",
                  letterSpacing: "-0.05em",
                }}
              >
                Social Media
              </h4>
              <ul className="flex flex-col gap-[10px] list-none p-0 m-0">
                {socialLinks.map((s) => (
                  <li key={s.label}>
                    <Link
                      href={s.href}
                      className="flex items-center gap-2 no-underline group"
                    >
                      {/* Icon */}
                      {s.type === "image" ? (
                        <div className="w-[22px] h-[22px] rounded-[4px] overflow-hidden flex items-center justify-center shrink-0">
                          <Image
                            src={s.src}
                            alt={s.label}
                            width={18}
                            height={18}
                            className="object-cover"
                          />
                        </div>
                      ) : (
                        <div
                          className={`w-[22px] h-[22px] rounded-[4px] flex items-center justify-center shrink-0 ${s.bg}`}
                        >
                          {s.svg}
                        </div>
                      )}

                      {/* Label */}
                      <span
                        className="text-[#cccccc] group-hover:text-white transition-colors"
                        style={{
                          fontFamily: "'Public Sans', sans-serif",
                          fontWeight: 500,
                          fontSize: "14px",
                          lineHeight: "150%",
                          letterSpacing: "-0.05em",
                        }}
                      >
                        {s.label}
                      </span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Community */}
            <div className="flex flex-col">
              <h4
                className="text-[#C8A84B] text-[16px] mb-4 pl-[10px] relative pl-6 before:content-[''] before:absolute before:left-0 before:top-1/2 before:-translate-y-1/2 before:w-[1px] before:h-4 before:bg-white"
                style={{
                  fontFamily: "'Work Sans', sans-serif",
                  fontWeight: 600,
                  lineHeight: "150%",
                  letterSpacing: "-0.05em",
                }}
              >
                Community
              </h4>
              <ul className="flex flex-col gap-[10px] list-none p-0 m-0">
                {communityLinks.map((item) => (
                  <li key={item}>
                    <Link
                      href="#"
                      className="text-[#cccccc] no-underline hover:text-white transition-colors"
                      style={{
                        fontFamily: "'Public Sans', sans-serif",
                        fontWeight: 500,
                        fontSize: "14px",
                        lineHeight: "150%",
                        letterSpacing: "-0.05em",
                      }}
                    >
                      {item}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Contact Button */}
          <div className="self-start mt-1">
            <Button title="Contact Us" icon="/Home/footer/footerbtn.png" href="/contact" 
/>
          </div>

        </div>
      </div>

      <div className=" px-[60px] py-[10px] flex items-center justify-between bg-[#FFFFFF1A]">
        <span
          className="text-[#888888] text-[13px]"
          style={{ fontFamily: "'Public Sans', sans-serif", fontWeight: 400 }}
        >
          All rights reserved ©
        </span>
        <div className="flex items-center gap-[6px]">
          <Link
            href="#"
            className="text-[#888888] text-[13px] no-underline hover:text-[#ccc] transition-colors"
            style={{ fontFamily: "'Public Sans', sans-serif", fontWeight: 400 }}
          >
            Terms &amp; Conditions
          </Link>
          <span className="text-[#555555] text-[13px]">/</span>
          <Link
            href="#"
            className="text-[#888888] text-[13px] no-underline hover:text-[#ccc] transition-colors"
            style={{ fontFamily: "'Public Sans', sans-serif", fontWeight: 400 }}
          >
            Privacy Policy
          </Link>
        </div>
      </div>



    </footer>
  );
}