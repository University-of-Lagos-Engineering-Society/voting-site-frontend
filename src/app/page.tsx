import Image from "next/image";
import Link from "next/link";
import { Logo, Background, Hero } from "@/assets/images";

export default function Home() {
  return (
    <main className="flex min-h-screen xl:h-screen overflow-hidden flex-col bg-[#141414] px-4 py-6 text-white">
      <div className="max-w-7xl mx-auto w-full">
        <nav className="w-full">
          <Link href="/">
            <Image
              src={Logo}
              alt="ULES Logo"
              className="cursor-pointer w-16 h-16 lg:w-32 lg:h-32"
            />
          </Link>
        </nav>

        {/* Hero, text and Image side by side */}
        <section className="relative flex gap-6 flex-col lg:flex-row w-full max-w-7xl mx-auto">
          <div className="w-full lg:w-[60%] flex flex-col gap-4 lg:gap-6 items-start pt-8 lg:pt-32 z-20">
            <h3 className="work-sans uppercase ls lg:text-2xl">
              Faculty of Engineering Awards Night
            </h3>
            <h1 className="text-3xl md:text-4xl lg:text-6xl font-bold paris-pro">
              Join the Action : Vote for your{" "}
              <span className="text-[#c7291f]">Faculty Awards Dinner </span>
              Winners
            </h1>
            <p className="lg:text-xl sub-title">
              Vote for your favorite contestants in the various categories
            </p>

            <div className="hidden md:flex flex-col md:flex-row gap-4 w-full md:w-[65%] md:mx-auto lg:w-full lg:mx-0 sm:py-6 lg:py-0">
              <Link
                href="/categories"
                className="w-full lg:w-fit bg-[#c7291f] text-white font-bold rounded-full flex justify-center items-center gap-1 px-12 py-3"
              >
                Vote now
              </Link>
              <Link
                href="/"
                className="w-full lg:w-fit  border border-[#c7291f] font-bold text-[#c7291f] flex justify-center items-center gap-1 px-12 py-3 rounded-full"
              >
                Buy Tickets
              </Link>
            </div>
          </div>
          {/* Mobile Buttons */}
          <div className="z-20 flex flex-col md:hidden gap-4 w-full md:w-[65%] md:mx-auto lg:w-full lg:mx-0 py-6">
            <Link
              href="/categories"
              className="w-full lg:w-fit bg-[#c7291f] text-white font-bold rounded-full flex justify-center items-center gap-1 px-12 py-3"
            >
              Vote now
            </Link>
            <Link
              href="/"
              className="w-full lg:w-fit  border border-[#c7291f] font-bold text-[#c7291f] flex justify-center items-center gap-1 px-12 py-3 rounded-full"
            >
              Donate now
            </Link>
          </div>
          {/* Image */}
          <div className="w-full md:w-[50%] lg:w-[40%] mx-auto lg:mx-0">
            <Image
              src={Hero}
              alt="ULES Logo"
              className="cursor-pointer w-full h-full"
            />
          </div>
          {/* Background */}
          <div className="absolute top-[200px] left-0 w-full h-full">
            <Image
              src={Background}
              alt="ULES Logo"
              className="cursor-pointer w-full h-full"
            />
          </div>
        </section>
      </div>
    </main>
  );
}
