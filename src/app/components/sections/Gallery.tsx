import { motion } from "motion/react";
import Masonry, { ResponsiveMasonry } from "react-responsive-masonry";
import { Instagram } from "lucide-react";

const images = [
  "https://images.unsplash.com/photo-1702384902092-54f5dc4830d0?q=80&w=1080&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1757140447779-9cffcc270104?q=80&w=1080&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1704253797699-f983e3cd70ff?q=80&w=1080&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1712189142408-39a2e77645d9?q=80&w=1080&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1770737639812-bd3c709da73b?q=80&w=1080&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1642426028488-04f91c79d233?q=80&w=1080&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1611578490626-d4bacc1215be?q=80&w=1080&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1573316494404-0b90c43f4f03?q=80&w=1080&auto=format&fit=crop",
];

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
            The Life
          </h2>
          <p className="font-sans text-primary uppercase tracking-widest text-sm font-medium">
            On & Off Stage
          </p>
        </motion.div>

        <ResponsiveMasonry
          columnsCountBreakPoints={{ 350: 1, 750: 2, 900: 3 }}
        >
          <Masonry gutter="24px">
            {images.map((image, i) => (
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
                  alt={`Gallery image ${i + 1}`}
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
            href="https://instagram.com"
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