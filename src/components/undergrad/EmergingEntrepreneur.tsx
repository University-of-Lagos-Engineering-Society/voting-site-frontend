"use client";
import React from "react";
import { useGetEmergingEntrepreneurQuery } from "@/redux/slices/undergrad";

export interface FormProps {
  index: number;
  candidate: string;
  setCandidate: React.Dispatch<React.SetStateAction<string>>;
  setIndex: React.Dispatch<React.SetStateAction<number>>;
}

const EmergingEntrepreneur = ({ index, candidate, setCandidate, setIndex }: FormProps) => {
  const { data, isLoading, isError } = useGetEmergingEntrepreneurQuery();
  if (isLoading) return <div>Loading...</div>;
  return (
    <div className="flex flex-col gap-8 mt-4 lg:mt-16">
      <div className="mb-20">
        <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold paris-pro">
          Award : Emerging Entrepreneur
        </h1>
      </div>

      <div>
        <p className="work-sans text-xl lg:text-2xl">
          Cast your vote for the Emerging Entrepreneur
        </p>
        <p className="work-sans italic text-sm">
          You can only select one option.
        </p>
      </div>

      {data && (
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 max-w-7xl w-full mx-auto px-4 pb-8 overflow-y-scroll">
          {data.map((c: { name: any }, i: number) => (
            <Card
              candidate={candidate}
              key={i}
              index={i}
              name={c.name}
              handleClick={() => {
                setCandidate(c.name);
                setIndex(index + 1);
              }}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default EmergingEntrepreneur;

interface CardProps {
  index: number;
  name: string;
  candidate: string;
  handleClick: () => void;
}

// card for the nominees
const Card = ({ index, candidate, name, handleClick }: CardProps) => {
  let selected = candidate === name;
  const _handleClick = () => {
    handleClick();
  };
  return (
    <div className="bg-white text-black py-6 px-4 lg:px-8 flex gap-4 items-center w-full rounded-md">
      <div className="border py-1 px-3 flex items-center rounded-lg">
        {index + 1}.
      </div>
      <div className="">
        {name}
      </div>
      <div
        onClick={_handleClick}
        className={`border
          ${selected ? "border-red-500" : "border-gray-500"}
          ${selected ? "bg-red-500" : ""}
          rounded-full p-3 flex items-center ml-auto cursor-pointer`}
      ></div>
    </div>
  );
};
