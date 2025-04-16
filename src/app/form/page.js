'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import './form.css';

export default function Home() {
  const [formData, setFormData] = useState({userName: '',passengerClass: '',sex: 'male',age: '',sibsp: '',parch: '',embarkation: 'S',});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({...prevData,[name]: value,}));
  };

  // กัาหนดอัตราการรอด
  const survivalByEmbarked = {
    "C": 0.553571, "Q": 0.389610, "S": 0.339009
  };
  const survivalByPclass = {
    "1": 0.629630, "2": 0.472826, "3": 0.242363
  };
  const survivalBySex = {
    "female": 0.742038, "male": 0.188908
  };
  const survivalByFamilySize = {
    "Alone": 0.303538, "Large": 0.161290, "Small": 0.578767
  };

  // คํานวณการรอด
  const calculatePrediction = () => {
    let survivalScore = 0;

    // เอาค่าจาก Data
    const { passengerClass, sex, embarkation, sibsp, parch } = formData;


    // ไม่เจอ data ให้ตั้งเป็น 0
    survivalScore += survivalByPclass[passengerClass] || 0;
    survivalScore += survivalBySex[sex] || 0;
    survivalScore += survivalByEmbarked[embarkation] || 0;

    let familySize = parseInt(sibsp) + parseInt(parch);
    let familyCategory;
    if (familySize === 0) familyCategory = "Alone";
    else if (familySize > 3) familyCategory = "Large";
    else familyCategory = "Small";
    survivalScore += survivalByFamilySize[familyCategory] || 0;

    return survivalScore > 0.5 ? 'Survived' : 'Not Survived';
  };

  // เก็บข้อมูลใน data
  const storeDataAndNavigate = () => {
    const prediction = calculatePrediction();
    if (typeof window !== 'undefined') {
      sessionStorage.setItem('formData', JSON.stringify(formData));
      sessionStorage.setItem('prediction', prediction);
    }
  };

  return (
    <div className='wrapper'>
      <div className="container">
        <div className="form-container">
          <form>
            {/* Form fields */}
            <div>
              <label htmlFor="userName">Your Name:</label>
              <input type="text" id="userName" name="userName" value={formData.userName} onChange={handleChange} placeholder="Enter your name"/>
            </div>
            
            <div>
              <label htmlFor="passengerClass">Passenger Class:</label>
              <select
                id="passengerClass"
                name="passengerClass"
                value={formData.passengerClass}
                onChange={handleChange}
              >
                <option value="">Select class</option>
                <option value="1">First Class</option>
                <option value="2">Second Class</option>
                <option value="3">Third Class</option>
              </select>
            </div>
            <div>
              <label htmlFor="sex">Sex:</label>
              <select
                id="sex"
                name="sex"
                value={formData.sex}
                onChange={handleChange}
              >
                <option value="male">Male</option>
                <option value="female">Female</option>
              </select>
            </div>
            <div>
              <label htmlFor="age">Age:</label>
              <input
                type="number"
                id="age"
                name="age"
                value={formData.age}
                onChange={handleChange}
                placeholder="e.g., 30"
                step="1"
                min="5"
                max="80"
              />
            </div>
            <div>
              <label htmlFor="sibsp">Siblings/Spouses:</label>
              <input
                type="number"
                id="sibsp"
                name="sibsp"
                value={formData.sibsp}
                onChange={handleChange}
                placeholder="e.g., 1"
                step="1"
                min="0"
              />
            </div>
            <div>
              <label htmlFor="parch">Parents/Children:</label>
              <input
                type="number"
                id="parch"
                name="parch"
                value={formData.parch}
                onChange={handleChange}
                placeholder="e.g., 0"
                step="1"
                min="0"
              />
            </div>
            <div>
              <label htmlFor="embarkation">Embarkation:</label>
              <select
                id="embarkation"
                name="embarkation"
                value={formData.embarkation}
                onChange={handleChange}
              >
                <option value="S">Southampton (S)</option>
                <option value="C">Cherbourg (C)</option>
                <option value="Q">Queenstown (Q)</option>
              </select>
            </div>
            <Link href="/Result" onClick={storeDataAndNavigate} className="predict-button">Predict</Link>
          </form>
        </div>
      </div>
    </div>
  );
}
