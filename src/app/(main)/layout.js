import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function MainLayout({ children }) {
  return (
    <>
      <Navbar />
      <div className="mx-auto w-[1440px] bg-[#000]">
        {children}
      </div>
      <Footer />
    </>
  );
}