import React from 'react';
import { BoardSquare } from "@/types/game";
import { GrHelp } from 'react-icons/gr';

interface SpecialCardProps {
    square: BoardSquare;
}

const SpecialCard = ({ square }: SpecialCardProps) => {
    const { position } = square;

    const orientationClasses = {
        bottom: '',
        left: '-rotate-90',
        top: 'rotate-180',
        right: 'rotate-90',
    };

    return (
        <div className={`w-full h-full bg-[#0B191A] flex justify-center items-center ${orientationClasses[position]}`}>
            <GrHelp className="text-cyan-400 size-8 md:size-12" />
        </div>
    );
};

export default SpecialCard;
