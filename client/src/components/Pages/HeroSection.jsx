import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom'; // ✅ Import Link for smooth navigation

const Hero = () => {
  return (
    <section className="relative h-screen w-full overflow-hidden">

      {/* --- BACKGROUND IMAGE --- */}
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2070&auto=format&fit=crop"
          alt="Construction Background"
          className="w-full h-full object-cover brightness-50"
        />
        {/* Navy Blue Gradient Overlay - Adds a professional tint */}
        <div className="absolute inset-0 bg-slate-900/60 mix-blend-multiply"></div>
      </div>

      {/* --- CONTENT --- */}
      <div className="relative z-10 container mx-auto px-8 h-full flex flex-col justify-center">

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl text-white"
        >
          {/* Small Tagline - Matches Navbar Style */}
          <span className="block text-orange-500 font-bold tracking-[0.2em] uppercase mb-4 text-sm">
            Welcome to Multiverse International
          </span>

          {/* Main Headline */}
          <h1 className="text-5xl md:text-7xl font-bold leading-tight mb-6 font-sans">
            Building Visions <br />
            <span className="text-white">Into Reality</span>
          </h1>

          {/* Subtext */}
          <p className="text-lg md:text-xl text-gray-200 mb-10 leading-relaxed max-w-2xl font-light">
            Your trusted partner for reliable trading and contracting solutions in Qatar.
            Focusing on quality, safety, and long-term relationships.
          </p>

          {/* Buttons - Updated to use Link */}
          <div className="flex flex-col sm:flex-row gap-4">

            {/* Primary Action - Orange (Matches Icons) */}
            <Link
              to="/contact"
              className="px-8 py-4 bg-orange-600 hover:bg-orange-700 text-white font-bold rounded shadow-lg transition-all text-center uppercase tracking-wide"
            >
              Get a Quote
            </Link>

            {/* Secondary Action - Transparent/White */}
            <Link
              to="/services"
              className="px-8 py-4 border border-white hover:bg-white hover:text-[#00224D] text-white font-bold rounded shadow-lg transition-all text-center uppercase tracking-wide"
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
