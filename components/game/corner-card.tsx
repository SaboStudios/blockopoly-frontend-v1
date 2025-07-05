import React from 'react';
import Image from 'next/image';
import { BoardSquare } from "@/types/game";

interface CornerCardProps {
    square: BoardSquare;
}

const CornerCard = ({ square }: CornerCardProps) => {
    return (
        <div className="w-full h-full bg-[#0B191A] flex flex-col justify-center items-center text-white p-1">
            {square.icon && (
                <Image
                    src={square.icon}
                    alt={square.name}
                    width={48}
                    height={48}
                    className="w-8 h-8 md:w-12 md:h-12"
                />
            )}
            <p className="text-[7px] md:text-[10px] font-bold text-center uppercase mt-1 leading-tight">
                {square.name}
            </p>
        </div>
    );
};

export default CornerCard;
