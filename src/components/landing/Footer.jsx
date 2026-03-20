import { Leaf } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-foreground text-background/80 py-16 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-8 mb-12">
          <div>
            <h3 className="font-heading text-2xl text-background mb-2">Le Grenier en Vrac</h3>
            <p className="font-body text-sm text-background/60">
              Votre épicerie zéro déchet à Québec
            </p>
          </div>
          <div className="flex items-center gap-2 bg-background/10 rounded-full px-5 py-2.5">
            <Leaf className="w-4 h-4 text-background/70" />
            <span className="font-body text-sm text-background/70">Engagés pour la planète</span>
          </div>
        </div>
        
        <div className="border-t border-background/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="font-body text-xs text-background/40">
            © 2026 Le Grenier en Vrac. Tous droits réservés.
          </p>
          <div className="flex gap-6">
            <span className="font-body text-xs text-background/40 hover:text-background/60 cursor-pointer transition-colors">
              Politique de confidentialité
            </span>
            <span className="font-body text-xs text-background/40 hover:text-background/60 cursor-pointer transition-colors">
              Conditions d'utilisation
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}