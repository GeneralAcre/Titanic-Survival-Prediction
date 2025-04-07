'use client'; // Ensure this is at the top to enable the client-side behavior

import { useEffect, useState } from 'react';

export default function Result() {
  const [formData, setFormData] = useState(null);
  const [prediction, setPrediction] = useState(null);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      // Retrieving the form data and prediction from sessionStorage
      const storedFormData = sessionStorage.getItem('formData');
      const storedPrediction = sessionStorage.getItem('prediction');

      // Check if data exists, then parse and set it in state
      if (storedFormData && storedPrediction) {
        setFormData(JSON.parse(storedFormData));
        setPrediction(storedPrediction);
      }
    }
  }, []); // Empty dependency array ensures this effect runs only once after the initial render

  if (!formData || !prediction) {
    return <div>Loading...</div>; // Show loading state until data is available
  }

  return (
    <div>
      <h1>Prediction Result</h1>
      <p>Name: {formData.userName}</p>
      <p>Prediction: {prediction}</p>
      {/* You can add more details from formData if needed */}
    </div>
  );
}
