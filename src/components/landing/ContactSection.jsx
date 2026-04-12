import { motion } from "framer-motion";
import { MapPin, Clock, Phone, Mail } from "lucide-react";

const hours = [
  { day: "Lundi – Mercredi", time: "9h – 18h" },
  { day: "Jeudi – Vendredi", time: "9h – 20h" },
  { day: "Samedi", time: "9h – 17h" },
  { day: "Dimanche", time: "10h – 16h" },
];

export default function ContactSection() {
  return (
    <section id="contact" className="py-24 md:py-32 px-6 bg-secondary/50">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="font-body text-sm tracking-[0.2em] uppercase text-primary mb-4">Visitez-nous</p>
          <h2 className="font-heading text-4xl md:text-5xl text-foreground">
            Au cœur de <span className="italic">Québec</span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-8"
          >
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center shrink-0">
                <MapPin className="w-5 h-5 text-primary" />
              </div>
              <div>
                <h3 className="font-heading text-lg text-foreground mb-1">Adresse</h3>
                <p className="font-body text-muted-foreground">
                  123, rue Saint-Jean<br />
                  Québec, QC G1R 1N8
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center shrink-0">
                <Phone className="w-5 h-5 text-primary" />
              </div>
              <div>
                <h3 className="font-heading text-lg text-foreground mb-1">Téléphone</h3>
                <p className="font-body text-muted-foreground">(418) 555-0123</p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center shrink-0">
                <Mail className="w-5 h-5 text-primary" />
              </div>
              <div>
                <h3 className="font-heading text-lg text-foreground mb-1">Courriel</h3>
                <p className="font-body text-muted-foreground">info@legrenierenvrac.ca</p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center shrink-0">
                <Clock className="w-5 h-5 text-primary" />
              </div>
              <div>
                <h3 className="font-heading text-lg text-foreground mb-1">Heures d'ouverture</h3>
                <div className="space-y-2 mt-3">
                  {hours.map((h) => (
                    <div key={h.day} className="flex justify-between items-center font-body text-muted-foreground gap-6">
                      <span>{h.day}</span>
                      <span className="font-medium text-muted-foreground">{h.time}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="rounded-2xl overflow-hidden shadow-xl h-[400px] md:h-full min-h-[400px]"
          >
            <iframe
              title="Emplacement du magasin"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2732.3!2d-71.2074!3d46.8139!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNDbCsDQ4JzUwLjAiTiA3McKwMTInMjYuNiJX!5e0!3m2!1sfr!2sca!4v1"
              className="w-full h-full border-0"
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}