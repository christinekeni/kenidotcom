import { motion } from "motion/react";
import { Send } from "lucide-react";

export function Booking() {
  return (
    <section id="booking" className="py-24 bg-background relative overflow-hidden">
      <div className="max-w-4xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="font-serif text-5xl md:text-6xl text-foreground mb-4">Book Keni</h2>
          
        </motion.div>

        <form className="bg-card p-10 md:p-16 rounded-[3rem] shadow-2xl border border-foreground/5 relative overflow-hidden group">
          <div className="absolute top-0 right-0 w-32 h-32 bg-primary/10 rounded-full blur-3xl transform translate-x-10 -translate-y-10 group-hover:bg-primary/20 transition-colors" />

          <div className="grid md:grid-cols-2 gap-8 mb-8">
            <div>
              <label htmlFor="name" className="block text-foreground font-serif text-lg mb-2 pl-4">Full Name</label>
              <input 
                type="text" 
                id="name" 
                className="w-full bg-background border border-foreground/10 rounded-full px-6 py-4 focus:outline-none focus:border-primary transition-colors font-sans text-foreground placeholder:text-foreground/50"
                placeholder="Ex. Amara Okafor"
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-foreground font-serif text-lg mb-2 pl-4">Email Address</label>
              <input 
                type="email" 
                id="email" 
                className="w-full bg-background border border-foreground/10 rounded-full px-6 py-4 focus:outline-none focus:border-primary transition-colors font-sans text-foreground placeholder:text-foreground/50"
                placeholder="you@example.com"
              />
            </div>
          </div>

          <div className="mb-8">
            <label htmlFor="interest" className="block text-foreground font-serif text-lg mb-2 pl-4">Inquiry Type</label>
            <div className="flex flex-wrap gap-4">
              {["Performance", "Brand Collaboration", "Media/Press", "Private Event"].map((type) => (
                <label key={type} className="flex items-center gap-2 cursor-pointer group/radio">
                  <input type="radio" name="interest" className="hidden peer" />
                  <span className="px-6 py-3 rounded-full border border-foreground/20 text-foreground peer-checked:bg-foreground peer-checked:text-background transition-all font-medium font-sans text-sm hover:border-foreground">
                    {type}
                  </span>
                </label>
              ))}
            </div>
          </div>

          <div className="mb-12">
            <label htmlFor="message" className="block text-foreground font-serif text-lg mb-2 pl-4">Your Message</label>
            <textarea 
              id="message" 
              rows={4}
              className="w-full bg-background border border-foreground/10 rounded-3xl px-6 py-4 focus:outline-none focus:border-primary transition-colors font-sans resize-none text-foreground placeholder:text-foreground/50"
              placeholder="Tell us about the opportunity..."
            />
          </div>

          <div className="text-center">
            <motion.button 
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="inline-flex items-center gap-3 px-10 py-5 bg-foreground text-background rounded-full font-serif text-xl hover:bg-primary hover:text-foreground transition-colors relative overflow-hidden shadow-xl"
            >
              <span className="relative z-10 font-bold tracking-wide">Send Request</span>
              <motion.div 
                className="relative z-10"
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ repeat: Infinity, duration: 1.5 }}
              >
                <Send size={20} />
              </motion.div>
            </motion.button>
          </div>
        </form>
      </div>
    </section>
  );
}