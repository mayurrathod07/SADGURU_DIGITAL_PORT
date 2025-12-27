import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import heroImage from "@/assets/hero-landscape.jpg";
import droneImage from "@/assets/drone-coastal.jpg";
import weddingImage from "@/assets/wedding-portrait.jpg";
import realestateImage from "@/assets/drone-realestate.jpg";
import eventImage from "@/assets/event-photo.jpg";
import productImage from "@/assets/product-photo.jpg";

const categories = ["All", "Photography", "Aerial", "Commercial", "Events"];

const projects = [
  { id: 1, image: heroImage, title: "Mountain Sunrise", category: "Photography", description: "Golden hour landscape capture in the Alps" },
  { id: 2, image: droneImage, title: "Coastal Cliffs", category: "Aerial", description: "Aerial perspective of rugged coastline" },
  { id: 3, image: weddingImage, title: "Eternal Vows", category: "Events", description: "Wedding ceremony at sunset" },
  { id: 4, image: realestateImage, title: "Luxury Villa", category: "Aerial", description: "Real estate aerial photography" },
  { id: 5, image: eventImage, title: "Gala Night", category: "Events", description: "Corporate gala evening coverage" },
  { id: 6, image: productImage, title: "Timepiece", category: "Commercial", description: "Luxury watch product photography" },
];

const Portfolio = () => {
  const [activeCategory, setActiveCategory] = useState("All");
  const [selectedProject, setSelectedProject] = useState<typeof projects[0] | null>(null);

  const filteredProjects = activeCategory === "All"
    ? projects
    : projects.filter((p) => p.category === activeCategory);

  return (
    <div className="min-h-screen pt-16 sm:pt-20 md:pt-24">
      {/* Header */}
      <section className="py-8 sm:py-12 md:py-16 lg:py-24 px-4 sm:px-6 md:px-12 lg:px-20 xl:px-32">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto"
        >
          <p className="text-xs sm:text-sm tracking-[0.3em] uppercase text-accent mb-3 sm:mb-4">
            Our Work
          </p>
          <h1 className="font-display text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl mb-4 sm:mb-6">
            Portfolio
          </h1>
          <p className="text-base sm:text-lg md:text-xl text-muted-foreground max-w-xl">
            A curated collection of our finest work across photography and aerial imaging.
          </p>
        </motion.div>
      </section>

      {/* Filter */}
      <section className="pb-6 sm:pb-8 px-4 sm:px-6 md:px-12 lg:px-20 xl:px-32">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex flex-wrap gap-2 sm:gap-3 md:gap-4"
        >
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`text-xs sm:text-sm tracking-wider uppercase px-3 sm:px-4 py-1.5 sm:py-2 transition-all duration-300 ${
                activeCategory === category
                  ? "text-foreground border-b border-accent"
                  : "text-muted-foreground hover:text-foreground"
              }`}
            >
              {category}
            </button>
          ))}
        </motion.div>
      </section>

      {/* Gallery Grid */}
      <section className="pb-12 sm:pb-16 md:pb-24 px-4 sm:px-6 md:px-12 lg:px-20 xl:px-32">
        <motion.div layout className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project, index) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className="group cursor-pointer"
                onClick={() => setSelectedProject(project)}
              >
                <div className="image-reveal aspect-[4/5] mb-4 overflow-hidden bg-muted">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover"
                  />
                </div>
                <p className="text-xs tracking-wider uppercase text-accent mb-1">
                  {project.category}
                </p>
                <h3 className="font-display text-lg sm:text-xl group-hover:text-accent transition-colors">
                  {project.title}
                </h3>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </section>

      {/* Lightbox */}
      <AnimatePresence>
        {selectedProject && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-background/95 backdrop-blur-sm flex items-center justify-center p-4 sm:p-6"
            onClick={() => setSelectedProject(null)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="max-w-5xl w-full"
              onClick={(e) => e.stopPropagation()}
            >
              <img
                src={selectedProject.image}
                alt={selectedProject.title}
                className="w-full h-auto max-h-[60vh] sm:max-h-[70vh] object-contain mb-4 sm:mb-6"
              />
              <div className="text-center">
                <p className="text-xs tracking-wider uppercase text-accent mb-1 sm:mb-2">
                  {selectedProject.category}
                </p>
                <h3 className="font-display text-xl sm:text-2xl mb-1 sm:mb-2">
                  {selectedProject.title}
                </h3>
                <p className="text-sm sm:text-base text-muted-foreground px-4">
                  {selectedProject.description}
                </p>
              </div>
            </motion.div>
            <button
              onClick={() => setSelectedProject(null)}
              className="absolute top-4 right-4 sm:top-8 sm:right-8 text-muted-foreground hover:text-foreground text-xs sm:text-sm tracking-wider uppercase"
            >
              Close
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Portfolio;
