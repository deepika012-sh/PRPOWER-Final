import React from "react";
import CountUp from "react-countup";
import { motion } from "framer-motion";

// ✅ Client Logos
import DaikinLogo from "../assets/pr-logo/pr-logo/DAIKIN.jpeg";
import LTLogo from "../assets/pr-logo/pr-logo/L&T.jpeg";
import MahindraLogo from "../assets/pr-logo/pr-logo/MAHINDRA.jpeg";
import VenaEnergyLogo from "../assets/pr-logo/pr-logo/vena energy.png";
import SterlingWilsonLogo from "../assets/pr-logo/pr-logo/sterling & wilson.png";
import PGCILLogo from "../assets/pr-logo/pr-logo/PGCIL.jpeg";
import TNEBLogo from "../assets/pr-logo/pr-logo/TNEB.jpeg";
import TVSLogo from "../assets/pr-logo/pr-logo/TVS.png";
import indo from "../assets/pr-logo/pr-logo/indo.jpg";
import median from "../assets/pr-logo/pr-logo/meiden.jpg";

const ClientsSection = () => {
  const logos = [
    { src: DaikinLogo, alt: "Daikin" },
    { src: LTLogo, alt: "L&T" },
    { src: MahindraLogo, alt: "Mahindra" },
    { src: VenaEnergyLogo, alt: "Vena Energy" },
    { src: SterlingWilsonLogo, alt: "Sterling & Wilson" },
    { src: PGCILLogo, alt: "PGCIL" },
    { src: TNEBLogo, alt: "TNEB" },
    { src: TVSLogo, alt: "TVS" },
    { src: indo,alt:"indo"},
    { src : median, alt:"median"},
  ];

  return (
    <section id="clients" className="py-24 bg-gray-50 text-gray-800">
      <div className="container mx-auto px-4 text-center">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-4xl md:text-5xl font-bold text-orange-600 mb-4"
        >
          Our Clients
        </motion.h2>
        <p className="text-gray-600 max-w-xl mx-auto mb-12">
          Trusted by industry leaders across infrastructure, energy, and engineering.
        </p>

        {/* Logos Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6 items-center justify-items-center">
          {logos.map((logo, index) => (
            <motion.img
              key={index}
              src={logo.src}
              alt={logo.alt}
              className="h-16 w-auto object-contain"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
            />
          ))}
        </div>

        {/* Stats Box Style */}
        <div className="mt-20 grid grid-cols-1 sm:grid-cols-3 gap-6 text-center max-w-4xl mx-auto">
          <motion.div
            whileInView={{ opacity: 1, y: 0 }}
            initial={{ opacity: 0, y: 20 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="bg-white border border-orange-200 rounded-xl shadow-md p-6 hover:shadow-lg transition"
          >
            <p className="text-4xl font-bold text-orange-600">
              <CountUp end={100} duration={2} />+
            </p>
            <p className="text-gray-700 mt-2 text-lg font-medium">Happy Clients</p>
          </motion.div>
          <motion.div
            whileInView={{ opacity: 1, y: 0 }}
            initial={{ opacity: 0, y: 20 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-white border border-orange-200 rounded-xl shadow-md p-6 hover:shadow-lg transition"
          >
            <p className="text-4xl font-bold text-orange-600">
              <CountUp end={250} duration={2} />+
            </p>
            <p className="text-gray-700 mt-2 text-lg font-medium">Projects Completed</p>
          </motion.div>
          <motion.div
            whileInView={{ opacity: 1, y: 0 }}
            initial={{ opacity: 0, y: 20 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="bg-white border border-orange-200 rounded-xl shadow-md p-6 hover:shadow-lg transition"
          >
            <p className="text-4xl font-bold text-orange-600">
              <CountUp end={20} duration={2} />+
            </p>
            <p className="text-gray-700 mt-2 text-lg font-medium">Years of Excellence</p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ClientsSection;
