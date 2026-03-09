import { Button } from "@/components/ui/button";
import { Check, Shield, Clock } from "lucide-react";

const modules = [
  "Módulo 1 — Entendendo a Verdadeira Causa da Insônia",
  "Módulo 2 — Identificando Seu Tipo de Insônia",
  "Módulo 3 — Regulando o Sistema Nervoso",
  "Módulo 4 — Reprogramando o Sono"
];

const bonuses = [
  "Rotina Noturna de Relaxamento Profundo",
  "Protocolo Anti-Mente Acelerada",
  "Guia de Hábitos que Melhoram o Sono"
];

const PricingSection = () => {
  return (
    <section className="py-20 md:py-32 bg-gradient-hero">
      <div className="container mx-auto px-6 max-w-3xl">
        <div className="text-center mb-12">
          <span className="inline-block text-sm font-body font-medium text-primary mb-4 tracking-wider uppercase">
            Acesso Completo
          </span>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-foreground">
            Método{" "}
            <span className="text-gradient">Recondicionamento do Sono</span>
          </h2>
        </div>

        <div className="bg-gradient-card rounded-3xl p-8 md:p-12 border border-primary/30 shadow-glow">
          {/* Modules */}
          <div className="mb-8">
            <h3 className="font-display text-lg font-semibold text-foreground mb-4">O Que Você Vai Receber:</h3>
            <div className="space-y-3">
              {modules.map((module, index) => (
                <div key={index} className="flex items-center gap-3">
                  <Check className="w-5 h-5 text-primary flex-shrink-0" />
                  <span className="font-body text-foreground">{module}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Bonuses */}
          <div className="mb-10 p-6 rounded-xl bg-primary/5 border border-primary/20">
            <h3 className="font-display text-lg font-semibold text-accent mb-4">+ Bônus Exclusivos:</h3>
            <div className="space-y-3">
              {bonuses.map((bonus, index) => (
                <div key={index} className="flex items-center gap-3">
                  <Check className="w-5 h-5 text-accent flex-shrink-0" />
                  <span className="font-body text-foreground">{bonus}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Price */}
          <div className="text-center mb-8">
            <p className="font-body text-muted-foreground mb-2">Por apenas</p>
            <div className="flex items-center justify-center gap-2">
              <span className="font-display text-5xl md:text-6xl font-bold text-gradient">R$197</span>
            </div>
            <p className="font-body text-muted-foreground mt-2">
              ou 12x de R$19,50
            </p>
          </div>

          {/* CTA */}
          <Button 
            size="lg" 
            className="w-full bg-primary hover:bg-primary/90 text-primary-foreground font-body font-semibold py-6 text-lg rounded-full shadow-glow transition-all duration-300 hover:scale-[1.02]"
          >
            QUERO VOLTAR A DORMIR BEM
          </Button>

          {/* Guarantees */}
          <div className="mt-8 flex flex-col md:flex-row items-center justify-center gap-6 text-sm text-muted-foreground">
            <div className="flex items-center gap-2">
              <Shield className="w-5 h-5 text-primary" />
              <span className="font-body">Garantia de 7 dias</span>
            </div>
            <div className="flex items-center gap-2">
              <Clock className="w-5 h-5 text-primary" />
              <span className="font-body">Acesso imediato</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PricingSection;
