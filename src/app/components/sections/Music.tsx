import { motion } from "motion/react";
import { Music as MusicIcon, Sparkles } from "lucide-react";
import { useState } from "react";

const lyrics = {
  original: [
    "I'm telling you this story just like I heard it",
    "Personally, I would never do this shit",
    "His eyes were blue and his cheeks were pink",
    "He said hello and bought me a drink",
    "He's visiting Nairobi so that means money",
    "And if you're white and broke get away from me",
    "I know my ancestors would cry",
    "But every single time I'm around this guy, I go",
    "",
    "Zunguzunguguzunguzeng, I fell in love with a mzungu man",
    "Zunguzunguguzunguzeng, I fell in love with a mzungu man",
    "Zunguzunguguzunguzeng, I fell in love with a mzungu man",
    "Zunguzunguguzunguzeng, I fell in love with a mzungu man",
    "",
    "Ku shung peng-ah, we met in Karen-ah",
    "It took two weeks to be his girlfriend-ah",
    "He cooks and cleans and he copped me a car",
    "And in 10 years imma have that green card, I go",
    "Ku shung peng, kushushu shung peng",
    "I pay him attention and he pay for me rent",
    "I pay him a visit in the Upper East and",
    "When we get married we'll have mixed children, ah!",
    "",
    "Zunguzunguguzunguzeng, I fell in love with a mzungu man",
    "Zunguzunguguzunguzeng, I fell in love with a mzungu man",
    "Zunguzunguguzunguzeng, I fell in love with a mzungu man",
    "Zunguzunguguzunguzeng, I fell in love with a mzungu man",
    "",
    "I told my friends and they weren't that nice",
    "They asked me what I'm doing with a white guy",
    "They said \"His people might be judgy and his family might criticize\"",
    "But how should I remember when I'm looking into his eyes",
    "I told my father, he told my mama",
    "And when she sees his face there's drama",
    "And I hate to make her cry",
    "But every single time I'm around this guy I go",
    "",
    "Zunguzunguguzunguzeng, I fell in love with a mzungu man",
    "Zunguzunguguzunguzeng, I fell in love with a mzungu man",
    "Zunguzunguguzunguzeng, I fell in love with a mzungu man",
    "Zunguzunguguzunguzeng, I fell in love with a mzungu man"
  ],
  translation: [
    "I'm telling you this story just like I heard it",
    "Personally, I would never do this shit",
    "His eyes were blue and his cheeks were pink",
    "He said hello and bought me a drink",
    "He's visiting Nairobi so that means money",
    "And if you're white and broke get away from me",
    "I know my ancestors would cry",
    "But every single time I'm around this guy, I go",
    "",
    "Zunguzunguguzunguzeng, I fell in love with a white man",
    "Zunguzunguguzunguzeng, I fell in love with a white man",
    "Zunguzunguguzunguzeng, I fell in love with a white man",
    "Zunguzunguguzunguzeng, I fell in love with a white man",
    "",
    "Ku shung peng-ah, we met in Karen-ah",
    "It took two weeks to be his girlfriend-ah",
    "He cooks and cleans and he copped me a car",
    "And in 10 years imma have that green card, I go",
    "Ku shung peng, kushushu shung peng",
    "I pay him attention and he pay for me rent",
    "I pay him a visit in the Upper East and",
    "When we get married we'll have mixed children, ah!",
    "",
    "Zunguzunguguzunguzeng, I fell in love with a white man",
    "Zunguzunguguzunguzeng, I fell in love with a white man",
    "Zunguzunguguzunguzeng, I fell in love with a white man",
    "Zunguzunguguzunguzeng, I fell in love with a white man",
    "",
    "I told my friends and they weren't that nice",
    "They asked me what I'm doing with a white guy",
    "They said \"His people might be judgy and his family might criticize\"",
    "But how should I remember when I'm looking into his eyes",
    "I told my father, he told my mama",
    "And when she sees his face there's drama",
    "And I hate to make her cry",
    "But every single time I'm around this guy I go",
    "",
    "Zunguzunguguzunguzeng, I fell in love with a white man",
    "Zunguzunguguzunguzeng, I fell in love with a white man",
    "Zunguzunguguzunguzeng, I fell in love with a white man",
    "Zunguzunguguzunguzeng, I fell in love with a white man"
  ]
};

