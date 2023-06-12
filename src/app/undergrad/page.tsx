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
import TechPersonalityOfTheYearMale from "@/components/undergrad/TechPersonalityOfTheYearMale";
import ULESSportPersonalityOfTheYearFemale from "@/components/undergrad/ULESSportPersonalityOfTheYearFemale";
import ULESSportPersonalityOfTheYearMale from "@/components/undergrad/ULESSportPersonalityOfTheYearMale";


import MostBeautiful from "@/components/undergrad/MostBeautiful";
import MostHandsome from "@/components/undergrad/MostHandsome";
import MostFashionableFemale from "@/components/undergrad/MostFashionableFemale";
import MostFashionableMale from "@/components/undergrad/MostFashionableMale";
import TechPersonalityOfTheYearFemale from "@/components/undergrad/TechPersonalityOfTheYearFemale";

const UndergraduateCategory = () => {
  const [index, setIndex] = useState(0);
  const [socialiteOfTheYear, setSocialiteOfTheYear] = useState(null);
  const [lifeOfTheParty, setLifeOfTheParty] = useState(null);
  const [cliqueOfTheYear, setCliqueOfTheYear] = useState(null);
  const [creativeOfTheYear, setCreativeOfTheYear] = useState(null);
  const [emergingEntrepreneurOfTheYear, setEmergingEntrepreneurOfTheYear] = useState(null);
  const [mostInfluential, setMostInfluential] = useState(null);
  const [mostPopular, setMostPopular] = useState(null);
  const [techPersonalityOfTheYearMale, setTechPersonalityOfTheYearMale] = useState(null);
  const [ulesSportPersonalityOfTheYearFemale, setULESSportPersonalityOfTheYearFemale] = useState(null);
  const [ulesSportPersonalityOfTheYearMale, setULESSportPersonalityOfTheYearMale] = useState(null);
  const [mostBeautiful, setMostBeautiful] = useState(null);
  const [mostHandsome, setMostHandsome] = useState(null);
  const [mostFashionableFemale, setMostFashionableFemale] = useState(null);
  const [mostFashionableMale, setMostFashionableMale] = useState(null);
  const [techPersonalityOfTheYearFemale, setTechPersonalityOfTheYearFemale] = useState(null);
  /**




  TONI
  useGetMostBeautifulQuery,
  useGetMostFashionableFemaleQuery,
  useGetMostFashionableMaleQuery,
  useGetMostHandsomeQuery,
  useGetTechPersonalityOfTheYearFemaleQuery,
  useGetMostBeautifulQuery*,
  useGetMostFashionableFemaleQuery*,
  useGetMostFashionableMaleQuery*,
  useGetMostHandsomeQuery*,
  useGetTechPersonalityOfTheYearFemaleQuery*,



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
          {index === 7 && (
            <TechPersonalityOfTheYearMale
              index={index}
              setIndex={setIndex}
              candidate={techPersonalityOfTheYearMale}
              setCandidate={setTechPersonalityOfTheYearMale}
            />
          )}
          {index === 8 && (
            <ULESSportPersonalityOfTheYearFemale
              index={index}
              setIndex={setIndex}
              candidate={ulesSportPersonalityOfTheYearFemale}
              setCandidate={setULESSportPersonalityOfTheYearFemale}
            />
          )}
          {index === 9 && (
            <ULESSportPersonalityOfTheYearMale
              index={index}
              setIndex={setIndex}
              candidate={ulesSportPersonalityOfTheYearMale}
              setCandidate={setULESSportPersonalityOfTheYearMale}
            />
          )}

          {index === 10 && (
            <MostBeautiful
              index={index}
              setIndex={setIndex}
              candidate={mostBeautiful}
              setCandidate={setMostBeautiful}
            />
          )}
          {index === 11 && (
            <MostHandsome
              index={index}
              setIndex={setIndex}
              candidate={mostHandsome}
              setCandidate={setMostHandsome}
            />
          )}
          {index === 12 && (
            <MostFashionableFemale
              index={index}
              setIndex={setIndex}
              candidate={mostFashionableFemale}
              setCandidate={setMostFashionableFemale}
            />
          )}
          {index === 13 && (
            <MostFashionableMale
              index={index}
              setIndex={setIndex}
              candidate={mostFashionableMale}
              setCandidate={setMostFashionableMale}
            />
          )}
          {index === 14 && (
            <TechPersonalityOfTheYearFemale
              index={index}
              setIndex={setIndex}
              candidate={techPersonalityOfTheYearFemale}
              setCandidate={setTechPersonalityOfTheYearFemale}
            />
          )}
        </div>
      </div>
    </main>
  );
};

export default UndergraduateCategory;
