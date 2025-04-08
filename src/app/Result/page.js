'use client'; // Ensure this is at the top to enable the client-side behavior

import { useEffect, useState } from 'react';
import style from './result.css'
import Link from 'next/link';

export default function Result() {
  const [formData, setFormData] = useState(null);
  const [prediction, setPrediction] = useState(null);

  // Survival prediction logic
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

  // Calculate survival score based on user input
  const calculateSurvivalScore = (formData) => {
    let survivalScore = 0;

    // Add survival score based on passenger class
    survivalScore += survivalByPclass[formData.passengerClass] || 0;

    // Add survival score based on sex
    survivalScore += survivalBySex[formData.sex] || 0;

    // Add survival score based on embarkation point
    survivalScore += survivalByEmbarked[formData.embarkation] || 0;

    // Calculate family size and determine family category (Alone, Large, Small)
    const familySize = parseInt(formData.sibsp) + parseInt(formData.parch);
    let familyCategory = "Alone";
    if (familySize > 3) {
      familyCategory = "Large";
    } else if (familySize > 0) {
      familyCategory = "Small";
    }

    // Add survival score based on family category
    survivalScore += survivalByFamilySize[familyCategory] || 0;

    return survivalScore;
  };

  // Compute the prediction based on survival score
  const getPrediction = (survivalScore) => {
    return survivalScore / 4 > 0.5 ? "Survived" : "Not Survived";
  };

  useEffect(() => {
    if (typeof window !== 'undefined') {
      // Retrieving the form data and prediction from sessionStorage
      const storedFormData = sessionStorage.getItem('formData');
      const storedPrediction = sessionStorage.getItem('prediction');

      // Check if data exists, then parse and set it in state
      if (storedFormData && storedPrediction) {
        const parsedFormData = JSON.parse(storedFormData);
        setFormData(parsedFormData);

        // Calculate the survival score based on the form data
        const survivalScore = calculateSurvivalScore(parsedFormData);

        // Get the final prediction based on survival score
        const finalPrediction = getPrediction(survivalScore);

        setPrediction(finalPrediction); // Set the prediction state
      }
    }
  }, []); // Empty dependency array ensures this effect runs only once after the initial render

  if (!formData || !prediction) {
    return <div>Loading...</div>; // Show loading state until data is available
  }

  return (
    <div className='wrapper'>
      <div className="result-container">
        <h1>Prediction Result</h1>
        <p><strong>Name:</strong> {formData.userName}</p>
        <p><strong>Prediction:</strong> {prediction}</p>
        <p><strong>Passenger Class:</strong> {formData.passengerClass === "1" ? "First Class" :
                                            formData.passengerClass === "2" ? "Second Class" :
                                            "Third Class"}</p>
        <p><strong>Sex:</strong> {formData.sex === "male" ? "Male" : "Female"}</p>
        <p><strong>Age:</strong> {formData.age}</p>
        <p><strong>Siblings/Spouses:</strong> {formData.sibsp}</p>
        <p><strong>Parents/Children:</strong> {formData.parch}</p>
        <p><strong>Embarkation:</strong> {formData.embarkation === "S" ? "Southampton" :
                                          formData.embarkation === "C" ? "Cherbourg" : "Queenstown"}</p>

      </div>
    </div>

  );
}
