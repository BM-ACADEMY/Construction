import React from 'react';
import { Link } from 'react-router-dom';

const HomeAbout = () => {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center gap-12">

          {/* 1. Image Side */}
          <div className="w-full md:w-1/2">
            <img
              src="https://images.unsplash.com/photo-1504307651254-35680f356dfd?q=80&w=2070&auto=format&fit=crop"
              alt="About Multiverse"
              className="rounded-lg shadow-xl w-full object-cover h-[400px]"
            />
          </div>

          {/* 2. Content Side (Preview Only) */}
          <div className="w-full md:w-1/2">
            <span className="text-orange-500 font-bold uppercase tracking-widest text-sm mb-2 block">
              Who We Are
            </span>

            <h2 className="text-3xl md:text-4xl font-heading font-bold text-[#00224D] mb-6">
              Trading & Contracting You Can Trust
            </h2>

            {/* Teaser paragraph only */}
            <p className="text-gray-600 text-lg leading-relaxed mb-8">
              Multiverse International Trading & Contracting is a Qatar-based company delivering dependable trading and contracting solutions. Our work is guided by quality, safety, and a disciplined approach to execution — ensuring every project is handled with professionalism and accountability.
            </p>

            {/* CTA */}
            <Link
              to="/about"
              className="inline-block px-8 py-3 bg-[#00224D] text-white font-bold rounded shadow-lg hover:bg-orange-600 transition-all transform hover:-translate-y-1"
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
