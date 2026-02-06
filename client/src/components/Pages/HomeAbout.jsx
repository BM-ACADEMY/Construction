import React from 'react';
import { Link } from 'react-router-dom';

const HomeAbout = () => {
  return (
    // ✅ Reduced py-20 to py-12 on mobile for better spacing
    <section className="py-12 md:py-20 bg-gray-50">
      <div className="container mx-auto px-6 md:px-12">

        {/* ✅ Changed to 'lg:flex-row' so tablets (iPad) still stack vertically for better readability */}
        <div className="flex flex-col lg:flex-row items-center gap-10 lg:gap-16">

          {/* 1. Image Side */}
          <div className="w-full lg:w-1/2">
            <img
              src="https://images.unsplash.com/photo-1504307651254-35680f356dfd?q=80&w=2070&auto=format&fit=crop"
              alt="About Multiverse"
              // ✅ Responsive Height: h-64 on mobile, h-[450px] on desktop
              className="rounded-lg shadow-xl w-full object-cover h-64 md:h-80 lg:h-[450px]"
            />
          </div>

          {/* 2. Content Side */}
          <div className="w-full lg:w-1/2 text-center lg:text-left">
            <span className="text-orange-500 font-bold uppercase tracking-widest text-xs md:text-sm mb-3 block">
              Who We Are
            </span>

            {/* ✅ Responsive Heading Size */}
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold text-[#00224D] mb-6 leading-tight">
              Trading & Contracting <br className="hidden lg:block" />
              You Can Trust
            </h2>

            {/* Teaser paragraph */}
            <p className="text-gray-600 text-base md:text-lg leading-relaxed mb-8">
              Multiverse International Trading & Contracting is a Qatar-based company delivering dependable trading and contracting solutions. Our work is guided by quality, safety, and a disciplined approach to execution — ensuring every project is handled with professionalism and accountability.
            </p>

            {/* CTA Button - Full width on mobile, auto on desktop */}
            <Link
              to="/about"
              className="inline-block w-full sm:w-auto px-8 py-4 bg-[#00224D] text-white font-bold rounded shadow-lg hover:bg-orange-600 transition-all transform hover:-translate-y-1 uppercase tracking-wider text-sm"
            >
              Read More
            </Link>
          </div>

        </div>
      </div>
    </section>
  );
};

export default HomeAbout;
