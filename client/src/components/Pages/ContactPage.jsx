import React, { useEffect, useState } from 'react';
import { motion, useScroll, useTransform, AnimatePresence } from 'framer-motion';
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt, FaPaperPlane, FaWhatsapp, FaCheckCircle, FaExclamationCircle } from 'react-icons/fa';
import axios from 'axios';
import { Helmet } from "react-helmet";


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

// --- ANIMATION VARIANTS ---
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2, // Delays each child by 0.2s
      delayChildren: 0.1
    }
  }
};

const cardVariants = {
  hidden: { y: 50, opacity: 0 },
  visible: { 
    y: 0, 
    opacity: 1,
    transition: { type: "spring", stiffness: 100, damping: 12 }
  }
};

const fadeInUp = {
  hidden: { opacity: 0, y: 60 },
  visible: { 
    opacity: 1, 
    y: 0, 
    transition: { duration: 0.6, ease: "easeOut" } 
  }
};

const ContactPage = () => {
  const API_URL = import.meta.env.VITE_API_URL;

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    message: ''
  });

  const [status, setStatus] = useState({ loading: false, success: false, error: '' });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus({ loading: true, success: false, error: '' });

    try {
      const response = await axios.post(`${API_URL}/construction/multiverse-construction-email`, formData);
      if (response.data.success) {
        setStatus({ loading: false, success: true, error: '' });
        setFormData({ name: '', phone: '', email: '', message: '' });
        setTimeout(() => setStatus(prev => ({ ...prev, success: false })), 5000);
      }
    } catch (err) {
      console.error(err);
      setStatus({
        loading: false,
        success: false,
        error: err.response?.data?.message || "Failed to send message."
      });
    }
  };

  // Parallax Setup
  const { scrollY } = useScroll();
  const yHero = useTransform(scrollY, [0, 500], [0, 150]);
  const opacityHero = useTransform(scrollY, [0, 300], [1, 0]);

  return (
    <div className="min-h-screen bg-slate-50 font-sans text-slate-800 selection:bg-orange-100 relative">
      <Helmet>
  <title>Contact Us | Multiverse International Trading & Contracting Qatar</title>
  <meta
    name="description"
    content="Contact Multiverse International Trading & Contracting for trading and contracting services in Qatar. Get project consultation and support from our experts."
  />
  <link rel="canonical" href="https://multiverseint.com/contact" />
</Helmet>


      {/* HERO BANNER */}
      <div className="relative w-full h-[250px] md:h-[350px] overflow-hidden flex items-center justify-center">
        <div className="absolute inset-0 bg-fixed bg-cover bg-center z-0" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1477959858617-67f85cf4f1df?q=80&w=2144&auto=format&fit=crop')" }}>
          <div className="absolute inset-0 bg-black/60 backdrop-blur-[1px]"></div>
        </div>
        <motion.div style={{ y: yHero, opacity: opacityHero }} className="relative z-10 text-center px-4">
          <motion.div initial={{ scale: 0.8, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} transition={{ duration: 1 }}>
            <h1 className="text-4xl md:text-6xl font-heading font-bold text-white tracking-tighter mb-3 drop-shadow-2xl">Contact Us</h1>
            <div className="flex items-center justify-center gap-3">
               <div className="h-[2px] w-10 bg-orange-500"></div>
               <span className="text-orange-500 font-bold tracking-[0.2em] uppercase text-xs md:text-sm">Multiverse International</span>
               <div className="h-[2px] w-10 bg-orange-500"></div>
            </div>
          </motion.div>
        </motion.div>
      </div>

      {/* CONTACT INFO CARDS (Staggered Animation) */}
      <section className="py-20 px-6 relative z-10 -mt-10">
        <div className="container mx-auto">
          <motion.div 
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="grid md:grid-cols-3 gap-6"
          >

            {/* Phone */}
<motion.div variants={cardVariants} 
  className="bg-white p-8 rounded-xl shadow-lg border border-slate-100 hover:border-orange-500 transition-all duration-300 hover:shadow-2xl group flex flex-col items-start">
  <div className="w-12 h-12 bg-orange-50 text-orange-600 rounded-full flex items-center justify-center text-xl mb-6 group-hover:bg-orange-500 group-hover:text-white transition-colors">
    <FaPhoneAlt />
  </div>
  <h3 className="text-lg font-bold text-[#00224D] uppercase tracking-wider mb-2">Call Us</h3>
  {/* UPDATED STYLE BELOW */}
  <p className="text-slate-400 text-xs font-bold uppercase tracking-[0.15em] mb-4">Mon — Fri / 8am — 6pm</p>
  <a href="tel:+97477329077" className="text-2xl font-bold text-slate-800 group-hover:text-orange-600 transition-colors">+974 7732 9077</a>
</motion.div>

{/* Email */}
<motion.div variants={cardVariants} 
  className="bg-white p-8 rounded-xl shadow-lg border border-slate-100 hover:border-orange-500 transition-all duration-300 hover:shadow-2xl group flex flex-col items-start">
  <div className="w-12 h-12 bg-orange-50 text-orange-600 rounded-full flex items-center justify-center text-xl mb-6 group-hover:bg-orange-500 group-hover:text-white transition-colors">
    <FaEnvelope />
  </div>
  <h3 className="text-lg font-bold text-[#00224D] uppercase tracking-wider mb-2">Email Us</h3>
  {/* UPDATED STYLE BELOW */}
  <p className="text-slate-400 text-xs font-bold uppercase tracking-[0.15em] mb-4">Online Support 24/7</p>
  <a href="mailto:info@multiverseint.com" className="text-lg font-bold text-slate-800 group-hover:text-orange-600 transition-colors break-all">info@multiverseintl.com</a>
</motion.div>

{/* Visit */}
<motion.div variants={cardVariants} 
  className="bg-white p-8 rounded-xl shadow-lg border border-slate-100 hover:border-orange-500 transition-all duration-300 hover:shadow-2xl group flex flex-col items-start">
  <div className="w-12 h-12 bg-orange-50 text-orange-600 rounded-full flex items-center justify-center text-xl mb-6 group-hover:bg-orange-500 group-hover:text-white transition-colors">
    <FaMapMarkerAlt />
  </div>
  <h3 className="text-lg font-bold text-[#00224D] uppercase tracking-wider mb-2">Visit Us</h3>
  {/* UPDATED STYLE BELOW */}
  <p className="text-slate-400 text-xs font-bold uppercase tracking-[0.15em] mb-4">Main Office HQ</p>
  <p className="text-xl font-bold text-slate-800 group-hover:text-orange-600 transition-colors">Doha, Qatar</p>
</motion.div>

          </motion.div>
        </div>
      </section>

      {/* FORM & MAP SECTION */}
      <section className="pb-24 px-6 relative">
        <BlueprintGrid />
        <div className="container mx-auto relative z-10">
          
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeInUp}
            className="bg-white rounded-2xl shadow-2xl overflow-hidden flex flex-col lg:flex-row"
          >

            {/* CONTACT FORM */}
            <div className="lg:w-1/2 p-8 md:p-12">
              <h2 className="text-3xl font-bold text-[#00224D] mb-2">Send a Message</h2>
              <p className="text-slate-500 mb-8">Ready to start your project? Fill out the details below.</p>

              <form onSubmit={handleSubmit} className="space-y-6">

                {/* Name */}
                <div>
                  <label className="block text-xs font-bold text-slate-400 uppercase tracking-wider mb-2">Name *</label>
                  <motion.input 
                    whileFocus={{ scale: 1.01, borderColor: "#F97316" }}
                    type="text" name="name" required value={formData.name} onChange={handleChange} 
                    className="w-full bg-slate-50 border border-slate-200 rounded-lg px-4 py-3 focus:outline-none focus:ring-1 focus:ring-orange-500 transition-all" 
                    placeholder="John Doe" 
                  />
                </div>

                {/* Phone & Email (Side by Side) */}
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-xs font-bold text-slate-400 uppercase tracking-wider mb-2">Phone *</label>
                    <motion.input 
                      whileFocus={{ scale: 1.01, borderColor: "#F97316" }}
                      type="tel" name="phone" required value={formData.phone} onChange={handleChange} 
                      className="w-full bg-slate-50 border border-slate-200 rounded-lg px-4 py-3 focus:outline-none focus:ring-1 focus:ring-orange-500 transition-all" 
                      placeholder="+974 ..." 
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-bold text-slate-400 uppercase tracking-wider mb-2">Email *</label>
                    <motion.input 
                      whileFocus={{ scale: 1.01, borderColor: "#F97316" }}
                      type="email" name="email" required value={formData.email} onChange={handleChange} 
                      className="w-full bg-slate-50 border border-slate-200 rounded-lg px-4 py-3 focus:outline-none focus:ring-1 focus:ring-orange-500 transition-all" 
                      placeholder="john@email.com" 
                    />
                  </div>
                </div>

                {/* Message */}
                <div>
                  <label className="block text-xs font-bold text-slate-400 uppercase tracking-wider mb-2">Message</label>
                  <motion.textarea 
                    whileFocus={{ scale: 1.01, borderColor: "#F97316" }}
                    name="message" rows="4" value={formData.message} onChange={handleChange} 
                    className="w-full bg-slate-50 border border-slate-200 rounded-lg px-4 py-3 focus:outline-none focus:ring-1 focus:ring-orange-500 transition-all resize-none" 
                    placeholder="How can we help you?"
                  ></motion.textarea>
                </div>

                {/* Status */}
                <AnimatePresence mode="wait">
                  {status.error && (
                    <motion.div initial={{ opacity: 0, height: 0 }} animate={{ opacity: 1, height: 'auto' }} exit={{ opacity: 0, height: 0 }} className="bg-red-50 text-red-600 p-3 rounded-lg flex items-center gap-2 text-sm border border-red-100">
                      <FaExclamationCircle /> {status.error}
                    </motion.div>
                  )}
                  {status.success && (
                    <motion.div initial={{ opacity: 0, height: 0 }} animate={{ opacity: 1, height: 'auto' }} exit={{ opacity: 0, height: 0 }} className="bg-green-50 text-green-700 p-3 rounded-lg flex items-center gap-2 text-sm border border-green-100">
                      <FaCheckCircle /> Enquiry submitted successfully!
                    </motion.div>
                  )}
                </AnimatePresence>

                {/* Button */}
                <motion.button 
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.95 }}
                  type="submit" disabled={status.loading} 
                  className="w-full bg-[#00224D] text-white font-bold py-4 rounded-lg shadow-lg hover:bg-orange-600 disabled:bg-slate-400 disabled:cursor-not-allowed transition-colors flex items-center justify-center gap-2 group"
                >
                  {status.loading ? <span>Sending...</span> : (
                    <><span className="group-hover:translate-x-1 transition-transform">Send Message</span><FaPaperPlane className="text-sm group-hover:translate-x-1 transition-transform" /></>
                  )}
                </motion.button>
              </form>
            </div>

            {/* MAP & WHATSAPP */}
            <div className="lg:w-1/2 bg-slate-100 relative min-h-[400px] border-l border-slate-200">
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d230888.7770732864!2d51.36531398188289!3d25.284097401938965!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e45c534cdc43bc3%3A0x23d08538f8dc55f9!2sDoha%2C%20Qatar!5e0!3m2!1sen!2sin!4v1707123456789!5m2!1sen!2sin" 
                className="absolute inset-0 w-full h-full border-0" 
                allowFullScreen="" 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
              
              
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default ContactPage;