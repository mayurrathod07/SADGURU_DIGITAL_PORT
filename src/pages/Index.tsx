import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight, Camera, Plane, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ImageSlider } from "@/components/ImageSlider";
import { CameraAnimation } from "@/components/CameraAnimation";
import heroImage from "@/assets/hero-landscape.jpg";
import droneImage from "@/assets/drone-coastal.jpg";
import weddingImage from "@/assets/wedding-portrait.jpg";
import realestateImage from "@/assets/drone-realestate.jpg";
import eventImage from "@/assets/event-photo.jpg";
import productImage from "@/assets/product-photo.jpg";

const fadeUp = {
  initial: { opacity: 0, y: 40 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.8, ease: "easeOut" },
};

const stagger = {
  animate: {
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const Index = () => {
  return (
    <div className="overflow-hidden">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center">
        <div className="absolute inset-0 z-0">
          <img
            src={heroImage}
            alt="Dramatic landscape photography"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-background/40 via-background/60 to-background" />
        </div>

        <motion.div
          variants={stagger}
          initial="initial"
          animate="animate"
          className="relative z-10 text-center section-padding max-w-5xl mx-auto pt-24"
        >
          <motion.div variants={fadeUp} className="flex justify-center mb-8">
            <CameraAnimation />
          </motion.div>
          
          <motion.div
            variants={fadeUp}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent/20 backdrop-blur-sm text-accent mb-6"
          >
            <Sparkles size={16} />
            <span className="text-sm tracking-wider uppercase">Sadguru Digital Photography</span>
          </motion.div>
          
          <motion.h1
            variants={fadeUp}
            className="font-display text-5xl md:text-7xl lg:text-8xl font-medium leading-tight mb-6"
          >
            Capturing Your
            <br />
            <span className="italic text-accent">Precious Moments</span>
          </motion.h1>
          <motion.p
            variants={fadeUp}
            className="text-lg md:text-xl text-muted-foreground max-w-xl mx-auto mb-10"
          >
            Professional photography and certified drone services in Nandurbar. 
            Let us tell your story through stunning visuals.
          </motion.p>
          <motion.div variants={fadeUp} className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="hero" size="xl" asChild>
              <Link to="/portfolio">
                <Camera size={18} className="mr-2" />
                View Portfolio
              </Link>
            </Button>
            <Button variant="hero-outline" size="xl" asChild>
              <Link to="/contact">Book a Shoot</Link>
            </Button>
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2, duration: 1 }}
          className="absolute bottom-12 left-1/2 -translate-x-1/2 z-10"
        >
          <div className="flex flex-col items-center gap-2 text-muted-foreground">
            <span className="text-xs tracking-wider uppercase">Scroll</span>
            <motion.div 
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
              className="w-px h-12 bg-gradient-to-b from-accent to-transparent" 
            />
          </div>
        </motion.div>
      </section>

      {/* Image Slider Section */}
      <section className="py-16 md:py-24 section-padding">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <p className="text-sm tracking-[0.3em] uppercase text-accent mb-4">
              Our Work
            </p>
            <h2 className="font-display text-4xl md:text-5xl">
              Featured Gallery
            </h2>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <ImageSlider />
          </motion.div>
        </div>
      </section>

      {/* Services Preview */}
      <section className="py-24 md:py-32 section-padding bg-secondary/30">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <p className="text-sm tracking-[0.3em] uppercase text-accent mb-4">
              What We Do
            </p>
            <h2 className="font-display text-4xl md:text-5xl">
              Our Services
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
            {/* Photography */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="group bg-card rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-shadow"
            >
              <div className="image-reveal aspect-[4/3] overflow-hidden">
                <img
                  src={weddingImage}
                  alt="Professional photography"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-8">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center">
                    <Camera className="text-accent" size={24} />
                  </div>
                  <h3 className="font-display text-2xl">Photography</h3>
                </div>
                <p className="text-muted-foreground mb-6">
                  From intimate portraits to grand events, we craft visual narratives that resonate with emotion and authenticity.
                </p>
                <Link
                  to="/services"
                  className="inline-flex items-center gap-2 text-sm tracking-wider uppercase text-accent font-medium group-hover:gap-4 transition-all"
                >
                  Learn More
                  <ArrowRight size={14} />
                </Link>
              </div>
            </motion.div>

            {/* Drone */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="group bg-card rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-shadow"
            >
              <div className="image-reveal aspect-[4/3] overflow-hidden">
                <img
                  src={droneImage}
                  alt="Aerial drone photography"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-8">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center">
                    <Plane className="text-accent" size={24} />
                  </div>
                  <h3 className="font-display text-2xl">Aerial Imaging</h3>
                </div>
                <p className="text-muted-foreground mb-6">
                  Certified drone operations delivering breathtaking aerial perspectives for real estate, events, and commercial projects.
                </p>
                <Link
                  to="/services"
                  className="inline-flex items-center gap-2 text-sm tracking-wider uppercase text-accent font-medium group-hover:gap-4 transition-all"
                >
                  Learn More
                  <ArrowRight size={14} />
                </Link>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Portfolio Preview */}
      <section className="py-24 md:py-32">
        <div className="section-padding">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex flex-col md:flex-row justify-between items-start md:items-end gap-6 mb-12 max-w-7xl mx-auto"
          >
            <div>
              <p className="text-sm tracking-[0.3em] uppercase text-accent mb-4">
                Selected Works
              </p>
              <h2 className="font-display text-4xl md:text-5xl">
                Recent Projects
              </h2>
            </div>
            <Button variant="hero-outline" size="lg" asChild>
              <Link to="/portfolio">
                View All
                <ArrowRight size={16} />
              </Link>
            </Button>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
            {[
              { image: realestateImage, title: "Coastal Estate", category: "Aerial" },
              { image: eventImage, title: "Gala Evening", category: "Events" },
              { image: productImage, title: "Timepiece", category: "Commercial" },
            ].map((project, index) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.15 }}
                className="group cursor-pointer"
              >
                <Link to="/portfolio">
                  <div className="image-reveal aspect-[4/5] mb-4 overflow-hidden bg-muted rounded-xl">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <p className="text-xs tracking-wider uppercase text-accent mb-1">
                    {project.category}
                  </p>
                  <h3 className="font-display text-xl group-hover:text-accent transition-colors">
                    {project.title}
                  </h3>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 md:py-32 section-padding bg-gradient-to-br from-accent/10 via-background to-secondary/30">
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
            className="inline-block mb-6"
          >
            <Camera size={48} className="text-accent" />
          </motion.div>
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl mb-6">
            Let's Create
            <br />
            <span className="italic text-accent">Something Beautiful</span>
          </h2>
          <p className="text-lg text-muted-foreground mb-10 max-w-xl mx-auto">
            Whether it's a wedding, a commercial project, or aerial footage of your property — Sadguru Digital is here to bring your vision to life.
          </p>
          <Button variant="hero" size="xl" asChild>
            <Link to="/contact">
              Start a Project
              <ArrowRight size={16} />
            </Link>
          </Button>
        </motion.div>
      </section>
    </div>
  );
};

export default Index;
