import { Background } from "@/assets/images";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import { useSelector } from "react-redux";

const Categories = () => {
  const { ules_grad, ules_undergrad, ules_general } = useSelector((state: any) => state.check);
  return (
    <main className="relative flex min-h-screen  flex-col bg-[#141414] px-4 py-6 text-white">
      <div className="max-w-7xl mx-auto w-full">
        <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold paris-pro mt-6 pb-4 lg:pb-6">
          Vote by Categories
        </h1>
        <h3 className="text-lg md:text-xl work-sans text-[#717171] sub-2 pb-4">
          Select a category
        </h3>

        <div className="flex flex-col gap-8 mt-4 lg:mt-16">
          <Card title="Graduate" number={20} to="/grad" voted={ules_grad} />
          <Card
            title="Undergraduate"
            number={15}
            to="/undergrad"
            voted={ules_undergrad}
          />
          <Card title="General" number={22} to="/general" voted={ules_general} />
          <Card title="Results" view to="/categories" voted={false} />
        </div>
        {/* Background */}
        <div className="absolute inset-0 w-full h-full z-10">
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
  number?: number;
  to: string;
  view?: boolean;
  voted: boolean;
}

const Card = ({ title, number, to, view, voted }: CardProps) => (
  <Link
    href={!voted ? to : "/categories"}
    className="w-full py-6 px-4 bg-card cursor-pointer z-50"
  >
    <div className="flex flex-row gap-4 lg:gap-6 mb-6 items-center">
      <h1 className="text-2xl md:text-3xl font-bold paris-pro border-r-2 border-white pr-6">
        {title}
      </h1>
      {number && <h2 className="text-[#717171] work-sans">{number} Awards</h2>}
      {view && <h2 className="text-[#717171] work-sans">View Results</h2>}
    </div>

    {voted ? (
      <h3 className="text-lg md:text-xl work-sans text-[#E1544A] sub-2">
        Voted
      </h3>
    ) : (
      <div className="text-[#717171]">
        {view ? "Coming soon" : "Tap to vote"}
      </div>
    )}
  </Link>
);
