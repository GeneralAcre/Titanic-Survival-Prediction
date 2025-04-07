'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import './form.css';

export default function Home() {
  const [formData, setFormData] = useState({
    userName: '',
    passengerClass: '',
    sex: 'male',
    age: '',
    sibsp: '',
    parch: '',
    embarkation: 'S',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  // Example survival prediction logic
  const calculatePrediction = () => {
    const survivalScore = 0.6; // Replace with actual calculation based on form data
    return survivalScore > 0.5 ? 'Survived' : 'Not Survived';
  };

  // Store form data and prediction in sessionStorage
  const storeDataAndNavigate = () => {
    const prediction = calculatePrediction();
    if (typeof window !== 'undefined') {
      sessionStorage.setItem('formData', JSON.stringify(formData));
      sessionStorage.setItem('prediction', prediction);
    }
  };

  return (
    <div className="container">
      <div className="form-container">
        <form>
          {/* Form fields */}
          <div>
            <label htmlFor="userName">Your Name:</label>
            <input
              type="text"
              id="userName"
              name="userName"
              value={formData.userName}
              onChange={handleChange}
              placeholder="Enter your name"
            />
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
          <Link href="/Result" onClick={storeDataAndNavigate} className="predict-button">
            Predict
          </Link>
        </form>
      </div>
    </div>
  );
}
