import { motion } from "motion/react";
import heroImage from "../../../assets/keni4.jpg";

export function Hero() {
  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden pt-32">
      {/* Background Image with Parallax/Zoom Effect */}
      <motion.div
        className="absolute inset-0 z-0"
        initial={{ scale: 1.2, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 2.5, ease: "easeOut" }}
        style={{
          backgroundImage: `url(${heroImage})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center 70%',
          backgroundRepeat: 'no-repeat'
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-t from-foreground/80 via-transparent to-transparent z-10" />
      </motion.div>

      {/* Content */}
      <div className="relative z-20 text-center px-4 max-w-5xl mx-auto flex flex-col items-center">
        <motion.h1
          className="font-serif text-[15vw] leading-[0.8] text-background mix-blend-overlay opacity-90 tracking-tight"
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1, delay: 0.5, ease: "easeOut" }}
        >
          KENI
        </motion.h1>
        
        <motion.p
          className="mt-8 font-sans text-xl md:text-2xl text-primary font-medium tracking-widest uppercase"
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 1, ease: "easeOut" }}
        >
          Singer / Songwriter
        </motion.p>
      </div>
      
      {/* Scroll Indicator */}
      <motion.div 
        className="absolute bottom-10 left-1/2 -translate-x-1/2 z-20 text-background/70"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
      >
        <span className="text-xs uppercase tracking-widest mb-2 block text-center">Scroll</span>
        <div className="w-[1px] h-12 bg-current mx-auto" />
      </motion.div>
    </section>
  );
}