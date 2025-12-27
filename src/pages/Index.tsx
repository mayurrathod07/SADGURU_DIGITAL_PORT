import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight, Camera, Plane } from "lucide-react";
import { Button } from "@/components/ui/button";
import { HeroCarousel } from "@/components/HeroCarousel";
import { OurWorkGallery } from "@/components/OurWorkGallery";
import droneImage from "@/assets/drone-coastal.jpg";
import weddingImage from "@/assets/wedding-portrait.jpg";

const Index = () => {
  return (
    <div className="overflow-hidden">
      {/* Hero Carousel Section */}
      <section className="relative">
        <HeroCarousel />
        
        {/* CTA Buttons Overlay */}
        <div className="absolute bottom-12 sm:bottom-16 md:bottom-20 lg:bottom-24 left-0 right-0 px-4 sm:px-6 md:px-12 lg:px-20 xl:px-32 z-10">
          <div className="max-w-7xl mx-auto">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.8 }}
              className="flex flex-col sm:flex-row gap-3 sm:gap-4"
            >
              <Button variant="hero" size="xl" className="text-sm sm:text-base" asChild>
                <Link to="/portfolio">
                  <Camera size={16} className="sm:w-[18px] sm:h-[18px] mr-2" />
                  View Portfolio
                </Link>
              </Button>
              <Button variant="hero-outline" size="xl" className="text-sm sm:text-base" asChild>
                <Link to="/contact">Book a Shoot</Link>
              </Button>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Our Work Gallery Section */}
      <OurWorkGallery />

      {/* Services Preview */}
      <section className="py-12 sm:py-16 md:py-24 lg:py-32 px-4 sm:px-6 md:px-12 lg:px-20 xl:px-32 bg-secondary/30 dark:bg-secondary/20">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-8 sm:mb-12 md:mb-16"
          >
            <p className="text-xs sm:text-sm tracking-[0.3em] uppercase text-accent mb-3 sm:mb-4">
              What We Do
            </p>
            <h2 className="font-display text-3xl sm:text-4xl md:text-5xl">
              Our Services
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-6 sm:gap-8 lg:gap-12">
            {/* Photography */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="group bg-card rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 border border-border"
            >
              <div className="image-reveal aspect-[4/3] overflow-hidden">
                <img
                  src={weddingImage}
                  alt="Professional photography"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-4 sm:p-6 md:p-8">
                <div className="flex items-center gap-2 sm:gap-3 mb-3 sm:mb-4">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-accent/10 flex items-center justify-center">
                    <Camera className="text-accent w-5 h-5 sm:w-6 sm:h-6" />
                  </div>
                  <h3 className="font-display text-xl sm:text-2xl">Photography</h3>
                </div>
                <p className="text-sm sm:text-base text-muted-foreground mb-4 sm:mb-6">
                  From intimate portraits to grand events, we craft visual narratives that resonate with emotion and authenticity.
                </p>
                <Link
                  to="/services"
                  className="inline-flex items-center gap-2 text-xs sm:text-sm tracking-wider uppercase text-accent font-medium group-hover:gap-4 transition-all"
                >
                  Learn More
                  <ArrowRight size={12} className="sm:w-3.5 sm:h-3.5" />
                </Link>
              </div>
            </motion.div>

            {/* Drone */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="group bg-card rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 border border-border"
            >
              <div className="image-reveal aspect-[4/3] overflow-hidden">
                <img
                  src={droneImage}
                  alt="Aerial drone photography"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-4 sm:p-6 md:p-8">
                <div className="flex items-center gap-2 sm:gap-3 mb-3 sm:mb-4">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-accent/10 flex items-center justify-center">
                    <Plane className="text-accent w-5 h-5 sm:w-6 sm:h-6" />
                  </div>
                  <h3 className="font-display text-xl sm:text-2xl">Aerial Imaging</h3>
                </div>
                <p className="text-sm sm:text-base text-muted-foreground mb-4 sm:mb-6">
                  Certified drone operations delivering breathtaking aerial perspectives for real estate, events, and commercial projects.
                </p>
                <Link
                  to="/services"
                  className="inline-flex items-center gap-2 text-xs sm:text-sm tracking-wider uppercase text-accent font-medium group-hover:gap-4 transition-all"
                >
                  Learn More
                  <ArrowRight size={12} className="sm:w-3.5 sm:h-3.5" />
                </Link>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 sm:py-16 md:py-24 lg:py-32 px-4 sm:px-6 md:px-12 lg:px-20 xl:px-32 bg-gradient-to-br from-accent/5 via-background to-secondary/20">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mx-auto text-center"
        >
          <motion.div
            animate={{ rotate: [0, 5, -5, 0] }}
            transition={{ duration: 4, repeat: Infinity }}
            className="inline-block mb-4 sm:mb-6"
          >
            <Camera size={36} className="sm:w-12 sm:h-12 text-accent" />
          </motion.div>
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl lg:text-6xl mb-4 sm:mb-6">
            Let's Create
            <br />
            <span className="italic text-accent">Something Beautiful</span>
          </h2>
          <p className="text-base sm:text-lg text-muted-foreground mb-6 sm:mb-8 md:mb-10 max-w-xl mx-auto px-4">
            Whether it's a wedding, a commercial project, or aerial footage of your property — Sadguru Digital is here to bring your vision to life.
          </p>
          <Button variant="hero" size="xl" className="text-sm sm:text-base" asChild>
            <Link to="/contact">
              Start a Project
              <ArrowRight size={14} className="sm:w-4 sm:h-4" />
            </Link>
          </Button>
        </motion.div>
      </section>
    </div>
  );
};

export default Index;
