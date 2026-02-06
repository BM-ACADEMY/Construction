import React, { useEffect } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { FaBuilding } from 'react-icons/fa';

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
const containerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2
    }
  }
};

const cardVariants = {
  hidden: { opacity: 0, y: 50 },
  show: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 50 } }
};

// --- COMPONENT: Vector Background ---
const BlueprintGrid = () => (
  <div className="absolute inset-0 pointer-events-none overflow-hidden">
    {/* Engineering Grid */}
    <div className="absolute inset-0 opacity-[0.03]"
      style={{
        backgroundImage: `linear-gradient(#00224D 1px, transparent 1px), linear-gradient(90deg, #00224D 1px, transparent 1px)`,
        backgroundSize: '40px 40px'
      }}
    ></div>

    {/* Floating Orbs (Animated) */}
    <motion.div
      animate={{ x: [0, 100, 0], y: [0, -50, 0], opacity: [0.1, 0.3, 0.1] }}
      transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
      className="absolute top-0 right-0 w-[500px] h-[500px] bg-orange-500 rounded-full blur-[120px] opacity-10"
    />
    <motion.div
      animate={{ x: [0, -100, 0], y: [0, 50, 0], opacity: [0.1, 0.2, 0.1] }}
      transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
      className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-[#00224D] rounded-full blur-[100px] opacity-10"
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
      <section className="py-20 px-4 md:px-8 bg-slate-50 relative overflow-hidden">
        {/* Background Animation */}
        <BlueprintGrid />

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
          className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 relative z-10"
        >
            {projectsData.map((project) => (
              <motion.div
                key={project.id}
                variants={cardVariants}
                whileHover={{ y: -10 }}
                className="relative group h-[400px] rounded-3xl overflow-hidden cursor-pointer shadow-lg border border-slate-200 bg-white"
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
                <div className="absolute inset-0 bg-gradient-to-t from-[#00224D]/90 via-transparent to-transparent opacity-0 group-hover:opacity-60 transition-opacity duration-300"></div>

                {/* 2. FLOATING INFO PILL */}
                <div className="absolute bottom-6 left-6 right-6 z-20 translate-y-10 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500 ease-out">
                   <div className="bg-white rounded-2xl p-5 shadow-2xl border border-slate-100 flex items-center gap-4">
                      <div className="w-10 h-10 rounded-full bg-orange-50 flex items-center justify-center text-orange-600">
                        <FaBuilding />
                      </div>
                      <div>
                        <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider block">
                           {project.category}
                        </span>
                        <h3 className="text-lg font-bold text-[#00224D] leading-tight">
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
      <section className="py-24 px-6 bg-white border-t border-slate-100 relative overflow-hidden">
         {/* Subtle Texture */}
         <div className="absolute inset-0 opacity-[0.02] bg-[url('https://www.transparenttextures.com/patterns/cubes.png')]"></div>

         <div className="container mx-auto text-center relative z-10">
           <motion.h2
             initial={{ opacity: 0, y: 20 }}
             whileInView={{ opacity: 1, y: 0 }}
             transition={{ delay: 0.1 }}
             className="text-3xl md:text-4xl font-bold text-[#00224D] mb-4"
           >
             Ready to Start?
           </motion.h2>
           <motion.p
             initial={{ opacity: 0 }}
             whileInView={{ opacity: 1 }}
             transition={{ delay: 0.2 }}
             className="text-slate-500 mb-10 max-w-2xl mx-auto text-lg"
           >
             Whether you need material supply or site execution, our team is ready to assist.
           </motion.p>
           <motion.a
             whileHover={{ scale: 1.05 }}
             whileTap={{ scale: 0.95 }}
             href="/contact"
             className="inline-block bg-orange-600 text-white px-10 py-4 rounded-lg font-bold shadow-lg hover:bg-orange-700 hover:shadow-orange-500/30 transition-all text-lg"
           >
             Get a Free Quote
           </motion.a>
         </div>
      </section>

    </div>
  );
};

export default ProjectsPage;
