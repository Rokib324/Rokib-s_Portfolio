"use client";

import { useState } from "react";
import { FaStar } from "react-icons/fa6";
import { projects } from "@/data";

// Map icon paths to technology names
const techNameMap: { [key: string]: string } = {
  "/re.svg": "Next.js",
  "/tail.svg": "TailwindCSS",
  "/django.svg": "Django",
  "/api.svg": "RESTful API",
  "/py.svg": "Python",
  "/tensorflow.svg": "TensorFlow",
  "/js.svg": "JavaScript",
  "/ts.svg": "TypeScript",
  "/three.svg": "Three.js",
  "/c.svg": "C++",
  "/next.svg": "Next.js",
  "/aws.svg": "AWS",
  "/mongo.svg": "MongoDB",
};

const filterCategories = ["All Projects", "AI SaaS", "Marketing Suites", "Custom AI"];

const FeaturedProjects = () => {
  const [activeFilter, setActiveFilter] = useState("All Projects");

  // Get technology names from icon lists
  const getTechNames = (iconLists: string[]) => {
    return iconLists.map((icon) => techNameMap[icon] || icon.replace("/", "").replace(".svg", ""));
  };

  // Filter projects based on category (simplified - you can enhance this logic)
  const filteredProjects = projects.slice(0, 3); // Show first 3 projects

  return (
    <section className="py-20 px-4 md:px-8 lg:px-16 bg-black-100">
      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <div className="relative mb-12">
          {/* Our Work Button - Top Right */}
          <div className="absolute top-0 right-0">
            <button className="flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-purple-500/20 to-cyan-500/20 border border-purple-500/30 rounded-full text-white hover:border-purple-500/50 transition-all duration-300">
              <FaStar className="w-4 h-4 text-purple-400" />
              <span className="text-sm font-medium">Our Work</span>
            </button>
          </div>

          {/* Title and Description */}
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
              Featured <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-cyan-400">Projects</span>
            </h1>
            <p className="text-gray-400 text-base md:text-lg">
              Explore our portfolio of successful projects that showcase our expertise and creativity.
            </p>
          </div>
        </div>

        {/* Filter Buttons */}
        <div className="flex flex-wrap items-center justify-center gap-4 mb-12">
          {filterCategories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveFilter(category)}
              className={`px-6 py-3 rounded-full text-sm md:text-base font-medium transition-all duration-300 ${
                activeFilter === category
                  ? "bg-gradient-to-r from-purple-500 to-cyan-500 text-white shadow-lg shadow-purple-500/50"
                  : "bg-white/5 text-gray-400 hover:text-white hover:bg-white/10 border border-white/10"
              }`}
            >
              <div className="flex items-center gap-2">
                {activeFilter === category && <FaStar className="w-4 h-4" />}
                <span>{category}</span>
              </div>
            </button>
          ))}
        </div>

        {/* Project Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-6 md:gap-8">
          {filteredProjects.map((project) => {
            const techNames = getTechNames(project.iconLists);
            
            return (
              <div
                key={project.id}
                className="group relative bg-gradient-to-br from-slate-900/50 to-slate-800/50 border border-white/10 rounded-2xl overflow-hidden hover:border-purple-500/30 transition-all duration-300 hover:scale-[1.02]"
              >
                {/* Project Image */}
                <div className="relative w-full h-48 md:h-56 overflow-hidden bg-slate-800">
                  <img
                    src={project.img}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
                </div>

                {/* Project Content */}
                <div className="p-6">
                  <h3 className="text-xl md:text-2xl font-bold text-white mb-3 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-purple-400 group-hover:to-cyan-400 transition-all duration-300">
                    {project.title}
                  </h3>
                  
                  <p className="text-gray-400 text-sm md:text-base mb-4 line-clamp-2">
                    {project.des}
                  </p>

                  {/* Technology Tags */}
                  <div className="flex flex-wrap gap-2">
                    {techNames.slice(0, 4).map((tech, index) => (
                      <span
                        key={index}
                        className="px-3 py-1.5 bg-slate-900/60 border border-white/10 rounded-lg text-xs md:text-sm text-white/90 font-medium"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
    </div>
    </section>
  );
};

export default FeaturedProjects;
