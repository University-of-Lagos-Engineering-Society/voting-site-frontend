import React from "react";
import Image from "next/image";
import {
  DefaultBanner,
  EntrepeneurOfTheYear,
  ExcoOfTheYear,
  FaceOfYear3,
  FaceOfYear4,
  FinalistOfTheYear,
  MostBeautifulGrad,
  MostBeautifulUndergrad,
  MostFashionableFemaleUndergrad,
  MostFashionableMaleUndergrad,
  MostHandsomeUndergrad,
  MostInfluentialUndergrad,
  MostInfluentialGrad,
  MostPopularUndergrad,
  MostPopularGrad,
  RookieFemale,
  RookieMale,
  SocialiteOfTheYear,
  SophomoreOfTheYear,
  TrailBlazerOfTheYear,
  ULESMVP,
  ULESPersonOfTheYear,
  ULESVolunteerofTheYear,
} from "@/assets/banners";

interface ImageSelectoooorProps {
    image_name?: string;
}

const ImageSelectoooor = ({ image_name }: ImageSelectoooorProps) => {
    //create a hashmap mapping imported image_names to the images
    const selectoor_map: any = {
        "DefaultBanner": DefaultBanner,
        "EntrepeneurOfTheYear": EntrepeneurOfTheYear,
        "ExcoOfTheYear": ExcoOfTheYear,
        "FaceOfYear3": FaceOfYear3,
        "FaceOfYear4": FaceOfYear4,
        "FinalistOfTheYear": FinalistOfTheYear,
        "MostBeautifulGrad": MostBeautifulGrad,
        "MostBeautifulUndergrad": MostBeautifulUndergrad,
        "MostFashionableFemaleUndergrad": MostFashionableFemaleUndergrad,
        "MostFashionableMaleUndergrad": MostFashionableMaleUndergrad,
        "MostHandsomeUndergrad": MostHandsomeUndergrad,
        "MostInfluentialUndergrad": MostInfluentialUndergrad,
        "MostInfluentialGrad": MostInfluentialGrad,
        "MostPopularUndergrad": MostPopularUndergrad,
        "MostPopularGrad": MostPopularGrad,
        "RookieFemale": RookieFemale,
        "RookieMale": RookieMale,
        "SocialiteOfTheYear": SocialiteOfTheYear,
        "SophomoreOfTheYear": SophomoreOfTheYear,
        "TrailBlazerOfTheYear": TrailBlazerOfTheYear,
        "ULESMVP": ULESMVP,
        "ULESPersonOfTheYear": ULESPersonOfTheYear,
        "ULESVolunteerofTheYear": ULESVolunteerofTheYear,
    }
    return (
      <div className="w-full">
        <Image
          src={selectoor_map[image_name || "DefaultBanner"]}
          alt="ULES Logo"
          className="cursor-pointer w-full h-full"
        />
      </div>
    );
};

export default ImageSelectoooor;
