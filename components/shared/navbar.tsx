'use client'
import { useScroll, motion, useSpring } from 'framer-motion';
import Logo from './logo';
import LogoIcon from '@/public/logo.png';
import Link from 'next/link';
import { House, Volume2, VolumeOff } from 'lucide-react';
import { useState } from 'react';

const NavBar = () => {
    const [isSoundPlaying, setIsSoundPlaying] = useState(false);
    const { scrollYProgress } = useScroll();

    const scaleX = useSpring(scrollYProgress, {
        stiffness: 100,
        damping: 30,
        restDelta: 0.001,
    });

    return (
        <>
            <motion.div
                className="fixed top-0 left-0 right-0 bg-[#0FF0FC] origin-[0%] h-[2px] z-[42]"
                style={{ scaleX }}
            />

            <header className="w-full h-[87px] flex items-center justify-between px-4 md:px-8 bg-[linear-gradient(180deg,rgba(1,15,16,0.12)_0%,rgba(8,50,52,0.12)_100%)] backdrop-blur-sm">
                {/* Logo */}
                <Logo className="cursor-pointer md:w-[50px] w-[45px]" image={LogoIcon} href="/" />
                {/* Icons */}
                <div className="flex items-center gap-[4px]">
                    {/* home icon */}
                    <Link href="/" className="w-[40px] h-[40px] border-[1px] border-[#0E282A] rounded-[12px] flex justify-center items-center bg-[#011112] text-white cursor-pointer">
                        <House className='w-[16px] h-[16px]' />
                    </Link>
                    {/* Sound/Audio icon */}
                    <button type='button' onClick={() => setIsSoundPlaying(!isSoundPlaying)} className="w-[40px] h-[40px] border-[1px] border-[#0E282A] rounded-[12px] flex justify-center items-center bg-[#011112] text-white cursor-pointer">
                        {isSoundPlaying ? (
                            <Volume2 className='w-[16px] h-[16px]' />
                        ) : (
                            <VolumeOff className='w-[16px] h-[16px]' />
                        )}
                    </button>

                    {/* Connect Button */}
                    <button
                        type="button"
                        className="relative group w-[157px] h-[41px] bg-transparent border-none p-0 overflow-hidden cursor-pointer"
                    >
                        <svg
                            width="157"
                            height="41"
                            viewBox="0 0 157 41"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                            className="absolute top-0 left-0 w-full h-full"
                        >
                            <path
                                d="M6 1H150.899C155.272 1 157.896 5.85486 155.501 9.5127L137.167 37.5127C136.151 39.0646 134.42 40 132.565 40H6C2.96244 40 0.5 37.5376 0.5 34.5V6.5C0.5 3.46243 2.96243 1 6 1Z"
                                fill="#011112"
                                stroke="#0E282A"
                                strokeWidth={1}
                            />
                        </svg>
                        <span className="absolute inset-0 flex items-center ml-8 text-[#00F0FF] text-[14px] leading-[24px] font-orbitron font-medium z-10">
                            Connect
                        </span>
                    </button>
                </div>

            </header>
        </>
    )
}

export default NavBar