export function Music() {
  const [isTranslated, setIsTranslated] = useState(false);

  return (
    <section id="music" className="py-24 bg-background relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-start">
        
        {/* Spotify Player */}
        <motion.div 
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="relative group"
        >
          {/* Latest Release Badge */}
          <div className="absolute -top-4 -left-4 z-30">
            <div className="bg-accent text-accent-foreground px-4 py-2 rounded-full shadow-lg flex items-center gap-2 font-medium">
              <Sparkles size={16} />
              <span className="text-sm uppercase tracking-wider">Latest Release</span>
            </div>
          </div>

          <div className="absolute inset-0 bg-primary rounded-3xl transform rotate-3 scale-105 opacity-20 group-hover:rotate-6 transition-transform duration-500" />
          
          {/* Spotify Embedded Player */}
          <div className="relative rounded-3xl overflow-hidden shadow-2xl bg-card">
            <iframe 
              src="https://open.spotify.com/embed/track/1Nj5vHHP5OsJeBamZx86SP?utm_source=generator&theme=0" 
              width="100%" 
              height="352" 
              frameBorder="0" 
              allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" 
              loading="lazy"
              className="w-full"
            />
          </div>
          
          {/* Track Info (no heart/share buttons) */}
          <div className="mt-8">
            <h3 className="font-serif text-3xl text-foreground font-bold">Mzungu Man</h3>
            <p className="font-sans text-secondary font-medium">Single • 2026</p>
          </div>
        </motion.div>

        {/* Lyrics Card with Hover Translation */}
        <motion.div 
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="relative"
        >
          <div className="mb-8 flex items-center justify-between">
            <h2 className="font-serif text-5xl text-foreground">Mzungu Man</h2>
            <div className="bg-primary/10 px-4 py-2 rounded-full border border-primary/20">
              <span className="text-primary text-sm font-medium flex items-center gap-2">
                <MusicIcon size={14} />
                {isTranslated ? "Showing English Translation" : "Hover to translate to English"}
              </span>
            </div>
          </div>

          <div 
            className="bg-card p-8 rounded-3xl shadow-xl border border-primary/20 relative overflow-hidden max-h-[600px] overflow-y-auto custom-scrollbar cursor-crosshair"
            onMouseEnter={() => setIsTranslated(true)}
            onMouseLeave={() => setIsTranslated(false)}
          >
            <div className="space-y-4 font-sans leading-relaxed whitespace-pre-line relative min-h-[500px]">
              {/* Original Lyrics */}
              <motion.div 
                className="absolute inset-0 px-8"
                animate={{ opacity: isTranslated ? 0 : 1 }}
                transition={{ duration: 0.3 }}
              >
                {lyrics.original.map((line, index) => {
                  if (line === "") {
                    return <div key={index} className="h-4" />;
                  }
                  
                  if (line.includes("Zunguzunguguzunguzeng")) {
                    return (
                      <p key={index} className="text-primary font-medium italic">
                        {line}
                      </p>
                    );
                  }
                  
                  return (
                    <p key={index} className="text-foreground/90">
                      {line}
                    </p>
                  );
                })}
              </motion.div>

              {/* Translated Lyrics */}
              <motion.div 
                className="absolute inset-0 px-8"
                animate={{ opacity: isTranslated ? 1 : 0 }}
                transition={{ duration: 0.3 }}
              >
                {lyrics.translation.map((line, index) => {
                  if (line === "") {
                    return <div key={index} className="h-4" />;
                  }
                  
                  if (line.includes("Zunguzunguguzunguzeng")) {
                    return (
                      <p key={index} className="text-secondary font-medium italic">
                        {line}
                      </p>
                    );
                  }
                  
                  return (
                    <p key={index} className="text-foreground/90">
                      {line}
                    </p>
                  );
                })}
              </motion.div>
            </div>

            {/* Gradient fade at bottom */}
            <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-card to-transparent pointer-events-none" />
          </div>
        </motion.div>

      </div>
    </section>
  );
}