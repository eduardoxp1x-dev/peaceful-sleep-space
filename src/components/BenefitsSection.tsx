import { Sparkles, Sun, Heart, Brain, Shield, Smile, Battery } from "lucide-react";

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
    <section className="py-24 md:py-36 bg-secondary/30">
      <div className="container mx-auto px-6 max-w-3xl">
        {/* Intro */}
        <div className="text-center mb-20">
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold mb-5 text-foreground leading-tight">
            Imagine Como Seria{" "}
            <span className="text-gradient">Sua Vida</span>
          </h2>
          <p className="font-body text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Se Isso Acontecesse
          </p>
        </div>

        {/* Vision - Going to Sleep */}
        <div className="bg-gradient-card rounded-3xl p-10 md:p-14 border border-primary/20 shadow-glow mb-20">
          <div className="space-y-5 font-body text-lg text-muted-foreground text-center leading-relaxed">
            <p>Imagine deitar na cama...</p>
            <p>Sentir seu corpo relaxando.</p>
            <p className="text-foreground font-medium">E perceber que sua mente finalmente está silenciosa.</p>
            <p>Sem aquela enxurrada de pensamentos.</p>
            <p>Sem ansiedade.</p>
            <p>Sem preocupação.</p>
            <p className="text-gradient font-display text-2xl md:text-3xl font-semibold pt-5">Apenas relaxamento.</p>
          </div>

          <div className="border-t border-border mt-10 pt-10">
            <p className="font-body text-muted-foreground text-center mb-5 text-lg">
              Agora imagine algo ainda melhor.
            </p>
            <div className="space-y-3 text-center font-body text-muted-foreground text-lg leading-relaxed">
              <p>Você fecha os olhos...</p>
              <p>E alguns minutos depois...</p>
              <p className="text-foreground font-medium text-xl md:text-2xl">simplesmente apaga.</p>
              <p className="text-base mt-5">Sem esforço. Sem tentar. Sem lutar contra a mente.</p>
            </div>
          </div>
        </div>

        {/* Vision - Waking Up */}
        <div className="bg-gradient-card rounded-3xl p-10 md:p-14 border border-border mb-20">
          <h3 className="font-display text-2xl md:text-3xl font-semibold text-center text-foreground mb-7">
            Agora Imagine <span className="text-gradient">Acordar Pela Manhã</span>
          </h3>
          
          <div className="space-y-4 font-body text-muted-foreground text-center text-lg leading-relaxed">
            <p>Sem aquela sensação de peso.</p>
            <p>Sem aquela névoa mental.</p>
            <p>Sem aquele cansaço estranho que dura o dia inteiro.</p>
          </div>

          <div className="mt-10 p-7 rounded-xl bg-primary/5 border border-primary/20">
            <p className="font-body text-muted-foreground text-center text-lg leading-relaxed">
              Você acorda... respira fundo... e percebe algo que não sentia há muito tempo:
            </p>
            <p className="font-display text-2xl md:text-3xl font-bold text-gradient text-center mt-3">
              energia real.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-5 mt-10">
            {[
              "Seu humor melhora",
              "Seu foco melhora",
              "Seu dia parece mais leve"
            ].map((item, index) => (
              <div key={index} className="p-5 rounded-lg bg-secondary/50 text-center">
                <Sparkles className="w-5 h-5 text-primary mx-auto mb-3" />
                <span className="font-body text-foreground text-base">{item}</span>
              </div>
            ))}
          </div>

          <p className="font-body text-foreground font-medium text-center mt-10 text-lg">
            E à noite... você não tem mais medo de ir dormir.
          </p>
        </div>

        {/* Benefits Grid */}
        <div className="mb-20">
          <h3 className="font-display text-2xl md:text-3xl font-semibold text-center text-foreground mb-5">
            Pessoas que voltam a dormir bem relatam mudanças como:
          </h3>
          
          <div className="grid grid-cols-2 md:grid-cols-3 gap-5 md:gap-6">
            {benefits.map((benefit, index) => (
              <div 
                key={index} 
                className="bg-gradient-card rounded-xl p-7 border border-border text-center hover:border-primary/50 hover:shadow-glow transition-all duration-300"
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
        <div className="bg-gradient-card rounded-2xl p-10 md:p-14 border border-border mb-20">
          <h3 className="font-display text-2xl md:text-3xl font-semibold text-center text-foreground mb-7">
            Mas Existe Algo Ainda Mais Interessante
          </h3>
          
          <p className="font-body text-muted-foreground text-center mb-3 text-lg leading-relaxed">
            Dormir bem não melhora apenas o sono. <span className="text-foreground font-medium">Ele melhora toda a sua vida.</span>
          </p>
          <p className="font-body text-muted-foreground text-center mb-8 text-lg leading-relaxed">
            Isso acontece porque o sono profundo regula praticamente todo o funcionamento do corpo:
          </p>
          
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {bodyBenefits.map((benefit, index) => (
              <div key={index} className="p-4 rounded-lg bg-secondary/50 text-center">
                <span className="font-body text-foreground text-base">{benefit}</span>
              </div>
            ))}
          </div>

          <div className="mt-10 p-7 rounded-xl bg-primary/5 border border-primary/20">
            <p className="font-body text-muted-foreground text-center text-lg leading-relaxed">
              Quando você dorme bem... seu cérebro literalmente se reorganiza durante a noite.
              <span className="text-foreground font-medium"> É como se cada noite de sono fosse um reset natural do organismo.</span>
            </p>
            <p className="font-body text-center text-foreground mt-5 italic text-lg">
              Por isso pessoas que voltam a dormir bem frequentemente relatam:
              <br />
              <span className="text-gradient font-semibold">"Minha vida parece mais leve."</span>
            </p>
          </div>
        </div>

        {/* Final Vision */}
        <div className="bg-gradient-card rounded-3xl p-10 md:p-14 border border-primary/20 shadow-glow">
          <h3 className="font-display text-2xl md:text-3xl font-semibold text-center text-foreground mb-8">
            Imagine Isso Acontecendo <span className="text-gradient">Com Você</span>
          </h3>
          
          <div className="grid md:grid-cols-2 gap-10">
            <div>
              <h4 className="font-display text-lg font-semibold text-foreground mb-5">
                Suas Próximas Noites:
              </h4>
              <ul className="space-y-3 font-body text-muted-foreground text-lg leading-relaxed">
                <li>• Deitar</li>
                <li>• Relaxar</li>
                <li>• Fechar os olhos</li>
                <li>• E sentir o sono chegar naturalmente</li>
                <li className="text-foreground">• Sem esforço. Sem ansiedade. Sem luta.</li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-display text-lg font-semibold text-foreground mb-5">
                Seus Próximos Dias:
              </h4>
              <ul className="space-y-3 font-body text-muted-foreground text-lg leading-relaxed">
                <li>• Acordar com energia</li>
                <li>• Ter clareza mental</li>
                <li>• Sentir o corpo leve</li>
                <li>• Viver o dia com mais presença</li>
              </ul>
            </div>
          </div>

          <p className="font-body text-center text-muted-foreground mt-10 text-lg">
            Tudo isso começa com algo simples:
          </p>
          <p className="font-display text-2xl md:text-3xl font-bold text-gradient text-center mt-3">
            uma boa noite de sono.
          </p>
        </div>
      </div>
    </section>
  );
};

export default BenefitsSection;
