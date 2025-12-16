import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-landscape.jpg";

const stats = [
  { value: "10+", label: "Years Experience" },
  { value: "500+", label: "Projects Completed" },
  { value: "100%", label: "Client Satisfaction" },
];

const About = () => {
  return (
    <div className="min-h-screen pt-24">
      {/* Header */}
      <section className="section-padding py-16 md:py-24">
        <div className="grid lg:grid-cols-2 gap-16 items-center max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <p className="text-sm tracking-[0.3em] uppercase text-accent mb-4">
              Our Story
            </p>
            <h1 className="font-display text-5xl md:text-6xl mb-6">
              About Aether
            </h1>
            <p className="text-xl text-muted-foreground mb-6">
              We believe every moment holds a story worth preserving — whether captured from the ground or from above.
            </p>
            <p className="text-muted-foreground mb-8">
              Aether Studio was founded with a singular vision: to blend traditional photographic artistry with cutting-edge aerial technology. What started as a passion for visual storytelling has evolved into a full-service creative studio serving clients across the country.
            </p>
            <p className="text-muted-foreground">
              Our name, Aether, represents the element that ancients believed filled the universe above — a fitting symbol for our commitment to capturing perspectives that transcend the ordinary.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="image-reveal aspect-[4/5] overflow-hidden"
          >
            <img
              src={heroImage}
              alt="Mountain landscape photography"
              className="w-full h-full object-cover"
            />
          </motion.div>
        </div>
      </section>

      {/* Stats */}
      <section className="section-padding py-16 bg-secondary/50">
        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-3 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className="text-center"
              >
                <p className="font-display text-4xl md:text-5xl text-accent mb-2">
                  {stat.value}
                </p>
                <p className="text-sm text-muted-foreground tracking-wider uppercase">
                  {stat.label}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Philosophy */}
      <section className="section-padding py-24">
        <div className="max-w-3xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <p className="text-sm tracking-[0.3em] uppercase text-accent mb-4">
              Our Approach
            </p>
            <h2 className="font-display text-3xl md:text-4xl mb-8">
              The Art of Perspective
            </h2>
            
            <div className="space-y-6 text-muted-foreground">
              <p>
                Photography is more than pressing a button — it's about understanding light, emotion, and timing. Our approach combines technical mastery with artistic intuition, ensuring every shot tells a compelling story.
              </p>
              <p>
                When we take to the skies, we bring the same dedication to our aerial work. As FAA Part 107 certified operators, we understand that great drone footage isn't just about altitude — it's about finding the angle that reveals something new, something breathtaking.
              </p>
              <p>
                Safety is paramount in everything we do. Every aerial operation is conducted with rigorous pre-flight checks, comprehensive insurance, and strict adherence to all FAA regulations. Our clients can trust that their project is in experienced, professional hands.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Values */}
      <section className="section-padding py-24 bg-secondary/50">
        <div className="max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <p className="text-sm tracking-[0.3em] uppercase text-accent mb-4">
              What Drives Us
            </p>
            <h2 className="font-display text-3xl md:text-4xl">
              Our Values
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "Excellence",
                description: "We never settle for good enough. Every project receives our full creative and technical attention.",
              },
              {
                title: "Integrity",
                description: "Transparent communication, honest pricing, and delivering exactly what we promise — every time.",
              },
              {
                title: "Innovation",
                description: "Constantly evolving our craft, embracing new technologies, and pushing creative boundaries.",
              },
            ].map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className="text-center p-8 bg-background"
              >
                <h3 className="font-display text-xl mb-4">{value.title}</h3>
                <p className="text-sm text-muted-foreground">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding py-24">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-2xl mx-auto text-center"
        >
          <h2 className="font-display text-3xl md:text-4xl mb-6">
            Let's Work Together
          </h2>
          <p className="text-muted-foreground mb-10">
            Ready to bring your vision to life? We'd love to hear about your project.
          </p>
          <Button variant="hero" size="xl" asChild>
            <Link to="/contact">
              Start a Conversation
              <ArrowRight size={16} />
            </Link>
          </Button>
        </motion.div>
      </section>
    </div>
  );
};

export default About;
