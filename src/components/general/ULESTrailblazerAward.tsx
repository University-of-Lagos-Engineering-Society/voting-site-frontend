"use client";
import React from "react";
import { useGetULESTrailblazerAwardQuery } from "@/redux/slices/general";

import ImageSelectoooor from "../ImageSelectoooor";

export interface FormProps {
  index: number;
  candidate: any;
  setCandidate: React.Dispatch<React.SetStateAction<any>>;
  setIndex: React.Dispatch<React.SetStateAction<number>>;
}

const ULESTrailblazerAward = ({
  index,
  candidate,
  setCandidate,
  setIndex,
}: FormProps) => {
  const { data, isLoading, isError } = useGetULESTrailblazerAwardQuery();
  
  return (
    <div className="flex flex-col gap-8 mt-4 lg:mt-16">
      <div className="mb-10 flex flex-col gap-6">
        <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold paris-pro">
          Award : ULES Trailblazer
        </h1>
        <ImageSelectoooor />
      </div>

      <div className="w-full flex flex-col lg:flex-row items-center justify-between">
        <div>
          <p className="work-sans text-xl lg:text-2xl">
          Cast your vote for the ULES Trailblazer of the Year
        </p>
        <p className="work-sans italic text-sm">
          You can only select one option.
        </p>
          </div>
        <div className="flex items-center lg:justify-between w-full md:w-fit gap-4 lg:gap-8">
          <button
            onClick={(e) => {
              e.preventDefault();
              setIndex(index - 1);
            }}
            className="mt-6 lg:mt-0 w-fit bg-[#c7291f] text-white font-bold rounded-full flex justify-center items-center gap-2 px-8 py-3"
          >
            <svg width="15" height="11" viewBox="0 0 15 11" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M5.23304 8.48309C5.16061 8.55552 5.06596 8.59164 4.97112 8.59164C4.87629 8.59164 4.78163 8.55552 4.70921 8.48309L1.35249 5.12674C1.28303 5.05728 1.24395 4.963 1.24395 4.86483C1.24395 4.76666 1.28303 4.67238 1.35249 4.60292L4.70903 1.24601C4.85369 1.10135 5.08819 1.10135 5.23285 1.24601C5.37752 1.39067 5.37752 1.62517 5.23285 1.76984L2.4822 4.52086C2.85581 4.51012 3.25461 4.49344 3.67156 4.47511C6.6956 4.34211 10.4596 4.17726 12.4557 6.08734C13.3188 6.91346 13.7563 8.0591 13.7563 9.49203C13.7563 9.69653 13.5904 9.86249 13.3859 9.86249C13.1814 9.86249 13.0154 9.70468 13.0154 9.50018C13.0154 8.25989 12.6646 7.32949 11.9433 6.63895C10.1759 4.94744 6.4348 5.12822 3.70416 5.24788C3.31481 5.26511 2.94138 5.29289 2.58667 5.31345L5.23304 7.95926C5.3777 8.10393 5.3777 8.33843 5.23304 8.48309Z" fill="white" stroke="white" />
            </svg>

            Back
          </button>

          <button
            onClick={(e) => {
              e.preventDefault();
              setIndex(index + 1);
            }}
            className="mt-6 lg:mt-0 ml-auto lg:ml-0 w-fit bg-[#c7291f] text-white font-bold rounded-full flex justify-center items-center gap-2 px-8 py-3"
          >
            Next
            <svg width="15" height="11" viewBox="0 0 15 11" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M9.76721 8.48309C9.83963 8.55552 9.93428 8.59164 10.0291 8.59164C10.124 8.59164 10.2186 8.55552 10.291 8.48309L13.6478 5.12674C13.7172 5.05728 13.7563 4.963 13.7563 4.86483C13.7563 4.76666 13.7172 4.67238 13.6478 4.60292L10.2912 1.24601C10.1466 1.10135 9.91206 1.10135 9.76739 1.24601C9.62273 1.39067 9.62273 1.62517 9.76739 1.76984L12.518 4.52086C12.1444 4.51012 11.7456 4.49344 11.3287 4.47511C8.30464 4.34211 4.5406 4.17726 2.54457 6.08734C1.68141 6.91346 1.2439 8.0591 1.2439 9.49203C1.2439 9.69653 1.40986 9.86249 1.61435 9.86249C1.81885 9.86249 1.98481 9.70468 1.98481 9.50018C1.98481 8.25989 2.33564 7.32949 3.05692 6.63895C4.82437 4.94744 8.56544 5.12822 11.2961 5.24788C11.6854 5.26511 12.0589 5.29289 12.4136 5.31345L9.76721 7.95926C9.62254 8.10393 9.62254 8.33843 9.76721 8.48309Z" fill="white" stroke="white" />
            </svg>

          </button>

        </div>
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

export default ULESTrailblazerAward;

interface CardProps {
  index: number;
  name: any;
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
      <div className="">{name}</div>
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
