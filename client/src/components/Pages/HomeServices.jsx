import React from 'react';
import { FaTools, FaTruckLoading, FaArrowRight } from 'react-icons/fa';
import { Link } from 'react-router-dom';

// 👇 Ensure this path is correct
import craneBg from '../../assets/crane-bg.png';

const HomeServices = () => {

  // ✅ RULER PATTERN
  const rulerStyle = {
    backgroundImage: `url("data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cg stroke='%2394a3b8' stroke-width='1'%3E%3Cpath d='M0 40V20'/%3E%3Cpath d='M10 40V30'/%3E%3Cpath d='M20 40V25'/%3E%3Cpath d='M30 40V30'/%3E%3C/g%3E%3C/svg%3E")`,
    backgroundRepeat: 'repeat-x',
    backgroundPosition: 'bottom',
    height: '40px',
    width: '100%',
  };

  return (
    <section className="py-24 bg-[#f3f4f6] relative overflow-hidden">

      {/* ✅ ANIMATION STYLES */}
      <style>{`
        /* 1. Moving Ruler Animation */
        @keyframes moveRuler {
          0% { background-position-x: 0px; }
          100% { background-position-x: 40px; }
        }
        .ruler-anim {
          animation: moveRuler 1s linear infinite;
        }

        /* 2. Vertical Bobbing Crane Animation (UPDATED) */
        /* Moves up and down slowly to simulate heavy operation */
        @keyframes verticalShake {
          0% { transform: translateY(0px); }
          50% { transform: translateY(-20px); } /* Move up 10px */
          100% { transform: translateY(0px); } /* Move back down */
        }
        .vertical-anim {
          animation: verticalShake 3s ease-in-out infinite; /* Slow, heavy bobbing (6 seconds) */
        }
      `}</style>

      {/* --- LAYER 1: RULER STRIP (Bottom) --- */}
      <div className="absolute bottom-0 left-0 w-full ruler-anim z-0 opacity-60" style={rulerStyle}></div>

      {/* --- LAYER 2: CRANE IMAGE (Vertical Bobbing) --- */}
      {/* Changed class from 'shake-anim' to 'vertical-anim' */}
      <div className="absolute top-0 right-0 h-full w-[45%] md:w-[35%] z-10 pointer-events-none">
  <img
    src={craneBg}
    alt="Construction Crane Background"
    className="w-full h-full object-cover object-center vertical-anim scale-90"
  />
</div>


      {/* --- LAYER 3: MAIN CONTENT --- */}
      <div className="container mx-auto px-6 relative z-20 pt-12">

        {/* Header */}
        <div className="mb-16 max-w-2xl">
          <div className="flex items-center gap-2 mb-4">
            <div className="w-0 h-0 border-l-[6px] border-l-transparent border-r-[6px] border-r-transparent border-b-[10px] border-b-orange-600"></div>
            <span className="text-slate-500 font-bold uppercase tracking-widest text-sm">
              What We Do
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl font-heading font-bold text-[#00224D]">
            Our services that <br /> we provide
          </h2>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 gap-8 max-w-4xl">

          {/* Card 01 */}
          <div className="group flex bg-white border border-slate-200 hover:border-orange-600 transition-all duration-300 shadow-sm hover:shadow-xl h-full relative z-30">
            <div className="w-16 flex-shrink-0 border-r border-slate-100 flex items-center justify-center bg-slate-50/50 group-hover:bg-orange-50/30 transition-colors">
              <span className="transform -rotate-90 whitespace-nowrap text-slate-300 font-bold tracking-[0.2em] text-sm group-hover:text-orange-400 transition-colors">
                SERVICES - 01
              </span>
            </div>
            <div className="p-10 flex-grow flex flex-col items-start relative overflow-hidden">
              <div className="mb-8 group-hover:-translate-y-1 transition-transform duration-300">
                <FaTruckLoading className="text-5xl text-orange-600" />
              </div>
              <h3 className="text-2xl font-bold text-[#00224D] mb-4">Material Supply</h3>
              <p className="text-slate-500 leading-relaxed mb-10">
                Sourcing high-quality construction materials, safety gear, and industrial tools from global manufacturers.
              </p>
              <Link to="/services" className="absolute bottom-0 right-0 bg-orange-600 text-white font-bold text-xs uppercase px-8 py-4 hover:bg-[#00224D] transition-colors tracking-wider">
                Explore Service <FaArrowRight className="inline ml-2" />
              </Link>
            </div>
          </div>

          {/* Card 02 */}
          <div className="group flex bg-white border border-slate-200 hover:border-orange-600 transition-all duration-300 shadow-sm hover:shadow-xl h-full relative z-30">
            <div className="w-16 flex-shrink-0 border-r border-slate-100 flex items-center justify-center bg-slate-50/50 group-hover:bg-orange-50/30 transition-colors">
              <span className="transform -rotate-90 whitespace-nowrap text-slate-300 font-bold tracking-[0.2em] text-sm group-hover:text-orange-400 transition-colors">
                SERVICES - 02
              </span>
            </div>
            <div className="p-10 flex-grow flex flex-col items-start relative overflow-hidden">
              <div className="mb-8 group-hover:-translate-y-1 transition-transform duration-300">
                <FaTools className="text-5xl text-orange-600" />
              </div>
              <h3 className="text-2xl font-bold text-[#00224D] mb-4">General Construction</h3>
              <p className="text-slate-500 leading-relaxed mb-10">
                Executing civil works, MEP installations, and interior fit-outs with precision and strict safety compliance.
              </p>
              <Link to="/services" className="absolute bottom-0 right-0 bg-orange-600 text-white font-bold text-xs uppercase px-8 py-4 hover:bg-[#00224D] transition-colors tracking-wider">
                Explore Service <FaArrowRight className="inline ml-2" />
              </Link>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};

export default HomeServices;
