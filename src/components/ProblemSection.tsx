import { Clock, Brain, AlertCircle, AlertTriangle } from "lucide-react";

const ProblemSection = () => {
  return (
    <section className="py-20 md:py-32 bg-gradient-hero">
      <div className="container mx-auto px-6 max-w-4xl">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold mb-6 text-foreground">
            Se Você Está Aqui, Provavelmente{" "}
            <span className="text-gradient">Suas Noites São Assim...</span>
          </h2>
        </div>

        <div className="space-y-6 font-body text-lg text-muted-foreground leading-relaxed">
          <p>Você deita na cama.</p>
          <p>Seu corpo está cansado.</p>
          <p>Talvez até exausto.</p>
          
          <p className="text-foreground font-medium text-xl py-4">
            Mas sua mente... não coopera.
          </p>
          
          <p>Pensamentos começam a surgir.</p>
          <p>Primeiro devagar.</p>
          <p>Depois cada vez mais rápido.</p>
          
          <p className="py-2">
            Você lembra de coisas que aconteceram durante o dia. Coisas que precisa resolver amanhã.
            Problemas que talvez nem existam ainda.
          </p>

          <p>Você tenta ignorar.</p>
          <p>Respira fundo.</p>
          <p>Fecha os olhos.</p>
          
          <p className="text-foreground font-medium text-xl py-4">
            Mas sua mente parece acelerar ainda mais.
          </p>

          <p>Você vira para um lado.</p>
          <p>Depois para o outro.</p>
          <p>Olha o relógio.</p>
        </div>

        {/* Time Cards */}
        <div className="grid md:grid-cols-3 gap-6 mt-16">
          <TimeCard 
            time="00:41" 
            text={<>Você pensa: <span className="text-foreground">"Preciso dormir agora."</span><br/>Mas quanto mais você tenta dormir... mais acordado fica.</>}
          />
          <TimeCard 
            time="01:17" 
            text={<>Você começa a calcular: <span className="text-foreground">"Se eu dormir agora ainda consigo 5 horas..."</span></>}
          />
          <TimeCard 
            time="02:06" 
            text={<>Uma mistura de <span className="text-foreground">frustração... cansaço... e um pequeno desespero.</span> Porque lá no fundo você sabe: amanhã vai ser um dia difícil.</>}
          />
        </div>

        {/* The Horrible Feeling */}
        <div className="mt-16 bg-gradient-card rounded-2xl p-8 md:p-12 border border-border shadow-soft">
          <h3 className="font-display text-2xl md:text-3xl font-semibold mb-6 text-foreground text-center">
            E Então Surge Aquela <span className="text-gradient">Sensação Horrível...</span>
          </h3>
          <p className="font-body text-lg text-muted-foreground text-center mb-4">
            A ansiedade silenciosa. Você começa a calcular mentalmente quanto tempo ainda tem para dormir.
          </p>
        </div>

        {/* Next Day Symptoms */}
        <div className="mt-16 bg-gradient-card rounded-2xl p-8 md:p-12 border border-border shadow-soft">
          <h3 className="font-display text-2xl md:text-3xl font-semibold mb-4 text-foreground text-center">
            No Dia Seguinte...
          </h3>
          
          <div className="space-y-4 font-body text-muted-foreground mb-8">
            <p>O despertador toca.</p>
            <p>Seu corpo parece <span className="text-foreground font-medium">pesado</span>.</p>
            <p>Sua cabeça parece <span className="text-foreground font-medium">envolta em névoa</span>.</p>
            <p>Você levanta porque <span className="text-foreground">precisa</span>. Mas não porque está descansado.</p>
          </div>
          
          <p className="font-body text-foreground text-center mb-6">
            Durante o dia você percebe coisas que antes não aconteciam:
          </p>
          
          <div className="grid md:grid-cols-2 gap-4">
            {[
              "Dificuldade de concentração",
              "Irritação com pequenas coisas",
              "Falta de energia",
              "Lapsos de memória",
              "Ansiedade sem motivo",
              "Tarefas simples parecem exigir muito esforço"
            ].map((symptom, index) => (
              <div key={index} className="flex items-center gap-3 p-4 rounded-lg bg-secondary/50">
                <AlertCircle className="w-5 h-5 text-primary flex-shrink-0" />
                <span className="font-body text-foreground">{symptom}</span>
              </div>
            ))}
          </div>

          <p className="font-body text-muted-foreground text-center mt-8 italic">
            E enquanto o dia passa... Uma preocupação silenciosa começa a surgir:
            <br />
            <span className="text-foreground font-medium">"Será que hoje à noite vai acontecer tudo de novo?"</span>
          </p>
        </div>

        {/* The Cycle */}
        <div className="mt-16 text-center">
          <h3 className="font-display text-2xl md:text-3xl font-semibold mb-8 text-foreground">
            Para Muitas Pessoas... <span className="text-gradient">A Resposta É Sim.</span>
          </h3>
          
          <div className="bg-gradient-card rounded-2xl p-8 border border-border shadow-soft">
            <p className="font-body text-lg text-muted-foreground mb-6">
              E esse ciclo começa a se repetir.
            </p>
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
              {[
                "Noites ruins",
                "Dias cansativos",
                "Mais ansiedade na hora de dormir",
                "Mais dificuldade para dormir"
              ].map((item, index) => (
                <div key={index} className="p-4 rounded-lg bg-secondary/50 border border-border">
                  <AlertTriangle className="w-5 h-5 text-primary mx-auto mb-2" />
                  <span className="font-body text-sm text-foreground">{item}</span>
                </div>
              ))}
            </div>

            <p className="font-body text-muted-foreground">
              Com o tempo, a própria cama começa a gerar tensão. Você deita... e seu cérebro 
              automaticamente entra em <span className="text-foreground font-medium">estado de alerta</span>.
            </p>
            <p className="font-body text-foreground font-medium mt-4">
              Como se dormir tivesse se tornado algo difícil demais.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

const TimeCard = ({ time, text }: { time: string; text: React.ReactNode }) => (
  <div className="bg-gradient-card rounded-2xl p-6 border border-border text-center shadow-soft hover:shadow-glow transition-all duration-300">
    <div className="flex items-center justify-center gap-2 mb-4">
      <Clock className="w-5 h-5 text-primary" />
      <span className="font-display text-3xl font-bold text-primary">{time}</span>
    </div>
    <p className="font-body text-muted-foreground text-sm leading-relaxed">{text}</p>
  </div>
);

export default ProblemSection;
