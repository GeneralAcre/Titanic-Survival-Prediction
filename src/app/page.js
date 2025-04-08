"use client";

import { useEffect } from "react";
import Link from "next/link";
import style from "./homepage.css";
import Image from "next/image";
// import Sidebar from "./components/Sidebar"; // optional

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
      heading.style.opacity = 0;

      setTimeout(() => {
        index = (index + 1) % messages.length;
        heading.textContent = messages[index];
        heading.style.opacity = 1;
      }, 500);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="wrapper">
      <div className="container">
        <div className="top-section">
          <div className="logo">TITANIC PREDICTION</div>

          <hr className="Line" /> 

          <h1 id="Titanic-Animated" className="fade-text">
            Will You Survive the Titanic?
          </h1>
          <p className="Intro">
            Enter your details and see if you would have survived the Titanic disaster.
          </p>
        </div>

        <div className="bottom-section">
          <Image className="image" src="/Titanic.jpg" width={380} height={750} alt="Titanic" />
        </div>

        <div className="button-container">
          <Link className="btn" href="/form">
              START PREDICTION
          </Link>
        </div>

      </div>
    </div>
  );
};

export default Page;
