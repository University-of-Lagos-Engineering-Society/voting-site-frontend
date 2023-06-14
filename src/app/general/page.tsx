"use client";
import Link from "next/link";
import React from "react";
import { useState } from "react";
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

const GeneralCategory = () => {

  const [index, setIndex] = useState(0);
  const [excoBodytOfTheYear, setExcoBodytOfTheYear] = useState(null);
  const [excoOfTheYear, setExcoOfTheYear] = useState(null);
  const [faceOfDepartmentBME, setFaceOfDepartmentBME] = useState(null);
  const [faceOfDepartmentCEG, setFaceOfDepartmentCEG] = useState(null);
  const [faceOfDepartmentCHG, setFaceOfDepartmentCHG] = useState(null);
  const [faceOfDepartmentCPE, setFaceOfDepartmentCPE] = useState(null);
  const [faceOfDepartmentEEG, setFaceOfDepartmentEEG] = useState(null);
  const [faceOfDepartmentMEG, setFaceOfDepartmentMEG] = useState(null);
  const [faceOfDepartmentMME, setFaceOfDepartmentMME] = useState(null);
  const [faceOfDepartmentPGG, setFaceOfDepartmentPGG] = useState(null);
  const [faceOfDepartmentSSG, setFaceOfDepartmentSSG] = useState(null);
  const [faceOfDepartmentSVY, setFaceOfDepartmentSVY] = useState(null);
  const [faceOfYearFour, setFaceOfYearFour] = useState(null);
  const [faceOfYearThree, setFaceOfYearThree] = useState(null);
  const [lecturerOfTheYear, setLecturerOfTheYear] = useState(null);
  const [rookieOfTheYear, setRookieOfTheYear] = useState(null);
  const [sophomoreOfTheYear, setSophomoreOfTheYear] = useState(null);
  const [ulesPersonOfTheYearAward, setULESPersonOfTheYearAward] = useState(null);
  const [ulesTrailblazerAward, setULESTrailblazerAward] = useState(null);
  const [ulesVolunteerOfTheYearAward, setULESVolunteerOfTheYearAward] = useState(null);


  return (
    <main className="relative flex min-h-screen xl:h-screen overflow-hidden flex-col bg-[#141414] px-4 py-6 text-white">
      <div className="max-w-7xl mx-auto w-full">
        <Link href={"/categories"} className="text-xl font-semibold text-[#E1544A] work-sans mt-6 pb-4 lg:pb-6">
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
              {index === 14 && (
                <LecturerOfTheYear
                  index={index}
                  setIndex={setIndex}
                  candidate={lecturerOfTheYear}
                  setCandidate={setLecturerOfTheYear}
                />
              )}
              {index === 15 && (
                <RookieOfTheYear
                  index={index}
                  setIndex={setIndex}
                  candidate={rookieOfTheYear}
                  setCandidate={setRookieOfTheYear}
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
                />
              )}


        </div>
      </div>
    </main>
  );
};

export default GeneralCategory;
