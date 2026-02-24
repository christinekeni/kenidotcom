import { Instagram, Twitter, Youtube } from "lucide-react";
import { SiTiktok, SiApplemusic, SiSpotify } from "react-icons/si";

export function Footer() {
  const socialLinks = [
    {
      Icon: Instagram,
      href: "https://instagram.com/ChristineKeni",
      label: "Instagram"
    },
    {
      Icon: SiTiktok,
      href: "https://tiktok.com/@ChristineKeni",
      label: "TikTok"
    },
    {
      Icon: Twitter,
      href: "https://x.com/ChristineKeni",
      label: "X (Twitter)"
    },
    {
      Icon: Youtube,
      href: "https://www.youtube.com/@ChristineKeni",
      label: "YouTube"
    },
    {
      Icon: SiApplemusic,
      href: "https://music.apple.com/ke/artist/keni/1871144365",
      label: "Apple Music"
    },
    {
      Icon: SiSpotify,
      href: "https://open.spotify.com/artist/21LJ42jv6U2xp8xLROCAME?si=_njTOw6BSRGLyS8dsEwqAQ",
      label: "Spotify"
    }
  ];

  return (
    <footer className="bg-foreground text-background py-16 border-t border-primary/20 relative overflow-hidden">
      <div className="absolute inset-0 z-0">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-gradient-to-r from-foreground via-foreground to-foreground opacity-80" />
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10 flex flex-col md:flex-row justify-between items-center gap-8">
        <div className="text-center md:text-left">
          <h2 className="font-serif text-3xl font-bold mb-2">KENI</h2>
          <p className="font-sans text-primary/70 text-sm tracking-widest uppercase">
            © 2026 Wendo Works. All Rights Reserved.
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-4">
          {socialLinks.map(({ Icon, href, label }) => (
            <a 
              key={label}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={label}
              className="p-3 bg-background/10 rounded-full hover:bg-primary hover:text-foreground transition-all transform hover:scale-110 hover:rotate-6"
            >
              <Icon size={20} />
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}