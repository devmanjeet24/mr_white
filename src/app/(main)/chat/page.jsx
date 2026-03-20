"use client";

import React, { useState } from "react";
import Image from "next/image";
import { PublicSans, workSans } from "@/lib/fonts";
import { CiCircleInfo } from "react-icons/ci";
import { CiBookmark } from "react-icons/ci";
import { FaRegClock } from "react-icons/fa6";
import {
    CiFileOn,
    CiImageOn,
    CiMicrophoneOn
} from "react-icons/ci";
import { FaRegCopy } from "react-icons/fa";
import { BiLike, BiDislike } from "react-icons/bi";
import { IoRefreshOutline } from "react-icons/io5";
import { FiCopy } from "react-icons/fi";
import { FaVolumeHigh } from "react-icons/fa6";


export default function ChatPage() {
    const [activePanel, setActivePanel] = useState(null);

    const togglePanel = (panel) => {
        setActivePanel((prev) => (prev === panel ? null : panel));
    };

    return (
        <div className="bg-[#050505] text-white min-h-screen overflow-hidden">


            <div>
                <Image
                    src="/chat/chatbanner.png"
                    width={1000}
                    height={1000}
                    alt="img"
                    className="w-full h-[400px] object-cover"
                />
            </div>

            <div className={`${PublicSans.className} max-w-[1200px] mx-auto px-6 pt-[80px] pb-[60px]`}>

                {/* Top Bar */}
                <div className={`${PublicSans.className} flex justify-between items-center mb-6`}>

  <button className={`${PublicSans.className} bg-[#111] px-4 py-2 rounded-md text-[13px] flex items-center gap-2 text-[#cfcfcf] hover:bg-[#1a1a1a]`}>
    <CiCircleInfo size={18} />
    How does it work?
  </button>

  <div className={`${PublicSans.className} flex gap-6 text-[13px] text-[#9CA3AF]`}>

    <button
      onClick={() => togglePanel("bookmark")}
      className={`${PublicSans.className} flex items-center gap-1 hover:text-[#D3B86A]`}
    >
      <CiBookmark size={18} />
      Bookmarks
    </button>

    <button
      onClick={() => togglePanel("history")}
      className={`${PublicSans.className} flex items-center gap-1 hover:text-[#D3B86A]`}
    >
      <FaRegClock size={16} />
      History
    </button>

  </div>
</div>

                {/* Chat Container */}
                <div className={`${PublicSans.className} bg-gradient-to-br from-[#0f0f0f] to-[#0a0a0a] rounded-xl p-6 min-h-[500px] flex flex-col justify-between`}>

                    {/* Messages */}
                    <div className={`${PublicSans.className} space-y-6`}>

                        {/* User */}
                        <div className={`${PublicSans.className} flex justify-end`}>
                            <div className={`${PublicSans.className} bg-[#2a2a2a] text-[20px] text-white px-4 py-2 rounded-lg max-w-[320px]`}>
                                Hi just checking in, Mr White.
                            </div>
                        </div>

                        {/* Assistant */}
                        <div className={`${PublicSans.className}`}>
                            <p className={`${PublicSans.className} text-[#cfcfcf] text-[20px]`}>
                                Hi! I'm here — everything's working. What can I help you with today?
                            </p>

                            <div className={`${PublicSans.className} flex gap-4 mt-3 text-[#8a8a8a]`}>
                                <button className={`${PublicSans.className} hover:text-white`}><FaRegCopy /></button>
                                <button className={`${PublicSans.className} hover:text-white`}><BiLike /></button>
                                <button className={`${PublicSans.className} hover:text-white`}><BiDislike /></button>
                                <button className={`${PublicSans.className} hover:text-white`}><IoRefreshOutline /></button>
                                <button className={`${PublicSans.className} hover:text-white`}><FaVolumeHigh /></button>
                            </div>
                        </div>

                    </div>

                    {/* Input Section */}
                    <div className={`${PublicSans.className} mt-10`}>

                        <div className={`${PublicSans.className} bg-gradient-to-br from-[#1a1a1a] to-[#111] rounded-xl px-5 py-4`}>

                            {/* Top */}
                            <div className={`${PublicSans.className} flex items-center justify-between`}>

                                <span className={`${PublicSans.className} text-[#9CA3AF] text-[20px]`}>
                                    Write your message here.
                                </span>

                                <span className={`${PublicSans.className} text-[#6b6b6b] text-[16px]`}>
                                    00/10.000
                                </span>
                            </div>

                            {/* Voice */}
                            <div className={`${PublicSans.className} mt-3`}>
                                <button className={`${PublicSans.className} flex items-center gap-2 bg-[#2a2a2a] px-3 py-1.5 rounded-md text-[12px] text-[#cfcfcf] hover:bg-[#333]`}>
                                    <CiMicrophoneOn />
                                    Voice Message
                                </button>
                            </div>

                            {/* Divider */}
                            <div className={`${PublicSans.className} border-t border-[#2a2a2a] mt-4`} />

                            {/* Bottom Controls */}
                            <div className={`${PublicSans.className} flex items-center justify-between mt-3`}>

                                <div className={`${PublicSans.className} flex items-center gap-6 text-[13px] text-[#9CA3AF]`}>

                                    <button className={`${PublicSans.className} flex text-[20px] items-center gap-2 border border-[#D3B86A] text-[#D3B86A] px-3 py-1.5 rounded-md hover:bg-[#D3B86A]/10`}>
                                        <CiCircleInfo />
                                        Free Plan
                                    </button>

                                    <button className={`${PublicSans.className} flex items-center gap-2 hover:text-white text-[20px]`}>
                                        <CiFileOn />
                                        Attach File
                                    </button>

                                    <button className={`${PublicSans.className} flex items-center gap-2 hover:text-white text-[20px]`}>
                                        <CiImageOn />
                                        Upload Image
                                    </button>

                                    <button className={`${PublicSans.className} flex items-center gap-2 hover:text-white text-[20px]`}>
                                        <CiMicrophoneOn />
                                        Voice Message
                                    </button>

                                    <button className={`${PublicSans.className} flex items-center gap-2 hover:text-white text-[20px]`}>
                                        <CiBookmark />
                                        Bookmark
                                    </button>

                                </div>

                                <button className={`${PublicSans.className} bg-[#D3B86A] w-[38px] h-[38px] flex items-center justify-center rounded-md text-black`}>
                                    ▶
                                </button>

                            </div>

                        </div>
                    </div>

                </div>
            </div>

            {activePanel && (
                <div
                    onClick={() => setActivePanel(null)}
                    className="fixed inset-0 bg-black/60 z-40"
                />
            )}


            <div
                className={`fixed top-0 right-0 h-full w-[380px] bg-[#0b0b0b] border-l border-[#1f1f1f] z-50 transform transition-transform duration-300 ${activePanel ? "translate-x-0" : "translate-x-full"
                    }`}
            >

                <div className="p-6 h-full flex flex-col">

                    <div className="flex items-center justify-between mb-5">

                        <div className="flex items-center gap-3">
                            <button onClick={() => setActivePanel(null)}>✕</button>
                            <h3 className={`text-[18px] font-semibold capitalize ${workSans.className}`}>
                                {activePanel}
                            </h3>
                        </div>

                        {activePanel === "history" && (
                            <button className={`text-[12px] text-[#9CA3AF] ${PublicSans.className}`}>
                                Clear History
                            </button>
                        )}
                    </div>

                    {/* SEARCH (ONLY HISTORY) */}
                    {activePanel === "history" && (
                        <input
                            placeholder="Search History"
                            className={`w-full bg-[#050505] border border-[#222] rounded-md p-2 text-[13px] mb-5 ${PublicSans.className}`}
                        />
                    )}

                    {/* LIST */}
                    <div className={`flex-1 overflow-y-auto flex flex-col gap-4 text-[13px] ${PublicSans.className}`}>

                        {[1, 2, 3, 4].map((item) => (
                            <div key={item} className="flex justify-between items-start border-b border-[#1f1f1f] pb-3">

                                <p className="text-[#9CA3AF] pr-3">
                                    Checking on Mr. White and seeing if he is available.
                                </p>

                                {activePanel === "bookmark" && (
                                    <button className="text-[#9CA3AF] hover:text-white">✕</button>
                                )}
                            </div>
                        ))}

                    </div>
                </div>
            </div>

        </div>
    );
}
