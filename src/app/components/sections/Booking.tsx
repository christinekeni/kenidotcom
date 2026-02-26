import { motion } from "motion/react";
import { Send } from "lucide-react";
import { useRef, useState } from "react";
import emailjs from '@emailjs/browser';

export function Booking() {
  const formRef = useRef<HTMLFormElement>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle");

  const sendEmail = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus("idle");

    // Initialize EmailJS with your public key
    emailjs.init("zmeHGDmYKyXdFDy01"); // Replace with your actual public key

    emailjs.sendForm(
      'service_vh75vqu',      // Replace with your EmailJS service ID
      'template_99t9io8',     // Replace with your EmailJS template ID
      formRef.current!,
      'zmeHGDmYKyXdFDy01'       // Replace with your public key
    )
    .then((result) => {
      console.log('Email sent successfully:', result.text);
      setSubmitStatus("success");
      if (formRef.current) {
        formRef.current.reset();
      }
    })
    .catch((error) => {
      console.error('Email sending failed:', error.text);
      setSubmitStatus("error");
    })
    .finally(() => {
      setIsSubmitting(false);
    });
  };

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

        <form 
          ref={formRef}
          onSubmit={sendEmail}
          className="bg-card p-10 md:p-16 rounded-[3rem] shadow-2xl border border-foreground/5 relative overflow-hidden group"
        >
          <div className="absolute top-0 right-0 w-32 h-32 bg-primary/10 rounded-full blur-3xl transform translate-x-10 -translate-y-10 group-hover:bg-primary/20 transition-colors" />

          <div className="grid md:grid-cols-2 gap-8 mb-8">
            <div>
              <label htmlFor="name" className="block text-foreground font-serif text-lg mb-2 pl-4">Full Name</label>
              <input 
                type="text" 
                id="name" 
                name="name"
                required
                className="w-full bg-background border border-foreground/10 rounded-full px-6 py-4 focus:outline-none focus:border-primary transition-colors font-sans text-foreground placeholder:text-foreground/50"
                placeholder="Ex. Amara Okafor"
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-foreground font-serif text-lg mb-2 pl-4">Email Address</label>
              <input 
                type="email" 
                id="email" 
                name="email"
                required
                className="w-full bg-background border border-foreground/10 rounded-full px-6 py-4 focus:outline-none focus:border-primary transition-colors font-sans text-foreground placeholder:text-foreground/50"
                placeholder="you@example.com"
              />
            </div>
          </div>

          <div className="mb-8">
            <label className="block text-foreground font-serif text-lg mb-2 pl-4">Inquiry Type</label>
            <div className="flex flex-wrap gap-4">
              {["Performance", "Brand Collaboration", "Media/Press", "Private Event"].map((type) => (
                <label key={type} className="flex items-center gap-2 cursor-pointer group/radio">
                  <input 
                    type="radio" 
                    name="inquiry_type" 
                    value={type}
                    className="hidden peer" 
                    required
                  />
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
              name="message"
              rows={4}
              required
              className="w-full bg-background border border-foreground/10 rounded-3xl px-6 py-4 focus:outline-none focus:border-primary transition-colors font-sans resize-none text-foreground placeholder:text-foreground/50"
              placeholder="Tell us about the opportunity..."
            />
          </div>

          {/* Status Messages */}
          {submitStatus === "success" && (
            <motion.div 
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              className="mb-6 p-4 bg-green-500/10 border border-green-500 rounded-2xl text-center text-green-600 font-medium"
            >
              Thank you! Your inquiry has been sent to christinewkeni@gmail.com. We'll get back to you soon.
            </motion.div>
          )}

          {submitStatus === "error" && (
            <motion.div 
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              className="mb-6 p-4 bg-red-500/10 border border-red-500 rounded-2xl text-center text-red-600 font-medium"
            >
              Something went wrong. Please try again or email us directly at christinewkeni@gmail.com
            </motion.div>
          )}

          <div className="text-center">
            <motion.button 
              type="submit"
              disabled={isSubmitting}
              whileHover={{ scale: isSubmitting ? 1 : 1.02 }}
              whileTap={{ scale: isSubmitting ? 1 : 0.98 }}
              className={`inline-flex items-center gap-3 px-10 py-5 bg-foreground text-background rounded-full font-serif text-xl hover:bg-primary hover:text-foreground transition-colors relative overflow-hidden shadow-xl ${
                isSubmitting ? "opacity-50 cursor-not-allowed" : ""
              }`}
            >
              <span className="relative z-10 font-bold tracking-wide">
                {isSubmitting ? "Sending..." : "Send Request"}
              </span>
              <motion.div 
                className="relative z-10"
                animate={{ rotate: isSubmitting ? 360 : 0 }}
                transition={{ repeat: isSubmitting ? Infinity : 0, duration: 2, ease: "linear" }}
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