"use client";

import { useState, useEffect } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import logo from "@/assets/logo.png";

/* NAV ITEMS */
const navItems = [
  { name: "Home", id: "home" },
  { name: "About", id: "about" },
  { name: "Services", id: "services" },
  { name: "Clients", id: "clients" },
  { name: "Contact Us", id: "contact" },
  { name: "Projects", path: "/projects" }
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("");
  const location = useLocation();
  const navigate = useNavigate();

  /* SCROLL TO HOME SECTIONS WHEN HASH CHANGES */
  useEffect(() => {
    if (!location.hash) return;

    const sectionId = location.hash.replace("#", "");
    const el = document.getElementById(sectionId);
    if (!el) return;

    // Wait for DOM to fully mount before scrolling
    setTimeout(() => {
      const y = el.getBoundingClientRect().top + window.scrollY - 70;
      window.scrollTo({ top: y, behavior: "smooth" });
    }, 150);
  }, [location.pathname, location.hash]);

  /* SECTION HIGHLIGHT ON SCROLL */
  useEffect(() => {
    const sectionIds = navItems.filter((i) => i.id).map((i) => i.id);

    const observers: IntersectionObserver[] = [];

    sectionIds.forEach((id) => {
      const el = document.getElementById(id);
      if (!el) return;

      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              setActiveSection(id);
            }
          });
        },
        { threshold: 0.55 }
      );

      observer.observe(el);
      observers.push(observer);
    });

    return () => observers.forEach((o) => o.disconnect());
  }, []);

  /* NAV CLICK HANDLER */
  const handleClick = (item: any) => {
    // Route navigation (e.g., Projects page)
    if (item.path) {
      // remove previous hash to avoid unwanted browser auto-scroll
      window.location.hash = "";

      navigate(item.path);

      // Ensure the page goes to the top consistently
      setTimeout(() => {
        window.scrollTo({ top: 0, behavior: "instant" });
      }, 50);

      return setIsOpen(false);
    }

    // Section navigation on Home page
    navigate(`/#${item.id}`);
    setIsOpen(false);
  };

  return (
    <>
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-xl border-b shadow-sm h-14 sm:h-16 flex items-center">
        <div className="w-full px-3 sm:px-4 md:px-10 flex items-center justify-between">

          {/* LOGO */}
          <Link to="/" className="flex items-center">
            <img src={logo} alt="PR Power" className="h-8 sm:h-10 w-auto" />
          </Link>

          {/* DESKTOP NAVIGATION */}
          <ul className="hidden md:flex gap-10 font-medium text-gray-700">
            {navItems.map((item) => {
              const active =
                (item.id && activeSection === item.id) ||
                (item.path && location.pathname === item.path);

              return (
                <li
                  key={item.name}
                  onClick={() => handleClick(item)}
                  className={`cursor-pointer hover:text-orange-600 transition ${
                    active ? "text-orange-600 font-semibold" : ""
                  }`}
                >
                  {item.name}
                </li>
              );
            })}
          </ul>

          {/* MOBILE MENU BUTTON */}
          <button
            className="md:hidden text-orange-700 ml-auto"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X size={26} /> : <Menu size={26} />}
          </button>
        </div>
      </nav>

      {/* MOBILE MENU */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            className="fixed top-14 left-0 right-0 bg-white shadow-xl md:hidden z-40"
          >
            <ul className="flex flex-col items-center gap-6 py-6 text-gray-700 text-lg font-medium">
              {navItems.map((item) => (
                <li
                  key={item.name}
                  onClick={() => handleClick(item)}
                  className="hover:text-orange-600 cursor-pointer"
                >
                  {item.name}
                </li>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
