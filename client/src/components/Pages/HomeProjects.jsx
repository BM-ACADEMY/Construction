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
      // ✅ Active Slide: 92% width on mobile (single card view), 60% on desktop
      return "left-1/2 -translate-x-1/2 w-[92%] md:w-[60%] z-20 opacity-100 shadow-2xl";
    }
    else if (index === (activeIndex - 1 + projects.length) % projects.length) {
      // ✅ Previous Slide: Hidden on mobile, visible on desktop
      return "hidden md:block left-0 translate-x-0 w-[18%] z-10 opacity-100";
    }
    else if (index === (activeIndex + 1) % projects.length) {
      // ✅ Next Slide: Hidden on mobile, visible on desktop
      return "hidden md:block right-0 translate-x-0 w-[18%] z-10 opacity-100";
    }
    else {
      return "opacity-0 z-0 pointer-events-none";
    }
  };

  return (
    // ✅ Reduced padding: py-12 on mobile
    <section className="py-12 md:py-24 bg-white overflow-hidden">
      <div className="container mx-auto px-6">

        {/* --- HEADER --- */}
        <div className="text-center mb-10 md:mb-16">
          <div className="flex items-center justify-center gap-2 mb-3">
            <div className="w-0 h-0 border-l-[6px] border-l-transparent border-r-[6px] border-r-transparent border-b-[10px] border-b-orange-600"></div>
            <span className="text-slate-500 font-bold uppercase tracking-widest text-xs">
              RECENT WORK
            </span>
          </div>
          {/* ✅ Responsive Text Sizes */}
          <h2 className="text-3xl md:text-5xl font-heading font-bold text-[#00224D]">
            Check our latest projects
          </h2>
          <p className="text-slate-400 mt-4 max-w-xl mx-auto text-sm md:text-base px-4">
             We are the best construction agency in the world, delivering excellence in every blueprint we execute.
          </p>
        </div>

        {/* --- CAROUSEL AREA --- */}
        {/* ✅ Adjusted Height: 400px on mobile, 500px on desktop */}
        <div className="relative h-[400px] md:h-[500px] w-full max-w-7xl mx-auto">

          {/* ARROWS - Now Visible on Mobile (Smaller size) */}
          <button
            onClick={prevSlide}
            className="absolute left-0 md:left-4 top-1/2 -translate-y-1/2 z-30 w-10 h-10 md:w-12 md:h-12 bg-orange-600 rounded-full shadow-lg flex items-center justify-center text-white hover:bg-[#00224D] transition-all duration-300"
          >
            <FaChevronLeft className="mr-0.5 text-sm md:text-base" />
          </button>

          <button
            onClick={nextSlide}
            className="absolute right-0 md:right-4 top-1/2 -translate-y-1/2 z-30 w-10 h-10 md:w-12 md:h-12 bg-orange-600 rounded-full shadow-lg flex items-center justify-center text-white hover:bg-[#00224D] transition-all duration-300"
          >
            <FaChevronRight className="ml-0.5 text-sm md:text-base" />
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
                  <div className="relative w-full h-full overflow-hidden bg-slate-900 group rounded-md md:rounded-sm shadow-xl">

                    <img
                      src={project.image}
                      alt={project.title}
                      className={`w-full h-full object-cover transition-transform duration-700 ${isActive ? 'scale-100 group-hover:scale-105' : 'scale-100 brightness-50'}`}
                    />

                    {/* Gradient Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent"></div>

                    {/* CONTENT */}
                    {/* ✅ Responsive Padding & Text Sizes */}
                    <div className={`absolute bottom-0 left-0 p-6 md:p-12 w-full transition-all duration-300 ${isActive ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>

                      <span className="inline-block px-3 py-1 bg-white/20 text-white text-[9px] md:text-[10px] font-bold tracking-widest uppercase mb-2 md:mb-4 backdrop-blur-md rounded">
                        {project.category}
                      </span>

                      <h3 className="text-2xl md:text-4xl font-bold text-white mb-2 leading-tight">
                        {project.title}
                      </h3>

                      <p className="text-gray-300 text-xs md:text-sm font-medium mb-12 md:mb-0">
                        {project.date}
                      </p>
                    </div>

                    {/* ORANGE BUTTON */}
                    {isActive && (
                      <Link
                        to="/projects"
                        // ✅ Responsive Button Size
                        className="absolute bottom-0 right-0 bg-orange-600 text-white font-bold text-[10px] md:text-xs uppercase px-6 py-3 md:px-8 md:py-5 hover:bg-[#00224D] transition-colors tracking-wider flex items-center gap-2"
                      >
                        Explore <span className="hidden md:inline">Project</span> <FaArrowRight />
                      </Link>
                    )}

                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* --- DOTS --- */}
        <div className="flex justify-center gap-2 mt-8 md:mt-10">
          {projects.map((_, index) => (
            <button
              key={index}
              onClick={() => setActiveIndex(index)}
              className={`h-2.5 rounded-full transition-all duration-300 ${
                index === activeIndex ? "bg-orange-600 w-8" : "bg-slate-300 hover:bg-orange-400 w-2.5"
              }`}
            />
          ))}
        </div>

      </div>
    </section>
  );
};

export default HomeProjects;
