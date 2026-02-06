import React from 'react';
import { FaShieldAlt, FaArrowRight, FaCheckCircle } from 'react-icons/fa';
import { Link } from 'react-router-dom';

// 👇 IMPORT YOUR HOOK IMAGE
import craneHook from '../../assets/crane-hook.png';

const HomeHSE = () => {

  const rulerStyle = {
    backgroundImage: `url("data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cg stroke='%23cbd5e1' stroke-width='1'%3E%3Cpath d='M0 40V20'/%3E%3Cpath d='M10 40V30'/%3E%3Cpath d='M20 40V25'/%3E%3Cpath d='M30 40V30'/%3E%3C/g%3E%3C/svg%3E")`,
    backgroundRepeat: 'repeat-x',
    backgroundPosition: 'bottom',
    height: '40px',
    width: '100%',
  };

  return (
    <section className="pt-16 pb-16 md:pt-32 md:pb-24 bg-[#f3f4f6] relative overflow-hidden">

      <style>{`
        @keyframes moveRuler {
          0% { background-position-x: 0px; }
          100% { background-position-x: 40px; }
        }
        .ruler-anim {
          animation: moveRuler 1s linear infinite;
        }
        @keyframes bounceSlow {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(15px); }
        }
        .animate-bounce-slow {
          animation: bounceSlow 4s infinite ease-in-out;
        }
      `}</style>

      {/* RULER */}
      <div className="absolute -top-5 left-0 w-full ruler-anim z-0 opacity-50" style={rulerStyle}></div>

      {/* HANGING CRANE HOOK */}
      {/* ✅ FIXED: Increased z-index to 30 (front), moved up (-top-20) to clear text */}
      <div className="absolute -top-20 md:-top-24 right-5 md:right-10 w-14 md:w-24 z-30 animate-bounce-slow pointer-events-none opacity-100">

        {/* Cables */}
        <div className="absolute bottom-full left-1/2 -translate-x-1/2 w-[70%] h-[1000px] flex justify-between px-1 -mb-1 z-0">
          <div className="w-[2px] bg-[#4a4a4a] h-full opacity-90"></div>
          <div className="w-[2px] bg-[#4a4a4a] h-full opacity-90"></div>
        </div>

        {/* Hook Image */}
        <img
          src={craneHook}
          alt="Crane Hook"
          className="w-full drop-shadow-xl relative z-10"
        />
      </div>

      <div className="container mx-auto px-6 relative z-20">
        <div className="flex flex-col lg:flex-row items-center gap-10 lg:gap-16">

          {/* LEFT CARD (Orange Box) */}
          <div className="w-full lg:w-1/2 relative flex items-center justify-center lg:justify-start">

            <div className="relative z-10 bg-orange-600 w-full md:max-w-xl shadow-2xl rounded-sm overflow-hidden p-8 md:p-14">

              {/* Background Texture */}
              <div className="absolute inset-0 z-0 opacity-10 mix-blend-multiply pointer-events-none">
                <img
                  src="https://img.freepik.com/free-vector/white-wireframe-structure_1017-30691.jpg"
                  alt="Construction Wireframe"
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Card Content */}
              <div className="relative z-10">
                <div className="flex items-center gap-3 mb-4 md:mb-6">
                  <FaShieldAlt className="text-2xl md:text-3xl text-orange-200" />
                  <span className="text-white font-bold uppercase tracking-widest text-xs md:text-sm">
                    Quality & HSE
                  </span>
                </div>

                <h2 className="text-2xl md:text-4xl font-heading font-bold text-white mb-6 md:mb-8 leading-tight">
                  Built on Safety, Driven by Quality
                </h2>

                <Link
                  to="/hse"
                  className="inline-flex items-center bg-white text-[#00224D] font-bold text-xs uppercase px-6 py-3 md:px-8 md:py-4 hover:bg-[#00224D] hover:text-white transition-colors tracking-wider shadow-lg"
                >
                  Our Quality Policy <FaArrowRight className="ml-2" />
                </Link>
              </div>
            </div>
          </div>

          {/* RIGHT CONTENT */}
          <div className="w-full lg:w-1/2 relative z-10 pl-0 lg:pl-10">

            <div className="mb-6">
              <div className="flex items-center gap-2 mb-2">
                <div className="w-0 h-0 border-l-[6px] border-l-transparent border-r-[6px] border-r-transparent border-b-[10px] border-b-orange-600"></div>
                <span className="text-slate-500 font-bold uppercase tracking-widest text-xs">
                  HSE COMMITMENT
                </span>
              </div>
              <h2 className="text-3xl md:text-5xl font-heading font-bold text-[#00224D]">
                Zero-Accident Mindset
              </h2>
            </div>

            <div className="mb-8">
              <p className="text-slate-500 leading-relaxed text-base md:text-lg mb-8 font-medium">
                We maintain high standards of quality, health, safety, and environmental responsibility by strictly following approved specifications, local regulations, and safe working practices across all operations.
              </p>

              <div className="w-full h-px bg-slate-300 my-6 md:my-8"></div>

              {/* Bullets */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-orange-100 flex-shrink-0 flex items-center justify-center text-orange-600">
                    <FaCheckCircle />
                  </div>
                  <span className="text-slate-700 font-bold text-sm">
                    Approved Materials
                  </span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-orange-100 flex-shrink-0 flex items-center justify-center text-orange-600">
                    <FaShieldAlt />
                  </div>
                  <span className="text-slate-700 font-bold text-sm">
                    Safe Work Practices
                  </span>
                </div>
              </div>

            </div>

          </div>

        </div>
      </div>
    </section>
  );
};

export default HomeHSE;
