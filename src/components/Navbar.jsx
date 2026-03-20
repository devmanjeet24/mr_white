"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import { workSans } from "@/lib/fonts";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

const Navbar = () => {
  const pathname = usePathname();

  const [user, setUser] = useState(null);
  const [showHistoryDropdown, setShowHistoryDropdown] = useState(false);
  const [showUserDropdown, setShowUserDropdown] = useState(false);

  useEffect(() => {
    const storedUser = localStorage.getItem("user");
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("user");
    setUser(null);
    setShowUserDropdown(false);
  };

  const navItems = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Subscriptions", path: "/subscription" },
  ];

  return (
    <div className="bg-[#000]">
      <div className="px-12 py-6 w-[1440px] mx-auto ">
        <div className="flex items-center justify-between">

          {/* LEFT SECTION */}
          <div className="flex items-center gap-[80px]">
            <Image src="/logo.png" width={145} height={46} alt="logo" />

            <div className="flex items-center gap-8 text-white text-[16px]">

              {navItems.map((item) => {
                const isActive = pathname === item.path;

                return (
                  <Link
                    key={item.path}
                    href={item.path}
                    className={`flex items-center gap-2 transition ${isActive ? "text-[#D3B86A]" : "hover:text-[#D3B86A]"
                      } ${workSans.className}`}
                  >
                    {isActive && (
                      <span className="w-2 h-2 bg-[#D3B86A] rounded-full"></span>
                    )}
                    {item.name}
                  </Link>
                );
              })}



              {/* shadcnui dropdown menu start  */}


              {user && (
                <DropdownMenu modal={false}>

                  {/* TRIGGER */}
                  <DropdownMenuTrigger asChild>
                    <p
                      className={`flex items-center gap-2 cursor-pointer transition ${["/chat", "/collection", "/hub", "/productdetail"].includes(pathname)
                          ? "text-[#D3B86A]"
                          : "text-white hover:text-[#D3B86A]"
                        } ${workSans.className}`}
                    >
                      {["/chat", "/collection", "/hub", "/productdetail"].includes(pathname) && (
                        <span className="w-2 h-2 bg-[#D3B86A] rounded-full"></span>
                      )}
                      Pages
                    </p>
                  </DropdownMenuTrigger>

                  {/* CONTENT */}
                  <DropdownMenuContent
                    align="end"
                    className="w-[180px] bg-[#0f0f0f] border border-[#2A2A2A] rounded-lg p-[6px] shadow-xl"
                  >

                    {/* ITEM */}
                    <DropdownMenuItem asChild>
                      <Link
                        href="/chat"
                        className="dropdown-item"
                      >
                        Chat
                      </Link>
                    </DropdownMenuItem>

                    <DropdownMenuItem asChild>
                      <Link href="/collection" className="dropdown-item">
                        Collection
                      </Link>
                    </DropdownMenuItem>

                    <DropdownMenuItem asChild>
                      <Link href="/hub" className="dropdown-item">
                        Hub
                      </Link>
                    </DropdownMenuItem>

                    <DropdownMenuItem asChild>
                      <Link href="/productdetail" className="dropdown-item">
                        Product
                      </Link>
                    </DropdownMenuItem>

                  </DropdownMenuContent>
                </DropdownMenu>
              )}



              {/* shadcnui dropdown menu ends  */}



            </div>
          </div>

          {/* RIGHT SECTION */}
          <div className="flex items-center gap-6">

            {/* ✅ USER SECTION */}
            {!user ? (
              <Link
                href="/login"
                className={`flex items-center gap-2 text-white hover:text-[#D3B86A] transition ${workSans.className}`}
              >
                <Image src="/Login.png" width={18} height={18} alt="user" />
                Login
              </Link>
            ) : (
              <div className="relative">
                <p
                  onClick={() => setShowUserDropdown(!showUserDropdown)}
                  className={`cursor-pointer text-white hover:text-[#D3B86A] transition ${workSans.className}`}
                >
                  {user.name}
                </p>

                {showUserDropdown && (
                  <div className="absolute right-0 top-[35px] bg-[#0f0f0f] text-white border border-[#2A2A2A] rounded-lg shadow-lg p-3 min-w-[120px]">
                    <p
                      className="cursor-pointer hover:text-red-500 transition"
                      onClick={handleLogout}
                    >
                      Logout
                    </p>
                  </div>
                )}
              </div>
            )}

            {/* CONTACT */}
            <Link
              href="/contact"
              className={`bg-[#D3B86A] font-medium text-[20px] text-black px-5 py-2 rounded-lg flex items-center gap-2 hover:opacity-90 transition ${workSans.className}`}
            >
              <Image src="/contact.png" width={16} height={16} alt="contact" />
              Contact
            </Link>

          </div>


        </div>
      </div>
    </div>
  );
};

export default Navbar;