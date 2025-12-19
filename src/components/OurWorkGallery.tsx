import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-landscape.jpg";
import droneImage from "@/assets/drone-coastal.jpg";
import weddingImage from "@/assets/wedding-portrait.jpg";
import realestateImage from "@/assets/drone-realestate.jpg";
import eventImage from "@/assets/event-photo.jpg";
import productImage from "@/assets/product-photo.jpg";

const galleryItems = [
  { image: weddingImage, title: "Wedding Stories", category: "Photography" },
  { image: droneImage, title: "Aerial Views", category: "Drone" },
  { image: eventImage, title: "Corporate Events", category: "Events" },
  { image: realestateImage, title: "Real Estate", category: "Aerial" },
  { image: productImage, title: "Product Shots", category: "Commercial" },
  { image: heroImage, title: "Landscapes", category: "Photography" },
];

export const OurWorkGallery = () => {
  return (
    <section className="py-24 md:py-32 section-padding bg-secondary/30">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex flex-col md:flex-row justify-between items-start md:items-end gap-6 mb-12"
        >
          <div>
            <p className="text-sm tracking-[0.3em] uppercase text-accent mb-4">
              Our Work
            </p>
            <h2 className="font-display text-4xl md:text-5xl">
              Featured Gallery
            </h2>
            <p className="text-muted-foreground mt-4 max-w-lg">
              Explore our collection of professional photography and breathtaking aerial shots
            </p>
          </div>
          <Button variant="hero-outline" size="lg" asChild>
            <Link to="/portfolio">
              View All Projects
              <ArrowRight size={16} />
            </Link>
          </Button>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
          {galleryItems.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={`group relative overflow-hidden rounded-xl cursor-pointer ${
                index === 0 ? "col-span-2 row-span-2" : ""
              }`}
            >
              <Link to="/portfolio">
                <div className={`relative overflow-hidden ${index === 0 ? "aspect-square" : "aspect-[4/3]"}`}>
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-110"
                  />
                  {/* Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-foreground/80 via-foreground/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  
                  {/* Content */}
                  <div className="absolute inset-0 flex flex-col justify-end p-4 md:p-6 translate-y-4 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-500">
                    <span className="text-xs tracking-wider uppercase text-accent mb-1">
                      {item.category}
                    </span>
                    <h3 className="font-display text-lg md:text-xl text-background">
                      {item.title}
                    </h3>
                  </div>

                  {/* Corner accent */}
                  <div className="absolute top-4 right-4 w-8 h-8 border-t-2 border-r-2 border-accent opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100" />
                  <div className="absolute bottom-4 left-4 w-8 h-8 border-b-2 border-l-2 border-accent opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100" />
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
