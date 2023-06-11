"use client";
import { useState } from "react";
import SocialiteOfTheYear from "@/components/undergrad/SocialiteOfTheYear";
import Link from "next/link";
import LifeOfTheParty from "@/components/undergrad/LifeOfTheParty";
import CliqueOfTheYear from "@/components/undergrad/CliqueOfTheYear";
import CreativeOfTheYear from "@/components/undergrad/CreativeOfTheYear";
import EmergingEntrepreneur from "@/components/undergrad/EmergingEntrepreneur";
import MostInfluential from "@/components/undergrad/MostInfluential";
import MostPopular from "@/components/undergrad/MostPopular";


const UndergraduateCategory = () => {
  const [index, setIndex] = useState(0);
  const [socialiteOfTheYear, setSocialiteOfTheYear] = useState(null);
  const [lifeOfTheParty, setLifeOfTheParty] = useState(null);
  const [cliqueOfTheYear, setCliqueOfTheYear] = useState(null);
  const [creativeOfTheYear, setCreativeOfTheYear] = useState(null);
  const [emergingEntrepreneurOfTheYear, setEmergingEntrepreneurOfTheYear] = useState(null);
  const [mostInfluential, setMostInfluential] = useState(null);
  const [mostPopular, setMostPopular] = useState(null);

  /**
   * 
   * BIOLA
   *   useGetCliqueOfTheYearQuery,
  useGetCreativeOfTheYearQuery,
  useGetEmergingEntrepreneurQuery,
    useGetMostInfluentialQuery,
  useGetMostPopularQuery,



  TONI
  useGetMostBeautifulQuery,
  useGetMostFashionableFemaleQuery,
  useGetMostFashionableMaleQuery,
  useGetMostHandsomeQuery,
  useGetTechPersonalityOfTheYearFemaleQuery,



  Franklin
  useGetTechPersonalityOfTheYearMaleQuery,
  useGetULESSportPersonalityOfTheYearFemaleQuery,
  useGetULESSportPersonalityOfTheYearMaleQuery,
   */

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
            <LifeOfTheParty
              index={index}
              setIndex={setIndex}
              candidate={lifeOfTheParty}
              setCandidate={setLifeOfTheParty}
            />
          )}
          {index === 2 && (
            <CliqueOfTheYear
              index={index}
              setIndex={setIndex}
              candidate={cliqueOfTheYear}
              setCandidate={setCliqueOfTheYear}
            />
          )}
          {index === 3 && (
            <CreativeOfTheYear
              index={index}
              setIndex={setIndex}
              candidate={creativeOfTheYear}
              setCandidate={setCreativeOfTheYear}
            />
          )}
          {index === 4 && (
            <EmergingEntrepreneur
              index={index}
              setIndex={setIndex}
              candidate={emergingEntrepreneurOfTheYear}
              setCandidate={setEmergingEntrepreneurOfTheYear}
            />
          )}
          {index === 5 && (
            <MostInfluential
              index={index}
              setIndex={setIndex}
              candidate={mostInfluential}
              setCandidate={setMostInfluential}
            />
          )}
          {index === 6 && (
            <MostPopular
              index={index}
              setIndex={setIndex}
              candidate={mostPopular}
              setCandidate={setMostPopular}
            />
          )}

        </div>
      </div>
    </main>
  );
};

export default UndergraduateCategory;
