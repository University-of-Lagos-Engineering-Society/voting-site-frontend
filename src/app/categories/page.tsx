import { Background } from "@/assets/images";
import React from "react";
import Image from "next/image";
import Link from "next/link";

const Categories = () => {
  return (
    <main className="relative flex min-h-screen xl:h-screen overflow-hidden flex-col bg-[#141414] px-4 py-6 text-white">
      <div className="max-w-7xl mx-auto w-full">
        <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold paris-pro mt-6 pb-4 lg:pb-6">
          Vote by Categories
        </h1>
        <h3 className="text-lg md:text-xl work-sans text-[#717171] sub-2 pb-4">
          Select a category
        </h3>

        <div className="flex flex-col gap-8 mt-4 lg:mt-16">
          <Card title="Graduate" number={7} to="/grad" />
          <Card title="Undergraduate" number={14} to="/undergrad" />
          <Card title="General" number={7} to="/general" />
        </div>
        {/* Background */}
        <div className="absolute lg:top-[200px] left-0 w-full h-full z-10">
          <Image
            src={Background}
            alt="ULES Logo"
            className="cursor-pointer w-full h-full"
          />
        </div>
      </div>
    </main>
  );
};

export default Categories;

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
