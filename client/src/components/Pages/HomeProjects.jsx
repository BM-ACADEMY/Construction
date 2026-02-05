import React, { useState } from 'react';
import { FaArrowRight, FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const HomeProjects = () => {
  const [activeIndex, setActiveIndex] = useState(1);

  const projects = [
    {
      id: 1,
      title: "Commercial Office Fit-out",
      category: "INTERIOR",
      date: "Building since 09,01,2024",
      image: "https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=2069&auto=format&fit=crop",
    },
    {
      id: 2,
      title: "General Construction",
      category: "BUILDING",
      date: "Building since 12,03,2025",
      image: "https://images.unsplash.com/photo-1541888946425-d81bb19240f5?q=80&w=2070&auto=format&fit=crop",
    },
    {
      id: 3,
      title: "Luxury Villa Renovation",
      category: "RESIDENTIAL",
      date: "Building since 05,11,2024",
      image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=2070&auto=format&fit=crop",
    },
    {
      id: 4,
      title: "Industrial Warehouse",
      category: "INDUSTRIAL",
      date: "Building since 01,02,2025",
      image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?q=80&w=2070&auto=format&fit=crop",
    }
  ];

  const nextSlide = () => {
    setActiveIndex((prev) => (prev === projects.length - 1 ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setActiveIndex((prev) => (prev === 0 ? projects.length - 1 : prev - 1));
  };

  const getSlideStyles = (index) => {
    if (index === activeIndex) {
      return "left-1/2 -translate-x-1/2 w-[55%] md:w-[60%] z-20 opacity-100 shadow-2xl";
    }
    else if (index === (activeIndex - 1 + projects.length) % projects.length) {
      return "left-0 translate-x-0 w-[15%] md:w-[18%] z-10 opacity-100";
    }
    else if (index === (activeIndex + 1) % projects.length) {
      return "right-0 translate-x-0 w-[15%] md:w-[18%] z-10 opacity-100";
    }
    else {
      return "opacity-0 z-0 pointer-events-none";
    }
  };

  return (
    <section className="py-24 bg-white overflow-hidden">
      <div className="container mx-auto px-6">

        {/* --- HEADER --- */}
        <div className="text-center mb-16">
          <div className="flex items-center justify-center gap-2 mb-3">
            <div className="w-0 h-0 border-l-[6px] border-l-transparent border-r-[6px] border-r-transparent border-b-[10px] border-b-orange-600"></div>
            <span className="text-slate-500 font-bold uppercase tracking-widest text-xs">
              RECENT WORK
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl font-heading font-bold text-[#00224D]">
            Check our latest projects
          </h2>
          <p className="text-slate-400 mt-4 max-w-xl mx-auto text-sm">
             We are the best construction agency in the world, delivering excellence in every blueprint we execute.
          </p>
        </div>

        {/* --- CAROUSEL AREA --- */}
        <div className="relative h-[450px] w-full max-w-7xl mx-auto">

          {/* ✅ FIX: Cleaner, properly centered White buttons with Orange icons */}
          <button
            onClick={prevSlide}
            className="hidden md:flex absolute left-4 top-1/2 -translate-y-1/2 z-30 w-12 h-12 bg-white rounded-full shadow-md items-center justify-center text-orange-600 hover:bg-orange-600 hover:text-white transition-all duration-300"
          >
            <FaChevronLeft className="mr-0.5" />
          </button>
          <button
            onClick={nextSlide}
            className="hidden md:flex absolute right-4 top-1/2 -translate-y-1/2 z-30 w-12 h-12 bg-white rounded-full shadow-md items-center justify-center text-orange-600 hover:bg-orange-600 hover:text-white transition-all duration-300"
          >
            <FaChevronRight className="ml-0.5" />
          </button>

          {/* SLIDES CONTAINER */}
          <div className="relative w-full h-full">
            {projects.map((project, index) => {
               const isActive = index === activeIndex;

               return (
                <div
                  key={project.id}
                  className={`absolute top-0 h-full transition-all duration-500 ease-in-out ${getSlideStyles(index)}`}
                >
                  {/* Inner Card */}
                  <div className="relative w-full h-full overflow-hidden bg-slate-900 group rounded-sm">

                    <img
                      src={project.image}
                      alt={project.title}
                      className={`w-full h-full object-cover transition-transform duration-700 ${isActive ? 'scale-100 group-hover:scale-105' : 'scale-100 brightness-50'}`}
                    />

                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>

                    {/* CONTENT */}
                    <div className={`absolute bottom-0 left-0 p-8 md:p-12 w-full transition-all duration-300 ${isActive ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>

                      <span className="inline-block px-3 py-1 bg-white/20 text-white text-[10px] font-bold tracking-widest uppercase mb-4 backdrop-blur-md">
                        {project.category}
                      </span>

                      <h3 className="text-3xl md:text-4xl font-bold text-white mb-2 leading-tight">
                        {project.title}
                      </h3>

                      <p className="text-gray-300 text-sm font-medium">
                        {project.date}
                      </p>
                    </div>

                    {/* ORANGE BUTTON */}
                    {isActive && (
                      <Link
                        to="/projects"
                        className="absolute bottom-0 right-0 bg-orange-600 text-white font-bold text-xs uppercase px-8 py-5 hover:bg-[#00224D] transition-colors tracking-wider flex items-center gap-2"
                      >
                        Explore Service <FaArrowRight />
                      </Link>
                    )}

                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* --- DOTS --- */}
        <div className="flex justify-center gap-2 mt-10">
          {projects.map((_, index) => (
            <button
              key={index}
              onClick={() => setActiveIndex(index)}
              className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${
                index === activeIndex ? "bg-orange-600 w-8" : "bg-slate-300 hover:bg-orange-400"
              }`}
            />
          ))}
        </div>

      </div>
    </section>
  );
};

export default HomeProjects;
