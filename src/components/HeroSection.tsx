import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Spotlight } from "@/components/ui/spotlight";
import { SplineScene } from "@/components/ui/splite";
import { Moon } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-background">
      <Card className="w-full max-w-7xl mx-4 md:mx-6 border-border bg-card/50 backdrop-blur-sm relative overflow-hidden min-h-[80vh]">
        <Spotlight className="-top-40 left-0 md:left-60 md:-top-20" fill="hsl(var(--primary))" />

        <div className="flex flex-col lg:flex-row h-full min-h-[80vh]">
          {/* Left content */}
          <div className="flex-1 p-8 md:p-12 relative z-10 flex flex-col justify-center">
            <div className="animate-slide-up">
              <div className="inline-flex items-center gap-2 mb-6 px-4 py-2 rounded-full border border-primary/30 bg-secondary/50 backdrop-blur-sm">
                <Moon className="w-4 h-4 text-primary" />
                <span className="text-sm font-body text-muted-foreground">Método Recondicionamento do Sono</span>
              </div>

              <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
                <span className="text-gradient">A Verdade Estranha</span>
                <br />
                <span className="text-foreground">Sobre Pessoas Que Não Conseguem Dormir…</span>
              </h1>

              <p className="font-body text-lg md:text-xl text-muted-foreground max-w-xl mb-4 leading-relaxed">
                E por que quanto mais você tenta dormir, mais seu cérebro parece lutar contra isso.
              </p>

              <p className="font-body text-base text-muted-foreground max-w-xl mb-8 leading-relaxed">
                Existe um motivo pouco conhecido que faz milhares de adultos de 30 a 50 anos ficarem deitados
                na cama por horas… completamente cansados… mas incapazes de desligar a mente.
              </p>

              <Button
                size="lg"
                className="bg-primary hover:bg-primary/90 text-primary-foreground font-body font-semibold px-8 py-6 text-lg rounded-full shadow-glow transition-all duration-300 hover:scale-105"
              >
                Quero Voltar a Dormir Bem
              </Button>
            </div>
          </div>

          {/* Right content - 3D Scene */}
          <div className="flex-1 relative min-h-[400px] lg:min-h-0">
            <SplineScene
              scene="https://prod.spline.design/kZDDjO5HuC9GJUM2/scene.splinecode"
              className="w-full h-full"
            />
          </div>
        </div>
      </Card>

      {/* Floating scroll indicator */}
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-float">
        <div className="w-6 h-10 rounded-full border-2 border-primary/50 flex items-start justify-center p-2">
          <div className="w-1 h-2 bg-primary rounded-full animate-pulse-slow" />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
