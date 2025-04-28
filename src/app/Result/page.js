'use client';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import Image from "next/image";

export default function Results() {
  const router = useRouter();
  const [userData, setUserData] = useState(null);
  const [prediction, setPrediction] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  
  useEffect(() => {
    // Retrieve data from session storage
    if (typeof window !== 'undefined') {
      const storedData = sessionStorage.getItem('formData');
      const storedPrediction = sessionStorage.getItem('prediction');
      
      if (storedData && storedPrediction) {
        setUserData(JSON.parse(storedData));
        setPrediction(storedPrediction);
      } else {
        // If there's no data, redirect back to form
        router.push('/');
      }
      
      setIsLoading(false);
    }
  }, [router]);

  // If still loading or no data was found, show loading state
  if (isLoading) {
    return <div className="flex justify-center items-center h-screen">Loading...</div>;
  }
  
  // If no data was found and not redirecting yet
  if (!userData || !prediction) {
    return <div className="flex justify-center items-center h-screen">No data found. Redirecting...</div>;
  }

  return (
    <div className="bg-white w-full min-h-screen p-8">
      
      <div className="flex flex-col items-center max-w-6xl mx-auto ">
        {/* Show only the relevant panel based on prediction */}
        {prediction === 'Survived' ? (

          <>
            <Image src = "/Survived.jpg" alt="Survived" width={300} height={270} className="mx-auto block mt-[90px]"/>
            <div className="flex justify-between items-center mb-6"></div>

            <h2 className="text-[36px] text-[#2541B2] font-bold mb-[40px] text-center">Congratulations</h2>
            
            <div className="mr-[30px] ml-[30px]">
              {userData && (<p className="text-[20px] mb-4">Hello, {userData.userName}!</p>)}
              
              <p className="mb-[40px] text-[20px]">
                Against the odds, you made it through one of the most tragic maritime disasters in history. <br/>
                Your courage, timing, and a bit of luck helped you find a place on a lifeboat and reach safety.</p>

            </div>
          </>

        ) : (

          /*Not Survived */

          <>
            <Image src = "/NotSurvived.jpg" alt="Not Survived" width={300} height={270} className="mx-auto block mt-[90px]"/>
            <div className="flex justify-between items-center mb-6"></div>
            
            <h2 className="text-3xl text-[#2541B2] font-bold mb-[40px] text-center">In Memoriam</h2>

            <div className="mr-[30px] ml-[30px]">
              {userData && (<p className="text-lg mb-4 text-[20px]">In memory of {userData.userName}</p>)}
            
              <p className="mb-4 text-[20px]">
                Despite every effort, you were among the many lives lost in the early hours of April 15, 1912.<br/> 
                You were part of a moment in history that reshaped maritime safety forever.
              </p>
              
              <p className="mb-6 text-[20px]">
                May your memory live on through the generations.
              </p>

            </div>
          </>
        )}
        
        {/* Return to Home page */}
        <Link href="/">
          <button className="mt-8 bg-[#EEC750] text-[#243D9F] py-2 w-[170px] rounded-[5px] hover:bg-[#d4ae42] mb-[30px]">Try Again</button>
        </Link>
      </div>
    </div>
  );
}