import React from "react";

const SurvivalCard = ({title, categoryName, data}) => {
    return (
        <div className="mb-[26px]">
          <div className="text-[20px] inline-block bg-[#EEC750] px-[5px] py-1 mt-[18px] mb-[10px]">
            Survival Correlation by: {title}
          </div>
          <div className="flex items-center gap-x-12 mb-[10px]">
            <span className="text-[20px] w-[120px]">{categoryName}</span>
            <span className="text-[20px] ml-auto text-right">Survived</span>
          </div>
          {data.map((item, index) => (
            <div key={index} className="flex items-center w-full">
              <span className="text-[20px] w-[120px]">{Object.values(item)[0]}</span>
              <span className="text-[20px] ml-auto text-right">{item.survived}</span>
            </div>
          ))}
        </div>
      );
};

export default SurvivalCard;