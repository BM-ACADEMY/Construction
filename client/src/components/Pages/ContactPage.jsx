import React, { useEffect } from 'react';
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt, FaClock } from 'react-icons/fa';

const ContactPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="pt-20">

      {/* --- PAGE HEADER --- */}
      <div className="bg-[#00224D] py-20 text-center text-white">
        <h1 className="text-4xl md:text-5xl font-heading font-bold mb-4">Contact Us</h1>
        <p className="text-lg text-gray-300 font-light tracking-wide max-w-2xl mx-auto">
          Get in touch with our team for inquiries, quotes, or project consultations.
        </p>
      </div>

      <div className="container mx-auto px-6 py-20">
        <div className="flex flex-col lg:flex-row gap-12">

          {/* --- CONTACT INFO (Left Side) --- */}
          <div className="w-full lg:w-1/3 space-y-8">
            <div>
              <span className="text-orange-500 font-bold uppercase tracking-widest text-sm block mb-2">
                Get In Touch
              </span>
              <h2 className="text-3xl font-heading font-bold text-[#00224D] mb-6">
                Contact Information
              </h2>
              <p className="text-gray-600 leading-relaxed mb-8">
                Whether you need materials supplied or a contracting team for your site, we are ready to assist.
              </p>
            </div>

            {/* Info Cards */}
            <div className="space-y-6">

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-slate-50 rounded-full flex items-center justify-center text-orange-500 text-xl flex-shrink-0">
                  <FaPhoneAlt />
                </div>
                <div>
                  <h4 className="text-[#00224D] font-bold text-lg">Phone</h4>
                  <p className="text-gray-600">+974 7732 9077</p>
                  <p className="text-gray-500 text-sm">Mon-Sat, 8am - 6pm</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-slate-50 rounded-full flex items-center justify-center text-orange-500 text-xl flex-shrink-0">
                  <FaEnvelope />
                </div>
                <div>
                  <h4 className="text-[#00224D] font-bold text-lg">Email</h4>
                  <p className="text-gray-600">info@multiverseintl.com</p>
                  <p className="text-gray-500 text-sm">Online support 24/7</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-slate-50 rounded-full flex items-center justify-center text-orange-500 text-xl flex-shrink-0">
                  <FaMapMarkerAlt />
                </div>
                <div>
                  <h4 className="text-[#00224D] font-bold text-lg">Office Location</h4>
                  <p className="text-gray-600">Doha, Qatar</p>
                  <p className="text-gray-500 text-sm">PO Box 12345</p>
                </div>
              </div>

            </div>
          </div>

          {/* --- CONTACT FORM (Right Side) --- */}
          <div className="w-full lg:w-2/3 bg-white p-8 md:p-10 rounded-lg shadow-xl border-t-4 border-orange-500">
            <h3 className="text-2xl font-bold text-[#00224D] mb-6">Send a Message</h3>

            <form className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-bold text-gray-700 mb-2">Your Name</label>
                  <input type="text" className="w-full px-4 py-3 border border-gray-300 rounded focus:outline-none focus:border-orange-500 focus:ring-1 focus:ring-orange-500 transition-colors" placeholder="Full Name" />
                </div>
                <div>
                  <label className="block text-sm font-bold text-gray-700 mb-2">Phone Number</label>
                  <input type="text" className="w-full px-4 py-3 border border-gray-300 rounded focus:outline-none focus:border-orange-500 focus:ring-1 focus:ring-orange-500 transition-colors" placeholder="+974..." />
                </div>
              </div>

              <div>
                <label className="block text-sm font-bold text-gray-700 mb-2">Email Address</label>
                <input type="email" className="w-full px-4 py-3 border border-gray-300 rounded focus:outline-none focus:border-orange-500 focus:ring-1 focus:ring-orange-500 transition-colors" placeholder="email@example.com" />
              </div>

              <div>
                <label className="block text-sm font-bold text-gray-700 mb-2">Subject</label>
                <select className="w-full px-4 py-3 border border-gray-300 rounded focus:outline-none focus:border-orange-500 focus:ring-1 focus:ring-orange-500 transition-colors bg-white">
                  <option>Request for Quote (Trading)</option>
                  <option>Request for Quote (Contracting)</option>
                  <option>General Inquiry</option>
                  <option>Career Opportunity</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-bold text-gray-700 mb-2">Message</label>
                <textarea rows="4" className="w-full px-4 py-3 border border-gray-300 rounded focus:outline-none focus:border-orange-500 focus:ring-1 focus:ring-orange-500 transition-colors" placeholder="Tell us about your project requirements..."></textarea>
              </div>

              <button type="submit" className="w-full bg-[#00224D] text-white font-bold py-4 rounded hover:bg-orange-600 transition-colors uppercase tracking-wide">
                Send Message
              </button>
            </form>
          </div>

        </div>
      </div>

      {/* --- OPTIONAL: MAP SECTION --- */}
      <div className="w-full h-96 bg-gray-200">
         {/* You can embed a Google Map Iframe here later */}
         <div className="w-full h-full flex items-center justify-center text-gray-500 bg-slate-100">
            <span className="flex items-center gap-2"><FaMapMarkerAlt /> Map Embedding Area</span>
         </div>
      </div>

    </div>
  );
};

export default ContactPage;
