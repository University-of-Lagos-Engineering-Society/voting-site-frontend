"use client";
import Link from "next/link";
import React from "react";
import { useState } from "react";
import { useVoteMutation } from "@/redux/slices/voting";
import ExcoBodytOfTheYear from "@/components/general/ExcoBodytOfTheYear";
import ExcoOfTheYear from "@/components/general/ExcoOfTheYear";
import FaceOfDepartmentBME from "@/components/general/FaceOfDepartmentBME";
import FaceOfDepartmentCEG from "@/components/general/FaceOfDepartmentCEG";
import FaceOfDepartmentCHG from "@/components/general/FaceOfDepartmentCHG";
import FaceOfDepartmentCPE from "@/components/general/FaceOfDepartmentCPE";
import FaceOfDepartmentEEG from "@/components/general/FaceOfDepartmentEEG";
import FaceOfDepartmentMEG from "@/components/general/FaceOfDepartmentMEG";
import FaceOfDepartmentMME from "@/components/general/FaceOfDepartmentMME";
import FaceOfDepartmentPGG from "@/components/general/FaceOfDepartmentPGG";
import FaceOfDepartmentSSG from "@/components/general/FaceOfDepartmentSSG";
import FaceOfDepartmentSVY from "@/components/general/FaceOfDepartmentSVY";
import FaceOfYearFour from "@/components/general/FaceOfYearFour";
import FaceOfYearThree from "@/components/general/FaceOfYearThree";
import LecturerOfTheYear from "@/components/general/LecturerOfTheYear";
import RookieOfTheYear from "@/components/general/RookieOfTheYear";
import SophomoreOfTheYear from "@/components/general/SophomoreOfTheYear";
import ULESPersonOfTheYearAward from "@/components/general/ULESPersonOfTheYearAward";
import ULESTrailblazerAward from "@/components/general/ULESTrailblazerAward";
import ULESVolunteerOfTheYearAward from "@/components/general/ULESVolunteerOfTheYearAward";
import { useDispatch } from "react-redux";
import { setGeneral } from "@/redux/checkerSlices/check";
import SuccessModal from "@/components/modals/SuccessModal";
import RookieOfTheYearFemale from "@/components/general/RookieOfTheYearFemale";

type Nominee = {
  _id: string;
  category: {
    _id: string;
  };
};

