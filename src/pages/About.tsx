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
              About <span className="text-accent">Sadguru Digital</span>
            </h1>
            <p className="text-xl text-muted-foreground mb-6">
              We believe every moment holds a story worth preserving — whether captured from the ground or from above.
            </p>
            <p className="text-muted-foreground mb-8">
              Founded by <span className="text-accent font-semibold">Arun Chavan</span>, Sadguru Digital was born from a deep passion for visual storytelling and a vision to bring world-class photography and drone services to Nandurbar. With years of experience and an eye for capturing the perfect moment, Arun has built a team that shares his commitment to excellence.
            </p>
            <p className="text-muted-foreground">
              Based in the heart of Nandurbar, we've grown from a small studio into a full-service creative powerhouse, serving clients across Maharashtra with professional photography, videography, and cutting-edge aerial drone services.
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

      {/* Meet the Founder */}
      <section className="section-padding py-24">
        <div className="max-w-3xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <p className="text-sm tracking-[0.3em] uppercase text-accent mb-4">
              Meet Our Founder
            </p>
            <h2 className="font-display text-3xl md:text-4xl mb-8">
              Arun Chavan
            </h2>
            
            <div className="space-y-6 text-muted-foreground">
              <p>
                Arun Chavan's journey into photography began with a simple belief: every moment deserves to be captured beautifully. What started as a hobby quickly transformed into a lifelong passion, and eventually, into Sadguru Digital.
              </p>
              <p>
                With expertise spanning wedding photography, event coverage, portrait sessions, and professional drone operations, Arun brings a unique blend of technical skill and artistic vision to every project. His approach combines traditional photographic techniques with modern technology, ensuring that each shot tells a compelling story.
              </p>
              <p>
                Under Arun's leadership, Sadguru Digital has become synonymous with quality, professionalism, and creativity in Nandurbar and beyond. His dedication to client satisfaction and his eye for capturing authentic emotions have earned him the trust of hundreds of families and businesses.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Philosophy */}
      <section className="section-padding py-24 bg-secondary/50">
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
                When we take to the skies, we bring the same dedication to our aerial work. As certified drone operators, we understand that great drone footage isn't just about altitude — it's about finding the angle that reveals something new, something breathtaking.
              </p>
              <p>
                Safety is paramount in everything we do. Every aerial operation is conducted with rigorous pre-flight checks, comprehensive insurance, and strict adherence to all regulations. Our clients can trust that their project is in experienced, professional hands.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Values */}
      <section className="section-padding py-24">
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
                className="text-center p-8 bg-secondary/50 rounded-xl"
              >
                <h3 className="font-display text-xl mb-4">{value.title}</h3>
                <p className="text-sm text-muted-foreground">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding py-24 bg-secondary/50">
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