import { Moon } from "lucide-react";
import { Button } from "@/components/ui/button";

const FooterSection = () => {
  return (
    <section className="py-20 md:py-32 bg-gradient-hero">
      <div className="container mx-auto px-6 max-w-3xl text-center">
        <div className="mb-12">
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold mb-6 text-foreground">
            Recupere Suas <span className="text-gradient">Noites</span>
          </h2>
          <p className="font-body text-xl text-muted-foreground mb-8">
            Comece hoje o processo de recondicionamento do seu sono.
            <br />
            Recupere sua energia. Recupere sua qualidade de vida.
          </p>
          
          <Button 
            size="lg" 
            className="bg-primary hover:bg-primary/90 text-primary-foreground font-body font-semibold px-10 py-6 text-lg rounded-full shadow-glow transition-all duration-300 hover:scale-105"
          >
            QUERO VOLTAR A DORMIR BEM
          </Button>
        </div>

        <div className="pt-12 border-t border-border">
          <div className="flex items-center justify-center gap-2 mb-4">
            <Moon className="w-6 h-6 text-primary" />
            <span className="font-display text-xl font-semibold text-foreground">Recondicionamento do Sono</span>
          </div>
          <p className="font-body text-sm text-muted-foreground">
            © {new Date().getFullYear()} Todos os direitos reservados.
          </p>
        </div>
      </div>
    </section>
  );
};

export default FooterSection;
