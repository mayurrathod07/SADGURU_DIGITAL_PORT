import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Camera, Plane, Building, Heart, CalendarDays, Package, ArrowRight, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import droneImage from "@/assets/drone-coastal.jpg";
import weddingImage from "@/assets/wedding-portrait.jpg";

const photographyServices = [
  { icon: Heart, title: "Weddings & Engagements", description: "Capturing your most cherished moments with elegance and artistry." },
  { icon: CalendarDays, title: "Events & Corporate", description: "Professional coverage for galas, conferences, and corporate gatherings." },
  { icon: Package, title: "Commercial & Product", description: "High-end product and commercial photography for brands." },
];

const droneServices = [
  { icon: Building, title: "Real Estate", description: "Stunning aerial views that showcase properties at their best." },
  { icon: CalendarDays, title: "Events & Ceremonies", description: "Unique aerial perspectives for weddings, festivals, and celebrations." },
  { icon: Camera, title: "Landscapes & Commercial", description: "Breathtaking aerial footage for marketing and creative projects." },
];

const certifications = [
  "FAA Part 107 Remote Pilot Certificate",
  "Fully insured operations",
  "10+ years combined experience",
  "Professional-grade equipment",
  "Pre-flight safety protocols",
  "Weather-aware scheduling",
];

const Services = () => {
  return (
    <div className="min-h-screen pt-24">
      {/* Header */}
      <section className="section-padding py-16 md:py-24">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl"
        >
          <p className="text-sm tracking-[0.3em] uppercase text-accent mb-4">
            Our Services
          </p>
          <h1 className="font-display text-5xl md:text-6xl lg:text-7xl mb-6">
            What We Offer
          </h1>
          <p className="text-xl text-muted-foreground max-w-xl">
            Professional visual storytelling from ground level to aerial heights.
          </p>
        </motion.div>
      </section>

      {/* Photography Services */}
      <section className="section-padding pb-24">
        <div className="grid lg:grid-cols-2 gap-16 items-center max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="flex items-center gap-3 mb-6">
              <Camera className="text-accent" size={28} />
              <h2 className="font-display text-3xl md:text-4xl">Photography Services</h2>
            </div>
            <p className="text-muted-foreground mb-8">
              With an eye for detail and a passion for storytelling, our photography services transform moments into timeless visual narratives.
            </p>
            
            <div className="space-y-6">
              {photographyServices.map((service, index) => (
                <motion.div
                  key={service.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  className="flex gap-4"
                >
                  <div className="w-12 h-12 rounded-full bg-secondary flex items-center justify-center flex-shrink-0">
                    <service.icon size={20} className="text-accent" />
                  </div>
                  <div>
                    <h3 className="font-display text-lg mb-1">{service.title}</h3>
                    <p className="text-sm text-muted-foreground">{service.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="image-reveal aspect-[4/5] overflow-hidden"
          >
            <img
              src={weddingImage}
              alt="Wedding photography"
              className="w-full h-full object-cover"
            />
          </motion.div>
        </div>
      </section>

      {/* Drone Services */}
      <section className="py-24 bg-secondary/50">
        <div className="section-padding">
          <div className="grid lg:grid-cols-2 gap-16 items-center max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="image-reveal aspect-[4/5] overflow-hidden order-2 lg:order-1"
            >
              <img
                src={droneImage}
                alt="Aerial drone photography"
                className="w-full h-full object-cover"
              />
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="order-1 lg:order-2"
            >
              <div className="flex items-center gap-3 mb-6">
                <Plane className="text-accent" size={28} />
                <h2 className="font-display text-3xl md:text-4xl">Drone Services</h2>
              </div>
              <p className="text-muted-foreground mb-8">
                Licensed and insured aerial operations delivering stunning perspectives that elevate any project to new heights.
              </p>
              
              <div className="space-y-6 mb-8">
                {droneServices.map((service, index) => (
                  <motion.div
                    key={service.title}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: index * 0.1 }}
                    className="flex gap-4"
                  >
                    <div className="w-12 h-12 rounded-full bg-background flex items-center justify-center flex-shrink-0">
                      <service.icon size={20} className="text-accent" />
                    </div>
                    <div>
                      <h3 className="font-display text-lg mb-1">{service.title}</h3>
                      <p className="text-sm text-muted-foreground">{service.description}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Certifications */}
      <section className="section-padding py-24">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <p className="text-sm tracking-[0.3em] uppercase text-accent mb-4">
              Trust & Safety
            </p>
            <h2 className="font-display text-3xl md:text-4xl mb-6">
              Certified Professionals
            </h2>
            <p className="text-muted-foreground mb-12 max-w-xl mx-auto">
              Our drone operations are conducted by trained and licensed professionals, ensuring safety, compliance, and exceptional results.
            </p>
          </motion.div>

          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
            {certifications.map((cert, index) => (
              <motion.div
                key={cert}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className="flex items-center gap-3 p-4 bg-secondary/50 text-left"
              >
                <CheckCircle size={18} className="text-accent flex-shrink-0" />
                <span className="text-sm">{cert}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-primary text-primary-foreground">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="section-padding text-center"
        >
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl mb-6">
            Ready to Book?
          </h2>
          <p className="text-primary-foreground/70 mb-10 max-w-xl mx-auto">
            Let's discuss your project and create something extraordinary together.
          </p>
          <Button
            variant="hero-outline"
            size="xl"
            className="border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary"
            asChild
          >
            <Link to="/contact">
              Get in Touch
              <ArrowRight size={16} />
            </Link>
          </Button>
        </motion.div>
      </section>
    </div>
  );
};

export default Services;
