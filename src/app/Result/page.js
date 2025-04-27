'use client';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';

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
      <div className="flex flex-col md:flex-row max-w-6xl mx-auto gap-8">
        {/* Survived Panel - Always visible but highlighted if prediction is "Survived" */}
        <div className={`w-full md:w-1/2 bg-white rounded-[20px] overflow-hidden shadow-lg p-8 ${prediction === 'Survived' ? 'ring-4 ring-[#2541B2]' : 'opacity-50'}`}>
          <div className="flex justify-between items-center mb-6">
            <div className="text-[#2541B2] text-2xl">△</div>
            <div className="text-[#2541B2] text-2xl">☰</div>
          </div>
          
          <h2 className="text-3xl text-[#2541B2] font-bold mb-6">Congratulations</h2>
          
          {userData && (
            <p className="text-lg mb-4">Hello, {userData.userName}!</p>
          )}
          
          <p className="text-gray-700 mb-6">
            Against the odds, you made it through one of the most tragic 
            maritime disasters in history. Your courage, timing, and a bit of 
            luck helped you find a place on a lifeboat and reach safety.
          </p>
        </div>
        
        {/* Not Survived Panel - Always visible but highlighted if prediction is "Not Survived" */}
        <div className={`w-full md:w-1/2 bg-white rounded-[20px] overflow-hidden shadow-lg p-8 ${prediction !== 'Survived' ? 'ring-4 ring-[#2541B2]' : 'opacity-50'}`}>
          <div className="flex justify-between items-center mb-6">
            <div className="text-[#2541B2] text-2xl">△</div>
            <div className="text-[#2541B2] text-2xl">☰</div>
          </div>
          
          <h2 className="text-3xl text-[#2541B2] font-bold mb-6">In Memoriam</h2>
          
          {userData && (
            <p className="text-lg mb-4">In memory of {userData.userName}</p>
          )}
          
          <p className="text-gray-700 mb-4">
            Despite every effort, you were among the many lives lost in the
            early hours of April 15, 1912. You were part of a moment in history
            that reshaped maritime safety forever.
          </p>
          
          <p className="text-gray-700 mb-6">
            May your memory live on through the generations.
          </p>
        </div>
      </div>
      
      {/* Try Again Button */}
      <div className="text-center mt-8">
        <Link href="/" className="bg-[#EEC750] text-[#243D9F] py-2 px-6 rounded-[5px] hover:bg-[#d4ae42] inline-block">
          Try Again
        </Link>
      </div>
    </div>
  );
}