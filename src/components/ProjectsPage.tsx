import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

// ✅ Import Project Images from assets
import tadaImg from "../assets/projects/projects/tada.jpg";
import kustagiImg from "../assets/projects/projects/kustagi.jpg";
import naydupetImg from "../assets/projects/projects/naydupet.jpg";

const ProjectPage = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [selectedProject, setSelectedProject] = useState<any>(null);

  const projects = [
    {
      title: "132/33kV Substation - TADA",
      image: tadaImg,
      description:
        "132/33KV, SUBSTATION, FOR CUSTOMER Daikin India Ltd, TADA SITE, AP.",
    },
    {
      title: "220/132kV Substation - KUSTAGI",
      image: kustagiImg,
      description:
        "220/33kV, pooling substation for Vena Energy India Pvt Ltd, Kustagi, Karnataka, Koppal District.",
    },
    {
      title: "400kV Substation - NAYDUPET",
      image: naydupetImg,
      description:
        "110/33kV test lab bay work done for Meiden T&D India Ltd, Naydupet, Nellore District, AP.",
    },
  ];

  // Close modal on Esc key
  useEffect(() => {
    const handleEsc = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setSelectedImage(null);
        setSelectedProject(null);
      }
    };
    window.addEventListener("keydown", handleEsc);
    return () => window.removeEventListener("keydown", handleEsc);
  }, []);

  const openModal = (project: any) => {
    setSelectedImage(project.image);
    setSelectedProject(project);
  };

  return (
    <section id="projects" className="py-24 bg-white text-gray-800">
      <div className="container mx-auto px-4 text-center">
        {/* Title */}
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-4xl md:text-5xl font-bold text-orange-600 mb-4"
        >
          namba project
        </motion.h2>
        <p className="text-gray-600 max-w-xl mx-auto mb-12">
          Delivering excellence through innovative engineering solutions.
        </p>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              whileInView={{ opacity: 1, y: 0 }}
              initial={{ opacity: 0, y: 20 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 + index * 0.2 }}
              className="bg-gray-50 rounded-xl shadow-md hover:shadow-xl transition overflow-hidden cursor-pointer"
              onClick={() => openModal(project)}
            >
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-48 sm:h-56 md:h-48 lg:h-56 object-cover transition-transform duration-300 hover:scale-105"
              />
              <div className="p-5">
                <h3 className="text-lg sm:text-xl font-semibold text-gray-800">
                  {project.title}
                </h3>
                <p className="text-gray-600 mt-2 text-sm sm:text-base">
                  {project.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Modal */}
      <AnimatePresence>
        {selectedImage && selectedProject && (
          <motion.div
            className="fixed inset-0 bg-black/80 flex items-center justify-center z-50 p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={(e) => {
              if (e.target === e.currentTarget) {
                setSelectedImage(null);
                setSelectedProject(null);
              }
            }}
          >
            <motion.div
              initial={{ scale: 0.8 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.8 }}
              className="relative max-w-3xl w-full rounded-lg shadow-lg bg-white overflow-hidden"
            >
              {/* Close Button */}
              <button
                onClick={() => {
                  setSelectedImage(null);
                  setSelectedProject(null);
                }}
                className="absolute top-2 right-2 text-gray-800 bg-white rounded-full p-2 shadow hover:bg-gray-100"
              >
                ✕
              </button>

              {/* Image */}
              <img
                src={selectedImage}
                alt={selectedProject.title}
                className="w-full h-64 sm:h-96 object-cover"
              />

              {/* Caption */}
              <div className="p-4 text-left">
                <h3 className="text-xl font-bold text-gray-800">
                  {selectedProject.title}
                </h3>
                <p className="text-gray-600 mt-2">{selectedProject.description}</p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default ProjectPage;
