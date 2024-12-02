import React, { useState } from "react";
import { Link } from "react-router-dom";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";

const Navbar = () => {
  const [toggleNav, setToggleNav] = useState(false);

  const handleNav = () => {
    setToggleNav(!toggleNav);
  };

  const navLinks = [
    { path: "/", text: "Home" },
    { path: "/company", text: "Company" },
    { path: "/resources", text: "Resources" },
    { path: "/about", text: "About" },
    { path: "/contact", text: "Contact" },
  ];

  return (
    <div className="fixed left-0 top-0 w-full bg-[#000300] z-50">
      <div className="flex justify-between items-center h-24 max-w-[1200px] mx-auto px-4 text-white">
        <Link to="/" className="w-full text-3xl font-bold text-[#00df9a]">
          DFinance.
        </Link>
        <ul className="hidden md:flex">
          {navLinks.map((link) => (
            <Link
              key={link.text}
              to={link.path}
              className="p-4 hover:text-[#00df9a] transition-colors"
            >
              {link.text}
            </Link>
          ))}
        </ul>
        <div onClick={handleNav} className="md:hidden cursor-pointer">
          {toggleNav ? <AiOutlineClose size={24} /> : <AiOutlineMenu size={24} />}
        </div>
        <div
          className={`fixed top-0 left-0 h-full my-24 border-r border-r-gray-900 w-[60%] bg-[#000300] md:hidden transition-all duration-500 ${toggleNav ? "translate-x-0" : "-translate-x-full"
            }`}
        >
          <ul className="pt-17 uppercase p-4">
            {navLinks.map((link) => (
              <li key={link.text} className="p-4 border-b border-gray-600">
                <Link
                  to={link.path}
                  className="hover:text-[#00df9a] transition-colors"
                  onClick={() => setToggleNav(false)}
                >
                  {link.text}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
