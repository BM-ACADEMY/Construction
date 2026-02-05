import React, { useEffect } from 'react';

const AboutPage = () => {
  // Ensure the page scrolls to top when opened
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="pt-20"> {/* Padding top to prevent hiding behind Navbar */}

      {/* --- PAGE HEADER (Updated to Brand Navy) --- */}
      <div className="bg-[#00224D] py-20 text-center text-white relative overflow-hidden">
        {/* Optional: Subtle background pattern or overlay can go here */}
        <div className="relative z-10">
            <h1 className="text-4xl md:text-5xl font-heading font-bold mb-4">About Us</h1>
            <p className="text-lg text-gray-300 font-light tracking-wide">Building trust through quality and safety.</p>
        </div>
      </div>

      <div className="container mx-auto px-6 py-16">

        {/* --- FULL COMPANY OVERVIEW --- */}
        <div className="max-w-4xl mx-auto mb-20 text-center md:text-left">
          {/* Updated Heading to Brand Navy */}
          <h2 className="text-2xl font-bold text-[#00224D] mb-6 uppercase tracking-widest">
            Company Overview
          </h2>
          <div className="space-y-6 text-gray-600 leading-relaxed text-lg">
            <p>
              Multiverse International Trading & Contracting is a Qatar-based company established to deliver reliable trading and contracting solutions with a strong focus on quality, safety, and long-term client relationships.
            </p>
            <p>
              We are built on the belief that successful projects are not driven only by materials and manpower, but by planning, accountability, and professional execution. Our team brings together technical knowledge, site experience, and an understanding of local regulations to support clients across commercial, industrial, and infrastructure-related works.
            </p>
            <p>
              As a growing organization, we combine fresh operational energy with industry-proven practices, enabling us to adapt quickly to client requirements while maintaining high standards of workmanship and compliance.
            </p>
          </div>
        </div>

        {/* --- VISION & MISSION GRID --- */}
        <div className="grid md:grid-cols-2 gap-10">

          {/* VISION CARD - Dark Navy Theme for Impact */}
          <div className="bg-[#00224D] p-10 rounded-lg shadow-xl text-white transform hover:-translate-y-1 transition-all duration-300">
            <h3 className="text-3xl font-heading font-bold mb-6 border-b border-orange-500/30 pb-4 inline-block">
                Our Vision
            </h3>
            <p className="text-gray-200 text-lg leading-relaxed">
              To become a trusted and recognized contracting and trading partner in Qatar, known for dependable delivery, transparent communication, and consistent quality across every assignment we undertake.
            </p>
          </div>

          {/* MISSION CARD - Light Theme with Orange Accents */}
          <div className="bg-white p-10 rounded-lg border border-gray-100 shadow-lg hover:shadow-xl transition-all duration-300">
            <h3 className="text-3xl font-heading font-bold text-[#00224D] mb-6 border-b border-gray-100 pb-4 inline-block">
                Our Mission
            </h3>
            <ul className="space-y-4">
              {[
                "To deliver cost-effective and technically sound solutions",
                "To follow Qatar regulations, standards, and HSE requirements without compromise",
                "To build long-term relationships based on trust and performance",
                "To continuously improve our systems, skills, and service quality"
              ].map((item, index) => (
                <li key={index} className="flex items-start gap-3">
                  {/* Orange Bullet Point */}
                  <span className="mt-2 w-2 h-2 bg-orange-500 rounded-full flex-shrink-0"></span>
                  <span className="text-gray-600 text-lg">{item}</span>
                </li>
              ))}
            </ul>
          </div>

        </div>
      </div>
    </div>
  );
};

export default AboutPage;
