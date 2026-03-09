import { Brain, Zap, RefreshCw, CheckCircle, AlertTriangle, Lightbulb } from "lucide-react";

const SolutionSection = () => {
  return (
    <section className="py-20 md:py-32 bg-secondary/30">
      <div className="container mx-auto px-6 max-w-4xl">
        {/* The Hidden Truth */}
        <div className="text-center mb-16">
          <span className="inline-block text-sm font-body font-medium text-primary mb-4 tracking-wider uppercase">
            A Descoberta
          </span>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold mb-6 text-foreground">
            Mas Aqui Está Algo Que{" "}
            <span className="text-gradient">Pouquíssimas Pessoas Sabem</span>
          </h2>
        </div>

        <div className="space-y-6 font-body text-lg text-muted-foreground leading-relaxed mb-16">
          <p className="text-center text-foreground font-medium text-xl">
            Insônia raramente é apenas falta de sono.
          </p>
          <p className="text-center">
            Na verdade, o problema geralmente está em outro lugar.
          </p>
          
          <div className="bg-gradient-card rounded-2xl p-8 border border-primary/20 my-8">
            <p className="text-center mb-4">
              Dentro do seu cérebro existe um sistema chamado:
            </p>
            <h3 className="font-display text-2xl font-bold text-center text-gradient mb-4">
              Sistema de Alerta
            </h3>
            <p className="text-center">
              Ele existe para manter você acordado quando existe perigo. Durante milhares de anos 
              isso foi essencial para sobrevivência.
            </p>
            <p className="text-center mt-4 text-foreground font-medium">
              Mas no mundo moderno... esse sistema às vezes fica ligado na hora errada.
              <br />Especialmente à noite.
            </p>
          </div>
        </div>

        {/* What happens in the body */}
        <div className="bg-gradient-card rounded-2xl p-8 md:p-12 border border-border mb-16">
          <h3 className="font-display text-2xl font-semibold text-center text-foreground mb-6">
            Quando Isso Acontece, Algo Estranho Acontece No Corpo
          </h3>
          <p className="font-body text-muted-foreground text-center mb-6">
            Mesmo que você esteja cansado... seu cérebro acredita que ainda precisa ficar acordado.
          </p>
          
          <div className="grid md:grid-cols-3 gap-4 mb-6">
            {[
              "O cortisol continua alto",
              "O cérebro permanece hiperativo",
              "A melatonina não sobe corretamente"
            ].map((item, index) => (
              <div key={index} className="p-4 rounded-lg bg-secondary/50 text-center">
                <AlertTriangle className="w-6 h-6 text-primary mx-auto mb-2" />
                <span className="font-body text-foreground text-sm">{item}</span>
              </div>
            ))}
          </div>
          
          <p className="font-body text-center text-foreground font-medium">
            Resultado? Seu corpo quer dormir. Mas seu cérebro se recusa a permitir.
          </p>
        </div>

        {/* This explains... */}
        <div className="mb-16">
          <h3 className="font-display text-2xl font-semibold text-center text-foreground mb-6">
            E Isso Explica Algo Que <span className="text-gradient">Confunde Muitas Pessoas</span>
          </h3>
          
          <div className="space-y-4 font-body text-muted-foreground">
            <p>Talvez você já tenha passado por isso:</p>
            <p>Você está destruído de cansaço. Mal consegue manter os olhos abertos durante o dia.</p>
            <p className="text-foreground font-medium">Mas quando chega a noite... você simplesmente não consegue dormir.</p>
            <p>Ou então dorme... mas acorda no meio da madrugada.</p>
            <p>Ou acorda muito cedo e não consegue voltar a dormir.</p>
            
            <div className="bg-primary/5 rounded-xl p-6 mt-6 border border-primary/20">
              <p className="text-center text-foreground">
                Isso não significa que você está quebrado. Não significa que você tem um "cérebro defeituoso".
              </p>
              <p className="text-center text-gradient font-semibold mt-2">
                Significa apenas que o mecanismo do sono foi desregulado.
              </p>
              <p className="text-center mt-4 text-muted-foreground">
                E a boa notícia é que... quando você entende o mecanismo... <span className="text-foreground font-medium">ele pode ser reprogramado.</span>
              </p>
            </div>
          </div>
        </div>

        {/* Common solutions don't work */}
        <div className="bg-gradient-card rounded-2xl p-8 md:p-12 border border-border mb-16">
          <h3 className="font-display text-2xl font-semibold text-center text-foreground mb-6">
            Infelizmente, A Maioria Das Soluções Não Resolve Isso
          </h3>
          
          <p className="font-body text-muted-foreground text-center mb-6">
            Se você sofre com insônia há algum tempo... provavelmente já tentou várias coisas:
          </p>
          
          <div className="grid grid-cols-2 md:grid-cols-3 gap-3 mb-8">
            {[
              "Chás calmantes",
              "Melatonina",
              "Meditação",
              "Aplicativos de sono",
              "Música relaxante",
              "Talvez até remédios"
            ].map((item, index) => (
              <div key={index} className="p-3 rounded-lg bg-secondary/50 text-center">
                <span className="font-body text-muted-foreground text-sm">{item}</span>
              </div>
            ))}
          </div>
          
          <p className="font-body text-muted-foreground text-center">
            Algumas dessas coisas podem ajudar por um tempo. Mas muitas pessoas percebem algo frustrante:
          </p>
          <p className="font-body text-foreground font-medium text-center mt-2">
            O problema sempre volta.
          </p>
          
          <div className="mt-8 p-6 rounded-xl bg-secondary/50">
            <h4 className="font-display text-lg font-semibold text-center text-foreground mb-2">
              E Isso Não É Culpa Sua
            </h4>
            <p className="font-body text-muted-foreground text-center">
              A maioria dessas soluções trata apenas os sintomas. Não o mecanismo real por trás da insônia.
            </p>
            <p className="font-body text-foreground text-center mt-2 italic">
              É como tentar apagar uma luz... sem desligar o interruptor.
            </p>
          </div>
        </div>

        {/* The Discovery */}
        <div className="text-center mb-16">
          <h3 className="font-display text-2xl md:text-3xl font-semibold text-foreground mb-6">
            Mas Foi Quando Uma <span className="text-gradient">Descoberta Importante</span> Surgiu
          </h3>
          
          <div className="space-y-4 font-body text-muted-foreground">
            <p>Pesquisadores começaram a perceber algo curioso.</p>
            <p>Pessoas com insônia não tinham exatamente o mesmo problema.</p>
            <p className="text-foreground font-medium">Na verdade... existiam tipos diferentes de insônia.</p>
            <p>E cada tipo possuía causas biológicas diferentes.</p>
            <p>Quando todos eram tratados da mesma forma... os resultados eram inconsistentes.</p>
            <p className="text-foreground font-medium">
              Mas quando cada tipo era tratado com a estratégia correta... os resultados mudavam drasticamente.
            </p>
          </div>
        </div>

        {/* The 3 Types */}
        <div className="mb-16">
          <h3 className="font-display text-2xl font-semibold text-center text-foreground mb-8">
            Eles Perceberam Que Existem <span className="text-gradient">Três Padrões Principais</span> de Insônia
          </h3>
          
          <div className="grid md:grid-cols-3 gap-6">
            <TypeCard
              icon={<Brain className="w-8 h-8" />}
              title="Primeiro Tipo"
              description="Pessoas que não conseguem pegar no sono"
            />
            <TypeCard
              icon={<Zap className="w-8 h-8" />}
              title="Segundo Tipo"
              description="Pessoas que dormem, mas acordam no meio da madrugada"
            />
            <TypeCard
              icon={<RefreshCw className="w-8 h-8" />}
              title="Terceiro Tipo"
              description="Pessoas que acordam muito cedo e não conseguem voltar a dormir"
            />
          </div>
          
          <p className="font-body text-muted-foreground text-center mt-8">
            Cada um desses padrões está ligado a mecanismos diferentes no cérebro.
            <br />
            <span className="text-foreground font-medium">
              E quando você aplica a estratégia correta para o seu tipo... o corpo começa a retornar ao ritmo natural de sono.
            </span>
          </p>
        </div>

        {/* Brain Learning */}
        <div className="bg-gradient-card rounded-2xl p-8 md:p-12 border border-border mb-16">
          <h3 className="font-display text-2xl font-semibold text-center text-foreground mb-6">
            O Que Acontece Quando o Cérebro Aprende a Não Dormir
          </h3>
          
          <p className="font-body text-muted-foreground mb-6">
            Poucas pessoas percebem isso, mas o cérebro aprende padrões muito rápido.
            Se por várias noites seguidas você:
          </p>
          
          <div className="grid grid-cols-2 gap-3 mb-6">
            {[
              "Fica acordado na cama",
              "Tenta dormir sem sucesso",
              "Se preocupa com o fato de não dormir",
              "Olha o relógio repetidamente"
            ].map((item, index) => (
              <div key={index} className="p-3 rounded-lg bg-secondary/50 flex items-center gap-2">
                <AlertTriangle className="w-4 h-4 text-primary flex-shrink-0" />
                <span className="font-body text-foreground text-sm">{item}</span>
              </div>
            ))}
          </div>
          
          <p className="font-body text-foreground font-medium text-center">
            Seu cérebro começa a associar a cama com estado de alerta.
          </p>
          <p className="font-body text-muted-foreground text-center mt-2">
            Ou seja... o lugar que deveria gerar relaxamento passa a gerar tensão.
          </p>
          
          <div className="mt-6 p-4 rounded-lg bg-primary/5 border border-primary/20">
            <p className="font-body text-center text-muted-foreground">
              Esse ciclo pode durar meses... ou até anos. Mas aqui está a boa notícia:
            </p>
            <p className="font-body text-center text-gradient font-semibold mt-2">
              Se o cérebro aprendeu esse padrão... ele também pode desaprender.
            </p>
          </div>
        </div>

        {/* The Method */}
        <div className="bg-gradient-card rounded-3xl p-8 md:p-12 border border-primary/20 shadow-glow">
          <div className="text-center mb-10">
            <Lightbulb className="w-12 h-12 text-primary mx-auto mb-4" />
            <h3 className="font-display text-2xl md:text-3xl font-bold mb-4 text-foreground">
              Método Recondicionamento do Sono
            </h3>
            <p className="font-body text-muted-foreground max-w-2xl mx-auto">
              Uma abordagem que não tenta apenas "forçar o sono". Mas sim reprogramar o sistema que controla o sono.
              Nos últimos anos ela começou a ajudar milhares de pessoas a recuperar algo que parecia perdido:
              <span className="text-foreground font-medium"> noites de sono profundas e naturais.</span>
            </p>
          </div>

          <p className="font-body text-center text-muted-foreground mb-8">
            Pesquisadores perceberam que pessoas com insônia crônica geralmente tinham três coisas em comum:
            <span className="text-foreground"> sistema nervoso hiperativo à noite, produção irregular de hormônios do sono,
            e associação mental negativa com a hora de dormir.</span>
          </p>

          <p className="font-body text-center text-foreground font-medium mb-8">
            O método trabalha em três fases simples:
          </p>

          <div className="space-y-6">
            <PhaseCard
              number="1"
              title="Identificação do Tipo de Insônia"
              description="Primeiro você descobre qual é o padrão da sua insônia. Isso é essencial. Porque sem essa informação qualquer estratégia vira apenas tentativa e erro."
            />
            <PhaseCard
              number="2"
              title="Regulagem do Sistema Nervoso"
              description="Aqui você aprende técnicas simples que ajudam o cérebro a sair do estado de alerta noturno. Esse processo ajuda a reduzir o cortisol e permite que o corpo entre naturalmente em modo descanso."
            />
            <PhaseCard
              number="3"
              title="Recondicionamento do Sono"
              description="Nesta etapa você aplica práticas que ensinam o cérebro a associar a cama novamente com relaxamento profundo. Isso recria o padrão natural de sono que seu corpo já teve um dia."
            />
          </div>

          <div className="mt-10 p-6 rounded-xl bg-primary/5 border border-primary/20">
            <h4 className="font-display text-lg font-semibold text-center text-foreground mb-2">
              O Resultado Desse Processo
            </h4>
            <p className="font-body text-muted-foreground text-center">
              Quando essas três etapas acontecem juntas... algo muito interessante acontece.
              O corpo começa a produzir sono novamente. Não porque você está tentando dormir.
              <span className="text-foreground font-medium"> Mas porque o organismo finalmente volta ao equilíbrio.</span>
            </p>
            <p className="font-body text-center text-primary font-medium mt-4">
              Em alguns casos... mudanças começam a aparecer nas primeiras semanas.
            </p>
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
