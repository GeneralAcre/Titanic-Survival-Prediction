import Image from "next/image";
import Infographic from "../components/Infographic";

export default function ModelPage() {
  return (
    <div className="min-h-screen flex flex-col bg-white">

      {/* Hero — full-bleed image with title overlaid at the bottom */}
      <div className="relative w-full h-[280px] sm:h-[360px] md:h-[460px]">
        <Image
          src="/Screenshot 2025-04-10 180518.png"
          alt="Model preview"
          fill
          className="object-cover"
        />
        {/* Blue gradient overlay — dark at bottom for text, fades to semi-transparent at top */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#2541B2] via-[#2541B2]/50 to-[#2541B2]/10" />

        {/* Title — sits on top of the gradient at the bottom */}
        <div className="absolute bottom-0 left-0 right-0 px-6 md:px-10 pb-8">
          <div className="max-w-screen-lg mx-auto">
            <div className="text-5xl md:text-6xl text-[#EEC750] font-medium">MODEL</div>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-screen-lg mx-auto px-6 md:px-10 w-full">
        <div className="mt-10 mb-2">
          <blockquote className="text-black text-[18px] leading-relaxed border-l-4 border-[#2541B2] pl-4">
            This page showcases the machine learning model that predicts whether a passenger
            would have survived the tragic sinking of the Titanic in 1912.
          </blockquote>
        </div>
        <Infographic />
      </div>

    </div>
  );
}
