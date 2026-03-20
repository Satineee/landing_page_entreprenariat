import { motion } from "framer-motion";
import { Leaf, Recycle, Heart } from "lucide-react";

const values = [
  {
    icon: Leaf,
    title: "Zéro déchet",
    description: "Apportez vos contenants et remplissez-les avec la quantité exacte dont vous avez besoin."
  },
  {
    icon: Recycle,
    title: "Produits locaux",
    description: "Nous privilégions les producteurs québécois et les circuits courts pour une fraîcheur inégalée."
  },
  {
    icon: Heart,
    title: "Communauté",
    description: "Plus qu'un magasin, un lieu de partage et de sensibilisation au mieux-consommer."
  }
];

export default function AboutSection() {
  return (
    <section id="about" className="py-24 md:py-32 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 gap-16 items-center mb-24">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <p className="font-body text-sm tracking-[0.2em] uppercase text-primary mb-4">Notre philosophie</p>
            <h2 className="font-heading text-4xl md:text-5xl text-foreground leading-tight mb-6">
              Consommer mieux,
              <span className="italic"> simplement.</span>
            </h2>
            <p className="font-body text-muted-foreground text-lg leading-relaxed mb-4">
              Au cœur du Vieux-Québec, Le Grenier en Vrac vous invite à redécouvrir 
              une façon plus consciente de faire vos courses. Ici, pas d'emballages 
              superflus — juste des produits de qualité, en quantité choisie.
            </p>
            <p className="font-body text-muted-foreground text-lg leading-relaxed">
              Des céréales aux épices, en passant par les produits ménagers, 
              chaque allée est une invitation à explorer et à savourer.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <div className="rounded-2xl overflow-hidden shadow-2xl">
              <img
                src="https://media.base44.com/images/public/69bc10ea3e57cb4df747ae41/2862190c8_generated_9da045c5.png"
                alt="Magasinage en vrac zéro déchet"
                className="w-full h-[400px] md:h-[500px] object-cover"
              />
            </div>
            <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-primary/10 rounded-full -z-10" />
            <div className="absolute -top-6 -right-6 w-24 h-24 bg-accent rounded-full -z-10" />
          </motion.div>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {values.map((value, index) => (
            <motion.div
              key={value.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              className="text-center p-8 rounded-2xl bg-card border border-border/50 hover:shadow-lg transition-shadow duration-300"
            >
              <div className="w-14 h-14 bg-primary/10 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <value.icon className="w-7 h-7 text-primary" />
              </div>
              <h3 className="font-heading text-xl mb-3 text-foreground">{value.title}</h3>
              <p className="font-body text-muted-foreground leading-relaxed">{value.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}