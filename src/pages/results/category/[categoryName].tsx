import { Background } from "@/assets/images";
import React from "react";
import Image from "next/image";
import Link from "next/link";


const CategoryResults = () => {

    const dummyData = [
        {
            name: "Bozo McBolson",
            votes: 120,
            color: "green"
        },

        {
            name: "Mac Steeze",
            votes: 2,
            color: "red"
        },

        {
            name: "The cooler Mac Steeze",
            votes: 24,
            color: "blue"
        },
        {
            name: "Somefine assnigga",
            votes: 140,
            color: "yellow"
        }
    ]

    let total = 0 ;
    dummyData.forEach(dum => total += dum.votes);

    return (
        <main className="relative flex min-h-screen flex-col bg-[#141414] px-12 py-16 text-white">
            <div className="max-w-7xl mx-auto w-full">
                <h1 className="text-3xl md:text-4xl uppercase lg:text-5xl paris-pro mt-6 pb-2 lg:pb-6">
                    Most Handsome
                </h1>
                <h4 className="text-lg md:text-xl work-sans text-[#717171] sub-2 pb-12">
                    voting still in progress
                </h4>
                <div className="flex flex-col justify-between items-center gap-10">
                    <div className="w-full py-12 px-4 bg-card cursor-pointer z-50 flex flex-col lg:flex-row gap-8 justify-around items-center">
                        <div className="flex flex-col justify-around items-center px-2 py-2  h-1/3 w-3/4 lg:w-1/3">
                            <h1 className="lg:text-[48px] text-[#25B260]">3</h1>
                            <h4 className="text-[#717171] text-center">No of nominees</h4>
                        </div>

                        <div className="flex flex-col justify-around items-center px-2 py-6   h-1/3 w-3/4 lg:w-1/3 border-t-2 border-b-2 lg:border-0 lg:border-l-2 lg:border-r-2 border-[#313131]">
                            <h1 className="lg:text-[48px] text-[#2D57E1]">76</h1>
                            <h4 className="text-[#717171] text-center"> No of votes of leading nominee</h4>
                        </div>

                        <div className="flex flex-col justify-around items-center px-2 py-2 h-1/3 w-3/4 lg:w-1/3">
                            <h1 className="lg:text-[48px] text-[#E1544A]">19%</h1>
                            <h4 className="text-[#717171] text-center">No of votes of leading nominee</h4>
                        </div>

                    </div>

                    <div className="w-full py-12 px-4 bg-card cursor-pointer z-50 flex flex-col justify-around items-start gap-12">
                        {dummyData.map(({ name, votes, color }) => {
                            return (

                                <div className="flex items-start gap-6 ml-8">
                                    <div className="flex flex-col gap-5 items-start justify-between">
                                        <div className="bg-white h-20 w-20 rounded-full text-[#313131] flex items-center justify-center font-bold text-[24px]">{votes}</div>
                                        <div className="text-[12px]">{name}</div>
                                    </div>
                                    <BarsContainer numOfBars={votes} colOfBars={color} />
                                </div>
                            );
                        })}

                    </div>


                </div>
                {/* Background */}
                <div className="absolute lg:top-[0px] left-0 w-full h-full z-10">
                    <Image
                        src={Background}
                        alt="ULES Logo"
                        className="w-full h-full"
                    />
                </div>
            </div>
        </main>
    );
};

export default CategoryResults;

interface CardProps {
    title: string;
    number: number;
    to: string;
}

const Card = ({ title, number, to }: CardProps) => (
    <Link href={to} className="w-full py-6 px-4 bg-card cursor-pointer z-50">
        <div className="flex flex-row gap-4 lg:gap-6 mb-6 items-end">
            <h1 className="text-2xl md:text-3xl font-bold paris-pro">{title}</h1>
            <div className="font-3xl">|</div>

            <h2 className="text-[#717171] work-sans">{number} Awards</h2>
        </div>

        <div className="text-[#717171]">Tap to Vote</div>
    </Link>
);


interface BarProps {

    numOfBars: number,
    colOfBars: string
}

const Bar = ({ numOfBars, colOfBars }: BarProps) => (
    <div
        className={
            colOfBars === "green"
                ? "bg-[#25B260] h-20 w-[0.5px]"
                : colOfBars === "blue"
                    ? "bg-[#2D57E1] h-20 w-[0.5px]"
                    : colOfBars === "red"
                        ? "bg-[#E1544A] h-20 w-[0.5px]"
                        : colOfBars === "yellow"
                            ? "bg-[#FBE241] h-20 w-[0.5px]"
                            : ""
        }
    ></div>
);

const BarsContainer = ({ numOfBars, colOfBars }: BarProps) => {
    const bars = Array.from({ length: numOfBars}, (_, index) => (
        <Bar key={index} numOfBars={numOfBars} colOfBars={colOfBars} />
    ));

    return <div className="flex gap-1 items-center">{bars}</div>;
};
