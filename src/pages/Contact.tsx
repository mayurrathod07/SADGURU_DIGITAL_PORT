import { useState } from "react";
import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Send, CheckCircle, Instagram, Camera, Aperture } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";

const Contact = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    const form = e.currentTarget;
    const formData = new FormData(form);

    try {
      const response = await fetch("https://formspree.io/f/mqarrqeq", {
        method: "POST",
        body: formData,
        headers: {
          Accept: "application/json",
        },
      });

      if (response.ok) {
        setIsSubmitted(true);
        toast({
          title: "Message Sent!",
          description: "We'll get back to you within 24 hours.",
        });
        form.reset();
        setTimeout(() => {
          setIsSubmitted(false);
        }, 3000);
      } else {
        toast({
          title: "Error",
          description: "Something went wrong. Please try again.",
          variant: "destructive",
        });
      }
    } catch (error) {
      toast({
        title: "Error",
        description: "Something went wrong. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen pt-24">
      {/* Animated Background */}
      <div className="fixed inset-0 -z-10 overflow-hidden">
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 50, repeat: Infinity, ease: "linear" }}
          className="absolute -top-1/2 -right-1/2 w-full h-full opacity-5"
        >
          <Aperture className="w-full h-full text-accent" />
        </motion.div>
        <motion.div
          animate={{ rotate: -360 }}
          transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
          className="absolute -bottom-1/2 -left-1/2 w-full h-full opacity-5"
        >
          <Camera className="w-full h-full text-accent" />
        </motion.div>
      </div>

      {/* Header */}
      <section className="section-padding py-16 md:py-24">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl"
        >
          <motion.div 
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.2, type: "spring" }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent/20 backdrop-blur-sm text-accent mb-6"
          >
            <Camera size={16} />
            <span className="text-sm tracking-wider uppercase">Get in Touch</span>
          </motion.div>
          <h1 className="font-display text-5xl md:text-6xl lg:text-7xl mb-6">
            Contact <span className="text-accent">Us</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-xl">
            Ready to capture your special moments? We'd love to hear from you.
          </p>
        </motion.div>
      </section>

      {/* Contact Content */}
      <section className="section-padding pb-24">
        <div className="grid lg:grid-cols-2 gap-16 max-w-7xl mx-auto">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h2 className="font-display text-3xl mb-8">Let's Connect</h2>
            
            <div className="space-y-6 mb-12">
              <motion.a
                href="mailto:Sadgurudigitalnandurbar01@gmail.com"
                className="flex items-start gap-4 group p-4 rounded-xl bg-card hover:bg-secondary/50 transition-all"
                whileHover={{ x: 5 }}
              >
                <div className="w-14 h-14 rounded-full bg-accent/10 flex items-center justify-center flex-shrink-0 group-hover:bg-accent group-hover:scale-110 transition-all">
                  <Mail size={24} className="text-accent group-hover:text-accent-foreground transition-colors" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground mb-1">Email</p>
                  <p className="font-display text-lg group-hover:text-accent transition-colors">
                    Sadgurudigitalnandurbar01@gmail.com
                  </p>
                </div>
              </motion.a>

              <motion.a
                href="tel:+919021128321"
                className="flex items-start gap-4 group p-4 rounded-xl bg-card hover:bg-secondary/50 transition-all"
                whileHover={{ x: 5 }}
              >
                <div className="w-14 h-14 rounded-full bg-accent/10 flex items-center justify-center flex-shrink-0 group-hover:bg-accent group-hover:scale-110 transition-all">
                  <Phone size={24} className="text-accent group-hover:text-accent-foreground transition-colors" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground mb-1">Phone</p>
                  <p className="font-display text-lg group-hover:text-accent transition-colors">
                    +91 90211 28321
                  </p>
                  <p className="font-display text-lg group-hover:text-accent transition-colors">
                    +91 80805 44106
                  </p>
                </div>
              </motion.a>

              <motion.a
                href="https://www.instagram.com/sadguru_digital_nandurbar/?hl=en"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-start gap-4 group p-4 rounded-xl bg-card hover:bg-secondary/50 transition-all"
                whileHover={{ x: 5 }}
              >
                <div className="w-14 h-14 rounded-full bg-accent/10 flex items-center justify-center flex-shrink-0 group-hover:bg-accent group-hover:scale-110 transition-all">
                  <Instagram size={24} className="text-accent group-hover:text-accent-foreground transition-colors" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground mb-1">Instagram</p>
                  <p className="font-display text-lg group-hover:text-accent transition-colors">
                    @sadguru_digital_nandurbar
                  </p>
                </div>
              </motion.a>

              <motion.div
                className="flex items-start gap-4 p-4 rounded-xl bg-card"
                whileHover={{ x: 5 }}
              >
                <div className="w-14 h-14 rounded-full bg-accent/10 flex items-center justify-center flex-shrink-0">
                  <MapPin size={24} className="text-accent" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground mb-1">Studio Location</p>
                  <p className="font-display text-lg">
                    Sadguru Digital
                  </p>
                  <p className="text-sm text-muted-foreground mt-1">
                    Shop No. 108, Sairachana Plaza, Bus Stand Complex, Near Sadguru Computer & Minai Cyber Cafe, Nandurbar
                  </p>
                </div>
              </motion.div>
            </div>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="border border-border rounded-xl p-6 bg-gradient-to-br from-accent/5 to-transparent"
            >
              <h3 className="font-display text-lg mb-3 flex items-center gap-2">
                <motion.div
                  animate={{ rotate: [0, 15, -15, 0] }}
                  transition={{ duration: 2, repeat: Infinity }}
                >
                  <Camera size={20} className="text-accent" />
                </motion.div>
                Response Time
              </h3>
              <p className="text-muted-foreground text-sm">
                We typically respond within 24 hours. For urgent inquiries, please call us directly.
              </p>
            </motion.div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <div className="bg-card border border-border rounded-2xl p-8 md:p-10 shadow-xl">
              <h2 className="font-display text-2xl mb-6 flex items-center gap-3">
                <Send size={24} className="text-accent" />
                Send a Message
              </h2>

              {isSubmitted ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="flex flex-col items-center justify-center py-16 text-center"
                >
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ type: "spring", stiffness: 200 }}
                  >
                    <CheckCircle size={64} className="text-accent mb-4" />
                  </motion.div>
                  <h3 className="font-display text-2xl mb-2">Thank You!</h3>
                  <p className="text-muted-foreground">
                    We've received your message and will be in touch soon.
                  </p>
                </motion.div>
              ) : (
                <form
                  action="https://formspree.io/f/mqarrqeq"
                  method="POST"
                  onSubmit={handleSubmit}
                  className="space-y-6"
                >
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium mb-2">
                        Name *
                      </label>
                      <Input
                        id="name"
                        name="name"
                        required
                        className="bg-background border-border rounded-xl h-12 focus:ring-2 focus:ring-accent"
                        placeholder="Your name"
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium mb-2">
                        Email *
                      </label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        required
                        className="bg-background border-border rounded-xl h-12 focus:ring-2 focus:ring-accent"
                        placeholder="your@email.com"
                      />
                    </div>
                  </div>

                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="phone" className="block text-sm font-medium mb-2">
                        Phone
                      </label>
                      <Input
                        id="phone"
                        name="phone"
                        type="tel"
                        className="bg-background border-border rounded-xl h-12 focus:ring-2 focus:ring-accent"
                        placeholder="+91 12345 67890"
                      />
                    </div>
                    <div>
                      <label htmlFor="service" className="block text-sm font-medium mb-2">
                        Service Interest
                      </label>
                      <select
                        id="service"
                        name="service"
                        className="w-full h-12 px-4 bg-background border border-border rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-accent"
                      >
                        <option value="">Select a service</option>
                        <option value="wedding">Wedding Photography</option>
                        <option value="event">Event Coverage</option>
                        <option value="portrait">Portrait Session</option>
                        <option value="drone">Drone / Aerial</option>
                        <option value="commercial">Commercial</option>
                        <option value="other">Other</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium mb-2">
                      Message *
                    </label>
                    <Textarea
                      id="message"
                      name="message"
                      required
                      rows={5}
                      placeholder="Tell us about your project..."
                      className="bg-background border-border rounded-xl resize-none focus:ring-2 focus:ring-accent"
                    />
                  </div>

                  <Button
                    type="submit"
                    variant="hero"
                    size="lg"
                    className="w-full h-14 text-base"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? (
                      <motion.div
                        animate={{ rotate: 360 }}
                        transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                      >
                        <Aperture size={20} />
                      </motion.div>
                    ) : (
                      <>
                        Send Message
                        <Send size={18} />
                      </>
                    )}
                  </Button>
                </form>
              )}
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Contact;