"use client";

import React, { useState } from "react";
import Image from "next/image";
import { PublicSans, workSans } from "@/lib/fonts";

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

            <div className="max-w-[1200px] mx-auto px-6 pt-[80px] pb-[60px] relative">


                <div className="flex justify-between items-center mb-6">
                    <button className={`bg-[#111] px-4 py-2 rounded-md text-[13px] ${PublicSans.className}`}>
                        How does it work?
                    </button>

                    <div className={`flex gap-6 text-[13px] ${PublicSans.className}`}>
                        <button onClick={() => togglePanel("bookmark")} className="hover:text-[#D3B86A]">Bookmarks</button>
                        <button onClick={() => togglePanel("history")} className="hover:text-[#D3B86A]">History</button>
                    </div>
                </div>


                <div className="bg-gradient-to-br from-[#0f0f0f] to-[#0a0a0a] rounded-xl p-6 min-h-[420px] flex flex-col justify-between">


                    <div>
                        <p className={`text-[#9CA3AF] text-[14px] ${PublicSans.className}`}>
                            Hi! I'm here — everything's working. What can I help you with today?
                        </p>
                    </div>


                    <div className="mt-8">

                        <textarea
                            placeholder="Write your message here."
                            className={`w-full bg-transparent border border-[#2a2a2a] rounded-lg p-4 text-[14px] outline-none ${PublicSans.className}`}
                        />

                        <div className="flex items-center justify-between mt-4">

                            <div className={`flex items-center gap-5 text-[13px] text-[#9CA3AF] ${PublicSans.className}`}>
                                <button className="bg-[#1a1a1a] px-3 py-1 rounded">Free Plan</button>
                                <button>Attach File</button>
                                <button>Upload Image</button>
                                <button>Voice Message</button>
                                <button>Bookmark</button>
                            </div>

                            <button className="bg-[#D3B86A] w-[40px] h-[40px] flex items-center justify-center rounded-md text-black">
                                ▶
                            </button>
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
