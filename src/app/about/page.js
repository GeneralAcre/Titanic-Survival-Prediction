export default function About() {
  return (
    <div className="min-h-screen bg-[#2541B2]">
      <div className="max-w-screen-lg mx-auto px-6 md:px-10 pt-16 pb-24">

        {/* Title */}
        <h1 className="text-[64px] sm:text-[80px] md:text-[96px] text-[#EEC750] font-bold leading-none">
          ABOUT
        </h1>
        <h1 className="text-[64px] sm:text-[80px] md:text-[96px] text-white font-bold leading-none mb-10">
          PROJECT
        </h1>

        <hr className="border-white/20 mb-12" />

        {/* Creator */}
        <div className="mb-14">
          <span className="text-[11px] font-bold tracking-[0.22em] text-[#EEC750] uppercase block mb-3">
            Creator
          </span>
          <p className="text-[#EEC750] bg-white/10 px-3 py-1 text-[22px] font-medium inline-block rounded">
            Acre Sanpaphat
          </p>
        </div>

        {/* Two columns */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-14">

          <div>
            <span className="text-[11px] font-bold tracking-[0.22em] text-[#EEC750] uppercase block mb-4">
              About the Project
            </span>
            <p className="text-white/80 text-[16px] leading-relaxed">
              Titanic Survival Prediction is an interactive data storytelling project
              that explores one of history&apos;s most famous disasters through machine learning
              and visual data. Enter your passenger details and discover which side of
              history you would have been on.
            </p>
          </div>

          <div>
            <span className="text-[11px] font-bold tracking-[0.22em] text-[#EEC750] uppercase block mb-4">
              Data &amp; Inspiration
            </span>
            <p className="text-white/80 text-[16px] leading-relaxed mb-5">
              This project draws inspiration and data insights from the excellent feature
              engineering notebook by Abhishek on Kaggle.
            </p>
            <a
              href="https://www.kaggle.com/code/abhishek0032/titanic-survival-prediction-feature-engineering"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block border border-[#EEC750] text-[#EEC750] px-5 py-2 rounded text-[14px] font-bold hover:bg-[#EEC750] hover:text-[#2541B2] transition-colors"
            >
              View on Kaggle →
            </a>
          </div>

        </div>

        {/* Built with */}
        <div className="mb-14">
          <span className="text-[11px] font-bold tracking-[0.22em] text-[#EEC750] uppercase block mb-4">
            Built With
          </span>
          <div className="flex flex-wrap gap-3">
            {['Next.js 15', 'React 18', 'Tailwind CSS', 'JavaScript'].map((tech) => (
              <span
                key={tech}
                className="border border-white/30 text-white/70 text-[13px] px-4 py-1.5 rounded-full"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>

        {/* Acknowledgment */}
        <div className="border-t border-white/20 pt-10">
          <p className="text-white/50 text-[15px] leading-relaxed max-w-prose">
            Sincere thanks to Abhishek for sharing such a well-structured and informative
            notebook with the community. The original work provided valuable feature
            engineering techniques and predictive modeling approaches for the Titanic
            survival prediction problem.
          </p>
        </div>

      </div>
    </div>
  );
}
