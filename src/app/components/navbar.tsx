import Link from "next/link";
import React from "react";

const Navbar = () => {
  return (
    <header className="bg-gradient-to-r from-blue-600 to-purple-700 shadow-md">
      <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
        {/* Logo */}
        <Link href="/" className="flex title-font font-medium items-center text-white mb-4 md:mb-0">
          <img src="\assets\image.png" alt="Logo" className="h-15 w-auto mr-5 rounded-full"  /> {/* Adjust the height and width as needed */}
          <span className="text-xl font-bold tracking-wide">ALPHA INSIGHTS</span>
        </Link>

        {/* Navigation Links */}
        <nav className="md:ml-auto md:mr-auto flex flex-wrap items-center text-base justify-center">
          <Link href="/" className="mr-5 text-white hover:text-yellow-300 font-medium transition">
            Home
          </Link>
          <Link href="/components/about" className="mr-5 text-white hover:text-yellow-300 font-medium transition">
            About Us
          </Link>
          <Link href="/components/contact" className="mr-5 text-white hover:text-yellow-300 font-medium transition">
            Contact
          </Link>
          <Link href="/components/services" className="mr-5 text-white hover:text-yellow-300 font-medium transition">
            Services
          </Link>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;