"use client";
import { useState } from "react";
import Link from "next/link";

import SocialiteOfTheYear from "@/components/grad/SocialiteOfTheYear";
import LifeOfTheParty from "@/components/grad/LifeOfTheParty";
import CoupleOfTheYear from "@/components/grad/CoupleOfTheYear";
import EmergingEntrepreneur from "@/components/grad/EmergingEntrepreneur";
import MostInfluential from "@/components/grad/MostInfluential";
import MostPopular from "@/components/grad/MostPopular";
import MostBeautiful from "@/components/grad/MostBeautiful";
import MostHandsome from "@/components/grad/MostHandsome";
import MostVersatile from "@/components/grad/MostVersatile";
import OutstandingAcademicPerformanceAward from "@/components/grad/OutstandingAcademicPerformanceAward";
import SocialImpactAward from "@/components/grad/SocialImpactAward";
import SocialMediaPersonality from "@/components/grad/SocialMediaPersonality";
import StartupVisionaryAward from "@/components/grad/StartupVisionaryAward";
import StudentEntertainerOfTheYear from "@/components/grad/StudentEntertainerOfTheYear";
import BestDressedFemale from "@/components/grad/BestDressedFemale";
import BestDressedMale from "@/components/grad/BestDressedMale";
import TechPersonalityOfTheYearFemale from "@/components/grad/TechPersonalityOfTheYearFemale";
import TechPersonalityOfTheYearMale from "@/components/grad/TechPersonalityOfTheYearMale";
import ULESSportPersonalityOfTheYearFemale from "@/components/grad/ULESSportPersonalityOfTheYearFemale";
import ULESSportPersonalityOfTheYearMale from "@/components/grad/ULESSportPersonalityOfTheYearMale";

