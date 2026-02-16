import React, { useEffect } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { FaClipboardCheck, FaUserCheck, FaShieldAlt, FaChartLine } from 'react-icons/fa';
import { Helmet } from "react-helmet";

// --- DATA ---
const commitments = [
  {
    id: 1,
    title: "Strict Compliance",
    icon: <FaClipboardCheck />,
    desc: "Compliance with approved drawings and specifications."
  },
  {
    id: 2,
    title: "Qualified Resources",
    icon: <FaUserCheck />,
    desc: "Use of qualified manpower and approved materials."
  },
  {
    id: 3,
    title: "Safety First",
    icon: <FaShieldAlt />,
    desc: "Safe working practices aligned with local regulations."
  },
  {
    id: 4,
    title: "Continuous Improvement",
    icon: <FaChartLine />,
    desc: "Continuous monitoring and improvement of site activities."
  }
];

// --- ANIMATION VARIANTS ---

// 1. Container: Controls the timing of children
const containerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.4, // ✅ Wait 0.4s between each card
      delayChildren: 0.2
    }
  }
};

// 2. Card: The actual animation logic
const cardVariants = {
  hidden: { 
    opacity: 0, 
    y: 50 
  },
  show: { 
    opacity: 1, 
    y: 0,
    transition: { 
      type: "spring", 
      stiffness: 50, 
      damping: 20 
    }
  }
};

const QualityPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const { scrollY } = useScroll();
  const yHero = useTransform(scrollY, [0, 500], [0, 150]);
  const opacityHero = useTransform(scrollY, [0, 300], [1, 0]);

  return (
    <div className="min-h-screen bg-slate-50 font-sans text-slate-800 selection:bg-orange-100 relative">
      <Helmet>
      <title>Contact Multiverse Trading Qatar</title>
<meta name="description" content="Contact Multiverse Trading & Contracting in Qatar for civil, MEP and fit-out services. Get expert project consultation today."/>

      <link rel="canonical" href="https://multiverseint.com/hse" />
    </Helmet>

      {/* HERO SECTION */}
      <div className="relative w-full h-[250px] md:h-[350px] overflow-hidden flex items-center justify-center">
        <div
          className="absolute inset-0 bg-fixed bg-cover bg-center z-0"
          style={{ backgroundImage: "url('https://images.unsplash.com/photo-1504307651254-35680f356dfd?q=80&w=2070&auto=format&fit=crop')" }}
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
            <h1 className="text-3xl md:text-6xl font-heading font-bold text-white tracking-tighter mb-3 drop-shadow-2xl">
              Quality & HSE
            </h1>
            <div className="flex items-center justify-center gap-3">
               <div className="h-[2px] w-8 md:w-10 bg-orange-500"></div>
               <span className="text-orange-500 font-bold tracking-[0.2em] uppercase text-xs md:text-sm">Safety & Standards</span>
               <div className="h-[2px] w-8 md:w-10 bg-orange-500"></div>
            </div>
          </motion.div>
        </motion.div>
      </div>

      {/* COMMITMENT SECTION */}
      <section className="py-16 md:py-24 px-4 md:px-6 relative">
        <div className="absolute inset-0 pointer-events-none opacity-[0.03]"
          style={{
             backgroundImage: `linear-gradient(#00224D 1px, transparent 1px), linear-gradient(90deg, #00224D 1px, transparent 1px)`,
             backgroundSize: '40px 40px'
          }}
        ></div>

        <div className="container mx-auto relative z-10">
           <div className="max-w-3xl mx-auto text-center mb-12 md:mb-16">
             <motion.h2 
               initial={{ opacity: 0, y: 20 }}
               whileInView={{ opacity: 1, y: 0 }}
               viewport={{ once: true }}
               transition={{ duration: 0.6 }}
               className="text-2xl md:text-4xl font-heading font-bold text-[#00224D] mb-4 md:mb-6"
             >
               Commitment to Quality & HSE
             </motion.h2>
             <motion.p 
               initial={{ opacity: 0, y: 20 }}
               whileInView={{ opacity: 1, y: 0 }}
               viewport={{ once: true }}
               transition={{ duration: 0.6, delay: 0.2 }}
               className="text-slate-600 text-sm md:text-lg leading-relaxed px-2"
             >
               <span className="font-bold text-[#00224D]">Multiverse International Trading & Contracting</span> is committed to maintaining high standards of quality, health, safety, and environmental responsibility.
             </motion.p>
           </div>

           {/* ✅ PARENT CONTAINER CONTROLS THE ANIMATION SEQUENCE */}
           <motion.div 
             className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
             variants={containerVariants}
             initial="hidden"
             whileInView="show"
             viewport={{ once: true, amount: 0.1 }} // Starts when 10% of grid is visible
           >
             {commitments.map((item) => (
               <motion.div
                 key={item.id}
                 // ✅ Child simply inherits "hidden" or "show" from parent
                 variants={cardVariants} 
                 className="group relative bg-white rounded-xl p-6 md:p-8 shadow-lg border border-slate-100 transition-all duration-300 hover:shadow-2xl hover:-translate-y-2"
               >
                 <div className="h-full flex flex-col items-center text-center">
                   
                   {/* Icon */}
                   <div className="w-14 h-14 md:w-16 md:h-16 mx-auto bg-slate-50 rounded-full flex items-center justify-center text-2xl md:text-3xl text-[#00224D] mb-4 md:mb-6 group-hover:bg-[#00224D] group-hover:text-white transition-colors duration-300 shadow-inner">
                     {item.icon}
                   </div>

                   {/* Title */}
                   <h3 className="text-lg md:text-xl font-bold text-[#00224D] mb-3 group-hover:text-orange-600 transition-colors">
                     {item.title}
                   </h3>

                   {/* Description */}
                   <p className="text-slate-500 text-xs md:text-sm leading-relaxed">
                     {item.desc}
                   </p>
                 </div>
               </motion.div>
             ))}
           </motion.div>

        </div>
      </section>
    </div>
  );
};

export default QualityPage;