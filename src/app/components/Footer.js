import Link from 'next/link';

export default function Footer() {
  return (
    <footer>
      {/* Blue band — contact info */}
      <div className="bg-[#2541B2] border-t border-white/20 px-6 md:px-10 py-10">
        <div className="max-w-screen-lg mx-auto flex flex-col sm:flex-row sm:items-center sm:justify-between gap-6">

          <div>
            <span className="text-[11px] font-bold tracking-[0.22em] text-[#EEC750] uppercase block mb-2">
              Contact
            </span>
            <a
              href="mailto:sanpaphat14@gmail.com"
              className="text-white text-[15px] font-medium hover:text-[#EEC750] transition-colors"
            >
              sanpaphat14@gmail.com
            </a>
          </div>

          <div className="flex gap-3">
            <a
              href="https://x.com/Acrepedia"
              target="_blank"
              rel="noopener noreferrer"
              className="border border-white/40 text-white px-6 py-2 text-[14px] font-bold hover:bg-white hover:text-[#2541B2] transition-colors rounded-[4px]"
            >
              X
            </a>
            <button className="border border-white/40 text-white px-6 py-2 text-[14px] font-bold hover:bg-white hover:text-[#2541B2] transition-colors rounded-[4px]">
              LinkedIn
            </button>
          </div>

        </div>
      </div>

      {/* Yellow band — copyright */}
      <div className="bg-[#EEC750] py-4 px-6 md:px-10">
        <div className="max-w-screen-lg mx-auto text-[#2541B2] text-[13px] flex flex-col sm:flex-row sm:justify-between gap-1">
          <span>Privacy Policy</span>
          <span>Titanic Survival Prediction 2025</span>
        </div>
      </div>
    </footer>
  );
}
