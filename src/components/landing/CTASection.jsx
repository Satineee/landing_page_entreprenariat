import { motion } from "framer-motion";
import { useState } from "react";
import { Mail, Sprout } from "lucide-react";

export default function CTASection() {
  const [email, setEmail] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle email submission here
    setIsSubmitted(true);
    setTimeout(() => {
      setEmail("");
      setIsSubmitted(false);
    }, 3000);
  };

  return (
    <section id="cta" className="py-24 md:py-32 px-6">
      <div className="max-w-2xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <div className="flex items-center justify-center gap-3 mb-6">
            <Sprout className="w-10 h-10 text-primary" />
            <h2 className="font-heading text-3xl md:text-4xl text-foreground">
              Le Grenier ouvre bientôt à Québec
            </h2>
          </div>

          <p className="font-body text-lg text-muted-foreground mb-10 leading-relaxed">
            Soyez parmi les premiers informés de notre ouverture et recevez une offre exclusive pour vos premiers achats en vrac.
          </p>

          <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 mb-6 max-w-xl mx-auto">
            <div className="flex-1 relative min-w-0">
              <div className="absolute left-4 top-1/2 -translate-y-1/2 text-muted-foreground">
                <Mail className="w-5 h-5" />
              </div>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Votre adresse courriel"
                required
                className="w-full pl-12 pr-5 py-3 bg-card border border-border/50 rounded-lg text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all duration-300"
              />
            </div>
            <button
              type="submit"
              className="px-6 py-3 bg-primary hover:bg-primary/90 text-primary-foreground font-body font-semibold rounded-lg transition-all duration-300 whitespace-nowrap hover:shadow-lg"
            >
              {isSubmitted ? "✓ Inscrit!" : "Je veux en savoir plus"}
            </button>
          </form>

          <p className="font-body text-sm text-muted-foreground">
            Pas de spam — juste l'essentiel, quand ça compte.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
