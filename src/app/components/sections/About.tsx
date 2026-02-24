import { motion, useScroll, useTransform } from "motion/react";
import { useRef } from "react";
import aboutImage from "../../../assets/keni2.jpg";

export function About() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], ["-20%", "20%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.5, 1], [0.5, 1, 0.5]);

  return (
    <section id="about" ref={ref} className="relative min-h-screen flex items-center overflow-hidden py-32">
      {/* Parallax Background */}
      <motion.div 
        className="absolute inset-0 z-0"
        style={{ y }}
      >
        <img
          src={aboutImage}
          alt="Keni - Portrait"
          className="w-full h-full object-cover object-[center_60%] brightness-50"
        />
        <div className="absolute inset-0 bg-foreground/40 mix-blend-multiply" />
      </motion.div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-center">
        <motion.div 
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="bg-background/60 backdrop-blur-md p-12 md:p-16 rounded-tl-[100px] rounded-br-[100px] shadow-2xl relative"
        >
          <span className="absolute -top-10 -left-10 text-[10rem] font-serif text-primary/20 leading-none select-none">“</span>
          
          
          <div className="space-y-6 font-sans text-foreground/80 text-lg leading-relaxed">
            <p>
              Keni is a singer and songwriter based in Nairobi, Kenya. Above all else, she views herself as a storyteller, using music to capture the experiences and rhythms of life in East Africa.
            </p>
            
            <p>
              Her sound is a mix of various African influences, drawing inspiration from Reggae, Rhumba, Afrobeats, Highlife and a wide range of continental sounds. By blending these styles with modern Pop, Keni creates music that is both fresh and rooted in the continent's musical heritage.
            </p>
            
            <p>
              Following the release of her debut single, "Mzungu Man", Keni continues to focus on crafting songs that prioritize narrative and groove. Whether she's on stage or in the studio, her goal is to keep the story at the center of the music.
            </p>
          </div>

          <div className="flex items-center gap-4 mt-8">
            <div className="h-px bg-primary flex-1" />
            <span className="font-serif italic text-foreground font-medium">Nairobi, Kenya</span>
          </div>
        </motion.div>

        <div className="relative h-full flex flex-col justify-center text-right text-background">
          <motion.h3 
            style={{ opacity }}
            className="font-serif text-[5rem] md:text-[8rem] leading-[0.8] opacity-80 mix-blend-overlay"
          >
            AT A GLANCE
          </motion.h3>
        </div>
      </div>
    </section>
  );
}