import Image from "next/image";
import YourMainComponent from "../components/model";

export default function model() {
  return (
    <div className="min-h-screen flex flex-col justify-between bg-white">

      <div className="bg-[#2541B2] w-[486px] h-[564px]">
        <div className="ml-[45px] mr-[45px]">

          <div className="mt-[65px]">
            <div className="text-5xl text-[#EEC750] font-medium mb-[40px]">MODEL</div>
          </div>
        </div>
        {/*Text on Image*/}
        <div className="relative w-full h-[372px]">
          <Image src="/Screenshot 2025-04-10 180518.png" alt="Jack" layout="fill" objectFit="cover" className=" opacity-75" />
        </div>

        <div className="absolute inset-0 flex items-end justify-center pb-20 px-4">
          <p className="text-[#FFFFFF] text-[20px] text-left max-w-[600px] mb-6 ml-[25px]" >
            This page showcases the machine learning model that predicts whether a passenger
            would have survived the tragic sinking of the Titanic in 1912.
          </p>
        </div>
      </div>

      <div className="mx-[45px]">
        <div className="text-[36px] text-[#2541B2] font-medium mt-[40px]">SURVIVED RATE</div>
        <hr className="border-[#2541B2]" />

        <YourMainComponent />
      </div>
    </div>
  )
}