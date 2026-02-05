import React, { useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';

// Import Logo
import logo from '../../assets/constructionlogo.png';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  // 🎨 YOUR COLORS
  const brandBlue = "bg-[#00224D]";
  const textBlue = "text-[#00224D]";

  const navLinks = [
    { title: "Home", path: "/" },
    { title: "About Us", path: "/about" },
    { title: "Services", path: "/services" },
    { title: "Projects", path: "/projects" },
    { title: "Quality & HSE", path: "/hse" },
    { title: "Contact", path: "/contact" },
  ];

  return (
    // ✅ MOVED 'sticky' HERE so the entire bar stays at the top
    <header className="w-full font-sans bg-white shadow-sm sticky top-0 z-50">

      {/* --- TOP BAR REMOVED --- */}

      {/* --- MAIN NAVBAR --- */}
      <nav className="bg-white border-b border-gray-100">
        <div className="container mx-auto px-8 h-24 flex justify-between items-center">

          {/* LOGO AREA */}
          <Link to="/" className="flex items-center">
            <img
              src={logo}
              alt="Multiverse International"
              className="h-16 w-auto object-contain"
            />
          </Link>

          {/* DESKTOP LINKS */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link, index) => (
              <Link
                key={index}
                to={link.path}
                className="text-slate-700 font-semibold text-sm hover:text-orange-600 transition-colors uppercase tracking-tight"
              >
                {link.title}
              </Link>
            ))}

            {/* 'Get Quote' Button */}
            <Link
              to="/contact"
              className={`${brandBlue} text-white px-6 py-3 text-sm font-bold rounded shadow-md hover:bg-orange-600 transition-all transform hover:-translate-y-0.5 ml-4`}
            >
              GET QUOTE
            </Link>
          </div>

          {/* MOBILE MENU BUTTON */}
          <div className="md:hidden">
            <button onClick={() => setIsOpen(!isOpen)} className={`${textBlue} text-2xl p-2`}>
              {isOpen ? <FaTimes /> : <FaBars />}
            </button>
          </div>
        </div>

        {/* MOBILE MENU DROPDOWN */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              className="md:hidden bg-white border-t border-gray-100 shadow-xl"
            >
              <div className="flex flex-col p-6 space-y-4">
                {navLinks.map((link, index) => (
                  <Link
                    key={index}
                    to={link.path}
                    onClick={() => setIsOpen(false)}
                    className="text-slate-700 font-semibold hover:text-orange-600 hover:pl-2 transition-all block py-2 border-b border-slate-50 last:border-0"
                  >
                    {link.title}
                  </Link>
                ))}
                <Link
                  to="/contact"
                  onClick={() => setIsOpen(false)}
                  className={`${brandBlue} text-white text-center py-3 rounded font-bold uppercase mt-4 block`}
                >
                  Get Quote
                </Link>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </header>
  );
};

export default Navbar;
