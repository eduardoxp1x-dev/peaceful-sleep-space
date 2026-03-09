import { Brain, Zap, RefreshCw, CheckCircle } from "lucide-react";

const SolutionSection = () => {
  return (
    <section className="py-20 md:py-32 bg-secondary/30">
      <div className="container mx-auto px-6 max-w-4xl">
        <div className="text-center mb-16">
          <span className="inline-block text-sm font-body font-medium text-primary mb-4 tracking-wider uppercase">
            A Descoberta
          </span>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold mb-6 text-foreground">
            Mas Aqui Está Algo Que{" "}
            <span className="text-gradient">Pouquíssimas Pessoas Sabem</span>
          </h2>
          <p className="font-body text-lg text-muted-foreground max-w-2xl mx-auto">
            Insônia raramente é apenas falta de sono. Na verdade, o problema geralmente está em outro lugar.
          </p>
        </div>

        {/* The 3 Types */}
        <div className="grid md:grid-cols-3 gap-6 mb-20">
          <TypeCard
            icon={<Brain className="w-8 h-8" />}
            title="Tipo 1"
            description="Pessoas que não conseguem pegar no sono"
          />
          <TypeCard
            icon={<Zap className="w-8 h-8" />}
            title="Tipo 2"
            description="Pessoas que acordam no meio da madrugada"
          />
          <TypeCard
            icon={<RefreshCw className="w-8 h-8" />}
            title="Tipo 3"
            description="Pessoas que acordam muito cedo e não voltam a dormir"
          />
        </div>

        {/* The Method */}
        <div className="bg-gradient-card rounded-3xl p-8 md:p-12 border border-primary/20 shadow-glow">
          <div className="text-center mb-10">
            <h3 className="font-display text-2xl md:text-3xl font-bold mb-4 text-foreground">
              Método Recondicionamento do Sono
            </h3>
            <p className="font-body text-muted-foreground">
              O método trabalha em três fases simples
            </p>
          </div>

          <div className="space-y-6">
            <PhaseCard
              number="1"
              title="Identificação do Tipo de Insônia"
              description="Descubra qual é o padrão da sua insônia. Sem essa informação, qualquer estratégia vira tentativa e erro."
            />
            <PhaseCard
              number="2"
              title="Regulagem do Sistema Nervoso"
              description="Técnicas simples que ajudam o cérebro a sair do estado de alerta noturno."
            />
            <PhaseCard
              number="3"
              title="Recondicionamento do Sono"
              description="Práticas que ensinam o cérebro a associar a cama novamente com relaxamento profundo."
            />
          </div>
        </div>
      </div>
    </section>
  );
};

const TypeCard = ({ icon, title, description }: { icon: React.ReactNode; title: string; description: string }) => (
  <div className="bg-gradient-card rounded-2xl p-6 border border-border text-center hover:border-primary/50 transition-all duration-300 group">
    <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-primary/10 flex items-center justify-center text-primary group-hover:bg-primary/20 transition-colors">
      {icon}
    </div>
    <h4 className="font-display text-xl font-semibold text-foreground mb-2">{title}</h4>
    <p className="font-body text-sm text-muted-foreground">{description}</p>
  </div>
);

const PhaseCard = ({ number, title, description }: { number: string; title: string; description: string }) => (
  <div className="flex gap-4 md:gap-6 p-4 md:p-6 rounded-xl bg-secondary/50 hover:bg-secondary/70 transition-colors">
    <div className="flex-shrink-0 w-12 h-12 rounded-full bg-primary flex items-center justify-center">
      <span className="font-display text-xl font-bold text-primary-foreground">{number}</span>
    </div>
    <div>
      <h4 className="font-display text-lg font-semibold text-foreground mb-2">{title}</h4>
      <p className="font-body text-muted-foreground">{description}</p>
    </div>
  </div>
);

export default SolutionSection;
