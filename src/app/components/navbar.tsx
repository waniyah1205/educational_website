import Link from "next/link";
import React from "react";

const Navbar = () => {
  return (
    <header className="bg-gradient-to-r from-blue-600 to-purple-700 shadow-md">
      <div className="container mx-auto flex items-center justify-between px-6 py-1">
        {/* Logo only */}
        <Link href="/" className="flex items-center">
          <img
            src="/assets/alphalogo.png"
            alt="Alpha Insights Logo"
            className="h-25 w-auto object-contain" // Slightly smaller to match the reduced header height
          />
        </Link>

        {/* Navigation Links */}
        <nav className="flex space-x-6">
          <Link
            href="/"
            className="text-white hover:text-yellow-300 font-medium transition"
          >
            Home
          </Link>
          <Link
            href="/components/about"
            className="text-white hover:text-yellow-300 font-medium transition"
          >
            About Us
          </Link>
          <Link
            href="/components/services"
            className="text-white hover:text-yellow-300 font-medium transition"
          >
            Services
          </Link>
          <Link
            href="/components/contact"
            className="text-white hover:text-yellow-300 font-medium transition"
          >
            Contact
          </Link>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
