import Image from "next/image";
// import { workSans } from '@/app/layout'
import { Work_Sans } from "next/font/google";
export const workSans = Work_Sans({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-workSans-sans",
});

export default function Button({ title, icon }) {
  return (
    <button className="flex items-center gap-2 bg-[#D3B86A] px-[40px] py-[12px] rounded-md w-[279px]">
      {icon && <Image src={icon} width={20} height={20} alt="icon" />}
      <span className={`font-medium text-[18px] ${workSans.className}`}>{title}</span>
    </button>
  );
}