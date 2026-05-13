'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';

export default function FormPage() {
  const router = useRouter();
  const [formData, setFormData] = useState({
    userName: '', passengerClass: '', sex: 'male',
    age: '', sibsp: '', parch: '', embarkation: '',
  });
  const [formErrors, setFormErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const survivalByEmbarked  = { Cherbourg: 0.553571, Queenstown: 0.389610, Southampton: 0.339009 };
  const survivalByPclass    = { '1': 0.629630, '2': 0.472826, '3': 0.242363 };
  const survivalBySex       = { female: 0.742038, male: 0.188908 };
  const survivalByFamilySize = { Alone: 0.303538, Large: 0.161290, Small: 0.578767 };

  const calculatePrediction = () => {
    const { passengerClass, sex, embarkation, sibsp, parch } = formData;
    const classProbability  = survivalByPclass[passengerClass] || 0.3;
    const sexProbability    = survivalBySex[sex] || 0.2;
    const embarkProbability = survivalByEmbarked[embarkation] || 0.3;
    const sibspValue = parseInt(sibsp) || 0;
    const parchValue = parseInt(parch) || 0;
    const familySize = sibspValue + parchValue;
    const familyCategory =
      familySize === 0 ? 'Alone' : familySize > 3 ? 'Large' : 'Small';
    const familyProbability = survivalByFamilySize[familyCategory] || 0.3;
    const total =
      sexProbability * 0.4 + classProbability * 0.3 +
      familyProbability * 0.2 + embarkProbability * 0.1;
    return total > 0.5 ? 'Survived' : 'Not Survived';
  };

  const storeDataAndNavigate = (e) => {
    e.preventDefault();
    const errors = {};
    Object.keys(formData).forEach((key) => {
      if (!formData[key]) errors[key] = 'Required.';
    });
    if (!formData.userName.trim()) errors.userName = 'Full name must be filled.';
    ['passengerClass', 'age', 'sibsp', 'parch'].forEach((field) => {
      if (field === 'passengerClass' && !formData[field]) {
        errors[field] = 'Please select a class.'; return;
      }
      const val = Number(formData[field]);
      if (field !== 'passengerClass' && isNaN(val)) errors[field] = 'Must be a number.';
      else if (val < 0) errors[field] = 'Must be positive.';
    });
    const age   = Number(formData.age);
    const sibsp = Number(formData.sibsp);
    const parch = Number(formData.parch);
    if (!isNaN(age)   && (age < 5 || age > 80)) errors.age   = 'Age must be 5–80.';
    if (!isNaN(sibsp) && sibsp > 3)             errors.sibsp = 'Max 3.';
    if (!isNaN(parch) && parch > 3)             errors.parch = 'Max 3.';
    if (Object.keys(errors).length > 0) { setFormErrors(errors); return; }
    setFormErrors({});
    const prediction = calculatePrediction();
    if (typeof window !== 'undefined') {
      sessionStorage.setItem('formData', JSON.stringify(formData));
      sessionStorage.setItem('prediction', prediction);
    }
    router.push('/Result');
  };

  const inputCls =
    'px-3 py-2 rounded border border-white bg-[#2541B2] focus:outline-none focus:ring-2 focus:ring-[#EEC750] w-full';

  return (
    /* Full-height split: blue left | white right on desktop
       Stacked: blue top | white bottom on mobile              */
    <div className="flex flex-col md:flex-row md:min-h-[calc(100vh-70px)]">

      {/* ── Blue panel ── */}
      <div className="bg-[#2541B2] md:w-[40%] flex flex-col justify-center px-8 md:px-12 py-14">
        <div className="max-w-[300px]">
          <div className="text-5xl md:text-6xl text-[#EEC750] font-medium leading-tight">FORM</div>
          <p className="text-white text-[18px] mt-4 mb-3 leading-snug">
            Who would you have been?
          </p>
          <p className="text-white/60 text-[15px] leading-relaxed">
            Enter your passenger details to discover whether fate was on your side
            aboard the Titanic, April 1912.
          </p>
        </div>
      </div>

      {/* ── White panel ── */}
      <div className="flex-1 bg-white flex items-center justify-center px-6 md:px-10 py-14">
        <div className="w-full max-w-[440px] bg-[#2541B2] rounded-[30px] overflow-hidden text-white shadow-lg">

          <div className="bg-[#EEC750] text-center py-4">
            <p className="text-[#243D9F] font-bold text-[20px]">ENTER YOUR INFORMATION</p>
          </div>

          <form className="p-6 space-y-5" onSubmit={storeDataAndNavigate}>

            <div className="flex flex-col gap-2">
              <label className="text-[16px]">
                Full name
                {formErrors.userName && <span className="text-[#EEC750] text-[12px] ml-2">{formErrors.userName}</span>}
              </label>
              <input type="text" name="userName" value={formData.userName} onChange={handleChange}
                placeholder="Enter your name" className={inputCls} />
            </div>

            <div className="flex flex-col gap-2">
              <label className="text-[16px]">
                Passenger Class
                {formErrors.passengerClass && <span className="text-[#EEC750] text-[12px] ml-2">{formErrors.passengerClass}</span>}
              </label>
              <select name="passengerClass" value={formData.passengerClass} onChange={handleChange} className={inputCls}>
                <option value="" disabled>Select class</option>
                <option value="1" className="bg-[#EEC750] text-[#2541B2] font-bold">First Class</option>
                <option value="2" className="bg-[#EEC750] text-[#2541B2] font-bold">Second Class</option>
                <option value="3" className="bg-[#EEC750] text-[#2541B2] font-bold">Third Class</option>
              </select>
            </div>

            <div className="flex flex-col gap-2">
              <label className="text-[16px]">
                Sex
                {formErrors.sex && <span className="text-[#EEC750] text-[12px] ml-2">{formErrors.sex}</span>}
              </label>
              <select name="sex" value={formData.sex} onChange={handleChange} className={inputCls}>
                <option value="male"   className="bg-[#EEC750] text-[#2541B2] font-bold">Male</option>
                <option value="female" className="bg-[#EEC750] text-[#2541B2] font-bold">Female</option>
              </select>
            </div>

            <div className="flex flex-col gap-2">
              <label className="text-[16px]">
                Age
                {formErrors.age && <span className="text-[#EEC750] text-[12px] ml-2">{formErrors.age}</span>}
              </label>
              <input type="number" name="age" value={formData.age} onChange={handleChange}
                placeholder="e.g., 30" className={inputCls} />
            </div>

            <div className="flex flex-col gap-2">
              <label className="text-[16px]">
                Siblings / Spouses
                {formErrors.sibsp && <span className="text-[#EEC750] text-[12px] ml-2">{formErrors.sibsp}</span>}
              </label>
              <input type="number" name="sibsp" value={formData.sibsp} onChange={handleChange}
                placeholder="e.g., 1" className={inputCls} />
            </div>

            <div className="flex flex-col gap-2">
              <label className="text-[16px]">
                Parents / Children
                {formErrors.parch && <span className="text-[#EEC750] text-[12px] ml-2">{formErrors.parch}</span>}
              </label>
              <input type="number" name="parch" value={formData.parch} onChange={handleChange}
                placeholder="e.g., 0" className={inputCls} />
            </div>

            <div className="flex flex-col gap-2">
              <label className="text-[16px]">
                Embarkation
                {formErrors.embarkation && <span className="text-[#EEC750] text-[12px] ml-2">{formErrors.embarkation}</span>}
              </label>
              <select name="embarkation" value={formData.embarkation} onChange={handleChange} className={inputCls}>
                <option value="" disabled>Select port</option>
                <option value="Cherbourg"   className="bg-[#EEC750] text-[#2541B2] font-bold">Cherbourg</option>
                <option value="Queenstown"  className="bg-[#EEC750] text-[#2541B2] font-bold">Queenstown</option>
                <option value="Southampton" className="bg-[#EEC750] text-[#2541B2] font-bold">Southampton</option>
              </select>
            </div>

            <div className="pt-2 pb-4">
              <button type="submit"
                className="bg-[#EEC750] text-[#243D9F] font-bold py-2 w-[170px] rounded-[5px] hover:bg-[#d4ae42] transition-colors block mx-auto">
                Submit
              </button>
            </div>

          </form>
        </div>
      </div>

    </div>
  );
}
