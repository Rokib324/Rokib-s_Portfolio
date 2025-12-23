"use client";

import React from "react";
import { ProgressiveBlur } from "./ui/progressive-blur";
import { InfiniteSlider } from "./ui/infinite-slider";
import { technologies } from "@/data";

const Technologies = () => {
  return (
    <section className="bg-background pb-16 md:pb-32">
                    <div className="group relative m-auto max-w-6xl px-6">
                        <div className="flex flex-col items-center md:flex-row">
                            <div className="md:max-w-44 md:border-r md:pr-6">
                                <p className="text-end text-sm">Technologies I have Knowledge Of</p>
                            </div>
                            <div className="relative py-6 md:w-[calc(100%-11rem)]">
                                <InfiniteSlider
                                    speedOnHover={20}
                                    speed={40}
                                    gap={112}>
                                        {technologies.map((tech) => {
                                            const heightValue = tech.height === "h-4" ? 16 : tech.height === "h-5" ? 20 : tech.height === "h-6" ? 24 : 28;
                                            return (
                                                <div key={tech.id} className="flex">
                                                    <img
                                                        className={`mx-auto ${tech.height} w-fit dark:invert`}
                                                        src={tech.img}
                                                        alt={`${tech.name} Logo`}
                                                        height={heightValue}
                                                        width="auto"
                                                    />
                                                </div>
                                            );
                                        })}
                                </InfiniteSlider>

                                <div className="bg-linear-to-r from-background absolute inset-y-0 left-0 w-20"></div>
                                <div className="bg-linear-to-l from-background absolute inset-y-0 right-0 w-20"></div>
                                <ProgressiveBlur
                                    className="pointer-events-none absolute left-0 top-0 h-full w-20"
                                    direction="left"
                                    blurIntensity={1}
                                />
                                <ProgressiveBlur
                                    className="pointer-events-none absolute right-0 top-0 h-full w-20"
                                    direction="right"
                                    blurIntensity={1}
                                />
                            </div>
                        </div>
                    </div>
                </section>
  );
};

export default Technologies;