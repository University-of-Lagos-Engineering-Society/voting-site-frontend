"use client";
import { useState } from "react";
import { useVoteMutation } from "@/redux/slices/voting";
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
import { useDispatch } from "react-redux";
import { setUndergrad } from "@/redux/checkerSlices/check";
import SuccessModal from "@/components/modals/SuccessModal";

type Nominee = {
  _id: string;
  category: {
    _id: string;
  };
};

const UndergraduateCategory = () => {
  const dispatch = useDispatch();
  const [vote, { isLoading, isSuccess, isError, error }] = useVoteMutation();
    const [voted, setVoted] = useState<boolean>(false);
  const [index, setIndex] = useState<number>(0);
  const [socialiteOfTheYear, setSocialiteOfTheYear] = useState<Nominee | null>(
    null
  );
  const [lifeOfTheParty, setLifeOfTheParty] = useState<Nominee | null>(null);
  const [cliqueOfTheYear, setCliqueOfTheYear] = useState<Nominee | null>(null);
  const [creativeOfTheYear, setCreativeOfTheYear] = useState<Nominee | null>(
    null
  );
  const [emergingEntrepreneurOfTheYear, setEmergingEntrepreneurOfTheYear] =
    useState<Nominee | null>(null);
  const [mostInfluential, setMostInfluential] = useState<Nominee | null>(null);
  const [mostPopular, setMostPopular] = useState<Nominee | null>(null);
  const [techPersonalityOfTheYearMale, setTechPersonalityOfTheYearMale] =
    useState<Nominee | null>(null);
  const [
    ulesSportPersonalityOfTheYearFemale,
    setULESSportPersonalityOfTheYearFemale,
  ] = useState<Nominee | null>(null);
  const [
    ulesSportPersonalityOfTheYearMale,
    setULESSportPersonalityOfTheYearMale,
  ] = useState<Nominee | null>(null);
  const [mostBeautiful, setMostBeautiful] = useState<Nominee | null>(null);
  const [mostHandsome, setMostHandsome] = useState<Nominee | null>(null);
  const [mostFashionableFemale, setMostFashionableFemale] =
    useState<Nominee | null>(null);
  const [mostFashionableMale, setMostFashionableMale] =
    useState<Nominee | null>(null);
  const [techPersonalityOfTheYearFemale, setTechPersonalityOfTheYearFemale] =
    useState<Nominee | null>(null);

  const triggerFunction = async () => {
    if (isLoading) return;
    const obj: Record<string, string> = {};
    {
      if (socialiteOfTheYear?.category?._id) {
        obj[socialiteOfTheYear.category._id] = socialiteOfTheYear._id;
      }

      if (lifeOfTheParty?.category?._id) {
        obj[lifeOfTheParty.category._id] = lifeOfTheParty._id;
      }

      if (cliqueOfTheYear?.category?._id) {
        obj[cliqueOfTheYear.category._id] = cliqueOfTheYear._id;
      }

      if (creativeOfTheYear?.category?._id) {
        obj[creativeOfTheYear.category._id] = creativeOfTheYear._id;
      }

      if (emergingEntrepreneurOfTheYear?.category?._id) {
        obj[emergingEntrepreneurOfTheYear.category._id] =
          emergingEntrepreneurOfTheYear._id;
      }

      if (mostInfluential?.category?._id) {
        obj[mostInfluential.category._id] = mostInfluential._id;
      }

      if (mostPopular?.category?._id) {
        obj[mostPopular.category._id] = mostPopular._id;
      }

      if (techPersonalityOfTheYearMale?.category?._id) {
        obj[techPersonalityOfTheYearMale.category._id] =
          techPersonalityOfTheYearMale._id;
      }

      if (ulesSportPersonalityOfTheYearFemale?.category?._id) {
        obj[ulesSportPersonalityOfTheYearFemale.category._id] =
          ulesSportPersonalityOfTheYearFemale._id;
      }

      if (ulesSportPersonalityOfTheYearMale?.category?._id) {
        obj[ulesSportPersonalityOfTheYearMale.category._id] =
          ulesSportPersonalityOfTheYearMale._id;
      }

      if (mostBeautiful?.category?._id) {
        obj[mostBeautiful.category._id] = mostBeautiful._id;
      }

      if (mostHandsome?.category?._id) {
        obj[mostHandsome.category._id] = mostHandsome._id;
      }

      if (mostFashionableFemale?.category?._id) {
        obj[mostFashionableFemale.category._id] = mostFashionableFemale._id;
      }

      if (mostFashionableMale?.category?._id) {
        obj[mostFashionableMale.category._id] = mostFashionableMale._id;
      }

      if (techPersonalityOfTheYearFemale?.category?._id) {
        obj[techPersonalityOfTheYearFemale.category._id] =
          techPersonalityOfTheYearFemale._id;
      }

    }
    console.log(obj);

    try {
      const payload = {
        nominees: obj,
      };
      const res = await vote(payload).unwrap();
      dispatch(setUndergrad());
      setVoted(true);
    } catch (error: any) {
      alert(error);
    }



  };

  return (
    <>
      <SuccessModal
      categoryType="Undergraduate"
        isOpen={voted}
        closeModal={() => {
          setVoted(false);
        }
        }
      /> 
      
      <main className="re lative flex min-h-screen flex-col bg-[#141414] px-4 py-6 text-white">
        <div className="max-w-7xl mx-auto w-full">
          <Link
            href={"/categories"}
            className="text-sm lg:text-xl font-medium text-[#E1544A] work-sans pb-2 uppercase"
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
                triggerFunction={triggerFunction}
              />
            )}
          </div>
        </div>
      </main>
    </>
  );
};

export default UndergraduateCategory;
