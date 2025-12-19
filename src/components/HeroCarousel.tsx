import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import heroImage from "@/assets/hero-landscape.jpg";
import droneImage from "@/assets/drone-coastal.jpg";
import weddingImage from "@/assets/wedding-portrait.jpg";
import realestateImage from "@/assets/drone-realestate.jpg";
import eventImage from "@/assets/event-photo.jpg";
import productImage from "@/assets/product-photo.jpg";

const slides = [
  { 
    image: heroImage, 
    title: "Capturing Stories", 
    subtitle: "From Every Angle",
    description: "Professional photography and certified drone services"
  },
  { 
    image: weddingImage, 
    title: "Wedding Moments", 
    subtitle: "Forever Preserved",
    description: "Capturing your special day with elegance"
  },
  { 
    image: droneImage, 
    title: "Aerial Excellence", 
    subtitle: "Sky-High Perspectives",
    description: "Stunning drone photography and videography"
  },
  { 
    image: realestateImage, 
    title: "Real Estate", 
    subtitle: "Property Showcase",
    description: "Professional property photography"
  },
  { 
    image: eventImage, 
    title: "Event Coverage", 
    subtitle: "Every Moment Matters",
    description: "Complete event documentation"
  },
  { 
    image: productImage, 
    title: "Product Photography", 
    subtitle: "Make It Shine",
    description: "Professional product imaging"
  },
];

export const HeroCarousel = () => {
  const [current, setCurrent] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  const next = useCallback(() => {
    setCurrent((c) => (c + 1) % slides.length);
  }, []);

  const prev = useCallback(() => {
    setCurrent((c) => (c - 1 + slides.length) % slides.length);
  }, []);

  const goTo = useCallback((index: number) => {
    setCurrent(index);
    setIsAutoPlaying(false);
    setTimeout(() => setIsAutoPlaying(true), 10000);
  }, []);

  useEffect(() => {
    if (!isAutoPlaying) return;
    const timer = setInterval(next, 5000);
    return () => clearInterval(timer);
  }, [isAutoPlaying, next]);

  return (
    <div className="relative w-full h-screen overflow-hidden">
      <AnimatePresence mode="wait">
        <motion.div
          key={current}
          initial={{ opacity: 0, scale: 1.05 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="absolute inset-0"
        >
          <img
            src={slides[current].image}
            alt={slides[current].title}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-background/95 via-background/60 to-background/30 dark:from-background/98 dark:via-background/70 dark:to-background/40" />
        </motion.div>
      </AnimatePresence>

      {/* Content Overlay */}
      <div className="absolute inset-0 flex items-center section-padding">
        <div className="max-w-7xl mx-auto w-full">
          <AnimatePresence mode="wait">
            <motion.div
              key={current}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="max-w-2xl"
            >
              <motion.p 
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.4, delay: 0.3 }}
                className="text-sm tracking-[0.3em] uppercase text-accent mb-4"
              >
                Sadguru Digital
              </motion.p>
              <h1 className="font-display text-4xl md:text-6xl lg:text-7xl font-medium leading-tight mb-2">
                {slides[current].title}
              </h1>
              <h2 className="font-display text-3xl md:text-5xl lg:text-6xl italic text-accent mb-6">
                {slides[current].subtitle}
              </h2>
              <p className="text-lg md:text-xl text-muted-foreground max-w-lg mb-8">
                {slides[current].description}
              </p>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>

      {/* Navigation Arrows */}
      <button
        onClick={prev}
        className="absolute left-4 md:left-8 top-1/2 -translate-y-1/2 w-12 h-12 md:w-14 md:h-14 rounded-full bg-background/20 dark:bg-background/40 backdrop-blur-md flex items-center justify-center hover:bg-accent hover:text-accent-foreground transition-all duration-300 border border-border/20"
        aria-label="Previous slide"
      >
        <ChevronLeft size={24} />
      </button>
      <button
        onClick={next}
        className="absolute right-4 md:right-8 top-1/2 -translate-y-1/2 w-12 h-12 md:w-14 md:h-14 rounded-full bg-background/20 dark:bg-background/40 backdrop-blur-md flex items-center justify-center hover:bg-accent hover:text-accent-foreground transition-all duration-300 border border-border/20"
        aria-label="Next slide"
      >
        <ChevronRight size={24} />
      </button>

      {/* Slide Indicators */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex gap-3">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => goTo(index)}
            className={`h-1.5 rounded-full transition-all duration-500 ${
              index === current 
                ? "w-10 bg-accent" 
                : "w-3 bg-foreground/30 hover:bg-foreground/50"
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>

      {/* Progress Bar */}
      <div className="absolute bottom-0 left-0 right-0 h-1 bg-border/20">
        <motion.div
          key={current}
          initial={{ width: "0%" }}
          animate={{ width: "100%" }}
          transition={{ duration: 5, ease: "linear" }}
          className="h-full bg-accent"
        />
      </div>
    </div>
  );
};
