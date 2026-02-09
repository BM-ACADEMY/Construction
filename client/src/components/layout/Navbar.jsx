import React, { useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';

// Import Logo
import logo from '../../assets/constructionlogo.png';

// Import Google Translate
import GoogleTranslate from '../translate/GoogleTranslate';

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
    <header className="w-full font-sans bg-white shadow-sm sticky top-0 z-40">

      {/* --- MAIN NAVBAR --- */}
      <nav className="bg-white border-b border-gray-100">
        <div className="container mx-auto px-4 lg:px-8 h-24 flex justify-between items-center">

          {/* LOGO AREA */}
          <Link to="/" className="flex items-center shrink-0">
            <img
              src={logo}
              alt="Multiverse International"
              className="h-12 lg:h-16 w-auto object-contain"
            />
          </Link>

          {/* DESKTOP LINKS (Visible on Large Screens) */}
          <div className="hidden lg:flex items-center space-x-6 xl:space-x-8">
            {navLinks.map((link, index) => (
              <Link
                key={index}
                to={link.path}
                className="text-slate-700 font-semibold text-sm hover:text-orange-600 transition-colors uppercase tracking-tight whitespace-nowrap"
              >
                {link.title}
              </Link>
            ))}

            {/* ✅ DESKTOP GOOGLE TRANSLATE */}
<div className="ml-2">
   {/* Give it a specific ID for desktop */}
   <GoogleTranslate targetId="google_translate_desktop" />
</div>

            {/* 'Get Quote' Button */}
            <Link
              to="/contact"
              className={`${brandBlue} text-white px-5 py-3 text-sm font-bold rounded shadow-md hover:bg-orange-600 transition-all transform hover:-translate-y-0.5 whitespace-nowrap`}
            >
              GET QUOTE
            </Link>
          </div>

          {/* MOBILE HEADER CONTROLS */}
          <div className="lg:hidden flex items-center gap-4">
            <button onClick={() => setIsOpen(true)} className={`${textBlue} text-2xl p-2`}>
              <FaBars />
            </button>
          </div>
        </div>

        {/* --- MOBILE SIDE DRAWER (HALF CANVAS) --- */}
        <AnimatePresence>
          {isOpen && (
            <>
              {/* BACKDROP OVERLAY */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onClick={() => setIsOpen(false)}
                className="fixed inset-0 bg-black/50 z-50 lg:hidden backdrop-blur-sm"
              />

              {/* SLIDING DRAWER PANEL */}
              <motion.div
                initial={{ x: "100%" }}
                animate={{ x: 0 }}
                exit={{ x: "100%" }}
                transition={{ type: "spring", stiffness: 300, damping: 30 }}
                // Added overflow-visible specifically for the dropdown to pop out if needed
                className="fixed top-0 right-0 h-full w-[80%] max-w-sm bg-white shadow-2xl z-[60] lg:hidden flex flex-col"
              >
                {/* DRAWER HEADER */}
                <div className="p-6 flex justify-between items-center border-b border-gray-100">
                    <img src={logo} alt="Logo" className="h-10 w-auto" />
                    <button onClick={() => setIsOpen(false)} className={`${textBlue} text-2xl p-2`}>
                        <FaTimes />
                    </button>
                </div>

                {/* DRAWER CONTENT */}
                <div className="flex flex-col p-6 space-y-4 overflow-y-auto">

                  {/* ✅ MOBILE GOOGLE TRANSLATE */}
<div className="flex flex-col mb-4 p-3 bg-gray-50 rounded-lg border border-gray-100">
    <span className="text-xs font-bold text-gray-400 uppercase mb-2">Select Language</span>
    {/* Give it a DIFFERENT specific ID for mobile */}
    <GoogleTranslate targetId="google_translate_mobile" />
</div>

                  {navLinks.map((link, index) => (
                    <Link
                      key={index}
                      to={link.path}
                      onClick={() => setIsOpen(false)}
                      className="text-slate-700 font-bold text-lg hover:text-orange-600 hover:pl-2 transition-all block py-2 border-b border-slate-50 last:border-0"
                    >
                      {link.title}
                    </Link>
                  ))}

                  <Link
                    to="/contact"
                    onClick={() => setIsOpen(false)}
                    className={`${brandBlue} text-white text-center py-4 rounded font-bold uppercase mt-6 block shadow-lg`}
                  >
                    Get Quote
                  </Link>
                </div>
              </motion.div>
            </>
          )}
        </AnimatePresence>

      </nav>
    </header>
  );
};

export default Navbar;
