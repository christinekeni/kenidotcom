import { motion } from "motion/react";
import Masonry, { ResponsiveMasonry } from "react-responsive-masonry";
import { Instagram } from "lucide-react";
import { useEffect, useState } from "react";

export function Gallery() {
  const [images, setImages] = useState<string[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Dynamically import all images matching keni* with various extensions
    const loadImages = async () => {
      try {
        // This will match both .jpg and .JPG (case-insensitive)
        const imageModules = import.meta.glob('../../../assets/keni*.{jpg,JPG,jpeg,JPEG}', { 
          eager: true,
          import: 'default'
        });
        
        const imageArray = Object.values(imageModules) as string[];
        
        // Shuffle the array for random order
        const shuffled = [...imageArray].sort(() => Math.random() - 0.5);
        setImages(shuffled);
      } catch (error) {
        console.error("Error loading images:", error);
      } finally {
        setLoading(false);
      }
    };

    loadImages();
  }, []);

  if (loading) {
    return (
      <section id="gallery" className="py-24 bg-background relative z-10">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="font-serif text-5xl md:text-6xl text-foreground mb-4 font-bold tracking-wide">
              Lookbook
            </h2>
            <p className="font-sans text-primary uppercase tracking-widest text-sm font-medium">
              On & Off Stage
            </p>
          </div>
          <div className="grid grid-cols-3 gap-6">
            {[1, 2, 3, 4, 5, 6].map((i) => (
              <div key={i} className="bg-muted rounded-xl animate-pulse h-64" />
            ))}
          </div>
        </div>
      </section>
    );
  }

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

        {images.length > 0 ? (
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
                    alt={`Keni - Gallery image ${i + 1}`}
                    className="w-full h-auto block object-cover transition-transform duration-700 group-hover:scale-105"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 border-[3px] border-primary opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-xl pointer-events-none z-10" />
                  <div className="absolute inset-0 bg-black/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </motion.div>
              ))}
            </Masonry>
          </ResponsiveMasonry>
        ) : (
          <div className="text-center py-12">
            <p className="text-foreground/60 font-sans">No images found in gallery</p>
          </div>
        )}

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