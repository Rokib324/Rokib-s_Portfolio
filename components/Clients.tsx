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

        {/* Company Logos */}
        <div className="flex flex-wrap items-center justify-center gap-4 md:gap-16 mt-10">
          {companies.map((company) => (
            <div key={company.id} className="flex md:max-w-60 max-w-32 gap-2 items-center">
              <img
                src={company.img}
                alt={`${company.name} logo icon`}
                className="md:w-10 w-5"
              />
              <img
                src={company.nameImg}
                alt={`${company.name} logo text`}
                width={company.id === 4 || company.id === 5 ? 100 : 150}
                className="md:w-24 w-20"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Clients;