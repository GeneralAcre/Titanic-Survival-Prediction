"use client";

import Link from "next/link";
import Image from "next/image";


export default function Home() {
  return (
    <div>
      {/* Title Section */}
      <div className="mt-[100px] sm:mt-[180px] md:mt-[245px] ml-4 sm:ml-6 md:ml-[45px] text-[#EEC750]">
        <div className="text-3xl sm:text-4xl md:text-5xl font-medium leading-tight md:leading-[62px]">
          TITANIC
        </div>
        <div className="text-3xl sm:text-4xl md:text-5xl font-medium leading-tight md:leading-[62px]">
          SURVIVAL
        </div>
        <div className="text-3xl sm:text-4xl md:text-5xl font-medium leading-tight md:leading-[62px]">
          PREDICTION
        </div>
      </div>

      {/* Image Section */}
      <div className="flex justify-center mt-[150px] sm:mt-[200px] md:mt-[300px] mb-6 sm:mb-8 md:mb-[30px] px-4">
        <Image
          src="/Titanic.jpg"
          alt="Titanic-Picture"
          width={486}
          height={304}
          className="w-full max-w-md h-auto"
        />
      </div>

      {/* Info Section */}
      <div className="px-4 sm:px-6 md:mr-[34px] text-white">
        <h3 className="text-2xl sm:text-3xl text-[#EEC750] font-medium mb-6 ml-2 sm:ml-6 md:ml-[45px]">
          DID YOU KNOW
        </h3>
        <p className="text-base sm:text-lg mb-6 ml-2 sm:ml-6 md:ml-[45px] md:w-[80%]">
          The Titanic was a massive luxury ship that was called &quot;unsinkable,&quot;
          but on its first trip in 1912, it hit an iceberg and sank, becoming one of the most famous disasters in history!
        </p>
        <h3 className="text-2xl sm:text-3xl text-[#EEC750] font-medium mb-6 ml-2 sm:ml-6 md:ml-[45px]">
          DON&apos;T WAIT TIME ANY MORE
        </h3>
        <p className="text-base sm:text-lg mb-16 ml-2 sm:ml-6 md:ml-[45px]">
          Enter your details and see if you would have survived the Titanic disaster.
        </p>
      </div>

      {/* Button */}
      <div className="flex items-center justify-center m-6 sm:m-10 md:m-[50px]">
        <Link
          href="/form"
          className="bg-[#EEC750] text-[#2541B2] px-6 py-3 rounded-[5px] font-bold text-lg hover:bg-[#d4ae42] transition-colors"
        >
          START PREDICTION
        </Link>
      </div>
    </div>
  );
}
