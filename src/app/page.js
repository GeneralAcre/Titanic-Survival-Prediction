"use client";

import Link from "next/link";
import Image from "next/image";


export default function Home() {
  return (
    <div className="px-4 ml-[20px] mr-[20px]">
      {/* Title Section */}
      <div className="mt-[100px] text-[#EEC750]">
        <div className="text-4xl font-medium leading-tight md:leading-[62px]">
          TITANIC<br/>SURVIVAL<br/>PREDICTION
        </div>
      </div>

      {/* Image Section */}
      <div className="flex justify-center mt-[100px] mb-6 w-full max-w-md h-auto">
        <Image src="/Titanic.jpg" alt="Titanic-Picture" width={486} height={304}/>
      </div>

      <div className="text-white">{/* Info Section */}
        <h3 className="text-2xl text-[#EEC750] font-medium mb-6">DID YOU KNOW</h3>
        <p className="text-base mb-6">
          The Titanic was a massive luxury ship that was called &quot;unsinkable,&quot;
          but on its first trip in 1912, it hit an iceberg and sank, becoming one of the most famous disasters in history!
        </p>
        <h3 className="text-2xl text-[#EEC750] font-medium mb-6">DON&apos;T WAIT TIME ANY MORE</h3>
        <p className="text-base mb-16">
          Enter your details and see if you would have survived the Titanic disaster.
        </p>
      </div>

      <div className="flex items-center justify-center m-6 mb-[20px]">{/* Button */}
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
