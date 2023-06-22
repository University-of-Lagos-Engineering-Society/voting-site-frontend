import { Background } from "@/assets/images";
import React from "react";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";


const Results = () => {

  const [activeTab, setActiveTab] = useState(0);

  const handleTabChange = (index: number) => {
      setActiveTab(index);
  };

  return (
    <main className="relative flex min-h-screen flex-col bg-[#141414] px-4 py-6 text-white">
      <div className="max-w-7xl mx-auto w-full">
        <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold paris-pro mt-6 pb-4 lg:pb-0">
          Live Results
        </h1>
        <h3 className="text-lg md:text-xl work-sans text-[#717171] sub-2 pb-12">
          Select a category
        </h3>

        <div className="flex-col">
            <div className="max-w-7xl mx-auto w-full">
                <div className="flex flex-row border-b-[1px] border-[#717171] w-full gap-4 lg:gap-8">
                    <div
                        className={`p-2 pb-1 text-lg font-medium cursor-pointer ${activeTab === 0 ? 'border-b-[3px] border-red-700' : ''
                            }`}
                        onClick={() => handleTabChange(0)}
                    >
                        Graduate
                    </div>
                    <div
                        className={`p-2 pb-1 text-lg font-medium cursor-pointer ${activeTab === 1 ? 'border-b-[3px] border-red-700' : ''
                            }`}
                        onClick={() => handleTabChange(1)}
                    >
                        Undergraduate
                    </div>
                    <div
                        className={`p-2 pb-1 text-lg font-medium cursor-pointer ${activeTab === 2 ? 'border-b-[3px] border-red-700' : ''
                            }`}
                        onClick={() => handleTabChange(2)}
                    >
                        General
                    </div>
                </div>
            </div>
            <div className="w-full lg:w-3/4">

                {activeTab === 0 && <div className="flex flex-col gap-8 my-4 lg:my-16 w-full">
                    <Card awardName="Socialite Of The Year" numOfNoms={9} numOfVotes={78} to="/" />
                    <Card awardName="Life Of The Party" numOfNoms={9} numOfVotes={25} to="/" />
                    <Card awardName="Couple Of The Year" numOfNoms={4} numOfVotes={92} to="/" />
                    <Card awardName="Emerging Entrepreneur Of The Year*" numOfNoms={1} numOfVotes={42} to="/" />
                    <Card awardName="Most Influential" numOfNoms={9} numOfVotes={10} to="/" />
                    <Card awardName="Most Beautiful" numOfNoms={10} numOfVotes={61} to="/" />
                    <Card awardName="Most Handsome" numOfNoms={10} numOfVotes={61} to="/" />
                    <Card awardName="Most Popular" numOfNoms={9} numOfVotes={9} to="/" />
                    <Card awardName="Most Versatile" numOfNoms={10} numOfVotes={97} to="/" />
                    <Card awardName="Best Dressed Female" numOfNoms={8} numOfVotes={72} to="/" />
                    <Card awardName="Best Dressed Male" numOfNoms={10} numOfVotes={48} to="/" />
                    <Card awardName="Outstanding Academic Performance Award" numOfNoms={8} numOfVotes={115} to="/" />
                    <Card awardName="Social Impact Award*" numOfNoms={7} numOfVotes={89} to="/" />
                    <Card awardName="Social Media Personality" numOfNoms={7} numOfVotes={52} to="/" />
                    <Card awardName="Startup Visionary Award" numOfNoms={9} numOfVotes={76} to="/" />
                    <Card awardName="Student Entertainer Of The Year" numOfNoms={8} numOfVotes={107} to="/" />
                    <Card awardName="Tech Personality Of The Year Female" numOfNoms={7} numOfVotes={93} to="/" />
                    <Card awardName="Tech Personality Of The Year Male" numOfNoms={10} numOfVotes={68} to="/" />
                    <Card awardName="ULES Sport Personality Of The Year Female" numOfNoms={4} numOfVotes={41} to="/" />
                    <Card awardName="ULES Sport Personality Of The Year Male" numOfNoms={9} numOfVotes={82} to="/" />
                </div>}

                {activeTab === 1 &&
                    <div className="flex flex-col gap-8 my-4 lg:my-16 w-full">
                        <Card awardName="Clique Of The Year" numOfNoms={10} numOfVotes={101} to="/" />
                        <Card awardName="Creative Of The Year" numOfNoms={10} numOfVotes={79} to="/" />
                        <Card awardName="Most Fashionable Female" numOfNoms={9} numOfVotes={42} to="/" />
                        <Card awardName="Most Fashionable Male" numOfNoms={8} numOfVotes={87} to="/" />
                        <Card awardName="Socialite Of The Year" numOfNoms={10} numOfVotes={30} to="/" />
                        <Card awardName="Life Of The Party" numOfNoms={9} numOfVotes={90} to="/" />
                        <Card awardName="Couple Of The Year" numOfNoms={4} numOfVotes={62} to="/" />
                        <Card awardName="Emerging Entrepreneur Of The Year" numOfNoms={10} numOfVotes={110} to="/" />
                        <Card awardName="Most Influential" numOfNoms={10} numOfVotes={93} to="/" />
                        <Card awardName="Most Beautiful" numOfNoms={10} numOfVotes={59} to="/" />
                        <Card awardName="Most Handsome" numOfNoms={10} numOfVotes={61} to="/" />
                        <Card awardName="Most Popular" numOfNoms={10} numOfVotes={80} to="/" />
                        <Card awardName="Tech Personality Of The Year Female" numOfNoms={10} numOfVotes={71} to="/" />
                        <Card awardName="Tech Personality Of The Year Male" numOfNoms={10} numOfVotes={47} to="/" />
                        <Card awardName="ULES Sport Personality Of The Year Female" numOfNoms={7} numOfVotes={88} to="/" />
                        <Card awardName="ULES Sport Personality Of The Year Male" numOfNoms={10} numOfVotes={67} to="/" />

                    </div>}
                {activeTab === 2 && 
                <div className="flex flex-col gap-8 my-4 lg:my-16 w-full">
                    <Card awardName="Exco Body Of The Year" numOfNoms={7} numOfVotes={85} to="/" />
                    <Card awardName="Exco Of The Year" numOfNoms={2} numOfVotes={42} to="/" />
                    <Card awardName="Face Of Department BME" numOfNoms={5} numOfVotes={127} to="/" />
                    <Card awardName="Face Of Department CEG" numOfNoms={9} numOfVotes={73} to="/" />
                    <Card awardName="Face Of Department CHG" numOfNoms={1} numOfVotes={91} to="/" />
                    <Card awardName="Face Of Department CPE" numOfNoms={6} numOfVotes={55} to="/" />
                    <Card awardName="Face Of Department EEG" numOfNoms={3} numOfVotes={17} to="/" />
                    <Card awardName="Face Of Department MEG" numOfNoms={8} numOfVotes={38} to="/" />
                    <Card awardName="Face Of Department MME" numOfNoms={4} numOfVotes={62} to="/" />
                    <Card awardName="Face Of Department PGG" numOfNoms={7} numOfVotes={105} to="/" />
                    <Card awardName="Face Of Department SSG" numOfNoms={0} numOfVotes={13} to="/" />
                    <Card awardName="Face Of Department SVY" numOfNoms={5} numOfVotes={76} to="/" />
                    <Card awardName="Face Of Year Four" numOfNoms={3} numOfVotes={42} to="/" />
                    <Card awardName="Face Of Year Three" numOfNoms={6} numOfVotes={98} to="/" />
                    <Card awardName="Lecturer Of The Year" numOfNoms={9} numOfVotes={113} to="/" />
                    <Card awardName="Rookie Of The Year" numOfNoms={11} numOfVotes={10} to="/" />
                    <Card awardName="Sophomore Of The Year" numOfNoms={4} numOfVotes={56} to="/" />
                    <Card awardName="ULES Person Of The Year Award" numOfNoms={8} numOfVotes={76} to="/" />
                    <Card awardName="ULES Trailblazer Award" numOfNoms={2} numOfVotes={32} to="/" />
                    <Card awardName="ULES Volunteer Of The Year Award" numOfNoms={5} numOfVotes={45} to="/" />
                </div>}
            </div>
        </div>

        {/* Background */}
        <div className="absolute inset-0 left-0 w-full h-full z-10">
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

export default Results;

interface CardProps {
  awardName: string;
  numOfNoms: number;
  numOfVotes: number;
  to: string;
}

const Card = ({ awardName, numOfNoms, to }: CardProps) => (
  <Link
    href={to}
    className="w-full py-6 px-8 bg-card cursor-pointer z-50 border"
  >
    <div className="flex flex-col lg:flex-row gap-4 lg:gap-6 mb-6 items-center">
      <h1 className="text-2xl md:text-3xl border-b-2 lg:border-b-0 lg:border-r-2 border-white pr-6 text-gray-200">
        {awardName}
      </h1>
      <h2 className="text-[#717171] work-sans">{numOfNoms} Nominees</h2>
    </div>
  </Link>
);