import React from 'react';
import SurvivalCard from './survivalCard';

const YourMainComponent = () => {
  return (
    <div>
      {/* Embarked */}
      <SurvivalCard
        title="Embarked"
        categoryName="Embarked"
        data={[
          { embarked: 'Cherbourg', survived: '0.553571' },
          { embarked: 'Queenstown', survived: '0.389610' },
          { embarked: 'Southampton', survived: '0.339009' },
        ]}
      />
      <hr className="border-[#2541B2]" />

      {/* Pclass */}
      <SurvivalCard
        title="Pclass"
        categoryName="Pclass"
        data={[
          { Pclass: 'First', survived: '0.629630' },
          { Pclass: 'Second', survived: '0.472826' },
          { Pclass: 'Third', survived: '0.242363' },
        ]}
      />
      <hr className="border-[#2541B2]" />

      {/* Sex */}
      <SurvivalCard
        title="Sex"
        categoryName="Sex"
        data={[
          { Sex: 'Female', survived: '0.742038' },
          { Sex: 'Male', survived: '0.188908' },
        ]}
      />
      <hr className="border-[#2541B2]" />

      {/* Family Size */}
      <SurvivalCard
        title="Family Size"
        categoryName="Family Size"
        data={[
          { FamilySize: 'Small', survived: '0.578767' },
          { FamilySize: 'Alone', survived: '0.303538' },
          { FamilySize: 'Large', survived: '0.161290' },
        ]}
      />
    </div>
  );
};

export default YourMainComponent;