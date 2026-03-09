import { Clock, Brain, AlertCircle, AlertTriangle } from "lucide-react";

const ProblemSection = () => {
  return (
    <section className="py-24 md:py-36 bg-gradient-hero">
      <div className="container mx-auto px-6 max-w-3xl">
        <div className="text-center mb-20 animate-fade-in">
          <h2 className="font-display text-3xl md:text-4xl lg:text-[2.75rem] font-bold mb-7 text-foreground leading-[1.15]">
            Se Você Está Aqui, Provavelmente{" "}
            <span className="text-gradient">Suas Noites São Assim...</span>
          </h2>
        </div>

        <div className="space-y-5 font-body text-[17px] md:text-lg text-muted-foreground leading-[1.85]">
          <p>Você deita na cama.</p>
          <p>Seu corpo está cansado.</p>
          <p>Talvez até exausto.</p>
          
          <p className="text-foreground font-medium text-xl md:text-2xl py-5 leading-snug">
            Mas sua mente... não coopera.
          </p>
          
          <p>Pensamentos começam a surgir.</p>
          <p>Primeiro devagar.</p>
          <p>Depois cada vez mais rápido.</p>
          
          <p className="py-3 leading-[1.9]">
            Você lembra de coisas que aconteceram durante o dia. Coisas que precisa resolver amanhã.
            Problemas que talvez nem existam ainda.
          </p>

          <p>Você tenta ignorar.</p>
          <p>Respira fundo.</p>
          <p>Fecha os olhos.</p>
          
          <p className="text-foreground font-medium text-xl md:text-2xl py-5 leading-snug">
            Mas sua mente parece acelerar ainda mais.
          </p>

          <p>Você vira para um lado.</p>
          <p>Depois para o outro.</p>
          <p>Olha o relógio.</p>
        </div>

        {/* Time Cards */}
        <div className="grid md:grid-cols-3 gap-6 mt-20">
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
        <div className="mt-20 bg-gradient-card rounded-2xl p-10 md:p-14 border border-border shadow-soft">
          <h3 className="font-display text-2xl md:text-3xl font-semibold mb-7 text-foreground text-center">
            E Então Surge Aquela <span className="text-gradient">Sensação Horrível...</span>
          </h3>
          <p className="font-body text-lg text-muted-foreground text-center leading-[1.85]">
            A ansiedade silenciosa. Você começa a calcular mentalmente quanto tempo ainda tem para dormir.
          </p>
        </div>

        {/* Next Day Symptoms */}
        <div className="mt-20 bg-gradient-card rounded-2xl p-10 md:p-14 border border-border shadow-soft">
          <h3 className="font-display text-2xl md:text-3xl font-semibold mb-5 text-foreground text-center">
            No Dia Seguinte...
          </h3>
          
          <div className="space-y-4 font-body text-[17px] text-muted-foreground mb-10 leading-[1.85]">
            <p>O despertador toca.</p>
            <p>Seu corpo parece <span className="text-foreground font-medium">pesado</span>.</p>
            <p>Sua cabeça parece <span className="text-foreground font-medium">envolta em névoa</span>.</p>
            <p>Você levanta porque <span className="text-foreground">precisa</span>. Mas não porque está descansado.</p>
          </div>
          
          <p className="font-body text-foreground text-center mb-8 text-lg">
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
              <div key={index} className="flex items-center gap-3.5 p-4 rounded-lg bg-secondary/50">
                <AlertCircle className="w-5 h-5 text-primary flex-shrink-0" />
                <span className="font-body text-[15px] text-foreground leading-snug">{symptom}</span>
              </div>
            ))}
          </div>

          <p className="font-body text-muted-foreground text-center mt-10 italic text-[17px] leading-[1.85]">
            E enquanto o dia passa... Uma preocupação silenciosa começa a surgir:
            <br />
            <span className="text-foreground font-medium">"Será que hoje à noite vai acontecer tudo de novo?"</span>
          </p>
        </div>

        {/* The Cycle */}
        <div className="mt-20 text-center">
          <h3 className="font-display text-2xl md:text-3xl font-semibold mb-10 text-foreground">
            Para Muitas Pessoas... <span className="text-gradient">A Resposta É Sim.</span>
          </h3>
          
          <div className="bg-gradient-card rounded-2xl p-10 border border-border shadow-soft">
            <p className="font-body text-lg text-muted-foreground mb-8 leading-[1.85]">
              E esse ciclo começa a se repetir.
            </p>
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-10">
              {[
                "Noites ruins",
                "Dias cansativos",
                "Mais ansiedade na hora de dormir",
                "Mais dificuldade para dormir"
              ].map((item, index) => (
                <div key={index} className="p-5 rounded-lg bg-secondary/50 border border-border">
                  <AlertTriangle className="w-5 h-5 text-primary mx-auto mb-3" />
                  <span className="font-body text-sm text-foreground leading-snug">{item}</span>
                </div>
              ))}
            </div>

            <p className="font-body text-muted-foreground text-[17px] leading-[1.85]">
              Com o tempo, a própria cama começa a gerar tensão. Você deita... e seu cérebro 
              automaticamente entra em <span className="text-foreground font-medium">estado de alerta</span>.
            </p>
            <p className="font-body text-foreground font-medium mt-5 text-lg">
              Como se dormir tivesse se tornado algo difícil demais.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

const TimeCard = ({ time, text }: { time: string; text: React.ReactNode }) => (
  <div className="bg-gradient-card rounded-2xl p-7 border border-border text-center shadow-soft hover:shadow-glow transition-all duration-300">
    <div className="flex items-center justify-center gap-2 mb-5">
      <Clock className="w-5 h-5 text-primary" />
      <span className="font-display text-3xl font-bold text-primary">{time}</span>
    </div>
    <p className="font-body text-muted-foreground text-[15px] leading-[1.75]">{text}</p>
  </div>
);

export default ProblemSection;
