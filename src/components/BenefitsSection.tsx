import { Sparkles, Sun, Heart, Brain, Shield, Smile, Eye, Battery, Focus } from "lucide-react";

const benefits = [
  { icon: <Battery className="w-6 h-6" />, text: "Mais energia" },
  { icon: <Brain className="w-6 h-6" />, text: "Mais clareza mental" },
  { icon: <Heart className="w-6 h-6" />, text: "Mais paciência" },
  { icon: <Sun className="w-6 h-6" />, text: "Mais produtividade" },
  { icon: <Shield className="w-6 h-6" />, text: "Menos ansiedade" },
  { icon: <Smile className="w-6 h-6" />, text: "Mais equilíbrio emocional" }
];

const bodyBenefits = [
  "Equilíbrio hormonal",
  "Memória",
  "Controle emocional",
  "Sistema imunológico",
  "Recuperação física",
  "Clareza mental"
];

const BenefitsSection = () => {
  return (
    <section className="py-20 md:py-32 bg-secondary/30">
      <div className="container mx-auto px-6 max-w-4xl">
        {/* Intro */}
        <div className="text-center mb-16">
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold mb-6 text-foreground">
            Imagine Como Seria{" "}
            <span className="text-gradient">Sua Vida</span>
          </h2>
          <p className="font-body text-lg text-muted-foreground max-w-2xl mx-auto">
            Se Isso Acontecesse
          </p>
        </div>

        {/* Vision - Going to Sleep */}
        <div className="bg-gradient-card rounded-3xl p-8 md:p-12 border border-primary/20 shadow-glow mb-16">
          <div className="space-y-4 font-body text-lg text-muted-foreground text-center">
            <p>Imagine deitar na cama...</p>
            <p>Sentir seu corpo relaxando.</p>
            <p className="text-foreground font-medium">E perceber que sua mente finalmente está silenciosa.</p>
            <p>Sem aquela enxurrada de pensamentos.</p>
            <p>Sem ansiedade.</p>
            <p>Sem preocupação.</p>
            <p className="text-gradient font-display text-2xl font-semibold pt-4">Apenas relaxamento.</p>
          </div>

          <div className="border-t border-border mt-8 pt-8">
            <p className="font-body text-muted-foreground text-center mb-4">
              Agora imagine algo ainda melhor.
            </p>
            <div className="space-y-2 text-center font-body text-muted-foreground">
              <p>Você fecha os olhos...</p>
              <p>E alguns minutos depois...</p>
              <p className="text-foreground font-medium text-xl">simplesmente apaga.</p>
              <p className="text-sm mt-4">Sem esforço. Sem tentar. Sem lutar contra a mente.</p>
            </div>
          </div>
        </div>

        {/* Vision - Waking Up */}
        <div className="bg-gradient-card rounded-3xl p-8 md:p-12 border border-border mb-16">
          <h3 className="font-display text-2xl md:text-3xl font-semibold text-center text-foreground mb-6">
            Agora Imagine <span className="text-gradient">Acordar Pela Manhã</span>
          </h3>
          
          <div className="space-y-3 font-body text-muted-foreground text-center">
            <p>Sem aquela sensação de peso.</p>
            <p>Sem aquela névoa mental.</p>
            <p>Sem aquele cansaço estranho que dura o dia inteiro.</p>
          </div>

          <div className="mt-8 p-6 rounded-xl bg-primary/5 border border-primary/20">
            <p className="font-body text-muted-foreground text-center">
              Você acorda... respira fundo... e percebe algo que não sentia há muito tempo:
            </p>
            <p className="font-display text-2xl font-bold text-gradient text-center mt-2">
              energia real.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mt-8">
            {[
              "Seu humor melhora",
              "Seu foco melhora",
              "Seu dia parece mais leve"
            ].map((item, index) => (
              <div key={index} className="p-4 rounded-lg bg-secondary/50 text-center">
                <Sparkles className="w-5 h-5 text-primary mx-auto mb-2" />
                <span className="font-body text-foreground text-sm">{item}</span>
              </div>
            ))}
          </div>

          <p className="font-body text-foreground font-medium text-center mt-8">
            E à noite... você não tem mais medo de ir dormir.
          </p>
        </div>

        {/* Benefits Grid */}
        <div className="mb-16">
          <h3 className="font-display text-2xl font-semibold text-center text-foreground mb-4">
            Pessoas que voltam a dormir bem relatam mudanças como:
          </h3>
          
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
        </div>

        {/* Deep Sleep Benefits */}
        <div className="bg-gradient-card rounded-2xl p-8 md:p-12 border border-border mb-16">
          <h3 className="font-display text-2xl font-semibold text-center text-foreground mb-6">
            Mas Existe Algo Ainda Mais Interessante
          </h3>
          
          <p className="font-body text-muted-foreground text-center mb-2">
            Dormir bem não melhora apenas o sono. <span className="text-foreground font-medium">Ele melhora toda a sua vida.</span>
          </p>
          <p className="font-body text-muted-foreground text-center mb-6">
            Isso acontece porque o sono profundo regula praticamente todo o funcionamento do corpo:
          </p>
          
          <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
            {bodyBenefits.map((benefit, index) => (
              <div key={index} className="p-3 rounded-lg bg-secondary/50 text-center">
                <span className="font-body text-foreground text-sm">{benefit}</span>
              </div>
            ))}
          </div>

          <div className="mt-8 p-6 rounded-xl bg-primary/5 border border-primary/20">
            <p className="font-body text-muted-foreground text-center">
              Quando você dorme bem... seu cérebro literalmente se reorganiza durante a noite.
              <span className="text-foreground font-medium"> É como se cada noite de sono fosse um reset natural do organismo.</span>
            </p>
            <p className="font-body text-center text-foreground mt-4 italic">
              Por isso pessoas que voltam a dormir bem frequentemente relatam:
              <br />
              <span className="text-gradient font-semibold">"Minha vida parece mais leve."</span>
            </p>
          </div>
        </div>

        {/* Final Vision */}
        <div className="bg-gradient-card rounded-3xl p-8 md:p-12 border border-primary/20 shadow-glow">
          <h3 className="font-display text-2xl font-semibold text-center text-foreground mb-6">
            Imagine Isso Acontecendo <span className="text-gradient">Com Você</span>
          </h3>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h4 className="font-display text-lg font-semibold text-foreground mb-4">
                Suas Próximas Noites:
              </h4>
              <ul className="space-y-2 font-body text-muted-foreground">
                <li>• Deitar</li>
                <li>• Relaxar</li>
                <li>• Fechar os olhos</li>
                <li>• E sentir o sono chegar naturalmente</li>
                <li className="text-foreground">• Sem esforço. Sem ansiedade. Sem luta.</li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-display text-lg font-semibold text-foreground mb-4">
                Seus Próximos Dias:
              </h4>
              <ul className="space-y-2 font-body text-muted-foreground">
                <li>• Acordar com energia</li>
                <li>• Ter clareza mental</li>
                <li>• Sentir o corpo leve</li>
                <li>• Viver o dia com mais presença</li>
              </ul>
            </div>
          </div>

          <p className="font-body text-center text-muted-foreground mt-8">
            Tudo isso começa com algo simples:
          </p>
          <p className="font-display text-2xl font-bold text-gradient text-center mt-2">
            uma boa noite de sono.
          </p>
        </div>
      </div>
    </section>
  );
};

export default BenefitsSection;
