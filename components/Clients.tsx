"use client";

import React from "react";
import { companies, testimonials } from "@/data";
import { InfiniteMovingCards } from "./ui/InfiniteMovingCards";

const Clients = () => {
  return (
    <section id="testimonials" className="py-20">
      <h1 className="heading text-center text-[30px] md:text-3xl lg:text-5xl">
        Kind Words <span className="text-purple">from Clients</span>
      </h1>

      <div className="flex flex-col items-center max-lg:mt-10">
        {/* Testimonials Scroller */}
        <div className="h-[50vh] md:h-[30rem] rounded-md flex flex-col antialiased items-center justify-center relative overflow-hidden">
          <InfiniteMovingCards
            items={testimonials}
            direction="right"
            speed="slow"
          />
        </div>

        {/* Company Cards with Logos, Names, Quotes, and Links */}
        <div className="flex flex-wrap items-stretch justify-center gap-6 md:gap-8 mt-10 w-full max-w-7xl mx-auto px-4">
          {companies.map((company) => (
            <div 
              key={company.id} 
              className="flex flex-col bg-gradient-to-br from-purple-500/10 to-cyan-500/10 backdrop-blur-sm border border-white/10 rounded-2xl p-6 md:p-8 hover:border-purple-500/30 transition-all duration-300 hover:scale-105 w-full md:w-[350px] max-w-sm"
            >
              {/* Logo and Company Name */}
              <div className="flex flex-row items-center gap-4 mb-4">
                <img
                  src={company.img}
                  alt={`${company.name} logo`}
                  className="h-12 md:h-16 w-auto object-contain opacity-90 hover:opacity-100 transition-opacity duration-300 flex-shrink-0"
                  onError={(e) => {
                    console.error(`Failed to load image: ${company.img}`);
                    (e.target as HTMLImageElement).style.display = 'none';
                  }}
                />
                <h3 className="text-base md:text-lg text-gray-200 font-semibold">
                  {company.name}
                </h3>
              </div>

              {/* Quote */}
              <div className="mb-4 flex-grow">
                <p className="text-sm md:text-base text-gray-400 italic leading-relaxed">
                  "{company.quote}"
                </p>
              </div>

              {/* Link */}
              <div className="mt-auto">
                <a
                  href={company.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-sm md:text-base text-purple-400 hover:text-purple-300 font-medium transition-colors duration-300 group"
                >
                  <span>Visit Website</span>
                  <svg 
                    className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" 
                    fill="none" 
                    stroke="currentColor" 
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Clients;