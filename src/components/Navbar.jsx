"use client";
import React, { useEffect, useState } from 'react'
import Image from "next/image";
import { workSans } from '@/lib/fonts';
import Link from "next/link";
import { usePathname } from "next/navigation";

const Navbar = () => {
  const pathname = usePathname();

  const [user, setUser] = useState(null);
  const [showDropdown, setShowDropdown] = useState(false);

  useEffect(() => {
    const storedUser = localStorage.getItem("user");
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("user");
    setUser(null);
  };

  const navItems = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Subscriptions", path: "/subscription" },
  ];

  return (
    <div className="px-12 py-6 bg-[#000]">
      <div className="flex items-center justify-between">

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

            {/* USER DROPDown */}
            {user && (
              <div className="relative">
                <p
                  onClick={() => setShowDropdown(!showDropdown)}
                  className="cursor-pointer hover:text-[#D3B86A]"
                >
                  History Pages
                </p>

                {showDropdown && (
                  <div className="absolute top-[30px] bg-white text-black rounded shadow-md p-3">
                    <p className="cursor-pointer hover:text-red-500" onClick={handleLogout}>
                      Logout
                    </p>
                  </div>
                )}
              </div>
            )}

          </div>

        </div>

        <div className="flex items-center gap-6">

          {/* 🔥 CONDITION */}
          {!user ? (
            <Link
              href="/login"
              className="text-white flex items-center gap-2 hover:text-[#D3B86A]"
            >
              <Image src="/Login.png" width={18} height={18} alt="user" />
              Login
            </Link>
          ) : (
            <p className="text-white">{user.name}</p>
          )}

          <Link
            href="/contact"
            className="bg-[#D3B86A] text-black px-5 py-2 rounded-lg flex items-center gap-2"
          >
            <Image src="/contact.png" width={16} height={16} alt="user" />
            Contact
          </Link>

        </div>

      </div>
    </div>
  )
}

export default Navbar;