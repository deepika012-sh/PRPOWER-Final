import { motion } from "framer-motion";
import { Phone, Mail, MapPin, ArrowUp, Download } from "lucide-react";
import { Button } from "@/components/ui/button";

const GlassFooter = () => {
  return (
    <footer className="relative py-16 bg-neutral-950/90 backdrop-blur-2xl border-t border-white/10">

      {/* Dark Glow Background */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-neutral-900/50 to-transparent pointer-events-none" />

      <div className="relative max-w-6xl mx-auto px-6">

        {/* BRAND + LOGO + TAGLINE */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-6 mb-14"
        >
          {/* Logo + Name */}
          <div className="flex items-center gap-4">
            <div className="w-14 h-14 bg-orange-500 rounded-xl flex items-center justify-center shadow-lg">
              <span className="text-2xl font-extrabold text-white">PR</span>
            </div>
            <div>
              <motion.h3
                whileHover={{ x: 5, color: "#F97316" }}
                transition={{ type: "spring", stiffness: 200 }}
                className="text-xl font-bold text-white cursor-pointer"
              >
                PR Power & Infrastructures
              </motion.h3>

              {/* Moving Tagline */}
              <motion.p
                whileHover={{ x: 8, opacity: 1 }}
                transition={{ type: "spring", stiffness: 120 }}
                className="text-sm text-white/70 cursor-pointer"
              >
                Engineering Tomorrow's Energy Infrastructure Today
              </motion.p>
            </div>
          </div>

          {/* Brochure Button */}
          <a
            href="/PR-POWER-BROCHURE.pdf"
            download
            target="_blank"
            rel="noopener noreferrer"
          >
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.92 }}>
              <Button
                variant="outline"
                className="border border-orange-500 text-orange-600 hover:bg-orange-500 hover:text-white px-5 py-2 rounded-lg flex items-center gap-2"
              >
                <Download className="w-4.2 h-4.2" />
                Download Brochure
              </Button>
            </motion.div>
          </a>
        </motion.div>

        {/* Contact Columns */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-10 mb-12">

          {/* Contact */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h4 className="text-lg font-semibold text-orange-400 mb-3">
              Contact
            </h4>

            {/* Moving Hover Text Lines */}
            <motion.p
              whileHover={{ x: 10, color: "#FDE2CF" }}
              transition={{ type: "spring", stiffness: 200 }}
              className="flex items-center gap-2 text-sm text-white/85 cursor-pointer"
            >
              <Phone className="w-4 h-4 text-orange-300" />
              +91 9080537672
            </motion.p>

            <motion.p
              whileHover={{ x: 10, color: "#FDE2CF" }}
              transition={{ type: "spring", stiffness: 200 }}
              className="flex items-center gap-2 text-sm text-white/85 cursor-pointer mt-1"
            >
              <Phone className="w-4 h-4 text-orange-300" />
              +91 9445257630
            </motion.p>
          </motion.div>

          {/* Email */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            <h4 className="text-lg font-semibold text-orange-400 mb-3">Email</h4>

            <motion.p
              whileHover={{ x: 10, color: "#FDE2CF" }}
              transition={{ type: "spring", stiffness: 200 }}
              className="flex items-center gap-2 text-sm text-white/85 cursor-pointer"
            >
              <Mail className="w-4 h-4 text-orange-300" />
              prpowerinfra@gmail.com
            </motion.p>
          </motion.div>

          {/* Location */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h4 className="text-lg font-semibold text-orange-400 mb-3">
              Location
            </h4>

            <motion.p
              whileHover={{ x: 10, color: "#FDE2CF" }}
              transition={{ type: "spring", stiffness: 200 }}
              className="flex items-center gap-2 text-sm text-white/85 cursor-pointer"
            >
              <MapPin className="w-4 h-4 text-orange-300" />
              Avadi, Chennai, Tamil Nadu
            </motion.p>
          </motion.div>

        </div>

        {/* Divider */}
        <div className="border-t border-white/10 my-6"></div>

        {/* Bottom Row */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
            className="text-sm text-white/60"
          >
            © 2025 PR Power & Infrastructures. All rights reserved.
          </motion.p>

          {/* Back To Top */}
          <motion.button
            whileHover={{ scale: 1.12, x: 4 }}
            whileTap={{ scale: 0.92 }}
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="flex items-center gap-2 text-sm text-white/70 hover:text-orange-400 transition cursor-pointer"
          >
            <ArrowUp className="w-4 h-4" />
            Back to top
          </motion.button>
        </div>
      </div>
    </footer>
  );
};

export default GlassFooter;
