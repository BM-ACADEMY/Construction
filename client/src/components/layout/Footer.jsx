import React from 'react';
import { Link } from 'react-router-dom';
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt, FaLinkedin, FaFacebook } from 'react-icons/fa';

// Import Logo
import logo from '../../assets/constructionlogo.png';

const Footer = () => {
  return (
    // ✅ Responsive Padding: pt-10 on mobile, pt-16 on desktop
    <footer className="bg-[#00152e] text-slate-300 pt-10 pb-8 md:pt-16 border-t border-slate-800 font-sans">
      <div className="container mx-auto px-6">

        {/* ✅ Responsive Grid:
            - grid-cols-1 (Mobile: Stacked)
            - md:grid-cols-2 (Tablet: 2x2 grid)
            - lg:grid-cols-4 (Desktop: 4 columns in a row)
        */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12 mb-12">

          {/* Column 1: Brand */}
          <div className="flex flex-col items-start">
            <Link to="/" className="block mb-6">
               <img src={logo} alt="Multiverse Intl" className="h-10 md:h-12 w-auto object-contain brightness-0 invert" />
            </Link>

            <p className="text-sm leading-relaxed text-slate-400 mb-6">
              Your trusted partner for reliable trading and contracting solutions in Qatar. Building visions into reality with quality and safety.
            </p>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 rounded bg-slate-800 flex items-center justify-center hover:bg-orange-500 hover:text-white transition-colors"><FaLinkedin /></a>
              <a href="#" className="w-10 h-10 rounded bg-slate-800 flex items-center justify-center hover:bg-orange-500 hover:text-white transition-colors"><FaFacebook /></a>
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div>
            <h4 className="text-white font-bold mb-4 md:mb-6 uppercase tracking-wider text-sm">Quick Links</h4>
            <ul className="space-y-3 text-sm">
              <li><Link to="/" className="hover:text-orange-500 transition-colors">Home</Link></li>
              <li><Link to="/about" className="hover:text-orange-500 transition-colors">About Us</Link></li>
              <li><Link to="/services" className="hover:text-orange-500 transition-colors">Services</Link></li>
              <li><Link to="/projects" className="hover:text-orange-500 transition-colors">Projects</Link></li>
              <li><Link to="/contact" className="hover:text-orange-500 transition-colors">Contact</Link></li>
            </ul>
          </div>

          {/* Column 3: Services */}
          <div>
            <h4 className="text-white font-bold mb-4 md:mb-6 uppercase tracking-wider text-sm">Our Services</h4>
            <ul className="space-y-3 text-sm">
              <li><Link to="/services" className="hover:text-orange-500 transition-colors">Trading & Sourcing</Link></li>
              <li><Link to="/services" className="hover:text-orange-500 transition-colors">Civil Contracting</Link></li>
              <li><Link to="/services" className="hover:text-orange-500 transition-colors">MEP Works</Link></li>
              <li><Link to="/services" className="hover:text-orange-500 transition-colors">Fit-out & Finishing</Link></li>
            </ul>
          </div>

          {/* Column 4: Contact */}
          <div>
            <h4 className="text-white font-bold mb-4 md:mb-6 uppercase tracking-wider text-sm">Contact Us</h4>
            <ul className="space-y-4 text-sm">
              <li className="flex items-start gap-3">
                <FaMapMarkerAlt className="text-orange-500 mt-1 flex-shrink-0" />
                <span>Doha, Qatar</span>
              </li>
              <li className="flex items-center gap-3">
                <FaPhoneAlt className="text-orange-500 flex-shrink-0" />
                <span>+974 7732 9077</span>
              </li>
              <li className="flex items-center gap-3">
                <FaEnvelope className="text-orange-500 flex-shrink-0" />
                <span>info@multiverseintl.com</span>
              </li>
            </ul>
          </div>

        </div>

        {/* ✅ COPYRIGHT BAR */}
        <div className="border-t border-slate-800 pt-8 text-center text-xs text-slate-500">
          <p>
            &copy; {new Date().getFullYear()}{' '}
            <a
              href="https://bmtechx.in/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-orange-500 transition-colors"
            >
              BMTechx.in
            </a>
            . All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
