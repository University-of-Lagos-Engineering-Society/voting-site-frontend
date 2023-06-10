import Link from "next/link";
import React from "react";

const GeneralCategory = () => {
  return (
    <main className="relative flex min-h-screen xl:h-screen overflow-hidden flex-col bg-[#141414] px-4 py-6 text-white">
      <div className="max-w-7xl mx-auto w-full">
        <Link href={"/categories"} className="text-xl font-semibold text-[#E1544A] work-sans mt-6 pb-4 lg:pb-6">
          GENERAL CATEGORY
        </Link>
      </div>
    </main>
  );
};

export default GeneralCategory;
