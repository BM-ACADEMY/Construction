import React, { useEffect } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { FaBuilding } from 'react-icons/fa';
import { Link } from 'react-router-dom';

// --- DATA ---
const projectsData = [
  {
    id: 1,
    title: "Luxury Private Villa",
    category: "Civil Construction",
    location: "Al Wakra",
    image: "https://images.unsplash.com/photo-1613490493576-7fde63acd811?q=80&w=2071&auto=format&fit=crop",
  },
  {
    id: 2,
    title: "Logistics Hub MEP",
    category: "MEP Works",
    location: "Industrial Area",
    image: "https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?q=80&w=2070&auto=format&fit=crop",
  },
  {
    id: 3,
    title: "Pearl Penthouse Fit-out",
    category: "Fit-out",
    location: "The Pearl Qatar",
    image: "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?q=80&w=1974&auto=format&fit=crop",
  },
  {
    id: 4,
    title: "West Bay Office HQ",
    category: "Fit-out",
    location: "West Bay",
    image: "https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=2069&auto=format&fit=crop",
  },
  {
    id: 5,
    title: "Lusail Commercial Tower",
    category: "Civil Construction",
    location: "Lusail Marina",
    image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2070&auto=format&fit=crop",
  },
  {
    id: 6,
    title: "Al Khor Resort",
    category: "Maintenance",
    location: "Al Khor",
    image: "https://images.unsplash.com/photo-1566073771259-6a8506099945?q=80&w=2070&auto=format&fit=crop",
  }
];

// --- ANIMATION VARIANTS ---
// 1. Grid Container (Staggers the children)
const containerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15, // Delay between each card appearing
      delayChildren: 0.2
    }
  }
};

// 2. Card Entry Animation (Slide Up & Fade In)
const cardVariants = {
  hidden: { opacity: 0, y: 50, scale: 0.95 },
  show: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { type: "spring", stiffness: 50, damping: 15 }
  }
};

// 3. Text Reveal Animation
const textReveal = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
};

// --- COMPONENT: Vector Background ---
const BlueprintGrid = () => (
  <div className="absolute inset-0 pointer-events-none overflow-hidden">
    <div className="absolute inset-0 opacity-[0.03]"
      style={{
        backgroundImage: `linear-gradient(#00224D 1px, transparent 1px), linear-gradient(90deg, #00224D 1px, transparent 1px)`,
        backgroundSize: '40px 40px'
      }}
    ></div>
    {/* Floating Orbs */}
    <motion.div
      animate={{ x: [0, 100, 0], y: [0, -50, 0], opacity: [0.1, 0.3, 0.1] }}
      transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
      className="absolute top-0 right-0 w-[300px] md:w-[500px] h-[300px] md:h-[500px] bg-orange-500 rounded-full blur-[120px] opacity-10"
    />
    <motion.div
      animate={{ x: [0, -100, 0], y: [0, 50, 0], opacity: [0.1, 0.2, 0.1] }}
      transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
      className="absolute bottom-0 left-0 w-[250px] md:w-[400px] h-[250px] md:h-[400px] bg-[#00224D] rounded-full blur-[100px] opacity-10"
    />
  </div>
);

