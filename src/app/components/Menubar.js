'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from "next/image";

const Menubar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <>
      {/* Top Bar */}
      <div className="flex items-center bg-white px-5 h-[70px] relative z-20">

        {/* Left spacer — mobile only, balances the hamburger on the right */}
        <div className="w-[40px] md:hidden" />

        {/* Logo — absolute-centered on mobile, static left on desktop */}
        <div className="absolute left-1/2 -translate-x-1/2 md:static md:translate-x-0">
          <Image src="/Logo.png" alt="Logo" width={60} height={70} />
        </div>

        {/* Desktop Nav */}
        <nav className="hidden md:flex gap-8 items-center ml-auto">
          <Link href="/"       className="text-[#2541B2] font-bold text-[16px] hover:text-[#EEC750] transition-colors">HOME</Link>
          <Link href="/about"  className="text-[#2541B2] font-bold text-[16px] hover:text-[#EEC750] transition-colors">ABOUT</Link>
          <Link href="/model"  className="text-[#2541B2] font-bold text-[16px] hover:text-[#EEC750] transition-colors">MODEL</Link>
          <Link href="/contact" className="text-[#2541B2] font-bold text-[16px] hover:text-[#EEC750] transition-colors">CONTACT</Link>
        </nav>

        {/* Mobile Hamburger */}
        <div
          className="md:hidden ml-auto cursor-pointer z-[1001] w-[40px] h-[40px] flex items-center justify-center"
          onClick={toggleMenu}
        >
          {isMenuOpen
            ? <Image src="/ToggleClose.png" alt="Close menu" width={60} height={70} />
            : <Image src="/ToggleOpen.png"  alt="Open menu"  width={60} height={70} />
          }
        </div>
      </div>

      {/* Mobile Full-screen Overlay */}
      {isMenuOpen && (
        <div className="md:hidden fixed top-0 left-0 w-full h-full bg-[#2541B2] z-10 flex flex-col">
          <div className="w-full bg-white flex items-center px-4 relative z-20 h-[70px]">
            <div className="w-[40px]" />
            <div className="absolute left-1/2 -translate-x-1/2">
              <Image src="/Logo.png" alt="Logo" width={60} height={70} />
            </div>
            <div className="ml-auto cursor-pointer" onClick={toggleMenu}>
              <Image src="/ToggleClose.png" alt="Close menu" width={40} height={50} />
            </div>
          </div>
          <div className="flex flex-col justify-center items-center flex-grow gap-12">
            <Link href="/"       className="text-[32px] text-[#EEC750] font-bold" onClick={toggleMenu}>HOME</Link>
            <Link href="/about"  className="text-[32px] text-[#EEC750] font-bold" onClick={toggleMenu}>ABOUT</Link>
            <Link href="/model"  className="text-[32px] text-[#EEC750] font-bold" onClick={toggleMenu}>MODEL</Link>
            <Link href="/contact" className="text-[32px] text-[#EEC750] font-bold" onClick={toggleMenu}>CONTACT</Link>
          </div>
        </div>
      )}
    </>
  );
};

export default Menubar;
