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
      <div className="flex space-between bg-[#FFFFFF] p-5 relative z-2 items-center ">
        <div className="text-[32px] cursor-pointer z-[1001] w-[40px] h-[40px] flex items-center justify-center" onClick={toggleMenu}>
          {isMenuOpen ? '×' : '☰'}
        </div>
        <div className="logo">
          <div className="logo-image"></div>
        </div>
      </div>


      {/*MenuBar Open*/}
      {isMenuOpen && ( 
        <div className="fixed top-0 left-0 w-full h-full bg-[#2541B2] z-[1000] flex flex-col justify-center items-center animate-fadeIn">
         
          <div className="absolute top-[15px] left-[15px] text-[30px] cursor-pointer z-[1001] w-[40px] h-[40px] flex items-center justify-center" 
          onClick={toggleMenu}> × </div> {/*Close Button*/}

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