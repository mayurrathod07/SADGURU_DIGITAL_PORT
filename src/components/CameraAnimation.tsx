import { motion } from "framer-motion";
import { Camera, Aperture, Focus } from "lucide-react";

export const CameraAnimation = () => {
  return (
    <div className="relative w-32 h-32 md:w-40 md:h-40">
      {/* Outer ring */}
      <motion.div
        animate={{ rotate: 360 }}
        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
        className="absolute inset-0 rounded-full border-2 border-dashed border-accent/30"
      />
      
      {/* Middle ring with aperture effect */}
      <motion.div
        animate={{ rotate: -360 }}
        transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
        className="absolute inset-4 rounded-full border border-accent/50 flex items-center justify-center"
      >
        <motion.div
          animate={{ scale: [1, 1.1, 1] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <Aperture className="w-6 h-6 text-accent/60" />
        </motion.div>
      </motion.div>

      {/* Camera icon center */}
      <motion.div
        className="absolute inset-0 flex items-center justify-center"
        animate={{ scale: [1, 1.05, 1] }}
        transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
      >
        <div className="relative">
          <motion.div
            animate={{ opacity: [0.5, 1, 0.5] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="absolute -inset-4 bg-accent/10 rounded-full blur-xl"
          />
          <Camera className="w-12 h-12 md:w-16 md:h-16 text-accent relative z-10" />
        </div>
      </motion.div>

      {/* Focus points */}
      {[0, 90, 180, 270].map((rotation, i) => (
        <motion.div
          key={rotation}
          className="absolute"
          style={{
            top: "50%",
            left: "50%",
            transform: `rotate(${rotation}deg) translateY(-60px)`,
          }}
          animate={{ opacity: [0.3, 1, 0.3] }}
          transition={{ duration: 1.5, repeat: Infinity, delay: i * 0.3 }}
        >
          <Focus className="w-3 h-3 text-accent" />
        </motion.div>
      ))}

      {/* Shutter flash effect */}
      <motion.div
        className="absolute inset-0 rounded-full bg-white"
        animate={{ opacity: [0, 0.3, 0] }}
        transition={{ duration: 0.5, repeat: Infinity, repeatDelay: 4 }}
      />
    </div>
  );
};
