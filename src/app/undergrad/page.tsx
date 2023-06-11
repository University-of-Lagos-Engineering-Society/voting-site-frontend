"use client";
import { useState } from "react";
import SocialiteOfTheYear from "@/components/undergrad/SocialiteOfTheYear";
import RookieOfTheYear from "@/components/general/RookieOfTheYear";
import Link from "next/link";

const UndergraduateCategory = () => {
  const [index, setIndex] = useState(0);
  const [socialiteOfTheYear, setSocialiteOfTheYear] = useState("");
  const [rookieOfTheYear, setRookieOfTheYear] = useState("");
  

  return (
    <main className="relative flex min-h-screen flex-col bg-[#141414] px-4 py-6 text-white">
      <div className="max-w-7xl mx-auto w-full">
        <Link
          href={"/categories"}
          className="text-xl font-semibold text-[#E1544A] work-sans pb-2 uppercase"
        >
          undergraduate CATEGORY
        </Link>
        <div>
          {index === 0 && (
            <SocialiteOfTheYear
              index={index}
              setIndex={setIndex}
              candidate={socialiteOfTheYear}
              setCandidate={setSocialiteOfTheYear}
            />
          )}
          {index === 1 && (
            <RookieOfTheYear
              index={index}
              setIndex={setIndex}
              candidate={rookieOfTheYear}
              setCandidate={setRookieOfTheYear}
            />
          )}
        </div>
      </div>
    </main>
  );
};

export default UndergraduateCategory;
