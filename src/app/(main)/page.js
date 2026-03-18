import Banner from "@/components/Home/Banner";
import FaqSection from "@/components/Home/FAQs";
import Fifthsec from "@/components/Home/fifthsec";
import Forthsec from "@/components/Home/forthsec";
import Secsection from "@/components/Home/Sec_section";
import Sixthsec from "@/components/Home/Sixthsec";
import Thirdsec from "@/components/Home/Third_sec";
// import Navbar from "@/components/Navbar";
// import Footer from "@/components/Footer";


export default function Home() {
  return (
    <>

    {/* <Navbar /> */}
    <Banner />
    <Secsection />  
    <Thirdsec />
    <Forthsec />
    <Fifthsec />
    <Sixthsec />
    <FaqSection />



    

    </>
  );
}