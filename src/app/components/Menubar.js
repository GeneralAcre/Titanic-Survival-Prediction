'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from "next/image";

const Menubar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <>
      <div className="flex justify-between bg-[#FFFFFF] p-5 relative z-2 items-center h-[70px]">

        <div className="w-[40px] h-[40px]"></div>

        <div className='absolute left-1/2 transform -translate-x-1/2'> 
          <Image src= "/Logo.png" alt ="Logo" width={60} height = {70} />
        </div>

        <div className="text-[32px] cursor-pointer z-[1001] w-[40px] h-[40px] flex items-center justify-center" onClick={toggleMenu}>
          {isMenuOpen ? ( <Image src="/ToggleClose.png" alt ="ToggleClose" width={60} height = {70}  />) : 
          (<Image src="/ToggleOpen.png" alt ="ToggleOpen" width={60} height = {70}  />)}

        </div>

      </div>

      {/* MenuBar Open */}
      {isMenuOpen && (
        <div className="fixed top-0 left-0 w-full h-full bg-[#2541B2] z-10 flex flex-col">
          
          {/* White Header */}
          <div className="w-full bg-white flex items-center justify-between p-4 relative z-20 h-[70px]">
            
            {/* Logo in Center */}
            <div className="absolute left-1/2 transform -translate-x-1/2">
              <Image src="/Logo.png" alt="Logo" width={60} height={70} />
            </div>

            {/* Close Button on Right */}
            <div className="ml-auto cursor-pointer" onClick={toggleMenu}>
              <Image src="/ToggleClose.png" alt="ToggleClose" width={40} height={50} />
            </div>
          </div>

          {/* Links in Center */}
          <div className="flex flex-col justify-center items-center flex-grow gap-12">
            <Link href="/" className="text-[32px] text-[#EEC750] font-bold">HOME</Link>
            <Link href="/about" className="text-[32px] text-[#EEC750] font-bold">ABOUT</Link>
            <Link href="/model" className="text-[32px] text-[#EEC750] font-bold">MODEL</Link>
            <Link href="/contact" className="text-[32px] text-[#EEC750] font-bold">CONTACT</Link>
          </div>

        </div>
      )}

    </>

  )
}

export default Menubar;