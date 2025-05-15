import Link from 'next/link';
import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gradient-to-r from-blue-700 to-purple-800 text-white">
      <div className="container px-5 py-2 mx-auto flex flex-col sm:flex-row items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center mb-2 sm:mb-0">
          <img
            src="/assets/alphalogo.png"
            alt="Logo"
            className="h-12 w-auto mr-3"
          />
        </Link>

        {/* Slogan */}
        <p className="text-xs sm:text-sm text-white text-center sm:text-right max-w-md">
          Empowering Success Across Education, Business, and Beyond
        </p>
      </div>
    </footer>
  );
};

export default Footer;
