"use client";

import { useEffect } from "react";
import Link from "next/link";
import Image from "next/image";


export default function Home(){
  return(
    <div>
      
      <div className="mt-[245px] ml-[45px] ">
        <div className="text-5xl text-[#EEC750] font-medium leading-[62px]" >TITANIC </div>
        <div className="text-5xl text-[#EEC750] font-medium leading-[62px]" >SURVIVAL</div>
        <div className="text-5xl text-[#EEC750] font-medium leading-[62px]" >PREDICTION</div>
      </div>

      {/* Smallest Desktop Size*/}
      <Image src= "/Titanic.jpg" alt="Titanic-Picture" width={486} height={304} className="mt-[300px] mb-[30px]"/>

      <div className="mr-[34px]">
        <h3 className="text-3xl text-[#EEC750] font-medium ml-[45px] mb-[30px]">DID YOU KNOW</h3>
        <p className="text-[20px] text-[#FFFFFF] ml-[45px] mb-[30px] w-[80%]">The Titanic was a massive luxury ship that was called &quot;unsinkable,&quot; 
        but on its first trip in 1912, it hit an iceberg and sank, becoming one of the most famous disasters in history !
        </p>
        <h3 className="text-3xl text-[#EEC750] font-medium ml-[45px] mb-[30px]">DON’T WAIT TIME ANY MORE</h3>
        <p className="text-[20px] text-[#FFFFFF] ml-[45px] mb-[90px] ">Enter your details and see if you would have survived the Titanic disaster.</p>
      

      </div>

      {/* Predict Button*/}
      <div className="flex items-center justify-center m-[50px] ">
          <Link href="/form" className="bg-[#EEC750] text-[#2541B2] px-6 py-3 rounded-[5px] font-bold text-lg hover:bg-[#d4ae42]">START PREDICTION</Link>
      </div>
      


    </div>
    
  )
}
