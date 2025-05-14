import Link from 'next/link';
import React from 'react';

const Footer = () => {
  return (
    <footer className="text-gray-400 bg-gray-900 body-font">
      <div className="container px-5 py-8 mx-auto flex items-center sm:flex-row flex-col">
        <a className="flex title-font font-medium items-center md:justify-start justify-center text-white">
        <Link href="/" className="flex title-font font-medium items-center text-white mb-4 md:mb-0">
          <img src="\assets\image.png" alt="Logo" className="h-10 w-auto mr-3 rounded-full"  /> {/* Adjust the height and width as needed */}
         
        </Link>
          <span className="ml-3 text-xl">AlphaInsights</span>
        </a>
        <p className="text-sm text-gray-400 sm:ml-4 sm:pl-4 sm:border-l-2 sm:border-gray-800 sm:py-2 sm:mt-0 mt-4">
        Empowering Success Across Education, Business, and Beyond</p>
     </div>
    </footer>
  );
};

export default Footer;
