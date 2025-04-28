'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';

export default function Home() {
  const router = useRouter();
  const [formData, setFormData] = useState({userName: '',passengerClass: '',sex: 'male',age: '',sibsp: '',parch: '',embarkation: '',});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({...prevData,[name]: value,}));
  };

  const [formErrors, setFormErrors] = useState({});

  const survivalByEmbarked = {"Cherbourg": 0.553571, "Queenstown": 0.389610, "Southampton": 0.339009};
  const survivalByPclass = {"1": 0.629630, "2": 0.472826, "3": 0.242363};
  const survivalBySex = {"female": 0.742038, "male": 0.188908};
  const survivalByFamilySize = {"Alone": 0.303538, "Large": 0.161290, "Small": 0.578767};

  const calculatePrediction = () => {

    const { passengerClass, sex, embarkation, sibsp, parch } = formData;

    const classProbability = survivalByPclass[passengerClass] || 0.3;
    const sexProbability = survivalBySex[sex] || 0.2;
    const embarkProbability = survivalByEmbarked[embarkation] || 0.3;

    // Parse as integers and default to 0 if NaN
    const sibspValue = parseInt(sibsp) || 0;
    const parchValue = parseInt(parch) || 0;
    let familySize = sibspValue + parchValue;

    let familyCategory;
    if (familySize === 0) familyCategory = "Alone";
    else if (familySize > 3) familyCategory = "Large";
    else familyCategory = "Small";

    const familyProbability = survivalByFamilySize[familyCategory] || 0.3;
      // Weighted average (sex has highest weight)
    const totalProbability = ((sexProbability * 0.4) +(classProbability * 0.3) +(familyProbability * 0.2) +(embarkProbability * 0.1));

    console.log('Probabilities:', {
      sex: sexProbability,
      class: classProbability,
      embark: embarkProbability,
      family: familyProbability,
      total: totalProbability
    });
    return totalProbability > 0.5 ? 'Survived' : 'Not Survived';
  };

  const storeDataAndNavigate = (e) => {
    e.preventDefault();
  
    const errors = {};
    Object.keys(formData).forEach((key) => {
      if (!formData[key]) {errors[key] = 'This field is required.';}});

    // Validate the full name
    if (!formData.userName.trim()) {
      errors.userName = 'Full name must be filled.';
    }
  
    const numericFields = ['passengerClass', 'age', 'sibsp', 'parch'];
    numericFields.forEach((field) => {
      if (field === 'passengerClass' && !formData[field]) {
        errors[field] = 'Please select a passenger class.';
        return;
      }
      
      const value = Number(formData[field]);
  
      if (field !== 'passengerClass' && isNaN(value)) {
        errors[field] = 'This field must be a number.';
      } else if (value < 0) {
        errors[field] = 'Must be a positive number.';
      }
    });
  
    // Additional specific checks
    const age = Number(formData.age);
    const sibsp = Number(formData.sibsp);
    const parch = Number(formData.parch);
  
    if (!isNaN(age) && (age < 5 || age > 80)) {
      errors.age = 'Age must be between 5 and 80.';
    }
    if (!isNaN(sibsp) && sibsp > 3) {
      errors.sibsp = 'Siblings/Spouses must be less than 4.';
    }
    if (!isNaN(parch) && parch > 3) {
      errors.parch = 'Parents/Children must be less than 4.';
    }
  
    if (Object.keys(errors).length > 0) {
      setFormErrors(errors);
      return; // stop if errors
    }
  
    setFormErrors({});
    const prediction = calculatePrediction();
  
    if (typeof window !== 'undefined') {
      sessionStorage.setItem('formData', JSON.stringify(formData));
      sessionStorage.setItem('prediction', prediction);
    }
  
    router.push('/Result');
  };

  return (
    <div className="bg-white w-full h-full min-h-screen overflow-hidden ">
      <div className="text-5xl text-[#2541B2] font-medium mt-[65px] mb-[65px] ml-[45px]">FORM</div>
      
      {/* Form */}
      <div className='flex justify-center items-center mb-[65px]'>
        <div className="w-[400px] bg-[#2541B2] rounded-[30px] overflow-hidden text-white shadow-lg">
          
          {/* Yellow Header */}
          <div className="bg-[#EEC750] text-center py-4">
            <p className="text-[#243D9F] font-bold text-[20px]">ENTER YOUR INFORMATION</p>
          </div>
    
    
          <form className="p-[22px] space-y-4" onSubmit= {storeDataAndNavigate}>
            
            {/* Each Input Section */}
            <div className="flex flex-col space-y-[10px]">
              <label className="text-[16px]">Full name : {formErrors.userName && <span className="text-[#EEC750] text-[14px]">{formErrors.userName}</span>}</label>
              <input type="text" id="userName" name="userName" value={formData.userName} onChange={handleChange} placeholder="Enter your name"
                className="px-3 py-2 rounded border border-white bg-[#2541B2] focus:outline-none focus:ring-2 focus:ring-[#EEC750]" />
            </div>

            {/* Drop down Menu */}
            <div className="flex flex-col space-y-[10px]">
              <label className="text-[16px]">Passenger Class : {formErrors.passengerClass && <span className="text-[#EEC750] text-[14px]">{formErrors.passengerClass}</span>}</label>

              <select type="text" id="passengerClass" name="passengerClass" value={formData.passengerClass} onChange={handleChange} 
                className="px-3 py-2 rounded border border-white bg-[#2541B2] focus:outline-none focus:ring-2 focus:ring-[#EEC750]">

                <option value="1" className="bg-[#EEC750] text-[#2541B2] font-bold " > First Class </option> 
                <option value="2" className="bg-[#EEC750] text-[#2541B2] font-bold " > Second Class </option> 
                <option value="3" className="bg-[#EEC750] text-[#2541B2] font-bold " > Third Class </option>

              </select>

            </div>
    
            <div className="flex flex-col space-y-[10px]">
              <label className="text-[16px]">Sex : {formErrors.sex && <span className="text-[#EEC750] text-[14px]">{formErrors.sex}</span>}</label>
              <select type="text" id="sex" name="sex" value={formData.sex} onChange={handleChange} placeholder="Male / Female"
                className="px-3 py-2 rounded border border-white bg-[#2541B2] focus:outline-none focus:ring-2 focus:ring-[#EEC750]">

                <option value="male" className="bg-[#EEC750] text-[#2541B2] font-bold ">Male</option>
                <option value="female" className="bg-[#EEC750] text-[#2541B2] font-bold ">Female</option>

              </select>
                
            </div>
    
            <div className="flex flex-col space-y-[10px]">
              <label className="text-[16px]">Age : {formErrors.age && <span className="text-[#EEC750] text-[14px]">{formErrors.age}</span>}</label>
              <input type="number" id="age" name="age" value={formData.age} onChange={handleChange} placeholder="e.g., 30"
                className="px-3 py-2 rounded border border-white bg-[#2541B2] focus:outline-none focus:ring-2 focus:ring-[#EEC750]"/>
            </div>
    
            <div className="flex flex-col space-y-[10px]">
              <label className="text-[16px]">Siblings/Spouses : {formErrors.sibsp && <span className="text-[#EEC750] text-[14px]">{formErrors.sibsp}</span>}</label>
              <input type="number" id="sibsp" name="sibsp" value={formData.sibsp} onChange={handleChange} placeholder="e.g., 1"
                className="px-3 py-2 rounded border border-white bg-[#2541B2] focus:outline-none focus:ring-2 focus:ring-[#EEC750]"/>
            </div>
    
            <div className="flex flex-col space-y-[10px]">
              <label className="text-[16px]">Parents/Children : {formErrors.parch && <span className="text-[#EEC750] text-[14px]">{formErrors.parch}</span>}</label>
              <input type="number" id="parch" name="parch" value={formData.parch} onChange={handleChange} placeholder="e.g., 0"
                className="px-3 py-2 rounded border border-white bg-[#2541B2] focus:outline-none focus:ring-2 focus:ring-[#EEC750]"/>
            </div>
    
            <div className="flex flex-col space-y-[10px]">
              <label className="text-[16px]">Embarkation : {formErrors.embarkation && <span className="text-[#EEC750] text-[14px]">{formErrors.embarkation}</span>}</label>
              <select type="text" id="embarkation" name="embarkation" value={formData.embarkation} onChange={handleChange} 
                className="px-3 py-2 rounded border border-white bg-[#2541B2] focus:outline-none focus:ring-2 focus:ring-[#EEC750] mb-[30px]">

                  <option value="Cherbourg" className="bg-[#EEC750] text-[#2541B2] font-bold ">Cherbourg</option>
                  <option value="Queenstown" className="bg-[#EEC750] text-[#2541B2] font-bold ">Queenstown</option>
                  <option value="Southampton" className="bg-[#EEC750] text-[#2541B2] font-bold ">Southampton</option>

              </select>
            </div>
    
            {/* Submit Button */} {/* Block - take full row*/} {/* mx-auto - center and horizontal*/}
            <button type="submit" 
              className="bg-[#EEC750] text-[#243D9F] py-2 w-[170px] rounded-[5px] hover:bg-[#d4ae42] block mx-auto  ">Submit</button>
    
          </form>
        </div>
      </div>

    </div>

  );
}