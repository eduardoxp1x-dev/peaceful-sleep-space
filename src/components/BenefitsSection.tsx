import { Sparkles, Sun, Heart, Brain, Shield, Smile } from "lucide-react";

const benefits = [
  { icon: <Sparkles className="w-6 h-6" />, text: "Mais energia" },
  { icon: <Brain className="w-6 h-6" />, text: "Mais clareza mental" },
  { icon: <Heart className="w-6 h-6" />, text: "Mais paciência" },
  { icon: <Sun className="w-6 h-6" />, text: "Mais produtividade" },
  { icon: <Shield className="w-6 h-6" />, text: "Menos ansiedade" },
  { icon: <Smile className="w-6 h-6" />, text: "Mais equilíbrio emocional" }
];

const BenefitsSection = () => {
  return (
    <section className="py-20 md:py-32 bg-secondary/30">
      <div className="container mx-auto px-6 max-w-4xl">
        <div className="text-center mb-16">
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold mb-6 text-foreground">
            Imagine Como Seria{" "}
            <span className="text-gradient">Sua Vida</span>
          </h2>
          <p className="font-body text-lg text-muted-foreground max-w-2xl mx-auto">
            Quando você dorme bem, toda a sua vida melhora. Pessoas que voltam a dormir bem relatam:
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
          {benefits.map((benefit, index) => (
            <div 
              key={index} 
              className="bg-gradient-card rounded-xl p-6 border border-border text-center hover:border-primary/50 hover:shadow-glow transition-all duration-300"
            >
              <div className="w-12 h-12 mx-auto mb-4 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                {benefit.icon}
              </div>
              <p className="font-body font-medium text-foreground">{benefit.text}</p>
            </div>
          ))}
        </div>

        {/* Vision */}
        <div className="mt-16 text-center">
          <div className="bg-gradient-card rounded-3xl p-8 md:p-12 border border-primary/20 shadow-glow">
            <p className="font-body text-xl md:text-2xl text-muted-foreground leading-relaxed mb-6">
              Imagine deitar na cama... sentir seu corpo relaxando... e perceber que sua mente 
              finalmente está <span className="text-primary font-medium">silenciosa</span>.
            </p>
            <p className="font-display text-2xl md:text-3xl font-semibold text-foreground">
              Sem ansiedade. Sem preocupação.{" "}
              <span className="text-gradient">Apenas relaxamento.</span>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BenefitsSection;
