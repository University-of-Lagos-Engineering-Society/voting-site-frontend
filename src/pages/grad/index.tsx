"use client";
import { useState } from "react";
import Link from "next/link";
import { useVoteMutation } from "@/redux/slices/voting";
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
import { useDispatch } from "react-redux";
import { setGrad } from "@/redux/checkerSlices/check";
import SuccessModal from "@/components/modals/SuccessModal";

type Nominee = {
  _id: string;
  category: {
    _id: string;
  };
};
const GraduateCategory = () => {
  const dispatch = useDispatch();
  const [vote, { isLoading, isSuccess, isError, error }] = useVoteMutation();
  const [index, setIndex] = useState<number>(0);
    const [voted, setVoted] = useState<boolean>(false);
  const [socialiteOfTheYear, setSocialiteOfTheYear] = useState<Nominee | null>(null);
  const [lifeOfTheParty, setLifeOfTheParty] = useState<Nominee | null>(null);
  const [coupleOfTheYear, setCoupleOfTheYear] = useState<Nominee | null>(null);
  const [emergingEntrepreneurOfTheYear, setEmergingEntrepreneurOfTheYear] = useState<Nominee | null>(null);
  const [mostInfluential, setMostInfluential] = useState<Nominee | null>(null);
  const [mostPopular, setMostPopular] = useState<Nominee | null>(null);
  const [mostBeautiful, setMostBeautiful] = useState<Nominee | null>(null);
  const [mostHandsome, setMostHandsome] = useState<Nominee | null>(null);
  const [mostVersatile, setMostVersatile] = useState<Nominee | null>(null);
  const [bestDressedFemale, setBestDressedFemale] = useState<Nominee | null>(null);
  const [bestDressedMale, setBestDressedMale] = useState<Nominee | null>(null);
  const [outstandingAcademicPerformanceAward, setOutstandingAcademicPerformanceAward] = useState<Nominee | null>(null);
  const [socialImpactAward, setSocialImpactAward] = useState<Nominee | null>(null);
  const [socialMediaPersonality, setSocialMediaPersonality] = useState<Nominee | null>(null);
  const [startupVisionaryAward, setStartupVisionaryAward] = useState<Nominee | null>(null);
  const [studentEntertainerOfTheYear, setStudentEntertainerOfTheYear] = useState<Nominee | null>(null);
  const [techPersonalityOfTheYearFemale, setTechPersonalityOfTheYearFemale] = useState<Nominee | null>(null);
  const [techPersonalityOfTheYearMale, setTechPersonalityOfTheYearMale] = useState<Nominee | null>(null);
  const [ulesSportPersonalityOfTheYearFemale, setULESSportPersonalityOfTheYearFemale] = useState<Nominee | null>(null);
  const [ulesSportPersonalityOfTheYearMale, setULESSportPersonalityOfTheYearMale] = useState<Nominee | null>(null);

  const triggerFunction = async () => {
    if (isLoading) return;
    const obj: Record<string, string> = {};

    // Assigning values to the 'obj' object
    if (socialiteOfTheYear?.category) {
      obj[socialiteOfTheYear.category._id] = socialiteOfTheYear._id;
    }

    if (lifeOfTheParty?.category) {
      obj[lifeOfTheParty.category._id] = lifeOfTheParty._id;
    }

    if (coupleOfTheYear?.category) {
      obj[coupleOfTheYear.category._id] = coupleOfTheYear._id;
    }

    if (emergingEntrepreneurOfTheYear?.category) {
      obj[emergingEntrepreneurOfTheYear.category._id] =
        emergingEntrepreneurOfTheYear._id;
    }

    if (mostInfluential?.category) {
      obj[mostInfluential.category._id] = mostInfluential._id;
    }

    if (mostPopular?.category) {
      obj[mostPopular.category._id] = mostPopular._id;
    }

    if (mostBeautiful?.category) {
      obj[mostBeautiful.category._id] = mostBeautiful._id;
    }

    if (mostHandsome?.category) {
      obj[mostHandsome.category._id] = mostHandsome._id;
    }

    if (mostVersatile?.category) {
      obj[mostVersatile.category._id] = mostVersatile._id;
    }

    if (bestDressedFemale?.category) {
      obj[bestDressedFemale.category._id] = bestDressedFemale._id;
    }

    if (bestDressedMale?.category) {
      obj[bestDressedMale.category._id] = bestDressedMale._id;
    }

    if(outstandingAcademicPerformanceAward?.category) {
      obj[outstandingAcademicPerformanceAward.category._id] = outstandingAcademicPerformanceAward._id;
    }

    if (socialImpactAward?.category) {
      obj[socialImpactAward.category._id] = socialImpactAward._id;
    }

    if (socialMediaPersonality?.category) {
      obj[socialMediaPersonality.category._id] = socialMediaPersonality._id;
    }

    if (startupVisionaryAward?.category) {
      obj[startupVisionaryAward.category._id] = startupVisionaryAward._id;
    }

    if (studentEntertainerOfTheYear?.category) {
      obj[studentEntertainerOfTheYear.category._id] = studentEntertainerOfTheYear._id;
    }

    if (techPersonalityOfTheYearFemale?.category) {
      obj[techPersonalityOfTheYearFemale.category._id] = techPersonalityOfTheYearFemale._id;
    }

    if (techPersonalityOfTheYearMale?.category) {
      obj[techPersonalityOfTheYearMale.category._id] = techPersonalityOfTheYearMale._id;
    }

    if (ulesSportPersonalityOfTheYearFemale?.category) {
      obj[ulesSportPersonalityOfTheYearFemale.category._id] = ulesSportPersonalityOfTheYearFemale._id;
    }

    if (ulesSportPersonalityOfTheYearMale?.category) {
      obj[ulesSportPersonalityOfTheYearMale.category._id] = ulesSportPersonalityOfTheYearMale._id;
    }

    console.log("obj", obj);

        try {
          const payload = {
            nominees: obj,
          };
          const res = await vote(payload).unwrap();
          dispatch(setGrad());
          setVoted(true);
        } catch (error: any) {
          console.log(error);
          alert(error);
        }

  };

  return (
    <>
      <SuccessModal categoryType="Graduate" isOpen={voted} closeModal={() => {
        setVoted(false);
      }} />
    <main className="relative flex min-h-screen flex-col bg-[#141414] px-4 py-6 text-white">
      <div className="max-w-7xl mx-auto w-full">
        <Link
          href={"/categories"}
          className="text-sm lg:text-xl font-medium text-[#E1544A] work-sans pb-2 uppercase"
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
              triggerFunction={triggerFunction}
            />
          )}

        </div>
      </div>
      </main>
      </>
  );
};

export default GraduateCategory;