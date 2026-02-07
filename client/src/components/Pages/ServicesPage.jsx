import React, { useEffect } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { FaHardHat, FaTruckLoading, FaCheck } from 'react-icons/fa';
import { Link } from 'react-router-dom';

// --- COMPONENT: Background Pattern ---
const BlueprintGrid = () => (
  <div className="absolute inset-0 pointer-events-none overflow-hidden">
    <div className="absolute inset-0 opacity-[0.03]"
      style={{
        backgroundImage: `linear-gradient(#00224D 1px, transparent 1px), linear-gradient(90deg, #00224D 1px, transparent 1px)`,
        backgroundSize: '50px 50px'
      }}
    ></div>
  </div>
);

const ServicesPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // Parallax Effect Hooks
  const { scrollY } = useScroll();
  const yHero = useTransform(scrollY, [0, 500], [0, 150]);
  const opacityHero = useTransform(scrollY, [0, 300], [1, 0]);

  return (
    <div className="min-h-screen bg-slate-50 font-sans text-slate-800 selection:bg-orange-100">

      {/* ==========================
          SECTION 1: HERO BANNER
      ========================== */}
      {/* Kept your exact height settings */}
      <div className="relative w-full h-[250px] md:h-[350px] overflow-hidden flex items-center justify-center">
        <div
          className="absolute inset-0 bg-fixed bg-cover bg-center z-0"
          style={{
            backgroundImage: "url('https://images.unsplash.com/photo-1503387762-592deb58ef4e?q=80&w=2072&auto=format&fit=crop')"
          }}
        >
          <div className="absolute inset-0 bg-black/60 backdrop-blur-[1px]"></div>
        </div>

        <motion.div
          style={{ y: yHero, opacity: opacityHero }}
          className="relative z-10 text-center px-4"
        >
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 1, ease: "easeOut" }}
          >
            <h1 className="text-4xl md:text-6xl font-heading font-bold text-white tracking-tighter mb-3 drop-shadow-2xl">
              Our Services
            </h1>
            <div className="flex items-center justify-center gap-3">
               <div className="h-[2px] w-8 md:w-10 bg-orange-500"></div>
               <span className="text-orange-500 font-bold tracking-[0.2em] uppercase text-xs md:text-sm">What We Do</span>
               <div className="h-[2px] w-8 md:w-10 bg-orange-500"></div>
            </div>
          </motion.div>
        </motion.div>
      </div>


      {/* ==========================
          SECTION 2: DUAL PILLARS
      ========================== */}
      {/* Mobile: py-16 | Desktop: py-24 (Unchanged) */}
      <section className="py-16 md:py-24 relative overflow-hidden bg-slate-50">
        <BlueprintGrid />

        <div className="container mx-auto px-6 relative z-10">

          {/* Intro Text */}
          <div className="text-center mb-12 md:mb-16 max-w-3xl mx-auto">
             <h2 className="text-sm font-bold text-orange-600 uppercase tracking-widest mb-3">Core Divisions</h2>
             <h3 className="text-3xl md:text-4xl font-heading font-bold text-[#00224D]">
               Comprehensive Solutions
             </h3>
             <p className="mt-4 text-slate-500 text-sm md:text-base">
               Delivering excellence through two specialized operational wings.
             </p>
          </div>

          {/* GRID CONTAINER */}
          <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-8 lg:gap-10 items-stretch">

            {/* --- CARD 1: TRADING SERVICES --- */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="bg-white rounded-2xl shadow-[0_10px_40px_-10px_rgba(0,0,0,0.08)] border border-slate-200 overflow-hidden flex flex-col h-full hover:shadow-2xl hover:border-orange-200 transition-all duration-500 group"
            >
              {/* Header Image Area */}
              <div className="h-40 md:h-48 bg-orange-50 relative overflow-hidden flex items-center justify-center group-hover:bg-orange-100 transition-colors duration-500">
                <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-30"></div>

                {/* Floating Icon: Smaller on mobile (w-20), Original on desktop (w-24) */}
                <div className="w-20 h-20 md:w-24 md:h-24 bg-white rounded-full flex items-center justify-center text-orange-600 text-3xl md:text-4xl shadow-xl border-4 border-white relative z-10 group-hover:scale-110 transition-transform duration-500">
                  <FaTruckLoading />
                </div>
              </div>

              {/* Content Container */}
              {/* Mobile: p-6 | Desktop: p-12 (Unchanged) */}
              <div className="p-6 md:p-12 flex-grow flex flex-col">
                <h3 className="text-2xl md:text-3xl font-heading font-bold text-[#00224D] mb-4 text-center group-hover:text-orange-600 transition-colors">
                  Trading Services
                </h3>
                <p className="text-slate-600 text-base md:text-lg leading-relaxed mb-8 text-center">
                  We supply quality-approved materials sourced from reliable manufacturers. Our focus is on <span className="text-orange-600 font-semibold">timely delivery</span>, compliance, and value for money.
                </p>

                {/* Checklist Container */}
                <div className="bg-slate-50 rounded-xl p-5 md:p-6 space-y-4 border border-slate-100 mt-auto">
                  {[
                    "Construction & Industrial Materials",
                    "Project-Specific Supply Coordination",
                    "Vendor Sourcing & Submittals"
                  ].map((item, i) => (
                    <div key={i} className="flex items-start gap-3">
                      <FaCheck className="text-orange-500 mt-1 flex-shrink-0" />
                      <span className="text-slate-700 font-medium text-sm md:text-base">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>


            {/* --- CARD 2: CONTRACTING SERVICES --- */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="bg-[#00224D] rounded-2xl shadow-2xl border border-[#1a3a63] overflow-hidden flex flex-col h-full text-white relative group ring-1 ring-white/10"
            >
              {/* Header Image Area */}
              <div className="h-40 md:h-48 bg-[#00152e] relative overflow-hidden flex items-center justify-center group-hover:bg-[#001a36] transition-colors duration-500">
                <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-20"></div>

                {/* Floating Icon: Smaller on mobile (w-20), Original on desktop (w-24) */}
                <div className="w-20 h-20 md:w-24 md:h-24 bg-[#00224D] rounded-full flex items-center justify-center text-white text-3xl md:text-4xl shadow-xl border-4 border-[#1a3a63] relative z-10 group-hover:scale-110 transition-transform duration-500 group-hover:border-orange-500">
                  <FaHardHat />
                </div>
              </div>

              {/* Content Container */}
              {/* Mobile: p-6 | Desktop: p-12 (Unchanged) */}
              <div className="p-6 md:p-12 flex-grow flex flex-col relative z-10">
                <h3 className="text-2xl md:text-3xl font-heading font-bold text-white mb-4 text-center group-hover:text-orange-500 transition-colors">
                  Contracting Services
                </h3>
                <p className="text-slate-300 text-base md:text-lg leading-relaxed mb-8 text-center">
                  We support projects through structured execution and close coordination. We emphasize <span className="text-orange-500 font-semibold">planning before execution</span> to ensure timelines.
                </p>

                {/* Checklist Container */}
                <div className="bg-white/5 rounded-xl p-5 md:p-6 space-y-4 border border-white/10 mt-auto">
                  {[
                    "Civil & MEP-related Works",
                    "Fit-out & Modification Works",
                    "Small to Mid-scale Construction",
                    "Site Coordination & Execution"
                  ].map((item, i) => (
                    <div key={i} className="flex items-start gap-3">
                      <div className="w-5 h-5 rounded-full bg-orange-500 flex items-center justify-center flex-shrink-0 mt-0.5">
                        <FaCheck className="text-white text-xs" />
                      </div>
                      <span className="text-slate-200 font-medium text-sm md:text-base">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>

          </div>
        </div>
      </section>


      {/* ==========================
          SECTION 3: CALL TO ACTION
      ========================== */}
      <section className="bg-white py-16 md:py-20 px-6 border-t border-slate-100">
          <div className="container mx-auto text-center">
            <h2 className="text-2xl md:text-3xl font-bold text-[#00224D] mb-4">
              Ready to Start?
            </h2>
            <p className="text-slate-500 mb-8 max-w-2xl mx-auto text-sm md:text-base">
              Whether you need material supply or site execution, our team is ready to assist.
            </p>
            <Link
              to="/contact"
              className="inline-block bg-orange-600 text-white px-8 py-3 md:px-10 md:py-4 rounded-lg font-bold shadow-lg hover:bg-orange-700 hover:shadow-orange-500/30 transition-all transform hover:-translate-y-1"
            >
              Get a Free Quote
            </Link>
          </div>
      </section>

    </div>
  );
};

export default ServicesPage;
