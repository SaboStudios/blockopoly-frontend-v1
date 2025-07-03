import Image from 'next/image'
import React from 'react'
import bgImage from "@/public/heroBg.png"
import { FaUsers } from "react-icons/fa6";
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select"
import { MdPrivateConnectivity } from 'react-icons/md';


const GameSettings = () => {
    return (
        <section className="w-full min-h-screen relative">
            <div className="w-full h-full">
                <Image
                    src={bgImage}
                    alt="Background Image"
                    className="w-full h-full object-cover"
                    width={1440}
                    height={1024}
                    priority
                    quality={100}
                />
            </div>

            <main className="w-full min-h-screen absolute top-0 left-0 py-20 flex flex-col items-center justify-start bg-[#010F101F] backdrop-blur-[12px]">
                <div className='w-full flex flex-col items-center mb-4'>
                    <h2 className="text-[#F0F7F7] font-orbitron md:text-[24px] text-[20px] font-[700] text-center">Game Settings</h2>
                    <p className='text-[#869298] text-[16px] font-dmSans text-center'>Since you&apos;re creating a private game room, you get to choose how you want your game to go</p>
                </div>

                {/* First Setting */}
                <div className='w-full max-w-[792px] bg-[#010F10] rounded-[12px] border-[1px] border-[#003B3E] p-[40px] flex flex-col'>
                    {/* maximum players */}
                    <div className='w-full flex justify-between items-center'>
                        <div className="flex flex-col">
                            <div className="flex items-center gap-2">
                                {/* icon */}
                                <FaUsers className='md:w-6 md:h-6 w-5 h-5 text-[#F0F7F7]' />
                                <h4 className='text-[#F0F7F7] md:text-[24px] text-[20px] font-dmSans font-[600]'>Maximum Players</h4>
                            </div>
                            <p className="text-[#455A64] font-[500] font-dmSans text-[16px]">How many players can join the game.</p>
                        </div>

                        {/* select */}
                        <Select>
                            <SelectTrigger className="w-[80px] text-[#73838B] border-[1px] border-[#263238]">
                                <SelectValue placeholder="2" className='text-[#F0F7F7]' />
                            </SelectTrigger>
                            <SelectContent>
                                <SelectItem value="2">2</SelectItem>
                                <SelectItem value="3">3</SelectItem>
                                <SelectItem value="4">4</SelectItem>
                                <SelectItem value="5">5</SelectItem>
                                <SelectItem value="6">6</SelectItem>
                                <SelectItem value="7">7</SelectItem>
                                <SelectItem value="8">8</SelectItem>
                            </SelectContent>
                        </Select>
                    </div>

                    {/* private room */}
                    <div className='w-full flex justify-between items-center'>
                        <div className="flex flex-col">
                            <div className="flex items-center gap-2">
                                {/* icon */}
                                <MdPrivateConnectivity className='md:w-6 md:h-6 w-5 h-5 text-[#F0F7F7]' />
                                <h4 className='text-[#F0F7F7] md:text-[24px] text-[20px] font-dmSans font-[600]'>Private Room</h4>
                            </div>
                            <p className="text-[#455A64] font-[500] font-dmSans text-[16px]">Private rooms can be accessed using the room URL only.</p>
                        </div>

                        {/* checkbox */}

                    </div>
                </div>
            </main>
        </section>
    )
}

export default GameSettings