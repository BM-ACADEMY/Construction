import React, { useEffect } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { FaClipboardCheck, FaUserCheck, FaShieldAlt, FaChartLine, FaFileContract } from 'react-icons/fa';

// --- DATA: Based on your input ---
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

const QualityPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // Parallax Header
  const { scrollY } = useScroll();
  const yHero = useTransform(scrollY, [0, 500], [0, 150]);
  const opacityHero = useTransform(scrollY, [0, 300], [1, 0]);

  return (
    <div className="min-h-screen bg-slate-50 font-sans text-slate-800 selection:bg-orange-100 relative">

      {/* ==========================
          SECTION 1: HERO BANNER
      ========================== */}
      <div className="relative w-full h-[250px] md:h-[350px] overflow-hidden flex items-center justify-center">
        {/* Background: Safety/Engineering focus */}
        <div
          className="absolute inset-0 bg-fixed bg-cover bg-center z-0"
          style={{ backgroundImage: "url('https://images.unsplash.com/photo-1504307651254-35680f356dfd?q=80&w=2070&auto=format&fit=crop')" }}
        >
          {/* Black Overlay */}
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
              Quality & HSE
            </h1>
            <div className="flex items-center justify-center gap-3">
               <div className="h-[2px] w-10 bg-orange-500"></div>
               <span className="text-orange-500 font-bold tracking-[0.2em] uppercase text-xs md:text-sm">Safety & Standards</span>
               <div className="h-[2px] w-10 bg-orange-500"></div>
            </div>
          </motion.div>
        </motion.div>
      </div>

      {/* ==========================
          SECTION 2: COMMITMENT GRID
      ========================== */}
      <section className="py-24 px-6 relative">
        {/* Background Grid Pattern */}
        <div className="absolute inset-0 pointer-events-none opacity-[0.03]"
          style={{
             backgroundImage: `linear-gradient(#00224D 1px, transparent 1px), linear-gradient(90deg, #00224D 1px, transparent 1px)`,
             backgroundSize: '40px 40px'
          }}
        ></div>

        <div className="container mx-auto relative z-10">

           {/* Header Text */}
           <div className="max-w-3xl mx-auto text-center mb-16">
             <h2 className="text-3xl md:text-4xl font-heading font-bold text-[#00224D] mb-6">
               Commitment to Quality & HSE
             </h2>
             <p className="text-slate-600 text-lg leading-relaxed">
               <span className="font-bold text-[#00224D]">Multiverse International Trading & Contracting</span> is committed to maintaining high standards of quality, health, safety, and environmental responsibility.
             </p>
           </div>

           {/* The 4-Card Grid */}
           <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
             {commitments.map((item, index) => (
               <motion.div
                 key={item.id}
                 initial={{ opacity: 0, y: 30 }}
                 whileInView={{ opacity: 1, y: 0 }}
                 viewport={{ once: true }}
                 transition={{ delay: index * 0.1, duration: 0.5 }}
                 className="bg-white rounded-xl p-8 shadow-lg border border-slate-100 hover:border-orange-200 hover:shadow-2xl transition-all duration-300 group text-center"
               >
                 {/* Icon Bubble */}
                 <div className="w-16 h-16 mx-auto bg-slate-50 rounded-full flex items-center justify-center text-3xl text-[#00224D] mb-6 group-hover:bg-[#00224D] group-hover:text-white transition-colors duration-300 shadow-inner">
                   {item.icon}
                 </div>

                 <h3 className="text-xl font-bold text-[#00224D] mb-3">
                   {item.title}
                 </h3>

                 <p className="text-slate-500 text-sm leading-relaxed">
                   {item.desc}
                 </p>
               </motion.div>
             ))}
           </div>

        </div>
      </section>

      {/* ==========================
          SECTION 3: FOOTER CTA (White Style)
      ========================== */}
      <section className="py-20 px-6 bg-white border-t border-slate-100">
         <div className="container mx-auto text-center">
           <h2 className="text-2xl font-bold text-[#00224D] mb-4">
             Require HSE Documentation?
           </h2>
           <p className="text-slate-500 mb-8 max-w-xl mx-auto">
             We can provide detailed safety manuals and compliance certificates upon request.
           </p>
           <a href="/contact" className="inline-flex items-center justify-center bg-slate-100 text-[#00224D] px-8 py-3 rounded-lg font-bold hover:bg-orange-600 hover:text-white transition-colors border border-slate-200 shadow-sm">
             <FaFileContract className="mr-2" /> Request Documents
           </a>
         </div>
      </section>

    </div>
  );
};

export default QualityPage;
