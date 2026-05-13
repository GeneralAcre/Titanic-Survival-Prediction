'use client';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import Image from 'next/image';

export default function Results() {
  const router = useRouter();
  const [userData, setUserData]     = useState(null);
  const [prediction, setPrediction] = useState(null);
  const [isLoading, setIsLoading]   = useState(true);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const storedData       = sessionStorage.getItem('formData');
      const storedPrediction = sessionStorage.getItem('prediction');
      if (storedData && storedPrediction) {
        setUserData(JSON.parse(storedData));
        setPrediction(storedPrediction);
      } else {
        router.push('/');
      }
      setIsLoading(false);
    }
  }, [router]);

  if (isLoading) {
    return (
      <div className="flex justify-center items-center min-h-screen bg-[#2541B2] text-white">
        Loading...
      </div>
    );
  }
  if (!userData || !prediction) {
    return (
      <div className="flex justify-center items-center min-h-screen bg-[#2541B2] text-white">
        No data found. Redirecting...
      </div>
    );
  }

  const survived = prediction === 'Survived';

  return (
    <div className="min-h-screen bg-[#2541B2] flex flex-col items-center justify-center px-6 py-16">

      <Image
        src={survived ? '/Survived.jpg' : '/NotSurvived.jpg'}
        alt={survived ? 'Survived' : 'Not Survived'}
        width={300}
        height={260}
        className="rounded-xl shadow-2xl w-full max-w-[280px] sm:max-w-[320px] h-auto object-cover"
      />

      <h2 className="text-[40px] sm:text-[48px] text-[#EEC750] font-bold mt-10 mb-4 text-center leading-tight">
        {survived ? 'Congratulations' : 'In Memoriam'}
      </h2>

      <p className="text-white text-[20px] text-center mb-4">
        {survived ? `Hello, ${userData.userName}!` : `In memory of ${userData.userName}`}
      </p>

      <p className="text-white/70 text-[16px] text-center max-w-[480px] leading-relaxed mb-3">
        {survived
          ? 'Against the odds, you made it through one of the most tragic maritime disasters in history. Your courage, timing, and a bit of luck helped you find a place on a lifeboat and reach safety.'
          : 'Despite every effort, you were among the many lives lost in the early hours of April 15, 1912. You were part of a moment in history that reshaped maritime safety forever.'}
      </p>

      {!survived && (
        <p className="text-white/50 text-[15px] text-center mb-4 italic">
          May your memory live on through the generations.
        </p>
      )}

      <Link href="/" className="mt-8">
        <button className="bg-[#EEC750] text-[#243D9F] font-bold py-3 px-10 rounded-[5px] hover:bg-[#d4ae42] transition-colors">
          Try Again
        </button>
      </Link>

    </div>
  );
}
