import { Button } from "@/components/ui/button";
import { Moon } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="py-24 md:py-36 bg-gradient-hero">
      <div className="container mx-auto px-6 max-w-3xl">
        <div className="text-center mb-20 animate-fade-in">
          <div className="inline-flex items-center gap-2.5 mb-8 px-5 py-2.5 rounded-full border border-primary/30 bg-secondary/50 backdrop-blur-sm">
            <Moon className="w-4 h-4 text-primary" />
            <span className="text-sm font-body tracking-wide text-muted-foreground">Método Recondicionamento do Sono</span>
          </div>
          
          <h1 className="font-display text-3xl md:text-4xl lg:text-[2.75rem] font-bold leading-[1.15] mb-7">
            <span className="text-gradient">A Verdade Estranha</span>
            <br />
            <span className="text-foreground">Sobre Pessoas Que Não Conseguem Dormir…</span>
          </h1>
          
          <p className="font-body text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-5 leading-[1.8]">
            E por que quanto mais você tenta dormir, mais seu cérebro parece lutar contra isso.
          </p>

          <p className="font-body text-base md:text-[17px] text-muted-foreground max-w-2xl mx-auto mb-10 leading-[1.85]">
            Existe um motivo pouco conhecido que faz milhares de adultos de 30 a 50 anos ficarem deitados 
            na cama por horas… completamente cansados… mas incapazes de desligar a mente.
          </p>
        </div>

        <div className="bg-gradient-card rounded-2xl p-10 md:p-14 border border-border shadow-soft mb-10">
          <p className="font-body text-[17px] text-muted-foreground mb-5 leading-[1.85]">
            E quando você entende o que realmente está acontecendo dentro do seu cérebro…
          </p>
          <p className="font-display text-xl md:text-2xl font-semibold text-gradient mb-5">
            Algo surpreendente acontece:
          </p>
          <p className="font-body text-lg text-foreground font-medium">
            Dormir volta a ser natural.
          </p>
          <div className="mt-5 space-y-1.5 text-muted-foreground font-body text-sm">
            <p>Sem remédios pesados.</p>
            <p>Sem técnicas absurdas.</p>
            <p>Sem depender de sorte.</p>
          </div>
        </div>

        <div className="text-center">
          <Button 
            size="lg" 
            className="bg-primary hover:bg-primary/90 text-primary-foreground font-body font-semibold px-9 py-6 text-lg rounded-full shadow-glow transition-all duration-300 hover:scale-105 tracking-wide"
            onClick={() => window.open('https://pay.kiwify.com.br/bPiQ3nY', '_blank')}
          >
            Quero Voltar a Dormir Bem
          </Button>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
