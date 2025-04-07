"use client";

import { useEffect } from "react";
import Link from "next/link";
import style from "./homepage.css";
import Image from "next/image";

const Page = () => {
  useEffect(() => {
    const heading = document.getElementById("Titanic-Animated");

    const messages = [
      "Will You Survive the Titanic?",
      "Check Your Survival Odds!",
      "Will you be the next Dawson?",
      "Relive Titanic's Fate",
      "See If You'd Make It!"
    ];

    let index = 0;

    const interval = setInterval(() => {
      // Fade out
      heading.style.opacity = 0;

      setTimeout(() => {
        // Change text and fade in
        index = (index + 1) % messages.length;
        heading.textContent = messages[index];
        heading.style.opacity = 1;
      }, 500); // match transition duration
    }, 3000); // change every 3 seconds

    // Clean up the interval when the component unmounts
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="container">
      <div className="left">
        <div className="logo">TITANIC PREDICTION</div>
        <h1 id="Titanic-Animated" className="fade-text">
          Will You Survive the Titanic?
        </h1>
        <p>
          Enter your details and see if you would have survived the Titanic
          disaster.
        </p>
        <Link className="btn" href="/form">
          START PREDICTION
        </Link>
      </div>

      <img className="right" src="Titanic.jpg" alt="Titanic" />
    </div>
  );
};

export default Page;
