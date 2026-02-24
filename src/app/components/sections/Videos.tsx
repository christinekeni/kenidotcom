import { motion } from "motion/react";
import { Play } from "lucide-react";
import { useState, useEffect } from "react";

const videoIds = [
  "Xk5HCNf-l4Y",
  "Hk0-NdvGnmI",
  "tzTEccMQ6jk",
  "vjbjai4O3xU"
];

interface VideoData {
  id: number;
  youtubeId: string;
  title: string;
}

export function Videos() {
  const [activeVideo, setActiveVideo] = useState<number | null>(null);
  const [videos, setVideos] = useState<VideoData[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchVideoTitles() {
      try {
        const videosData = await Promise.all(
          videoIds.map(async (id, index) => {
            const response = await fetch(
              `https://www.youtube.com/oembed?url=https://www.youtube.com/watch?v=${id}&format=json`
            );
            const data = await response.json();
            return {
              id: index + 1,
              youtubeId: id,
              title: data.title,
            };
          })
        );
        setVideos(videosData);
      } catch (error) {
        console.error("Error fetching video titles:", error);
        setVideos(videoIds.map((id, index) => ({
          id: index + 1,
          youtubeId: id,
          title: `Video ${index + 1}`,
        })));
      } finally {
        setLoading(false);
      }
    }

    fetchVideoTitles();
  }, []);

  if (loading) {
    return (
      <section id="videos" className="py-32 bg-background text-foreground relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="font-serif text-5xl md:text-7xl font-bold mb-16 text-center text-primary">
            Visuals
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16">
            {[1, 2, 3, 4].map((i) => (
              <div key={i} className={`relative ${i % 2 !== 0 ? 'md:mt-24' : ''}`}>
                <div className="rounded-2xl aspect-video bg-muted animate-pulse" />
                <div className="mt-6 h-8 w-3/4 bg-muted rounded animate-pulse mx-auto md:mx-0" />
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  }

  return (
    <section id="videos" className="py-32 bg-background text-foreground relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="font-serif text-5xl md:text-7xl font-bold mb-16 text-center text-primary"
        >
          Visuals
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16">
          {videos.map((video, i) => (
            <motion.div
              key={video.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ margin: "-50px" }}
              transition={{ duration: 0.6, delay: i * 0.15, ease: "easeOut" }}
              className={`relative group ${i % 2 !== 0 ? 'md:mt-24' : ''}`}
            >
              <div 
                className="relative overflow-hidden rounded-2xl aspect-video cursor-pointer shadow-2xl border border-border hover:border-primary transition-colors"
                onClick={() => setActiveVideo(video.id)}
              >
                {activeVideo === video.id ? (
                  <iframe
                    className="absolute inset-0 w-full h-full"
                    src={`https://www.youtube.com/embed/${video.youtubeId}?autoplay=1&modestbranding=1&rel=0`}
                    title={video.title}
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  />
                ) : (
                  <>
                    <img
                      src={`https://img.youtube.com/vi/${video.youtubeId}/maxresdefault.jpg`}
                      alt={video.title}
                      className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                      onError={(e) => {
                        (e.target as HTMLImageElement).src = `https://img.youtube.com/vi/${video.youtubeId}/hqdefault.jpg`;
                      }}
                    />
                    <div className="absolute inset-0 bg-foreground/30 group-hover:bg-foreground/50 transition-colors flex items-center justify-center">
                      <div className="w-16 h-16 bg-background/20 backdrop-blur-sm rounded-full flex items-center justify-center group-hover:bg-primary transition-all group-hover:scale-125">
                        <Play fill="currentColor" size={24} className="text-background ml-1 group-hover:text-primary-foreground" />
                      </div>
                    </div>
                  </>
                )}
              </div>
              <div className="mt-6">
                <h3 className="font-serif text-2xl font-medium tracking-wide text-foreground text-center md:text-left">
                  {video.title}
                </h3>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
      
      {/* Decorative Elements */}
      <div className="absolute top-1/2 left-0 w-full h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent transform -rotate-12 pointer-events-none" />
      
      {/* Accent dots */}
      <div className="absolute top-20 left-10 w-2 h-2 bg-accent rounded-full opacity-50 animate-pulse" />
      <div className="absolute bottom-20 right-10 w-3 h-3 bg-secondary rounded-full opacity-30 animate-pulse delay-1000" />
    </section>
  );
}