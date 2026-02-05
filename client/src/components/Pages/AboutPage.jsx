import React, { useEffect, useRef } from 'react';
import { motion, useScroll, useSpring, useTransform } from 'framer-motion';

// --- VECTOR BACKGROUND COMPONENT ---
const BlueprintBackground = () => (
  <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
    {/* Animated Grid Pattern */}
    <motion.div
      animate={{ backgroundPosition: ["0px 0px", "40px 40px"] }}
      transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
      className="absolute inset-0 opacity-[0.03]"
      style={{
        backgroundImage: `linear-gradient(#00224D 1px, transparent 1px), linear-gradient(90deg, #00224D 1px, transparent 1px)`,
        backgroundSize: '40px 40px'
      }}
    />

    {/* Floating Shapes (Decorative) */}
    <motion.div
      animate={{ y: [0, -20, 0], rotate: [0, 5, 0] }}
      transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
      className="absolute top-1/4 left-10 w-64 h-64 border-2 border-orange-500/10 rounded-full"
    />
    <motion.div
      animate={{ y: [0, 30, 0], rotate: [0, -10, 0] }}
      transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
      className="absolute bottom-1/4 right-10 w-96 h-96 border border-[#00224D]/10 rotate-45"
    />
  </div>
);

const AboutPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // --- SCROLL ANIMATION HOOKS ---
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start center", "end center"]
  });

  // Smooth Line Fill
  const scaleY = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  // Parallax for Hero Text
  const { scrollY } = useScroll();
  const yHero = useTransform(scrollY, [0, 500], [0, 150]);
  const opacityHero = useTransform(scrollY, [0, 300], [1, 0]);

  return (
    <div className="font-sans text-slate-800 bg-slate-50 relative overflow-hidden selection:bg-orange-100">

      {/* --- HERO BANNER (Parallax) --- */}
      <div className="relative w-full h-[500px] overflow-hidden flex items-center justify-center">
        {/* Fixed Background Image */}
        <div
          className="absolute inset-0 bg-fixed bg-cover bg-center z-0"
          style={{
            backgroundImage: "url('https://images.unsplash.com/photo-1541976590-713941681591?q=80&w=2070&auto=format&fit=crop')"
          }}
        >
          <div className="absolute inset-0 bg-[#00152e]/70 backdrop-blur-[2px]"></div>
        </div>

        {/* Parallax Content */}
        <motion.div
          style={{ y: yHero, opacity: opacityHero }}
          className="relative z-10 text-center px-4"
        >
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 1, ease: "easeOut" }}
          >
            <h1 className="text-6xl md:text-8xl font-heading font-bold text-white tracking-tighter mb-4 drop-shadow-2xl">
              About Us
            </h1>
            <div className="flex items-center justify-center gap-3">
               <div className="h-[2px] w-12 bg-orange-500"></div>
               <span className="text-orange-500 font-bold tracking-[0.2em] uppercase text-sm">Since 2024</span>
               <div className="h-[2px] w-12 bg-orange-500"></div>
            </div>
          </motion.div>
        </motion.div>
      </div>


      {/* --- MAIN CONTENT CONTAINER --- */}
      <div className="relative">
        <BlueprintBackground />

        <div className="container mx-auto px-6 py-24 relative z-10">

          {/* --- COMPANY OVERVIEW --- */}
          <div className="max-w-4xl mx-auto mb-40 text-center">
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, ease: "easeOut" }}
            >
              <h2 className="text-sm font-bold text-orange-600 uppercase tracking-widest mb-4">
                Who We Are
              </h2>
              <h3 className="text-4xl md:text-5xl font-heading font-bold text-[#00224D] mb-10 leading-tight">
                Company Overview
              </h3>

              <div className="space-y-8 text-slate-600 leading-relaxed text-lg md:text-xl font-light text-left md:text-center">
                <p>
                  <span className="font-bold text-[#00224D]">Multiverse International Trading & Contracting</span> is a Qatar-based company established to deliver reliable trading and contracting solutions with a strong focus on quality, safety, and long-term client relationships.
                </p>
                <p>
                  We are built on the belief that successful projects are not driven only by materials and manpower, but by planning, accountability, and professional execution. Our team brings together technical knowledge, site experience, and an understanding of local regulations to support clients across commercial, industrial, and infrastructure-related works.
                </p>
                <p>
                  As a growing organization, we combine fresh operational energy with industry-proven practices, enabling us to adapt quickly to client requirements while maintaining high standards of workmanship and compliance.
                </p>
              </div>
            </motion.div>
          </div>


          {/* --- VISION & MISSION TIMELINE --- */}
          <div ref={containerRef} className="relative max-w-6xl mx-auto">

            {/* ✅ CENTRAL LINE (Desktop) */}
            <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 top-4 bottom-0 w-[2px] bg-slate-200 overflow-hidden rounded-full">
               <motion.div
                 style={{ scaleY }}
                 className="absolute top-0 left-0 w-full bg-gradient-to-b from-[#00224D] to-orange-600 origin-top h-full"
               ></motion.div>
            </div>


            {/* --- ITEM 1: VISION (Left) --- */}
            <div className="grid md:grid-cols-2 gap-12 items-start mb-32 relative group">

              {/* Animated Marker */}
              <div className="hidden md:flex absolute left-1/2 top-2 transform -translate-x-1/2 z-10 items-center justify-center">
                 {/* Pulse Effect */}
                 <div className="absolute w-8 h-8 bg-orange-500/20 rounded-full animate-ping"></div>
                 <div className="w-5 h-5 bg-[#00224D] border-4 border-white shadow-lg rotate-45 z-10 group-hover:bg-orange-600 transition-colors duration-500"></div>
              </div>

              {/* Content */}
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6 }}
                className="text-left md:text-right md:pr-20"
              >
                 <h3 className="text-4xl font-heading font-bold text-[#00224D] mb-6 group-hover:text-orange-600 transition-colors duration-300">
                    Our Vision
                 </h3>
                 <p className="text-slate-600 text-lg leading-relaxed">
                   To become a trusted and recognized contracting and trading partner in Qatar, known for dependable delivery, transparent communication, and consistent quality across every assignment we undertake.
                 </p>
              </motion.div>

              <div className="hidden md:block"></div>
            </div>


            {/* --- ITEM 2: MISSION (Right) --- */}
            <div className="grid md:grid-cols-2 gap-12 items-start relative group">

              {/* Animated Marker */}
              <div className="hidden md:flex absolute left-1/2 top-2 transform -translate-x-1/2 z-10 items-center justify-center">
                 <div className="absolute w-8 h-8 bg-orange-500/20 rounded-full animate-ping"></div>
                 <div className="w-5 h-5 bg-[#00224D] border-4 border-white shadow-lg rotate-45 z-10 group-hover:bg-orange-600 transition-colors duration-500"></div>
              </div>

              <div className="hidden md:block"></div>

              {/* Content */}
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6 }}
                className="text-left md:pl-20"
              >
                 <h3 className="text-4xl font-heading font-bold text-[#00224D] mb-8 group-hover:text-orange-600 transition-colors duration-300">
                    Our Mission
                 </h3>

                 {/* Staggered List Animation */}
                 <ul className="space-y-6">
                    {[
                      "To deliver cost-effective and technically sound solutions",
                      "To follow Qatar regulations, standards, and HSE requirements without compromise",
                      "To build long-term relationships based on trust and performance",
                      "To continuously improve our systems, skills, and service quality"
                    ].map((item, i) => (
                      <motion.li
                        key={i}
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: i * 0.1, duration: 0.5 }}
                        className="flex items-start gap-5 p-4 rounded-lg hover:bg-white hover:shadow-md transition-all duration-300 border border-transparent hover:border-slate-100"
                      >
                        <div className="mt-1.5 w-2 h-2 bg-orange-600 rounded-full flex-shrink-0 shadow-[0_0_10px_rgba(234,88,12,0.6)]"></div>
                        <span className="text-slate-600 text-lg leading-relaxed">{item}</span>
                      </motion.li>
                    ))}
                 </ul>
              </motion.div>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
