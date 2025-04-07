
import Link from 'next/link';
import style from './homepage.css'

import Image from 'next/image'

const Page = () => {
  return (
    <div className="container">
      <div className="left">
        <div className="logo">TITANIC PREDICTION</div>
        <h1 id="Titanic-Animated" className="fade-text">Will You Survive the Titanic?</h1>
        <p>Enter your details and see if you would have survived the Titanic disaster.</p>
        <Link className="btn" href="/form">START PREDICTION</Link>
      </div>

      <img className="right" src='Titanic.jpg' alt="Titanic" />

      <script src="animated.js"></script> 
    </div>
  );
};

export default Page;