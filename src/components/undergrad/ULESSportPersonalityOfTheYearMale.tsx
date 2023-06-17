"use client";
import React from "react";
import { useGetULESSportPersonalityOfTheYearMaleQuery } from "@/redux/slices/undergrad";
import ImageSelectoooor from "../ImageSelectoooor";

export interface FormProps {
  index: number;
  candidate: any;
  setCandidate: React.Dispatch<React.SetStateAction<any>>;
  setIndex: React.Dispatch<React.SetStateAction<number>>;
}

const ULESSportPersonalityOfTheYearMale = ({ index, candidate, setCandidate, setIndex }: FormProps) => {
  const { data, isLoading, isError } = useGetULESSportPersonalityOfTheYearMaleQuery();
  return (
    <div className="flex flex-col gap-8 mt-4 lg:mt-16">
      <div className="mb-10 flex flex-col gap-6">
        <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold paris-pro">
          Award : ULES Male Sport Personality of the Year
        </h1>
        <ImageSelectoooor image_name="ULESSportPersonalityOfTheYearMale" />
      </div>

      <div className="w-full flex flex-col lg:flex-row items-center justify-between">
        <div>
          <p className="work-sans text-xl lg:text-2xl">
            Cast your vote for the ULES Male Sport Personality of the Year
          </p>
          <p className="work-sans italic text-sm">
            You can only select one option.
          </p>
        </div>

        <button
          onClick={(e) => {
            e.preventDefault();
            setIndex(index - 1);
          }}
          className="mt-6 lg:mt-0 ml-auto lg:ml-0 w-fit bg-[#c7291f] text-white font-bold rounded-full flex justify-center items-center gap-1 px-12 py-3"
        >
          Back
        </button>
      </div>

      {isLoading && (
        <div className="w-full h-full flex items-center justify-center mt-10 lg:mt-20">
          {/* a spinner */}
          <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-gray-200"></div>
        </div>
      )}

      {data && (
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 max-w-7xl w-full mx-auto px-4 pb-8 overflow-y-scroll">
          {data.map((c: { name: string; id: any }, i: number) => (
            <Card
              candidate={candidate}
              key={i}
              index={i}
              name={c.name}
              handleClick={() => {
                setCandidate(c);
                //after one second, go to the next page
                setTimeout(() => {
                  setIndex(index + 1);
                }, 1000);
              }}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default ULESSportPersonalityOfTheYearMale;

interface CardProps {
  index: number;
  name: string;
  candidate: any;
  handleClick: () => void;
}

// card for the nominees
const Card = ({ index, candidate, name, handleClick }: CardProps) => {
  let selected = candidate?.name === name;
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
