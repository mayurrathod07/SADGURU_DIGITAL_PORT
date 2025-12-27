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
    <div className="min-h-screen pt-16 sm:pt-20 md:pt-24">
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
      <section className="py-8 sm:py-12 md:py-16 lg:py-24 px-4 sm:px-6 md:px-12 lg:px-20 xl:px-32">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto"
        >
          <motion.div 
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.2, type: "spring" }}
            className="inline-flex items-center gap-2 px-3 sm:px-4 py-1.5 sm:py-2 rounded-full bg-accent/20 backdrop-blur-sm text-accent mb-4 sm:mb-6"
          >
            <Camera size={14} className="sm:w-4 sm:h-4" />
            <span className="text-xs sm:text-sm tracking-wider uppercase">Get in Touch</span>
          </motion.div>
          <h1 className="font-display text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl mb-4 sm:mb-6 leading-tight">
            Contact <span className="text-accent">Us</span>
          </h1>
          <p className="text-base sm:text-lg md:text-xl text-muted-foreground max-w-xl">
            Ready to capture your special moments? We'd love to hear from you.
          </p>
        </motion.div>
      </section>

      {/* Contact Content */}
      <section className="pb-12 sm:pb-16 md:pb-24 px-4 sm:px-6 md:px-12 lg:px-20 xl:px-32">
        <div className="grid lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-16 max-w-7xl mx-auto">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h2 className="font-display text-2xl sm:text-3xl mb-6 sm:mb-8">Let's Connect</h2>
            
            <div className="space-y-4 sm:space-y-6 mb-8 sm:mb-12">
              <motion.a
                href="mailto:Sadgurudigitalnandurbar01@gmail.com"
                className="flex items-start gap-3 sm:gap-4 group p-3 sm:p-4 rounded-xl bg-card hover:bg-secondary/50 transition-all"
                whileHover={{ x: 5 }}
              >
                <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-accent/10 flex items-center justify-center flex-shrink-0 group-hover:bg-accent group-hover:scale-110 transition-all">
                  <Mail size={20} className="sm:w-6 sm:h-6 text-accent group-hover:text-accent-foreground transition-colors" />
                </div>
                <div className="min-w-0 flex-1">
                  <p className="text-xs sm:text-sm text-muted-foreground mb-1">Email</p>
                  <p className="font-display text-sm sm:text-base md:text-lg group-hover:text-accent transition-colors break-words">
                    Sadgurudigitalnandurbar01@gmail.com
                  </p>
                </div>
              </motion.a>

              <motion.a
                href="tel:+919021128321"
                className="flex items-start gap-3 sm:gap-4 group p-3 sm:p-4 rounded-xl bg-card hover:bg-secondary/50 transition-all"
                whileHover={{ x: 5 }}
              >
                <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-accent/10 flex items-center justify-center flex-shrink-0 group-hover:bg-accent group-hover:scale-110 transition-all">
                  <Phone size={20} className="sm:w-6 sm:h-6 text-accent group-hover:text-accent-foreground transition-colors" />
                </div>
                <div className="min-w-0 flex-1">
                  <p className="text-xs sm:text-sm text-muted-foreground mb-1">Phone</p>
                  <p className="font-display text-sm sm:text-base md:text-lg group-hover:text-accent transition-colors">
                    +91 90211 28321
                  </p>
                  <p className="font-display text-sm sm:text-base md:text-lg group-hover:text-accent transition-colors">
                    +91 80805 44106
                  </p>
                </div>
              </motion.a>

              <motion.a
                href="https://www.instagram.com/sadguru_digital_nandurbar/?hl=en"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-start gap-3 sm:gap-4 group p-3 sm:p-4 rounded-xl bg-card hover:bg-secondary/50 transition-all"
                whileHover={{ x: 5 }}
              >
                <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-accent/10 flex items-center justify-center flex-shrink-0 group-hover:bg-accent group-hover:scale-110 transition-all">
                  <Instagram size={20} className="sm:w-6 sm:h-6 text-accent group-hover:text-accent-foreground transition-colors" />
                </div>
                <div className="min-w-0 flex-1">
                  <p className="text-xs sm:text-sm text-muted-foreground mb-1">Instagram</p>
                  <p className="font-display text-sm sm:text-base md:text-lg group-hover:text-accent transition-colors break-words">
                    @sadguru_digital_nandurbar
                  </p>
                </div>
              </motion.a>

              <motion.div
                className="flex items-start gap-3 sm:gap-4 p-3 sm:p-4 rounded-xl bg-card"
                whileHover={{ x: 5 }}
              >
                <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-accent/10 flex items-center justify-center flex-shrink-0">
                  <MapPin size={20} className="sm:w-6 sm:h-6 text-accent" />
                </div>
                <div className="min-w-0 flex-1">
                  <p className="text-xs sm:text-sm text-muted-foreground mb-1">Studio Location</p>
                  <p className="font-display text-sm sm:text-base md:text-lg">
                    Sadguru Digital
                  </p>
                  <p className="text-xs sm:text-sm text-muted-foreground mt-1 break-words">
                    Shop No. 108, Sairachana Plaza, Bus Stand Complex, Near Sadguru Computer & Minai Cyber Cafe, Nandurbar
                  </p>
                </div>
              </motion.div>
            </div>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="border border-border rounded-xl p-4 sm:p-6 bg-gradient-to-br from-accent/5 to-transparent"
            >
              <h3 className="font-display text-base sm:text-lg mb-2 sm:mb-3 flex items-center gap-2">
                <motion.div
                  animate={{ rotate: [0, 15, -15, 0] }}
                  transition={{ duration: 2, repeat: Infinity }}
                >
                  <Camera size={18} className="sm:w-5 sm:h-5 text-accent" />
                </motion.div>
                Response Time
              </h3>
              <p className="text-muted-foreground text-xs sm:text-sm">
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
            <div className="bg-card border border-border rounded-2xl p-4 sm:p-6 md:p-8 lg:p-10 shadow-xl">
              <h2 className="font-display text-xl sm:text-2xl mb-4 sm:mb-6 flex items-center gap-2 sm:gap-3">
                <Send size={20} className="sm:w-6 sm:h-6 text-accent" />
                Send a Message
              </h2>

              {isSubmitted ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="flex flex-col items-center justify-center py-12 sm:py-16 text-center"
                >
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ type: "spring", stiffness: 200 }}
                  >
                    <CheckCircle size={48} className="sm:w-16 sm:h-16 text-accent mb-3 sm:mb-4" />
                  </motion.div>
                  <h3 className="font-display text-xl sm:text-2xl mb-2">Thank You!</h3>
                  <p className="text-sm sm:text-base text-muted-foreground px-4">
                    We've received your message and will be in touch soon.
                  </p>
                </motion.div>
              ) : (
                <form
                  action="https://formspree.io/f/mqarrqeq"
                  method="POST"
                  onSubmit={handleSubmit}
                  className="space-y-4 sm:space-y-6"
                >
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="name" className="block text-xs sm:text-sm font-medium mb-1.5 sm:mb-2">
                        Name *
                      </label>
                      <Input
                        id="name"
                        name="name"
                        required
                        className="bg-background border-border rounded-xl h-11 sm:h-12 text-sm sm:text-base focus:ring-2 focus:ring-accent"
                        placeholder="Your name"
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-xs sm:text-sm font-medium mb-1.5 sm:mb-2">
                        Email *
                      </label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        required
                        className="bg-background border-border rounded-xl h-11 sm:h-12 text-sm sm:text-base focus:ring-2 focus:ring-accent"
                        placeholder="your@email.com"
                      />
                    </div>
                  </div>

                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="phone" className="block text-xs sm:text-sm font-medium mb-1.5 sm:mb-2">
                        Phone
                      </label>
                      <Input
                        id="phone"
                        name="phone"
                        type="tel"
                        className="bg-background border-border rounded-xl h-11 sm:h-12 text-sm sm:text-base focus:ring-2 focus:ring-accent"
                        placeholder="+91 12345 67890"
                      />
                    </div>
                    <div>
                      <label htmlFor="service" className="block text-xs sm:text-sm font-medium mb-1.5 sm:mb-2">
                        Service Interest
                      </label>
                      <select
                        id="service"
                        name="service"
                        className="w-full h-11 sm:h-12 px-3 sm:px-4 bg-background border border-border rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-accent"
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
                    <label htmlFor="message" className="block text-xs sm:text-sm font-medium mb-1.5 sm:mb-2">
                      Message *
                    </label>
                    <Textarea
                      id="message"
                      name="message"
                      required
                      rows={5}
                      placeholder="Tell us about your project..."
                      className="bg-background border-border rounded-xl resize-none text-sm sm:text-base focus:ring-2 focus:ring-accent"
                    />
                  </div>

                  <Button
                    type="submit"
                    variant="hero"
                    size="lg"
                    className="w-full h-12 sm:h-14 text-sm sm:text-base"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? (
                      <motion.div
                        animate={{ rotate: 360 }}
                        transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                      >
                        <Aperture size={18} className="sm:w-5 sm:h-5" />
                      </motion.div>
                    ) : (
                      <>
                        Send Message
                        <Send size={16} className="sm:w-[18px] sm:h-[18px]" />
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