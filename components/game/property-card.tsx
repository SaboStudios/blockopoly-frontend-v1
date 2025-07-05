import React from 'react';
import Image from 'next/image';
import { BoardSquare } from "@/types/game";

interface PropertyCardProps {
    square: BoardSquare;
}

const PropertyCard = ({ square }: PropertyCardProps) => {
    const { name, price, color, position, icon } = square;

    // Define classes for different orientations
    const orientationClasses = {
        bottom: 'border-t-8',
        left: 'border-r-8 -rotate-90',
        top: 'border-b-8 rotate-180',
        right: 'border-l-8 rotate-90',
    };

    const textOrientationClasses = {
        bottom: '',
        left: 'pt-4',
        top: '',
        right: 'pt-4',
    }

    return (
        <div
            className={`relative w-full h-full bg-[#0B191A] p-1 flex flex-col justify-between text-white ${orientationClasses[position]}`}
            style={{ borderColor: color }}
        >
            <div className={`flex flex-col items-center ${textOrientationClasses[position]}`}>
                <p className="text-[8px] md:text-[10px] font-bold uppercase text-center leading-tight">{name}</p>
                {/* You will need to provide the images for each property */}
                {icon && <Image src={icon} alt={name} width={40} height={40} className="my-1" />}
            </div>
            <p className="text-[9px] md:text-[11px] font-semibold self-center">${price}</p>
        </div>
    );
};

export default PropertyCard;
