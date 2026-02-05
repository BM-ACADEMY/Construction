import React, { useEffect } from 'react';
import { FaShieldAlt, FaHardHat, FaLeaf, FaCheckDouble } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const QualityHSE = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="pt-20">

      {/* --- PAGE HEADER --- */}
      <div className="bg-[#00224D] py-20 text-center text-white">
        <h1 className="text-4xl md:text-5xl font-heading font-bold mb-4">Quality & HSE</h1>
        <p className="text-lg text-gray-300 font-light tracking-wide max-w-2xl mx-auto">
          Our commitment to excellence, safety, and environmental responsibility.
        </p>
      </div>

      {/* --- SECTION 1: QUALITY POLICY --- */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row items-center gap-12">

            <div className="w-full md:w-1/2">
              <div className="flex items-center gap-3 mb-4">
                <FaCheckDouble className="text-4xl text-orange-500" />
                <span className="text-orange-500 font-bold uppercase tracking-widest text-sm">
                  Quality Assurance
                </span>
              </div>
              <h2 className="text-3xl md:text-4xl font-heading font-bold text-[#00224D] mb-6">
                Delivering Excellence
              </h2>
              <p className="text-gray-600 text-lg leading-relaxed mb-6">
                At Multiverse International, quality is not just a promise; it is our operational standard. We implement rigorous quality control measures at every stage of our trading and contracting processes to ensure client satisfaction.
              </p>

              <ul className="space-y-4">
                {[
                  "Strict material inspection and verification.",
                  "Compliance with Qatar Construction Standards (QCS).",
                  "Continuous training for our technical workforce.",
                  "Zero-defect policy in project handover."
                ].map((item, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <span className="mt-1.5 w-2 h-2 bg-[#00224D] rounded-full flex-shrink-0"></span>
                    <span className="text-gray-700">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="w-full md:w-1/2 bg-gray-100 p-8 rounded-lg border-l-4 border-orange-500">
              <h3 className="text-xl font-bold text-[#00224D] mb-4">Our Quality Pledge</h3>
              <p className="italic text-gray-600 leading-relaxed">
                "We pledge to deliver products and services that meet or exceed the expectations of our clients. We achieve this through the active participation of our employees and the continuous improvement of our management systems."
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* --- SECTION 2: HSE (Health, Safety, Environment) --- */}
      <section className="py-20 bg-slate-50">
        <div className="container mx-auto px-6">

          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-[#00224D] mb-4">
              Health, Safety & Environment
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              The safety of our people and the protection of our environment are our top priorities.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Card 1: Safety */}
            <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-xl transition-all border-t-4 border-orange-500">
              <FaShieldAlt className="text-5xl text-[#00224D] mb-6" />
              <h3 className="text-2xl font-bold text-[#00224D] mb-4">Safety First</h3>
              <p className="text-gray-600 mb-4">
                We maintain a zero-accident vision through regular risk assessments, safety briefings, and strict enforcement of PPE protocols on all sites.
              </p>
            </div>

            {/* Card 2: Health */}
            <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-xl transition-all border-t-4 border-orange-500">
              <FaHardHat className="text-5xl text-[#00224D] mb-6" />
              <h3 className="text-2xl font-bold text-[#00224D] mb-4">Occupational Health</h3>
              <p className="text-gray-600 mb-4">
                We ensure a healthy working environment for our staff, adhering to local labor laws and providing welfare facilities that promote well-being.
              </p>
            </div>

            {/* Card 3: Environment */}
            <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-xl transition-all border-t-4 border-orange-500">
              <FaLeaf className="text-5xl text-[#00224D] mb-6" />
              <h3 className="text-2xl font-bold text-[#00224D] mb-4">Environment</h3>
              <p className="text-gray-600 mb-4">
                We are committed to sustainable practices, minimizing waste, and managing resources efficiently to reduce our environmental footprint.
              </p>
            </div>
          </div>

        </div>
      </section>

      {/* --- CTA --- */}
      <section className="bg-[#00224D] py-12 text-center">
        <div className="container mx-auto px-6">
          <h2 className="text-2xl text-white font-bold mb-6">committed to World-Class Safety Standards</h2>
          <Link
            to="/contact"
            className="inline-block px-8 py-3 bg-orange-600 text-white font-bold rounded hover:bg-orange-700 transition-colors uppercase tracking-wide"
          >
            Contact Us
          </Link>
        </div>
      </section>

    </div>
  );
};

export default QualityHSE;