const GraduateCategory = () => {
  const [index, setIndex] = useState(0);
  const [socialiteOfTheYear, setSocialiteOfTheYear] = useState(null);
  const [lifeOfTheParty, setLifeOfTheParty] = useState(null);
  const [coupleOfTheYear, setCoupleOfTheYear] = useState(null);
  const [emergingEntrepreneurOfTheYear, setEmergingEntrepreneurOfTheYear] = useState(null);
  const [mostInfluential, setMostInfluential] = useState(null);
  const [mostPopular, setMostPopular] = useState(null);
  const [mostBeautiful, setMostBeautiful] = useState(null);
  const [mostHandsome, setMostHandsome] = useState(null);
  const [mostVersatile, setMostVersatile] = useState(null);
  const [bestDressedFemale, setBestDressedFemale] = useState(null);
  const [bestDressedMale, setBestDressedMale] = useState(null);
  const [outstandingAcademicPerformanceAward, setOutstandingAcademicPerformanceAward] = useState(null);
  const [socialImpactAward, setSocialImpactAward] = useState(null);
  const [socialMediaPersonality, setSocialMediaPersonality] = useState(null);
  const [startupVisionaryAward, setStartupVisionaryAward] = useState(null);
  const [studentEntertainerOfTheYear, setStudentEntertainerOfTheYear] = useState(null);
  const [techPersonalityOfTheYearFemale, setTechPersonalityOfTheYearFemale] = useState(null);
  const [techPersonalityOfTheYearMale, setTechPersonalityOfTheYearMale] = useState(null);
  const [ulesSportPersonalityOfTheYearFemale, setULESSportPersonalityOfTheYearFemale] = useState(null);
  const [ulesSportPersonalityOfTheYearMale, setULESSportPersonalityOfTheYearMale] = useState(null);

  return (
    <main className="relative flex min-h-screen flex-col bg-[#141414] px-4 py-6 text-white">
      <div className="max-w-7xl mx-auto w-full">
        <Link
          href={"/categories"}
          className="text-xl font-semibold text-[#E1544A] work-sans pb-2 uppercase"
        >
          GRADUATE CATEGORY
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
            <CoupleOfTheYear
              index={index}
              setIndex={setIndex}
              candidate={coupleOfTheYear}
              setCandidate={setCoupleOfTheYear}
            />
          )}
          {index === 3 && (
            <StudentEntertainerOfTheYear
              index={index}
              setIndex={setIndex}
              candidate={studentEntertainerOfTheYear}
              setCandidate={setStudentEntertainerOfTheYear}
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
            <MostBeautiful
              index={index}
              setIndex={setIndex}
              candidate={mostBeautiful}
              setCandidate={setMostBeautiful}
            />
          )}
          {index === 8 && (
            <MostHandsome
              index={index}
              setIndex={setIndex}
              candidate={mostHandsome}
              setCandidate={setMostHandsome}
            />
          )}
          {index === 9 && (
            <MostVersatile
              index={index}
              setIndex={setIndex}
              candidate={mostVersatile}
              setCandidate={setMostVersatile}
            />
          )}

          {index === 10 && (
            <BestDressedFemale
              index={index}
              setIndex={setIndex}
              candidate={bestDressedFemale}
              setCandidate={setBestDressedFemale}
            />
          )}
          {index === 11 && (
            <BestDressedMale
              index={index}
              setIndex={setIndex}
              candidate={bestDressedMale}
              setCandidate={setBestDressedMale}
            />
          )}
          {index === 12 && (
            <OutstandingAcademicPerformanceAward
              index={index}
              setIndex={setIndex}
              candidate={outstandingAcademicPerformanceAward}
              setCandidate={setOutstandingAcademicPerformanceAward}
            />
          )}
          {index === 13 && (
            <SocialImpactAward
              index={index}
              setIndex={setIndex}
              candidate={socialImpactAward}
              setCandidate={setSocialImpactAward}
            />
          )}
          {index === 14 && (
            <SocialMediaPersonality
              index={index}
              setIndex={setIndex}
              candidate={socialMediaPersonality}
              setCandidate={setSocialMediaPersonality}
            />
          )}
          {index === 15 && (
            <StartupVisionaryAward
              index={index}
              setIndex={setIndex}
              candidate={startupVisionaryAward}
              setCandidate={setStartupVisionaryAward}
            />
          )}
          {index === 16 && (
            <TechPersonalityOfTheYearFemale
              index={index}
              setIndex={setIndex}
              candidate={techPersonalityOfTheYearFemale}
              setCandidate={setTechPersonalityOfTheYearFemale}
            />
          )}

          {index === 17 && (
            <TechPersonalityOfTheYearMale
              index={index}
              setIndex={setIndex}
              candidate={techPersonalityOfTheYearMale}
              setCandidate={setTechPersonalityOfTheYearMale}
            />
          )}
          {index === 18 && (
            <ULESSportPersonalityOfTheYearFemale
              index={index}
              setIndex={setIndex}
              candidate={ulesSportPersonalityOfTheYearFemale}
              setCandidate={setULESSportPersonalityOfTheYearFemale}
            />
          )}
          {index === 19 && (
            <ULESSportPersonalityOfTheYearMale
              index={index}
              setIndex={setIndex}
              candidate={ulesSportPersonalityOfTheYearMale}
              setCandidate={setULESSportPersonalityOfTheYearMale}
            />
          )}

        </div>
      </div>
    </main>
  );
};

export default GraduateCategory;


// import Link from "next/link";
// import React from "react";

// const GeneralCategory = () => {
//   return (
//     <main className="relative flex min-h-screen xl:h-screen overflow-hidden flex-col bg-[#141414] px-4 py-6 text-white">
//       <div className="max-w-7xl mx-auto w-full">
//         <Link
//           href={"/categories"}
//           className="text-xl font-semibold text-[#E1544A] work-sans mt-6 pb-2"
//         >
//           GRADUATE CATEGORY
//         </Link>
//       </div>
//     </main>
//   );
// };

// export default GeneralCategory;
