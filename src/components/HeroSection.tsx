"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight, Download } from "lucide-react";
import { useNavigate } from "react-router-dom";
import heroVideo from "@/assets/hero-video.mp4";

const HeroSection = () => {
  const navigate = useNavigate();

  return (
    <section
      id="home"
      role="banner"
      className="relative w-full min-h-screen flex items-center justify-center overflow-hidden pt-[90px] sm:pt-[105px]"
    >
      {/* Background Video */}
      <video
        autoPlay
        loop
        muted
        playsInline
        src={heroVideo}
        className="absolute inset-0 w-full h-full object-cover pointer-events-none"
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/75 via-black/45 to-[#F26B1D]/12" />

      {/* Content Container */}
      <div className="relative z-10 w-full px-4 sm:px-6 md:px-10">
        <div className="mx-auto text-center max-w-[1100px]">
          {/* HEADLINE */}
          <motion.h1
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="font-display font-extrabold text-white leading-tight"
            style={{ lineHeight: 1.05 }}
          >
            <span className="block text-[clamp(1.5rem,5vw,2.5rem)]">
              Powering Tomorrow with
            </span>
            <span className="block mt-2 text-[clamp(2rem,6vw,3.5rem)]">
              <span className="text-white">Trusted </span>
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#F26B1D] to-yellow-300">
                Infrastructure
              </span>
            </span>
            <span className="block mt-1 text-[clamp(1.5rem,5vw,2.5rem)]">
              Today
            </span>
          </motion.h1>

          {/* SUBTITLE */}
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.95, delay: 0.12 }}
            className="mt-4 text-white/85 text-sm sm:text-base md:text-lg mx-auto max-w-[700px]"
          >
            Delivering AIS/GIS substations, transmission lines, solar & wind
            infrastructure projects — backed by 30+ years of engineering expertise.
          </motion.p>

          {/* CTA BUTTONS */}
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.05, delay: 0.22 }}
            className="mt-6 flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <Button
              onClick={() => navigate("/projects")}
              className="w-full sm:w-auto px-6 py-3 text-sm sm:text-base rounded-full bg-[#F26B1D] hover:bg-orange-600 text-white font-medium flex items-center justify-center"
            >
              View Our Projects <ArrowRight className="ml-2 w-4 h-4" />
            </Button>

            <a href="/PR-POWER-BROCHURE.pdf" download className="w-full sm:w-auto">
              <Button
                className="w-full px-6 py-3 text-sm sm:text-base rounded-full bg-white text-[#F26B1D] hover:bg-[#F26B1D] hover:text-white font-medium flex items-center justify-center"
              >
                <Download className="mr-2 w-4 h-4" />
                Download Brochure
              </Button>
            </a>
          </motion.div>

          {/* STATS */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, delay: 0.36 }}
            className="mt-10 flex flex-wrap items-center justify-center gap-6 sm:gap-12"
          >
            {[
              { value: "30+", label: "Years Experience" },
              { value: "100+", label: "Projects Completed" },
              { value: "400kV", label: "Turnkey Capability" },
            ].map((stat, index) => (
              <div key={index} className="text-center min-w-[100px]">
                <div className="text-2xl md:text-4xl font-bold text-[#F26B1D]">
                  {stat.value}
                </div>
                <div className="text-xs md:text-sm text-white/80 mt-1">
                  {stat.label}
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;