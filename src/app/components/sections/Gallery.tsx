import { motion } from "motion/react";
import Masonry, { ResponsiveMasonry } from "react-responsive-masonry";
import { Instagram } from "lucide-react";

// Import all images
import keni1 from "../../../assets/keni1.jpg";
import keni2 from "../../../assets/keni2.jpg";
import keni3 from "../../../assets/keni3.jpg";
import keni4 from "../../../assets/keni4.jpg";
import keni5 from "../../../assets/keni5.jpg";
import keni6 from "../../../assets/keni6.jpg";
import keni7 from "../../../assets/keni7.jpg";
import keni8 from "../../../assets/keni8.jpg";
import keni9 from "../../../assets/keni9.jpg";

// Function to shuffle array (Fisher-Yates algorithm)
const shuffleArray = <T,>(array: T[]): T[] => {
  const shuffled = [...array];
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }
  return shuffled;
};

// Create array of imported images
const imageImports = [keni1, keni2, keni3, keni4, keni5, keni6, keni7, keni8, keni9];

// Shuffle the images
const shuffledImages = shuffleArray(imageImports);

export function Gallery() {
  return (
    <section id="gallery" className="py-24 bg-background relative z-10">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="font-serif text-5xl md:text-6xl text-foreground mb-4 font-bold tracking-wide">
            Lookbook
          </h2>
          <p className="font-sans text-primary uppercase tracking-widest text-sm font-medium">
            On & Off Stage
          </p>
        </motion.div>

        <ResponsiveMasonry
          columnsCountBreakPoints={{ 350: 1, 750: 2, 900: 3 }}
        >
          <Masonry gutter="24px">
            {shuffledImages.map((image, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                viewport={{ once: true }}
                className="relative group overflow-hidden rounded-xl mb-6"
              >
                <img
                  src={image}
                  alt={`Keni - Gallery image ${i + 1}`}
                  className="w-full h-auto block object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 border-[3px] border-primary opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-xl pointer-events-none z-10" />
                <div className="absolute inset-0 bg-black/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </motion.div>
            ))}
          </Masonry>
        </ResponsiveMasonry>

        <div className="text-center mt-16">
          <motion.a
            href="https://instagram.com/ChristineKeni"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-flex items-center gap-3 px-8 py-4 border-2 border-primary text-primary rounded-full font-serif text-lg hover:bg-primary hover:text-primary-foreground transition-all duration-300"
          >
            <Instagram size={20} />
            <span className="font-bold tracking-wide font-serif">View More on Instagram</span>
          </motion.a>
        </div>
      </div>
    </section>
  );
}