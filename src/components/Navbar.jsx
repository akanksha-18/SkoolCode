import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "./ui/button";
import { Menu, X } from "lucide-react"; 

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-gradient-to-r from-purple-700 to-purple-500 shadow-md text-white p-4">
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo / Brand Name */}
        <Link to="/" className="text-3xl font-bold tracking-wide">
          Python Adventures
        </Link>

        {/* Mobile Menu Toggle Button */}
        <button
          className="md:hidden text-white focus:outline-none"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>

        {/* Navigation Links - Desktop */}
        <div className="hidden md:flex space-x-4">
          <Link to="/">
            <Button className="border border-white text-white bg-transparent hover:bg-white hover:text-purple-700 transition duration-300 ease-in-out px-4 py-2 rounded-lg">
              Home
            </Button>
          </Link>
          <Link to="/dashboard">
            <Button className="bg-purple-200 text-purple-800 font-semibold hover:bg-purple-600 hover:text-white transition duration-300 ease-in-out px-4 py-2 rounded-lg shadow-md">
              Dashboard
            </Button>
          </Link>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden flex flex-col items-center mt-4 space-y-3">
          <Link to="/" onClick={() => setIsOpen(false)}>
            <Button className="w-full border border-white text-white bg-transparent hover:bg-white hover:text-purple-700 transition duration-300 ease-in-out px-4 py-2 rounded-lg">
              Home
            </Button>
          </Link>
          <Link to="/dashboard" onClick={() => setIsOpen(false)}>
            <Button className="w-full bg-purple-200 text-purple-800 font-semibold hover:bg-purple-600 hover:text-white transition duration-300 ease-in-out px-4 py-2 rounded-lg shadow-md">
              Dashboard
            </Button>
          </Link>
        </div>
      )}
    </nav>
  );
}

export default Navbar;
