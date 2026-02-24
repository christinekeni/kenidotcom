import { Outlet } from "react-router-dom";
import { Navbar } from "./Navbar";
import { Footer } from "./Footer";

export function Layout() {
  return (
    <div className="bg-background text-foreground font-sans overflow-x-hidden min-h-screen flex flex-col">
      <style>{`
        :root {
          --font-serif: 'Playfair Display', serif;
          --font-sans: 'Montserrat', sans-serif;
        }
        .font-serif { font-family: var(--font-serif) !important; }
        .font-sans { font-family: var(--font-sans) !important; }
        h1, h2, h3, h4, h5, h6 { font-family: var(--font-serif) !important; }
        body, p, a, span, button, input, textarea, label { font-family: var(--font-sans); }
        html { scroll-behavior: smooth; }
        ::selection { background: #FF0066; color: #E8D4B7; }
      `}</style>
      
      <Navbar />
      
      <main className="flex-grow">
        <Outlet /> {/* This is where your page components will render */}
      </main>
      
      <Footer />
    </div>
  );
}