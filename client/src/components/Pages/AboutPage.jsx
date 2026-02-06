import React, { useEffect, useRef } from 'react';
import { motion, useScroll, useSpring, useTransform } from 'framer-motion';
import { FaAward, FaUserClock, FaHandHoldingHeart } from 'react-icons/fa'; // New Icons

// --- VECTOR BACKGROUND COMPONENT ---
const BlueprintBackground = () => (
  <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
    <motion.div
      animate={{ backgroundPosition: ["0px 0px", "40px 40px"] }}
      transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
      className="absolute inset-0 opacity-[0.05]"
      style={{
        backgroundImage: `linear-gradient(#00224D 1px, transparent 1px), linear-gradient(90deg, #00224D 1px, transparent 1px)`,
        backgroundSize: '40px 40px'
      }}
    />
  </div>
);

const AboutPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // --- SCROLL ANIMATION HOOKS ---
  const timelineRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: timelineRef,
    offset: ["start center", "end center"]
  });

  const scaleY = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  // Parallax for Hero
  const { scrollY } = useScroll();
  const yHero = useTransform(scrollY, [0, 500], [0, 150]);
  const opacityHero = useTransform(scrollY, [0, 300], [1, 0]);

  return (
    <div className="font-sans text-slate-800 bg-white relative selection:bg-orange-100">

      {/* ==========================
          SECTION 1: HERO BANNER
      ========================== */}
      <div className="relative w-full h-[250px] md:h-[350px] overflow-hidden flex items-center justify-center">
        <div
          className="absolute inset-0 bg-fixed bg-cover bg-center z-0"
          style={{
            backgroundImage: "url('https://images.unsplash.com/photo-1541976590-713941681591?q=80&w=2070&auto=format&fit=crop')"
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
              About Us
            </h1>
            <div className="flex items-center justify-center gap-3">
               <div className="h-[2px] w-10 bg-orange-500"></div>
               <span className="text-orange-500 font-bold tracking-[0.2em] uppercase text-xs md:text-sm">Since 2024</span>
               <div className="h-[2px] w-10 bg-orange-500"></div>
            </div>
          </motion.div>
        </motion.div>
      </div>


      {/* ==========================
          SECTION 2: COMPANY OVERVIEW (Version 4: Architectural Dark Card)
      ========================== */}
      <section className="py-24 bg-white relative z-10 overflow-hidden">
        <div className="container mx-auto px-6">
          <div className="relative flex flex-col lg:flex-row items-center justify-end">

            {/* --- 1. IMAGE (Background Layer) --- */}
            {/* Placed on the Right, taking up 60% of width */}
            <motion.div
              className="w-full lg:w-[65%] h-[500px] relative z-0 rounded-lg overflow-hidden shadow-2xl"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
               <img
                 src="https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?q=80&w=2070&auto=format&fit=crop"
                 alt="Construction Site"
                 className="w-full h-full object-cover"
               />
               {/* Gradient Overlay to help blend */}
               <div className="absolute inset-0 bg-gradient-to-r from-black/50 to-transparent lg:hidden"></div>
            </motion.div>


            {/* --- 2. TEXT CARD (Overlay Layer) --- */}
            {/* Floats on the Left, overlapping the image */}
            <motion.div
              className="w-full lg:w-[50%] bg-[#00224D] text-white p-10 md:p-14 shadow-2xl relative z-10 mt-[-60px] lg:mt-0 lg:mr-[-100px] lg:absolute lg:left-0 rounded-r-lg"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
               {/* Decorative Orange Line */}
               <div className="w-16 h-1 bg-orange-600 mb-6"></div>

               <h2 className="text-sm font-bold text-orange-500 uppercase tracking-widest mb-3">
                 Who We Are
               </h2>
               <h3 className="text-3xl md:text-4xl font-heading font-bold mb-6 leading-tight">
                 Reliable Trading & <br/>Contracting Solutions.
               </h3>

               <div className="space-y-6 text-gray-300 leading-relaxed text-lg font-light mb-8">
                 <p>
                   <span className="font-bold text-white">Multiverse International</span> is built on the belief that successful projects are driven by planning, accountability, and professional execution.
                 </p>
                 <p>
                   Our team combines technical expertise with deep local knowledge to support commercial, industrial, and infrastructure projects across Qatar.
                 </p>
               </div>

               {/* Features Row */}
               <div className="grid grid-cols-3 gap-6 border-t border-white/10 pt-6">
                  <div className="flex flex-col items-center text-center">
                     <FaAward className="text-2xl text-orange-500 mb-2" />
                     <span className="text-xs uppercase tracking-wider font-bold text-gray-400">Certified</span>
                  </div>
                  <div className="flex flex-col items-center text-center">
                     <FaUserClock className="text-2xl text-orange-500 mb-2" />
                     <span className="text-xs uppercase tracking-wider font-bold text-gray-400">Experienced</span>
                  </div>
                  <div className="flex flex-col items-center text-center">
                     <FaHandHoldingHeart className="text-2xl text-orange-500 mb-2" />
                     <span className="text-xs uppercase tracking-wider font-bold text-gray-400">Reliable</span>
                  </div>
               </div>

            </motion.div>

          </div>
        </div>
      </section>


      {/* ==========================
          SECTION 3: VISION & MISSION
      ========================== */}
      <section className="py-24 bg-slate-100 relative overflow-hidden border-t border-slate-200">
        <BlueprintBackground />

        <div className="container mx-auto px-6 relative z-10">
          <div ref={timelineRef} className="relative max-w-6xl mx-auto">

            {/* CENTRAL LINE */}
            <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 top-4 bottom-0 w-[2px] bg-slate-300 overflow-hidden rounded-full">
               <motion.div
                 style={{ scaleY }}
                 className="absolute top-0 left-0 w-full bg-gradient-to-b from-[#00224D] to-orange-600 origin-top h-full"
               ></motion.div>
            </div>

            {/* --- ITEM 1: VISION --- */}
            <div className="grid md:grid-cols-2 gap-12 items-start mb-32 relative group">
              <div className="hidden md:flex absolute left-1/2 top-2 transform -translate-x-1/2 z-10 items-center justify-center">
                 <div className="absolute w-8 h-8 bg-orange-500/20 rounded-full animate-ping"></div>
                 <div className="w-5 h-5 bg-[#00224D] border-4 border-white shadow-lg rotate-45 z-10 group-hover:bg-orange-600 transition-colors duration-500"></div>
              </div>
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

            {/* --- ITEM 2: MISSION --- */}
            <div className="grid md:grid-cols-2 gap-12 items-start relative group">
              <div className="hidden md:flex absolute left-1/2 top-2 transform -translate-x-1/2 z-10 items-center justify-center">
                 <div className="absolute w-8 h-8 bg-orange-500/20 rounded-full animate-ping"></div>
                 <div className="w-5 h-5 bg-[#00224D] border-4 border-white shadow-lg rotate-45 z-10 group-hover:bg-orange-600 transition-colors duration-500"></div>
              </div>
              <div className="hidden md:block"></div>
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
                        className="flex items-start gap-5 p-4 rounded-lg hover:bg-white hover:shadow-md transition-all duration-300 border border-transparent hover:border-slate-300"
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
      </section>

    </div>
  );
};

export default AboutPage;
