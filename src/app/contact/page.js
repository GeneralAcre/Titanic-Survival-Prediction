export default function Contact() {
  return (
    <div className="min-h-screen bg-[#2541B2] flex flex-col">

      <div className="max-w-screen-lg mx-auto px-6 md:px-10 pt-16 pb-24 flex-1 w-full">

        {/* Title */}
        <h1 className="text-[48px] sm:text-[56px] md:text-[64px] text-[#EEC750] font-bold leading-none">
          CONTACT
        </h1>
        <p className="text-white/60 text-[15px] mt-3 mb-10">
          Let&apos;s build something great together.
        </p>

        <hr className="border-white/20 mb-14" />

        {/* Email — large and prominent */}
        <div className="mb-16">
          <span className="text-[11px] font-bold tracking-[0.22em] text-[#EEC750] uppercase block mb-4">
            Email
          </span>
          <a
            href="mailto:sanpaphat14@gmail.com"
            className="text-white text-[18px] sm:text-[20px] font-medium hover:text-[#EEC750] transition-colors break-all"
          >
            sanpaphat14@gmail.com
          </a>
        </div>

        <hr className="border-white/20 mb-14" />

        {/* Social */}
        <div>
          <span className="text-[11px] font-bold tracking-[0.22em] text-[#EEC750] uppercase block mb-6">
            Social
          </span>
          <div className="flex flex-wrap gap-4">
            <a
              href="https://x.com/Acrepedia"
              target="_blank"
              rel="noopener noreferrer"
              className="border border-white/40 text-white px-10 py-3 text-[15px] font-bold hover:bg-white hover:text-[#2541B2] transition-colors rounded-[4px]"
            >
              X
            </a>
            <button className="border border-white/40 text-white px-10 py-3 text-[15px] font-bold hover:bg-white hover:text-[#2541B2] transition-colors rounded-[4px]">
              LinkedIn
            </button>
          </div>
        </div>

      </div>

      {/* Footer */}
      <div className="bg-[#EEC750] py-5 px-6 md:px-10">
        <div className="max-w-screen-lg mx-auto text-[#2541B2] text-[14px] flex flex-col sm:flex-row sm:justify-between gap-1">
          <span>Privacy Policy</span>
          <span>Titanic Survival Prediction 2025</span>
        </div>
      </div>

    </div>
  );
}
