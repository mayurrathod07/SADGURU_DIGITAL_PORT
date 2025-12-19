import { motion } from "framer-motion";
import { Camera } from "lucide-react";

export const CameraAnimation = () => {
  return (
    <div className="relative w-40 h-40 md:w-52 md:h-52">
      {/* Outer glow ring */}
      <motion.div
        className="absolute inset-0 rounded-full"
        style={{
          background: "radial-gradient(circle, hsl(var(--accent) / 0.15) 0%, transparent 70%)",
        }}
        animate={{ scale: [1, 1.1, 1], opacity: [0.5, 0.8, 0.5] }}
        transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
      />

      {/* Lens rings */}
      <motion.div
        className="absolute inset-4 rounded-full border-2 border-accent/30"
        animate={{ rotate: 360 }}
        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
      />
      <motion.div
        className="absolute inset-8 rounded-full border border-accent/20"
        animate={{ rotate: -360 }}
        transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
      />

      {/* Aperture blades simulation */}
      <div className="absolute inset-10 flex items-center justify-center">
        {[0, 45, 90, 135, 180, 225, 270, 315].map((rotation) => (
          <motion.div
            key={rotation}
            className="absolute w-full h-0.5 bg-gradient-to-r from-transparent via-accent/40 to-transparent"
            style={{ transform: `rotate(${rotation}deg)` }}
            animate={{ opacity: [0.3, 0.6, 0.3] }}
            transition={{ duration: 2, repeat: Infinity, delay: rotation / 360 }}
          />
        ))}
      </div>

      {/* Camera body */}
      <motion.div
        className="absolute inset-0 flex items-center justify-center"
        animate={{ scale: [1, 1.02, 1] }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
      >
        <div className="relative">
          {/* Lens focus animation */}
          <motion.div
            className="absolute -inset-6 rounded-full border-2 border-dashed border-accent/30"
            animate={{ 
              scale: [1, 0.85, 1],
              rotate: [0, 180, 360]
            }}
            transition={{ 
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
          
          {/* Glow behind camera */}
          <motion.div
            className="absolute -inset-4 bg-accent/10 rounded-full blur-xl"
            animate={{ 
              opacity: [0.3, 0.6, 0.3],
              scale: [0.9, 1.1, 0.9]
            }}
            transition={{ duration: 3, repeat: Infinity }}
          />
          
          {/* Camera icon with click animation */}
          <motion.div
            animate={{ 
              scale: [1, 0.95, 1],
            }}
            transition={{ 
              duration: 0.15,
              repeat: Infinity,
              repeatDelay: 3.85,
              ease: "easeInOut"
            }}
          >
            <Camera className="w-16 h-16 md:w-20 md:h-20 text-accent relative z-10" />
          </motion.div>
        </div>
      </motion.div>

      {/* Shutter flash effect */}
      <motion.div
        className="absolute inset-0 rounded-full bg-background"
        animate={{ 
          opacity: [0, 0, 0.8, 0],
          scale: [0.8, 0.8, 1.2, 1.2]
        }}
        transition={{ 
          duration: 0.4,
          repeat: Infinity,
          repeatDelay: 3.6,
          times: [0, 0.3, 0.5, 1]
        }}
      />

      {/* Click indicator ring */}
      <motion.div
        className="absolute inset-0 rounded-full border-2 border-accent"
        animate={{ 
          opacity: [0, 0, 0.8, 0],
          scale: [0.6, 0.6, 1.3, 1.5]
        }}
        transition={{ 
          duration: 0.6,
          repeat: Infinity,
          repeatDelay: 3.4,
          times: [0, 0.3, 0.5, 1]
        }}
      />

      {/* Focus corner brackets */}
      {[
        { top: "15%", left: "15%", rotate: 0 },
        { top: "15%", right: "15%", rotate: 90 },
        { bottom: "15%", right: "15%", rotate: 180 },
        { bottom: "15%", left: "15%", rotate: 270 },
      ].map((pos, i) => (
        <motion.div
          key={i}
          className="absolute w-4 h-4 border-l-2 border-t-2 border-accent/60"
          style={{ 
            ...pos, 
            transform: `rotate(${pos.rotate}deg)`,
          }}
          animate={{ 
            opacity: [0.4, 1, 0.4],
            scale: [1, 1.1, 1]
          }}
          transition={{ 
            duration: 2,
            repeat: Infinity,
            delay: i * 0.2
          }}
        />
      ))}
    </div>
  );
};
