"use client";
import React from "react";
import { useGetCliqueOfTheYearQuery } from "@/redux/slices/undergrad";
import ImageSelectoooor from "../ImageSelectoooor";

export interface FormProps {
  index: number;
  candidate: any;
  setCandidate: React.Dispatch<React.SetStateAction<any>>;
  setIndex: React.Dispatch<React.SetStateAction<number>>;
}

const CliqueOfTheYear = ({
  index,
  candidate,
  setCandidate,
  setIndex,
}: FormProps) => {
  const { data, isLoading, isError } = useGetCliqueOfTheYearQuery();
  return (
    <div className="flex flex-col gap-8 mt-4 lg:mt-16">
      <div className="mb-10 flex flex-col gap-6">
        <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold paris-pro">
          Award : Clique of The Year
        </h1>
        <ImageSelectoooor />
      </div>

      <div className="w-full flex flex-col lg:flex-row items-center justify-between">
        <div>
          <p className="work-sans text-xl lg:text-2xl">
            Cast your vote for the Clique of The Year
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
            <svg
              width="23"
              height="17"
              viewBox="0 0 23 17"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M7.82637 13.3338C7.70901 13.4511 7.55564 13.5096 7.40197 13.5096C7.24829 13.5096 7.09492 13.4511 6.97756 13.3338L1.53837 7.89517C1.42582 7.78261 1.36249 7.62984 1.36249 7.47076C1.36249 7.31169 1.42582 7.15892 1.53837 7.04636L6.97727 1.60687C7.21168 1.37246 7.59166 1.37246 7.82607 1.60687C8.06048 1.84128 8.06048 2.22126 7.82607 2.45567L3.36894 6.9134C3.97433 6.89599 4.62054 6.86898 5.29616 6.83926C10.1963 6.62376 16.2955 6.35663 19.5298 9.45171C20.9285 10.7903 21.6375 12.6467 21.6375 14.9686C21.6375 15.3 21.3685 15.5689 21.0372 15.5689C20.7058 15.5689 20.4369 15.3132 20.4369 14.9818C20.4369 12.9721 19.8684 11.4645 18.6997 10.3455C15.8357 7.60463 9.7737 7.89757 5.34899 8.09146C4.71809 8.11937 4.113 8.1644 3.53823 8.19771L7.82637 12.485C8.06078 12.7194 8.06078 13.0993 7.82637 13.3338Z"
                fill="white"
                stroke="white"
              />
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
            <svg width="23" height="17" viewBox="0 0 23 17" fill="none" xmlns="http://www.w3.org/2000/svg">
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

export default CliqueOfTheYear;

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
