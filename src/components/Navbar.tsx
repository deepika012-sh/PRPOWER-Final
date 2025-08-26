"use client";

import { useEffect, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";

const navItems = [
  { name: "Home", id: "home" },
  { name: "About", id: "about" },
  { name: "Services", id: "services" },
  { name: "Clients", id: "clients" },
  { name: "Projects", path: "/projects" },
  { name: "Contact", id: "contact" },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const location = useLocation();
  const navigate = useNavigate();

  // Scroll spy
  useEffect(() => {
    if (location.pathname !== "/") return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActiveSection(entry.target.id);
        });
      },
      { threshold: 0.5 }
    );

    navItems.forEach((item) => {
      if (item.id) {
        const section = document.getElementById(item.id);
        if (section) observer.observe(section);
      }
    });

    return () =>
      navItems.forEach((item) => {
        if (item.id) {
          const section = document.getElementById(item.id);
          if (section) observer.unobserve(section);
        }
      });
  }, [location.pathname]);

  const scrollToSection = (id: string) => {
    if (location.pathname !== "/") {
      navigate(`/#${id}`);
      return;
    }

    const element = document.getElementById(id);
    if (element) {
      const y = element.getBoundingClientRect().top + window.scrollY - 80;
      window.scrollTo({ top: y, behavior: "smooth" });
      setActiveSection(id);
    }
    setIsOpen(false);
  };

  const handleNavClick = (item: any) => {
    if (item.path) {
      navigate(item.path);
    } else {
      scrollToSection(item.id);
    }
  };

  return (
    <>
      {/* Navbar */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-md h-20 px-4 md:px-10 flex items-center justify-between border-b border-orange-100 shadow-sm">
        {/* Logo */}
        <Link to="/" className="text-2xl font-extrabold text-orange-700 tracking-wide">
          PR Power
        </Link>

        {/* Desktop Nav */}
        <ul className="hidden md:flex space-x-8 text-sm font-medium text-gray-700">
          {navItems.map((item) => (
            <li
              key={item.name}
              onClick={() => handleNavClick(item)}
              className={`cursor-pointer transition-colors duration-300 hover:text-orange-600 ${
                (item.path && location.pathname === item.path) ||
                (!item.path && activeSection === item.id)
                  ? "text-orange-600 font-semibold"
                  : ""
              }`}
            >
              {item.name}
            </li>
          ))}
        </ul>

        {/* Desktop CTA */}
        <div className="hidden md:flex space-x-4">
          <a
            href="/PR-POWER-BROCHURE.pdf"
            target="_blank"
            className="px-5 py-2 border border-orange-600 text-orange-600 rounded-lg hover:bg-orange-50 text-sm transition"
          >
            Brochure
          </a>
          <button
            onClick={() => scrollToSection("contact")}
            className="px-5 py-2 bg-orange-600 text-white rounded-lg text-sm hover:bg-orange-700 transition"
          >
            Contact
          </button>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-orange-700 focus:outline-none"
          >
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </nav>

      {/* Mobile Nav */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ y: -15, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -15, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed top-20 left-0 right-0 bg-white border-b border-orange-100 shadow-md z-40 md:hidden"
          >
            <ul className="flex flex-col items-center py-6 space-y-4 text-gray-700 text-base font-medium">
              {navItems.map((item) => (
                <li
                  key={item.name}
                  onClick={() => handleNavClick(item)}
                  className={`cursor-pointer hover:text-orange-600 ${
                    (item.path && location.pathname === item.path) ||
                    (!item.path && activeSection === item.id)
                      ? "text-orange-600 font-semibold"
                      : ""
                  }`}
                >
                  {item.name}
                </li>
              ))}
              <li>
                <a
                  href="/PR-POWER-BROCHURE.pdf"
                  target="_blank"
                  className="block w-full text-center px-5 py-2 border border-orange-600 text-orange-600 rounded-lg hover:bg-orange-50 transition"
                >
                  Brochure
                </a>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection("contact")}
                  className="block w-full px-5 py-2 bg-orange-600 text-white rounded-lg hover:bg-orange-700 transition"
                >
                  Contact
                </button>
              </li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