const ProjectsPage = () => {
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
        <div
          className="absolute inset-0 bg-fixed bg-cover bg-center z-0"
          style={{ backgroundImage: "url('https://images.unsplash.com/photo-1479839672679-a46483c0e7c8?q=80&w=2070&auto=format&fit=crop')" }}
        >
          <div className="absolute inset-0 bg-black/50 backdrop-blur-[1px]"></div>
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
              Our Projects
            </h1>
            <div className="flex items-center justify-center gap-3">
               <div className="h-[2px] w-10 bg-orange-500"></div>
               <span className="text-orange-500 font-bold tracking-[0.2em] uppercase text-xs md:text-sm">Excellence Delivered</span>
               <div className="h-[2px] w-10 bg-orange-500"></div>
            </div>
          </motion.div>
        </motion.div>
      </div>

      {/* ==========================
          SECTION 2: ANIMATED GRID
      ========================== */}
      <section className="py-16 px-4 md:py-20 md:px-8 bg-slate-50 relative overflow-hidden">
        <BlueprintGrid />

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-50px" }} // Triggers animation slightly before scrolling into view
          className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 relative z-10"
        >
            {projectsData.map((project) => (
              <motion.div
                key={project.id}
                variants={cardVariants}
                // Desktop Hover: Lift up
                whileHover={{ y: -10, boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)" }}
                // Mobile Tap: Press down slightly
                whileTap={{ scale: 0.98 }}
                className="relative group h-[320px] md:h-[400px] rounded-3xl overflow-hidden cursor-pointer shadow-lg border border-slate-200 bg-white"
              >
                {/* 1. BACKGROUND IMAGE */}
                <motion.img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover"
                  whileHover={{ scale: 1.1 }}
                  transition={{ duration: 0.7 }}
                />

                {/* Gradient Overlay */}
                {/* Mobile: Always slightly visible (opacity-60) for text legibility */}
                {/* Desktop: Hidden initially (opacity-0), visible on hover (opacity-60) */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#00224D]/90 via-transparent to-transparent opacity-60 md:opacity-0 md:group-hover:opacity-60 transition-opacity duration-300"></div>

                {/* 2. FLOATING INFO PILL */}
                <div className="absolute bottom-6 left-4 right-4 md:left-6 md:right-6 z-20
                                opacity-100 translate-y-0
                                md:translate-y-10 md:opacity-0 md:group-hover:translate-y-0 md:group-hover:opacity-100
                                transition-all duration-500 ease-out">

                   <div className="bg-white rounded-2xl p-4 md:p-5 shadow-2xl border border-slate-100 flex items-center gap-3 md:gap-4">
                      <div className="w-8 h-8 md:w-10 md:h-10 rounded-full bg-orange-50 flex-shrink-0 flex items-center justify-center text-orange-600">
                        <FaBuilding className="text-sm md:text-base" />
                      </div>
                      <div>
                        <span className="text-[9px] md:text-[10px] font-bold text-slate-400 uppercase tracking-wider block">
                           {project.category}
                        </span>
                        <h3 className="text-base md:text-lg font-bold text-[#00224D] leading-tight">
                          {project.title}
                        </h3>
                         <p className="text-slate-500 text-xs mt-0.5">
                            {project.location}
                         </p>
                      </div>
                   </div>
                </div>

              </motion.div>
            ))}
        </motion.div>
      </section>

      {/* ==========================
          SECTION 3: FOOTER CTA
      ========================== */}
      <section className="py-16 md:py-24 px-6 bg-white border-t border-slate-100 relative overflow-hidden">
         <div className="absolute inset-0 opacity-[0.02] bg-[url('https://www.transparenttextures.com/patterns/cubes.png')]"></div>

         <div className="container mx-auto text-center relative z-10">
           <motion.div
             variants={textReveal}
             initial="hidden"
             whileInView="show"
             viewport={{ once: true }}
           >
             <h2 className="text-2xl md:text-4xl font-bold text-[#00224D] mb-4">
               Ready to Start?
             </h2>
             <p className="text-slate-500 mb-8 md:mb-10 max-w-2xl mx-auto text-sm md:text-lg">
               Whether you need material supply or site execution, our team is ready to assist.
             </p>
             <Link
               to="/contact"
               className="inline-block"
             >
               <motion.button
                 whileHover={{ scale: 1.05 }}
                 whileTap={{ scale: 0.95 }}
                 className="bg-orange-600 text-white px-8 py-3 md:px-10 md:py-4 rounded-lg font-bold shadow-lg hover:bg-orange-700 hover:shadow-orange-500/30 transition-all text-sm md:text-lg"
               >
                 Get a Free Quote
               </motion.button>
             </Link>
           </motion.div>
         </div>
      </section>

    </div>
  );
};

export default ProjectsPage;
