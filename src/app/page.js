"use client";

import Link from "next/link";
import Image from "next/image";

export default function Home() {
  return (
    <div>

      {/* ── HERO ── */}
      <div className="relative w-full h-[calc(100vh-70px)] min-h-[520px] max-h-[900px]">

        {/* Background image */}
        <Image
          src="/Titanic.jpg"
          alt="Titanic"
          fill
          className="object-cover object-center"
          priority
        />

        {/* Gradient: clear at top → solid blue at bottom */}
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(to bottom, rgba(37,65,178,0.25) 0%, rgba(37,65,178,0.15) 35%, rgba(37,65,178,0.6) 65%, rgba(37,65,178,1) 100%)",
          }}
        />

        {/* Title + CTA — anchored to bottom */}
        <div className="absolute bottom-0 left-0 right-0 px-6 md:px-10 pb-12 md:pb-16">
          <div className="max-w-screen-lg mx-auto">

            <h1 className="text-[64px] sm:text-[80px] md:text-[100px] lg:text-[116px] text-[#EEC750] font-bold leading-none tracking-tight">
              TITANIC
            </h1>

            <div className="text-[22px] sm:text-[28px] md:text-[34px] text-white font-medium leading-tight mb-4">
              SURVIVAL PREDICTION
            </div>

            <p className="text-white/60 text-[14px] sm:text-[15px] mb-8 max-w-[420px] leading-relaxed">
              April 15, 1912. The ship they called unsinkable met its fate.
              Enter your details and find out if you would have survived.
            </p>

            <Link
              href="/form"
              className="inline-block bg-[#EEC750] text-[#2541B2] px-8 py-3 rounded-[5px] font-bold text-[17px] hover:bg-[#d4ae42] transition-colors"
            >
              START PREDICTION
            </Link>

          </div>
        </div>
      </div>

      {/* ── INFO SECTION ── Seamless blue continuation from hero */}
      <div className="bg-[#2541B2] px-6 md:px-10 py-16">
        <div className="max-w-screen-lg mx-auto">

          <div className="border-t border-white/20 pt-12 grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16">

            <div>
              <span className="text-[11px] font-bold tracking-[0.22em] text-[#EEC750] uppercase">
                Did you know
              </span>
              <p className="text-white text-[16px] leading-relaxed mt-3">
                The Titanic was a massive luxury ship called &quot;unsinkable,&quot; but on its first
                voyage in 1912 it struck an iceberg and sank — becoming one of the most famous
                disasters in history.
              </p>
            </div>

            <div>
              <span className="text-[11px] font-bold tracking-[0.22em] text-[#EEC750] uppercase">
                Your fate awaits
              </span>
              <p className="text-white text-[16px] leading-relaxed mt-3">
                Gender, class, age, family — everything mattered that night.
                Enter your details and discover which side of history you would have been on.
              </p>
            </div>

          </div>
        </div>
      </div>

    </div>
  );
}
