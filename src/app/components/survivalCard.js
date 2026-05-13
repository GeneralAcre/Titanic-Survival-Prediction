import React from "react";

const SurvivalCard = ({ title, categoryName, data }) => {
  return (
    <div className="mb-8 mt-4">
      <div className="text-[18px] inline-block bg-[#EEC750] px-[6px] py-1 mb-4">
        Survival Correlation by: {title}
      </div>

      {/* Header row */}
      <div className="flex items-center gap-4 mb-3">
        <span className="text-[16px] font-medium w-[110px] sm:w-[140px]">{categoryName}</span>
        <span className="flex-1 text-[14px] text-gray-500">Rate</span>
        <span className="text-[16px] font-medium w-[70px] text-right">Survived</span>
      </div>

      {data.map((item, index) => {
        const rate = parseFloat(item.survived);
        const pct = Math.round(rate * 100);
        return (
          <div key={index} className="flex items-center gap-4 mb-3">
            <span className="text-[16px] w-[110px] sm:w-[140px] shrink-0">{Object.values(item)[0]}</span>
            <div className="flex-1 bg-gray-100 rounded-full h-2">
              <div
                className="bg-[#2541B2] h-2 rounded-full"
                style={{ width: `${pct}%` }}
              />
            </div>
            <span className="text-[16px] w-[70px] text-right shrink-0">{pct}%</span>
          </div>
        );
      })}
    </div>
  );
};

export default SurvivalCard;
