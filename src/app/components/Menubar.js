'use client';

import { useState } from 'react';
import Link from 'next/link';
import style from '../CSS/component.style.css'

const Menubar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <>
      <div className="header">
        <div className="menu-toggle" onClick={toggleMenu}>
          {isMenuOpen ? '×' : '☰'}
        </div>
        <div className="logo">
          <div className="logo-image"></div>
        </div>
      </div>

      {isMenuOpen && (
        <div className="fullscreen-menu">
         
          <div className="close-button" onClick={toggleMenu}>× </div> 
          <Link href="/" className="text-[32px] text-[#EEC750] font-bold mb-[50px]">HOME</Link>
          <Link href="./about" className="text-[32px] text-[#EEC750] font-bold mb-[50px]">ABOUT</Link>
          <Link href="./model" className="text-[32px] text-[#EEC750] font-bold mb-[50px]">MODEL</Link>
          <Link href="./contact" className="text-[32px] text-[#EEC750] font-bold mb-[50px]">CONTACT</Link>

        </div>
      )}
    </>

  )
}

export default Menubar;