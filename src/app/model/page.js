import Image from "next/image";
import YourMainComponent from "../components/model";

export default function ModelPage() { // Renamed export for convention
  return (
    <div className="min-h-screen flex flex-col justify-between bg-white">

      <div className="bg-[#2541B2] pt-[65px] pb-[40px]">
        <div className="max-w-screen-lg mx-auto">
          <div className="text-5xl text-[#EEC750] font-medium mb-[40px] px-[45px]">MODEL</div>
          <div className="relative h-[372px]">
            <Image src="/Screenshot 2025-04-10 180518.png" alt="Jack" layout="fill" objectFit="cover" className="opacity-75" />
          </div>
        </div>
      </div>
      <div className="max-w-screen-lg mx-auto px-[30px]"> 
        <div className="justify-center mt-[30px]">
          <blockquote className="text-black text-[20px] text-left mb-[5px] border-l-4 border-[#2541B2] pl-4">
            This page showcases the machine learning model that predicts whether a passenger
            would have survived the tragic sinking of the Titanic in 1912.
          </blockquote>
        </div>

        <div className="text-[36px] text-[#2541B2] font-medium mt-[40px]">SURVIVED RATE</div>
        <hr className="border-[#2541B2]" />
        <YourMainComponent />
      </div>

    </div>
  )
}