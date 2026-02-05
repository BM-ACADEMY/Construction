import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { FaTools, FaTruckLoading, FaCheckCircle } from 'react-icons/fa';

const ServicesPage = () => {
  // Scroll to top on load
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="pt-20">

      {/* --- PAGE HEADER --- */}
      <div className="bg-[#00224D] py-20 text-center text-white">
        <h1 className="text-4xl md:text-5xl font-heading font-bold mb-4">Our Services</h1>
        <p className="text-lg text-gray-300 font-light tracking-wide max-w-2xl mx-auto">
          Comprehensive solutions for Construction and Industrial Supply in Qatar.
        </p>
      </div>

      {/* --- SECTION 1: TRADING SERVICES --- */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row items-center gap-12">

            {/* Text Content */}
            <div className="w-full md:w-1/2">
              <div className="flex items-center gap-3 mb-4">
                <FaTruckLoading className="text-4xl text-orange-500" />
                <span className="text-orange-500 font-bold uppercase tracking-widest text-sm">
                  Supply & Sourcing
                </span>
              </div>
              <h2 className="text-3xl md:text-4xl font-heading font-bold text-[#00224D] mb-6">
                Trading Division
              </h2>
              <p className="text-gray-600 text-lg leading-relaxed mb-6">
                We specialize in sourcing high-quality materials from reliable international and local manufacturers. Our trading division ensures that your project receives the exact specifications required, on time and within budget.
              </p>

              <h3 className="text-xl font-bold text-[#00224D] mb-4">Key Supply Categories:</h3>
              <ul className="space-y-3">
                {[
                  "Construction Materials (Cement, Steel, Aggregates)",
                  "Industrial Safety Gear (PPE)",
                  "Electrical & Mechanical Fixtures",
                  "Specialized Tools & Equipment"
                ].map((item, index) => (
                  <li key={index} className="flex items-center text-gray-700">
                    <FaCheckCircle className="text-orange-500 mr-3 text-sm" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            {/* Image Side */}
            <div className="w-full md:w-1/2">
              <img
                src="https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?q=80&w=2070&auto=format&fit=crop"
                alt="Trading and Shipping"
                className="rounded-lg shadow-2xl border-4 border-gray-50"
              />
            </div>

          </div>
        </div>
      </section>

      {/* --- SECTION 2: CONTRACTING SERVICES --- */}
      <section className="py-20 bg-slate-50">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row-reverse items-center gap-12">

            {/* Text Content */}
            <div className="w-full md:w-1/2">
              <div className="flex items-center gap-3 mb-4">
                <FaTools className="text-4xl text-orange-500" />
                <span className="text-orange-500 font-bold uppercase tracking-widest text-sm">
                  Execution & Build
                </span>
              </div>
              <h2 className="text-3xl md:text-4xl font-heading font-bold text-[#00224D] mb-6">
                Contracting Division
              </h2>
              <p className="text-gray-600 text-lg leading-relaxed mb-6">
                Our contracting team focuses on precision and safety. Whether it is a civil modification or a complete MEP installation, we deploy skilled manpower and technical supervisors to ensure compliance with Qatar standards.
              </p>

              <h3 className="text-xl font-bold text-[#00224D] mb-4">Our Capabilities:</h3>
              <ul className="space-y-3">
                {[
                  "Civil Works & Structural Modifications",
                  "MEP Installations (Mechanical, Electrical, Plumbing)",
                  "Interior Fit-out & Finishing",
                  "Facility Maintenance Contracts"
                ].map((item, index) => (
                  <li key={index} className="flex items-center text-gray-700">
                    <FaCheckCircle className="text-orange-500 mr-3 text-sm" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            {/* Image Side */}
            <div className="w-full md:w-1/2">
              <img
                src="https://images.unsplash.com/photo-1541888946425-d81bb19240f5?q=80&w=2070&auto=format&fit=crop"
                alt="Construction Site"
                className="rounded-lg shadow-2xl border-4 border-white"
              />
            </div>

          </div>
        </div>
      </section>

      {/* --- CALL TO ACTION --- */}
      <section className="py-16 bg-[#00224D] text-center">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-white mb-6">Need a Quote for Materials or Manpower?</h2>
          <p className="text-gray-300 mb-8 max-w-2xl mx-auto text-lg">
            Contact our team today to discuss your project requirements. We respond quickly with competitive pricing.
          </p>
          <Link
            to="/contact"
            className="inline-block px-10 py-4 bg-orange-600 text-white font-bold rounded shadow-lg hover:bg-orange-700 transition-colors uppercase tracking-wide"
          >
            Contact Us Now
          </Link>
        </div>
      </section>

    </div>
  );
};

export default ServicesPage;
