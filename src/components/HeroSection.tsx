import heroMoon from "@/assets/hero-moon.jpg";
import { Button } from "@/components/ui/button";
import { Moon } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroMoon})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-background/40 via-background/60 to-background" />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-6 text-center max-w-3xl">
        <div className="animate-slide-up">
          <div className="inline-flex items-center gap-2.5 mb-8 px-5 py-2.5 rounded-full border border-primary/30 bg-secondary/50 backdrop-blur-sm">
            <Moon className="w-4 h-4 text-primary" />
            <span className="text-sm font-body tracking-wide text-muted-foreground">Método Recondicionamento do Sono</span>
          </div>
          
          <h1 className="font-display text-4xl md:text-5xl lg:text-[3.5rem] font-bold leading-[1.1] mb-7">
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

          <div className="bg-secondary/50 backdrop-blur-sm rounded-xl p-7 mb-10 max-w-xl mx-auto border border-border">
            <p className="font-body text-foreground mb-5 text-[17px] leading-[1.85]">
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

          <Button 
            size="lg" 
            className="bg-primary hover:bg-primary/90 text-primary-foreground font-body font-semibold px-9 py-6 text-lg rounded-full shadow-glow transition-all duration-300 hover:scale-105 tracking-wide"
          >
            Quero Voltar a Dormir Bem
          </Button>
        </div>
      </div>

      {/* Floating elements */}
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-float">
        <div className="w-6 h-10 rounded-full border-2 border-primary/50 flex items-start justify-center p-2">
          <div className="w-1 h-2 bg-primary rounded-full animate-pulse-slow" />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
