import { motion } from "framer-motion";
import { Wheat, Cherry, UtensilsCrossed, Coffee, Cookie, Home } from "lucide-react";

const categories = [
  { icon: Wheat, name: "Céréales & Farines", description: "Avoine, riz, quinoa, farine de blé, épeautre et bien plus" },
  { icon: Cherry, name: "Fruits secs & Noix", description: "Amandes, noix de cajou, canneberges, raisins secs" },
  { icon: Coffee, name: "Café & Thé", description: "Grains torréfiés localement, thés en feuilles et tisanes" },
  { icon: UtensilsCrossed, name: "Pâtes, riz & grains", description: "Pâtes complètes, riz basmati, lentilles, pois chiches et alternatives culinaires" },
  { icon: Home, name: "Lessive & produits ménagers", description: "Lessive écologique, nettoyants naturels, savons et produits d'entretien vertueux" },
  { icon: Cookie, name: "Collations & Sucré", description: "Granola, chocolat, miel local, sirop d'érable" },
];

export default function CategoriesSection() {
  return (
    <section id="products" className="py-24 md:py-32 px-6 bg-secondary/50">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="font-body text-sm tracking-[0.2em] uppercase text-primary mb-4">Nos produits</p>
          <h2 className="font-heading text-4xl md:text-5xl text-foreground mb-4">
            Explorez nos <span className="italic">rayons</span>
          </h2>
          <p className="font-body text-muted-foreground text-lg max-w-xl mx-auto">
            Plus de 500 produits en vrac pour cuisiner, grignoter et prendre soin de vous.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {categories.map((cat, index) => (
            <motion.div
              key={cat.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group relative bg-card rounded-2xl p-8 border border-border/50 hover:border-primary/30 hover:shadow-xl transition-all duration-500 cursor-pointer overflow-hidden"
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-full -translate-y-12 translate-x-12 group-hover:scale-150 transition-transform duration-700" />
              <div className="relative">
                <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mb-5 group-hover:bg-primary/20 transition-colors duration-300">
                  <cat.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="font-heading text-xl text-foreground mb-2">{cat.name}</h3>
                <p className="font-body text-muted-foreground text-sm leading-relaxed">{cat.description}</p>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-16 text-center"
        >
          <div className="inline-block rounded-2xl overflow-hidden shadow-2xl">
            <img
              src="https://media.base44.com/images/public/69bc10ea3e57cb4df747ae41/5b7f3cfa0_generated_cb02c80a.png"
              alt="Variété de produits en vrac"
              className="w-full max-w-md h-auto"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}