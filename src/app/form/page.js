'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';

export default function Home() {
  const router = useRouter();
  const [formData, setFormData] = useState({userName: '',passengerClass: '',sex: 'male',age: '',sibsp: '',parch: '',embarkation: 'S',});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({...prevData,[name]: value,}));
  };

  const survivalByEmbarked = {"C": 0.553571, "Q": 0.389610, "S": 0.339009};
  const survivalByPclass = {"1": 0.629630, "2": 0.472826, "3": 0.242363};
  const survivalBySex = {"female": 0.742038, "male": 0.188908};
  const survivalByFamilySize = {"Alone": 0.303538, "Large": 0.161290, "Small": 0.578767};

  const calculatePrediction = () => {let survivalScore = 0;

    const { passengerClass, sex, embarkation, sibsp, parch } = formData;


    // ไม่เจอ data ให้ตั้งเป็น 0
    survivalScore += survivalByPclass[passengerClass] || 0;
    survivalScore += survivalBySex[sex] || 0;
    survivalScore += survivalByEmbarked[embarkation] || 0;

    let familySize = parseInt(sibsp || 0) + parseInt(parch || 0);
    let familyCategory;
    if (familySize === 0) familyCategory = "Alone";
    else if (familySize > 3) familyCategory = "Large";
    else familyCategory = "Small";
    survivalScore += survivalByFamilySize[familyCategory] || 0;

    return survivalScore > 0.5 ? 'Survived' : 'Not Survived';
  };

  // เก็บข้อมูลใน data
  const storeDataAndNavigate = (e) => {e.preventDefault();
    const prediction = calculatePrediction();
    if (typeof window !== 'undefined') {
      sessionStorage.setItem('formData', JSON.stringify(formData));
      sessionStorage.setItem('prediction', prediction);
    }

  {/* Navigate to Result page*/}
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
              <label className="text-sm">Full name :</label>
              <input type="text" id="userName" name="userName" value={formData.userName} onChange={handleChange} placeholder="Enter your name"
                className="px-3 py-2 rounded border border-white bg-[#2541B2] focus:outline-none focus:ring-2 focus:ring-[#EEC750]" />
            </div>
    
            <div className="flex flex-col space-y-[10px]">
              <label className="text-sm">Passenger Class :</label>

              <input type="text" id="passengerClass" name="passengerClass" value={formData.passengerClass} onChange={handleChange} placeholder="e.g., 1"
                className="px-3 py-2 rounded border border-white bg-[#2541B2] focus:outline-none focus:ring-2 focus:ring-[#EEC750]"/>
                
            </div>
    
            <div className="flex flex-col space-y-[10px]">
              <label className="text-sm">Sex :</label>
              <input type="text" id="sex" name="sex" value={formData.sex} onChange={handleChange} placeholder="Male / Female"
                className="px-3 py-2 rounded border border-white bg-[#2541B2] focus:outline-none focus:ring-2 focus:ring-[#EEC750]"/>
            </div>
    
            <div className="flex flex-col space-y-[10px]">
              <label className="text-sm">Age :</label>
              <input type="number" id="age" name="age" value={formData.age} onChange={handleChange} placeholder="e.g., 30"
                className="px-3 py-2 rounded border border-white bg-[#2541B2] focus:outline-none focus:ring-2 focus:ring-[#EEC750]"/>
            </div>
    
            <div className="flex flex-col space-y-[10px]">
              <label className="text-sm">Siblings/Spouses :</label>
              <input type="number" id="sibsp" name="sibsp" value={formData.sibsp} onChange={handleChange} placeholder="e.g., 1"
                className="px-3 py-2 rounded border border-white bg-[#2541B2] focus:outline-none focus:ring-2 focus:ring-[#EEC750]"/>
            </div>
    
            <div className="flex flex-col space-y-[10px]">
              <label className="text-sm">Parents/Children :</label>
              <input type="number" id="parch" name="parch" value={formData.parch} onChange={handleChange} placeholder="e.g., 0"
                className="px-3 py-2 rounded border border-white bg-[#2541B2] focus:outline-none focus:ring-2 focus:ring-[#EEC750]"/>
            </div>
    
            <div className="flex flex-col space-y-[10px]">
              <label className="text-sm">Embarkation :</label>
              <input type="text" id="embarkation" name="embarkation" value={formData.embarkation} onChange={handleChange} placeholder="S / C / Q"
                className="px-3 py-2 rounded border border-white bg-[#2541B2] focus:outline-none focus:ring-2 focus:ring-[#EEC750] mb-[30px]"/>
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