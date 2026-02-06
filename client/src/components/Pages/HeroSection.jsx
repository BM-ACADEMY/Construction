import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const Hero = () => {
  return (
    // ✅ Changed h-screen to min-h-[calc(100vh-6rem)] to account for the Navbar height
    // ✅ Added 'flex items-center' to vertically center content perfectly
    <section className="relative w-full min-h-[calc(100vh-6rem)] flex items-center overflow-hidden bg-slate-900">

      {/* --- BACKGROUND IMAGE --- */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2070&auto=format&fit=crop"
          alt="Construction Background"
          className="w-full h-full object-cover brightness-50"
        />
        {/* Navy Blue Gradient Overlay */}
        <div className="absolute inset-0 bg-slate-900/60 mix-blend-multiply"></div>
      </div>

      {/* --- CONTENT --- */}
      <div className="relative z-10 container mx-auto px-6 md:px-12 py-12 md:py-0">

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl text-white"
        >
          {/* Tagline */}
          <span className="block text-orange-500 font-bold tracking-[0.2em] uppercase mb-4 text-xs md:text-sm">
            Welcome to Multiverse International
          </span>

          {/* Main Headline */}
          {/* ✅ Responsive Text: 4xl on mobile, 7xl on desktop */}
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold leading-tight mb-6 font-sans">
            Building Visions <br />
            <span className="text-white">Into Reality</span>
          </h1>

          {/* Subtext */}
          {/* ✅ Responsive Text: base on mobile, xl on desktop */}
          <p className="text-base md:text-xl text-gray-200 mb-8 md:mb-10 leading-relaxed max-w-xl md:max-w-2xl font-light">
            Your trusted partner for reliable trading and contracting solutions in Qatar.
            Focusing on quality, safety, and long-term relationships.
          </p>

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row gap-4">

            {/* Primary Action */}
            <Link
              to="/contact"
              className="px-8 py-4 bg-orange-600 hover:bg-orange-700 text-white font-bold rounded shadow-lg transition-all text-center uppercase tracking-wide w-full sm:w-auto"
            >
              Get a Quote
            </Link>

            {/* Secondary Action */}
            <Link
              to="/services"
              className="px-8 py-4 border border-white hover:bg-white hover:text-[#00224D] text-white font-bold rounded shadow-lg transition-all text-center uppercase tracking-wide w-full sm:w-auto"
            >
              Our Services
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
