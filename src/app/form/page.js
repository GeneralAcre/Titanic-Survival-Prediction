import Link from "next/link";
import './form.css';

export default function TitanicForm() {
  return (
    <div className="container">
      <br />

      <div className="form-container">
        <label htmlFor="userName">Your Name:</label>
        <input type="text" id="userName" placeholder="Enter your name" />
        <br />
        <br />

        <label htmlFor="passengerClass">Passenger Class:</label>
        <select id="passengerClass">
          <option value="">Select class</option>
          <option value="1">First Class</option>
          <option value="2">Second Class</option>
          <option value="3">Third Class</option>
        </select>
        <br />
        <br />

        <label htmlFor="sex">Sex:</label>
        <select id="sex">
          <option value="male">Male</option>
          <option value="female">Female</option>
        </select>
        <br />
        <br />

        <label htmlFor="age">Age:</label>
        <input
          type="number"
          id="age"
          placeholder="e.g., 30"
          step="1"
          min="5"
          max="80"
        />

        <label htmlFor="sibsp">Siblings/Spouses:</label>
        <input type="number" id="sibsp" placeholder="e.g., 1" step="1" min="0" />
        <br />
        <br />

        <label htmlFor="parch">Parents/Children:</label>
        <input type="number" id="parch" placeholder="e.g., 0" step="1" min="0" />
        <br />
        <br />

        <label htmlFor="embarkation">Embarkation:</label>
        <select id="embarkation">
          <option value="S">Southampton (S)</option>
          <option value="C">Cherbourg (C)</option>
          <option value="Q">Queenstown (Q)</option>
        </select>
        <br />
        <br />

        <button id="predictButton">Predict Survival</button>
      </div>
    </div>
  );
}
