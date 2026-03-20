"use client";
import React, { useState } from 'react'
import './login.css'
import Image from 'next/image';
import { PublicSans } from '@/lib/fonts';
import { useRouter } from "next/navigation";

const Page = () => {
    const router = useRouter();

    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    const handleLogin = () => {
        if (username === "Manjeet Singh" && password === "manjeet@123") {

         
            localStorage.setItem("user", JSON.stringify({
                name: "Manjeet Singh",
                isLoggedIn: true
            }));

            alert("Login Successful");

            router.push("/");
        } else {
            alert("Invalid Credentials");
        }
    };

    return (
        <div className='loginpage'>
            <div className='loginbox'>

                <div className="logologoin">
                    <Image src="/auth/logo.png" width={620} height={200} alt='icon' />
                </div>

                <div className='mt-[90px]'>

                    <div className='inputbox'>
                        <span>
                            <Image src="/auth/signin.png" width={60} height={60} alt='icon' />
                        </span>
                        <input
                            type="text"
                            placeholder='Username'
                            value={username}
                            onChange={(e) => setUsername(e.target.value)}
                        />
                    </div>

                    <div className='inputbox'>
                        <span>
                            <Image src="/auth/password.png" width={60} height={60} alt='icon' />
                        </span>
                        <input
                            type="password"
                            placeholder='Password'
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                        />
                    </div>

                    <div className='mt-[50px] flex justify-between items-center'>
                        <p className={`text-white font-semibold text-[24px] border-b-[3px] border-white ${PublicSans.className}`}>
                            <a href="/register">Sign-up</a>
                        </p>

                        <p className={`text-white font-semibold text-[24px] border-b-[3px] border-white ${PublicSans.className}`}>
                            <a href="#">Lost your password?</a>
                        </p>
                    </div>

                    <div className='flex justify-center items-center gap-[45px] flex-col w-full mt-[50px]'>

                      
                        <div
                            onClick={handleLogin}
                            className='bg-[#323232] cursor-pointer flex justify-center items-center h-[100px] rounded-[22px] gap-[30px] w-full'
                        >
                            <span>
                                <Image src="/auth/Lightning.png" width={60} height={60} alt='icon' />
                            </span>
                            <p className={`${PublicSans.className} font-semibold text-[50px] text-[#fff]`}>
                                Login
                            </p>
                        </div>




                        

                    </div>

                </div>

            </div>
        </div>
    )
}

export default Page;