'use client'
import { ChevronLeft, ChevronRight, MoveLeft, MoveRight } from 'lucide-react'
import React, { useState } from 'react'

const Players = () => {
    const [isSidebarOpen, setIsSidebarOpen] = useState(true);

    const toggleSidebar = () => {
        setIsSidebarOpen(!isSidebarOpen);
    };

    return (
        <>
            {isSidebarOpen && (
                <button
                    onClick={toggleSidebar}
                    className="absolute top-0 left-0 bg-[#010F10] z-10 lg:hidden text-[#869298] hover:text-[#F0F7F7] w-[60px] h-[60px] rounded-e-[12px] flex items-center justify-center border-[1px] border-white/10"
                    aria-hidden="true"
                >
                    <ChevronRight />
                </button>
            )}
            <aside
                className={`
                    h-full overflow-y-auto no-scrollbar bg-[#010F10] p-4 rounded-e-[12px] border-r-[1px] border-white/10
                    transition-all duration-300 ease-in-out
                    fixed z-20 top-0 left-0 
                    transform ${isSidebarOpen ? 'translate-x-0 lg:translate-x-0' : '-translate-x-full lg:translate-x-0'}
                    lg:static lg:transform-none
                    ${isSidebarOpen ? 'lg:w-[272px] md:w-1/2 w-full' : 'lg:w-[60px] w-full'}
                `}
            >
                <div className="w-full h-full flex flex-col gap-4">
                    <div className="w-full flex justify-between items-center">
                        {/* Show "Players" title only when the sidebar is open */}
                        <h4 className={`font-[700] font-dmSans md:text-[16px] text-[#F0F7F7] ${!isSidebarOpen && 'hidden'}`}>
                            Players
                        </h4>

                        {/* Toggle button with changing icon */}
                        <button onClick={toggleSidebar} className="text-[#869298] hover:text-[#F0F7F7]">
                            {isSidebarOpen ? <ChevronLeft /> : <ChevronRight />}
                        </button>
                    </div>

                    {/* Player */}
                    <div className={`
                        w-full flex flex-col gap-3 bg-[#0B191A] p-3 rounded-[12px]
                        transition-opacity duration-200
                        ${isSidebarOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'}
                    `}>
                        {/* Example Player Item */}
                        <div className="flex items-center gap-2">
                            <div className="size-[32px] rounded-full bg-[#FFBE04]" />
                            <span className='text-[#F0F7F7] font-medium font-dmSans text-[16px]'>Aji <span className='text-[10px]'>(Me)</span></span>
                        </div>

                        <button type="button" className='w-[118px] h-[29px] border-[1px] border-[#003B3E] rounded-[20px] bg-transparent text-[#869298] hover:text-[#F0F7F7] self-end text-[10px] cursor-pointer'>Change appearance</button>

                    </div>

                    {/* Another player */}
                    <div className={`
                        w-full flex flex-col gap-3 bg-[#0B191A] p-3 rounded-[12px]
                        transition-opacity duration-200
                        ${isSidebarOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'}
                    `}>
                        {/* Example Player Item */}
                        <div className="flex items-center gap-2">
                            <div className="size-[32px] rounded-full bg-[#0E8AED]" />
                            <span className='text-[#F0F7F7] font-medium font-dmSans text-[16px]'>Signor </span>
                        </div>
                    </div>


                </div>
            </aside>
        </>
    )
}

export default Players