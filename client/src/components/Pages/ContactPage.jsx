import React, { useEffect } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt, FaPaperPlane, FaWhatsapp } from 'react-icons/fa';

// --- COMPONENT: Background Pattern ---
const BlueprintGrid = () => (
  <div className="absolute inset-0 pointer-events-none overflow-hidden">
    <div className="absolute inset-0 opacity-[0.03]"
      style={{
        backgroundImage: `linear-gradient(#00224D 1px, transparent 1px), linear-gradient(90deg, #00224D 1px, transparent 1px)`,
        backgroundSize: '40px 40px'
      }}
    ></div>
  </div>
);

const ContactPage = () => {
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
          SECTION 1: HERO BANNER (Updated Image)
      ========================== */}
      <div className="relative w-full h-[250px] md:h-[350px] overflow-hidden flex items-center justify-center">
        {/* New Banner: Modern City Skyline / International Business */}
        <div
          className="absolute inset-0 bg-fixed bg-cover bg-center z-0"
          style={{ backgroundImage: "url('https://images.unsplash.com/photo-1477959858617-67f85cf4f1df?q=80&w=2144&auto=format&fit=crop')" }}
        >
          {/* Black Overlay */}
          <div className="absolute inset-0 bg-black/60 backdrop-blur-[1px]"></div>
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
              Contact Us
            </h1>
            <div className="flex items-center justify-center gap-3">
               <div className="h-[2px] w-10 bg-orange-500"></div>
               <span className="text-orange-500 font-bold tracking-[0.2em] uppercase text-xs md:text-sm">Get In Touch</span>
               <div className="h-[2px] w-10 bg-orange-500"></div>
            </div>
          </motion.div>
        </motion.div>
      </div>

      {/* ==========================
          SECTION 2: CONTACT CARDS
      ========================== */}
      <section className="py-20 px-6 relative z-10 -mt-10">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-3 gap-6">

            {/* Phone Card */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="bg-white p-8 rounded-xl shadow-xl border-b-4 border-orange-500 text-center hover:-translate-y-2 transition-transform duration-300"
            >
              <div className="w-14 h-14 bg-orange-50 rounded-full flex items-center justify-center text-2xl text-orange-600 mx-auto mb-4">
                <FaPhoneAlt />
              </div>
              <h3 className="text-xl font-bold text-[#00224D] mb-2">Call Us</h3>
              <p className="text-slate-500 mb-4">Mon-Sat from 8am to 6pm</p>
              <a href="tel:+97477329077" className="text-lg font-bold text-[#00224D] hover:text-orange-600 block">
                +974 7732 9077
              </a>
            </motion.div>

            {/* Email Card */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="bg-white p-8 rounded-xl shadow-xl border-b-4 border-orange-500 text-center hover:-translate-y-2 transition-transform duration-300"
            >
              <div className="w-14 h-14 bg-orange-50 rounded-full flex items-center justify-center text-2xl text-orange-600 mx-auto mb-4">
                <FaEnvelope />
              </div>
              <h3 className="text-xl font-bold text-[#00224D] mb-2">Email Us</h3>
              <p className="text-slate-500 mb-4">We reply within 24 hours</p>
              <a href="mailto:info@multiverseintl.com" className="text-lg font-bold text-[#00224D] hover:text-orange-600 block">
                info@multiverseintl.com
              </a>
            </motion.div>

            {/* Location Card */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="bg-white p-8 rounded-xl shadow-xl border-b-4 border-orange-500 text-center hover:-translate-y-2 transition-transform duration-300"
            >
              <div className="w-14 h-14 bg-orange-50 rounded-full flex items-center justify-center text-2xl text-orange-600 mx-auto mb-4">
                <FaMapMarkerAlt />
              </div>
              <h3 className="text-xl font-bold text-[#00224D] mb-2">Visit Us</h3>
              <p className="text-slate-500 mb-4">Main Office</p>
              <p className="text-lg font-bold text-[#00224D]">
                Doha, Qatar
              </p>
            </motion.div>

          </div>
        </div>
      </section>

      {/* ==========================
          SECTION 3: FORM & MAP
      ========================== */}
      <section className="pb-24 px-6 relative">
        <BlueprintGrid />

        <div className="container mx-auto relative z-10">
          <div className="bg-white rounded-2xl shadow-2xl overflow-hidden flex flex-col lg:flex-row">

            {/* LEFT: Contact Form */}
            <div className="lg:w-1/2 p-8 md:p-12">
              <h2 className="text-3xl font-bold text-[#00224D] mb-2">Send a Message</h2>
              <p className="text-slate-500 mb-8">
                Have a project in mind? Fill out the form below and we'll get back to you shortly.
              </p>

              <form className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-xs font-bold text-slate-400 uppercase tracking-wider mb-2">Name</label>
                    <input type="text" className="w-full bg-slate-50 border border-slate-200 rounded-lg px-4 py-3 focus:outline-none focus:border-orange-500 focus:ring-1 focus:ring-orange-500 transition-all" placeholder="John Doe" />
                  </div>
                  <div>
                    <label className="block text-xs font-bold text-slate-400 uppercase tracking-wider mb-2">Phone</label>
                    <input type="tel" className="w-full bg-slate-50 border border-slate-200 rounded-lg px-4 py-3 focus:outline-none focus:border-orange-500 focus:ring-1 focus:ring-orange-500 transition-all" placeholder="+974 ..." />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-400 uppercase tracking-wider mb-2">Email</label>
                  <input type="email" className="w-full bg-slate-50 border border-slate-200 rounded-lg px-4 py-3 focus:outline-none focus:border-orange-500 focus:ring-1 focus:ring-orange-500 transition-all" placeholder="john@company.com" />
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-400 uppercase tracking-wider mb-2">Message</label>
                  <textarea rows="4" className="w-full bg-slate-50 border border-slate-200 rounded-lg px-4 py-3 focus:outline-none focus:border-orange-500 focus:ring-1 focus:ring-orange-500 transition-all" placeholder="Tell us about your project..."></textarea>
                </div>

                <button className="w-full bg-[#00224D] text-white font-bold py-4 rounded-lg shadow-lg hover:bg-orange-600 transition-colors flex items-center justify-center gap-2 group">
                  <span className="group-hover:translate-x-1 transition-transform">Send Message</span>
                  <FaPaperPlane className="text-sm group-hover:translate-x-1 transition-transform" />
                </button>
              </form>
            </div>

            {/* RIGHT: Map & Info */}
            <div className="lg:w-1/2 bg-slate-100 relative min-h-[400px]">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d230888.7770732864!2d51.36531398188289!3d25.284097401938965!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e45c534cdc43bc3%3A0x23d08538f8dc55f9!2sDoha%2C%20Qatar!5e0!3m2!1sen!2sin!4v1707123456789!5m2!1sen!2sin"
                className="absolute inset-0 w-full h-full border-0 grayscale hover:grayscale-0 transition-all duration-500"
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>

              {/* WhatsApp Floating Button */}
              <a
                href="https://wa.me/97477329077"
                target="_blank"
                rel="noreferrer"
                className="absolute bottom-8 right-8 bg-green-500 text-white p-4 rounded-full shadow-2xl hover:bg-green-600 hover:scale-110 transition-all z-10 flex items-center gap-2"
              >
                <FaWhatsapp className="text-2xl" />
                <span className="font-bold hidden md:inline">Chat on WhatsApp</span>
              </a>
            </div>

          </div>
        </div>
      </section>

    </div>
  );
};

export default ContactPage;
