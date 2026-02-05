import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { FaMapMarkerAlt, FaCalendarAlt } from 'react-icons/fa';

const ProjectsPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // Placeholder Data - You can easily change this text later
  const projects = [
    {
      id: 1,
      title: "Commercial Office Fit-out",
      category: "Contracting",
      location: "West Bay, Doha",
      date: "2025",
      image: "https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=2069&auto=format&fit=crop",
      desc: "Complete interior fit-out including MEP works, partitions, and high-end finishing for a corporate head office."
    },
    {
      id: 2,
      title: "Industrial Steel Supply",
      category: "Trading",
      location: "Lusail City",
      date: "2024",
      image: "https://images.unsplash.com/photo-1535732759880-bbd5c7265e3f?q=80&w=2064&auto=format&fit=crop",
      desc: "Supply of structural steel and safety equipment for a major infrastructure development project."
    },
    {
      id: 3,
      title: "Residential Villa Renovation",
      category: "Contracting",
      location: "The Pearl, Qatar",
      date: "2024",
      image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=2070&auto=format&fit=crop",
      desc: "Civil modifications and modern facade renovation for a luxury private villa."
    },
    {
      id: 4,
      title: "MEP Maintenance Contract",
      category: "Maintenance",
      location: "Doha Industrial Area",
      date: "Ongoing",
      image: "https://images.unsplash.com/photo-1621905251189-08b45d6a269e?q=80&w=2069&auto=format&fit=crop",
      desc: "Annual maintenance contract for HVAC and electrical systems at a logistics warehouse facility."
    }
  ];

  return (
    <div className="pt-20">

      {/* --- PAGE HEADER --- */}
      <div className="bg-[#00224D] py-20 text-center text-white">
        <h1 className="text-4xl md:text-5xl font-heading font-bold mb-4">Our Projects</h1>
        <p className="text-lg text-gray-300 font-light tracking-wide max-w-2xl mx-auto">
          Delivering excellence across commercial, industrial, and residential sectors.
        </p>
      </div>

      {/* --- PROJECTS GRID --- */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">

          <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-10 max-w-6xl mx-auto">
            {projects.map((project) => (
              <div key={project.id} className="group bg-white rounded-lg overflow-hidden shadow-md hover:shadow-2xl transition-all duration-300 border border-gray-100">

                {/* Image Wrapper */}
                <div className="relative h-64 overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                  />
                  {/* Category Tag (Top Right) */}
                  <div className="absolute top-4 right-4 bg-orange-600 text-white text-xs font-bold px-3 py-1 rounded uppercase tracking-wider">
                    {project.category}
                  </div>
                </div>

                {/* Content */}
                <div className="p-8">
                  <div className="flex items-center text-sm text-gray-500 mb-3 space-x-4">
                    <span className="flex items-center gap-1">
                      <FaMapMarkerAlt className="text-orange-500" /> {project.location}
                    </span>
                    <span className="flex items-center gap-1">
                      <FaCalendarAlt className="text-orange-500" /> {project.date}
                    </span>
                  </div>

                  <h3 className="text-2xl font-bold text-[#00224D] mb-3 group-hover:text-orange-600 transition-colors">
                    {project.title}
                  </h3>

                  <p className="text-gray-600 leading-relaxed">
                    {project.desc}
                  </p>
                </div>

              </div>
            ))}
          </div>

        </div>
      </section>

      {/* --- CTA SECTION --- */}
      <section className="bg-[#00224D] text-white py-16">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold mb-6">Have a Project in Mind?</h2>
          <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
            We are ready to support your next construction or trading requirement with precision and quality.
          </p>
          <Link
            to="/contact"
            className="inline-block px-8 py-3 bg-white text-[#00224D] font-bold rounded hover:bg-orange-500 hover:text-white transition-all uppercase tracking-wide"
          >
            Get in Touch
          </Link>
        </div>
      </section>

    </div>
  );
};

export default ProjectsPage;