const GeneralCategory = () => {
  const dispatch = useDispatch();
  const [vote, { isLoading }] = useVoteMutation();
  const [voted, setVoted] = useState<boolean>(false);
  const [index, setIndex] = useState<number>(0);
  const [excoBodytOfTheYear, setExcoBodytOfTheYear] = useState<Nominee | null>(
    null
  );
  const [excoOfTheYear, setExcoOfTheYear] = useState<Nominee | null>(null);
  const [faceOfDepartmentBME, setFaceOfDepartmentBME] =
    useState<Nominee | null>(null);
  const [faceOfDepartmentCEG, setFaceOfDepartmentCEG] =
    useState<Nominee | null>(null);
  const [faceOfDepartmentCHG, setFaceOfDepartmentCHG] =
    useState<Nominee | null>(null);
  const [faceOfDepartmentCPE, setFaceOfDepartmentCPE] =
    useState<Nominee | null>(null);
  const [faceOfDepartmentEEG, setFaceOfDepartmentEEG] =
    useState<Nominee | null>(null);
  const [faceOfDepartmentMEG, setFaceOfDepartmentMEG] =
    useState<Nominee | null>(null);
  const [faceOfDepartmentMME, setFaceOfDepartmentMME] =
    useState<Nominee | null>(null);
  const [faceOfDepartmentPGG, setFaceOfDepartmentPGG] =
    useState<Nominee | null>(null);
  const [faceOfDepartmentSSG, setFaceOfDepartmentSSG] =
    useState<Nominee | null>(null);
  const [faceOfDepartmentSVY, setFaceOfDepartmentSVY] =
    useState<Nominee | null>(null);
  const [faceOfYearFour, setFaceOfYearFour] = useState<Nominee | null>(null);
  const [faceOfYearThree, setFaceOfYearThree] = useState<Nominee | null>(null);
  const [lecturerOfTheYear, setLecturerOfTheYear] = useState<Nominee | null>(
    null
  );
  const [rookieOfTheYear, setRookieOfTheYear] = useState<Nominee | null>(null);
  const [rookieOfTheYearFemale, setRookieOfTheYearFemale] = useState<Nominee | null>(null);
  const [sophomoreOfTheYear, setSophomoreOfTheYear] = useState<Nominee | null>(
    null
  );
  const [ulesPersonOfTheYearAward, setULESPersonOfTheYearAward] =
    useState<Nominee | null>(null);
  const [ulesTrailblazerAward, setULESTrailblazerAward] =
    useState<Nominee | null>(null);
  const [ulesVolunteerOfTheYearAward, setULESVolunteerOfTheYearAward] =
    useState<Nominee | null>(null);

  const triggerFunction = async () => {
    const obj: Record<string, string> = {};
    {
      if (excoBodytOfTheYear?.category) {
        obj[excoBodytOfTheYear.category._id] = excoBodytOfTheYear._id;
      }

      if (excoOfTheYear?.category) {
        obj[excoOfTheYear.category._id] = excoOfTheYear._id;
      }

      if (faceOfDepartmentBME?.category) {
        obj[faceOfDepartmentBME.category._id] = faceOfDepartmentBME._id;
      }

      if (faceOfDepartmentCEG?.category) {
        obj[faceOfDepartmentCEG.category._id] = faceOfDepartmentCEG._id;
      }

      if (faceOfDepartmentCHG?.category) {
        obj[faceOfDepartmentCHG.category._id] = faceOfDepartmentCHG._id;
      }

      if (faceOfDepartmentCPE?.category) {
        obj[faceOfDepartmentCPE.category._id] = faceOfDepartmentCPE._id;
      }

      if (faceOfDepartmentEEG?.category) {
        obj[faceOfDepartmentEEG.category._id] = faceOfDepartmentEEG._id;
      }

      if (faceOfDepartmentMEG?.category) {
        obj[faceOfDepartmentMEG.category._id] = faceOfDepartmentMEG._id;
      }

      if (faceOfDepartmentMME?.category) {
        obj[faceOfDepartmentMME.category._id] = faceOfDepartmentMME._id;
      }

      if (faceOfDepartmentPGG?.category) {
        obj[faceOfDepartmentPGG.category._id] = faceOfDepartmentPGG._id;
      }

      if (faceOfDepartmentSSG?.category) {
        obj[faceOfDepartmentSSG.category._id] = faceOfDepartmentSSG._id;
      }

      if (faceOfDepartmentSVY?.category) {
        obj[faceOfDepartmentSVY.category._id] = faceOfDepartmentSVY._id;
      }

      if (faceOfYearFour?.category) {
        obj[faceOfYearFour.category._id] = faceOfYearFour._id;
      }

      if (faceOfYearThree?.category) {
        obj[faceOfYearThree.category._id] = faceOfYearThree._id;
      }

      // if (lecturerOfTheYear?.category) {
      //   obj[lecturerOfTheYear.category._id] = lecturerOfTheYear._id;
      // }

      if (rookieOfTheYear?.category) {
        obj[rookieOfTheYear.category._id] = rookieOfTheYear._id;
      }

      if (rookieOfTheYearFemale?.category) {
        obj[rookieOfTheYearFemale.category._id] = rookieOfTheYearFemale._id;
      }

      if (sophomoreOfTheYear?.category) {
        obj[sophomoreOfTheYear.category._id] = sophomoreOfTheYear._id;
      }

      if (ulesPersonOfTheYearAward?.category) {
        obj[ulesPersonOfTheYearAward.category._id] =
          ulesPersonOfTheYearAward._id;
      }

      if (ulesTrailblazerAward?.category) {
        obj[ulesTrailblazerAward.category._id] = ulesTrailblazerAward._id;
      }

      if (ulesVolunteerOfTheYearAward?.category) {
        obj[ulesVolunteerOfTheYearAward.category._id] =
          ulesVolunteerOfTheYearAward._id;
      }
    }

    console.log(obj);

    try {
      const payload = {
        nominees: obj,
      };
      const res = await vote(payload).unwrap();
      dispatch(setGeneral());
      setVoted(true);
    } catch (error: any) {
      alert(error);

    }
  };

  return (
    <>
      <SuccessModal
      categoryType="General"
        isOpen={voted}
        closeModal={() => {
          setVoted(false);
        }
        }
      /> 
      
    <main className="relative flex min-h-screen flex-col bg-[#141414] px-4 py-6 text-white">
      <div className="max-w-7xl mx-auto w-full">
        <Link
          href={"/categories"}
          className="text-sm lg:text-xl font-medium text-[#E1544A] work-sans mt-6 pb-4 lg:pb-6"
        >
          GENERAL CATEGORY
        </Link>
        <div>
          {index === 0 && (
            <ExcoBodytOfTheYear
              index={index}
              setIndex={setIndex}
              candidate={excoBodytOfTheYear}
              setCandidate={setExcoBodytOfTheYear}
            />
          )}
          {index === 1 && (
            <ExcoOfTheYear
              index={index}
              setIndex={setIndex}
              candidate={excoOfTheYear}
              setCandidate={setExcoOfTheYear}
            />
          )}
          {index === 2 && (
            <FaceOfDepartmentBME
              index={index}
              setIndex={setIndex}
              candidate={faceOfDepartmentBME}
              setCandidate={setFaceOfDepartmentBME}
            />
          )}
          {index === 3 && (
            <FaceOfDepartmentCEG
              index={index}
              setIndex={setIndex}
              candidate={faceOfDepartmentCEG}
              setCandidate={setFaceOfDepartmentCEG}
            />
          )}
          {index === 4 && (
            <FaceOfDepartmentCHG
              index={index}
              setIndex={setIndex}
              candidate={faceOfDepartmentCHG}
              setCandidate={setFaceOfDepartmentCHG}
            />
          )}
          {index === 5 && (
            <FaceOfDepartmentCPE
              index={index}
              setIndex={setIndex}
              candidate={faceOfDepartmentCPE}
              setCandidate={setFaceOfDepartmentCPE}
            />
          )}
          {index === 6 && (
            <FaceOfDepartmentEEG
              index={index}
              setIndex={setIndex}
              candidate={faceOfDepartmentEEG}
              setCandidate={setFaceOfDepartmentEEG}
            />
          )}
          {index === 7 && (
            <FaceOfDepartmentMEG
              index={index}
              setIndex={setIndex}
              candidate={faceOfDepartmentMEG}
              setCandidate={setFaceOfDepartmentMEG}
            />
          )}
          {index === 8 && (
            <FaceOfDepartmentMME
              index={index}
              setIndex={setIndex}
              candidate={faceOfDepartmentMME}
              setCandidate={setFaceOfDepartmentMME}
            />
          )}
          {index === 9 && (
            <FaceOfDepartmentPGG
              index={index}
              setIndex={setIndex}
              candidate={faceOfDepartmentPGG}
              setCandidate={setFaceOfDepartmentPGG}
            />
          )}
          {index === 10 && (
            <FaceOfDepartmentSSG
              index={index}
              setIndex={setIndex}
              candidate={faceOfDepartmentSSG}
              setCandidate={setFaceOfDepartmentSSG}
            />
          )}
          {index === 11 && (
            <FaceOfDepartmentSVY
              index={index}
              setIndex={setIndex}
              candidate={faceOfDepartmentSVY}
              setCandidate={setFaceOfDepartmentSVY}
            />
          )}
          {index === 12 && (
            <FaceOfYearFour
              index={index}
              setIndex={setIndex}
              candidate={faceOfYearFour}
              setCandidate={setFaceOfYearFour}
            />
          )}
          {index === 13 && (
            <FaceOfYearThree
              index={index}
              setIndex={setIndex}
              candidate={faceOfYearThree}
              setCandidate={setFaceOfYearThree}
            />
          )}
          {/*index === 14 && (
                <LecturerOfTheYear
                  index={index}
                  setIndex={setIndex}
                  candidate={lecturerOfTheYear}
                  setCandidate={setLecturerOfTheYear}
                />
              )*/}
          {index === 14 && (
            <RookieOfTheYear
              index={index}
              setIndex={setIndex}
              candidate={rookieOfTheYear}
              setCandidate={setRookieOfTheYear}
            />
          )}
          {index === 15 && (
            <RookieOfTheYearFemale
              index={index}
              setIndex={setIndex}
              candidate={rookieOfTheYearFemale}
              setCandidate={setRookieOfTheYearFemale}
            />
          )}
          {index === 16 && (
            <SophomoreOfTheYear
              index={index}
              setIndex={setIndex}
              candidate={sophomoreOfTheYear}
              setCandidate={setSophomoreOfTheYear}
            />
          )}
          {index === 17 && (
            <ULESPersonOfTheYearAward
              index={index}
              setIndex={setIndex}
              candidate={ulesPersonOfTheYearAward}
              setCandidate={setULESPersonOfTheYearAward}
            />
          )}
          {index === 18 && (
            <ULESTrailblazerAward
              index={index}
              setIndex={setIndex}
              candidate={ulesTrailblazerAward}
              setCandidate={setULESTrailblazerAward}
            />
          )}
          {index === 19 && (
            <ULESVolunteerOfTheYearAward
              index={index}
              setIndex={setIndex}
              candidate={ulesVolunteerOfTheYearAward}
              setCandidate={setULESVolunteerOfTheYearAward}
              triggerFunction={triggerFunction}
            />
          )}
        </div>
      </div>
      </main>
      </>
  );
};

export default GeneralCategory;
