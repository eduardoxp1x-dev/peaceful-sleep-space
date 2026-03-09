import { Clock, Brain, AlertCircle } from "lucide-react";

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

        <div className="space-y-8 font-body text-lg text-muted-foreground leading-relaxed">
          <p>
            Você deita na cama. Seu corpo está cansado. Talvez até exausto.
          </p>
          
          <p className="text-foreground font-medium text-xl">
            Mas sua mente... não coopera.
          </p>
          
          <p>
            Pensamentos começam a surgir. Primeiro devagar. Depois cada vez mais rápido.
            Você lembra de coisas que aconteceram durante o dia. Coisas que precisa resolver amanhã.
            Problemas que talvez nem existam ainda.
          </p>
        </div>

        {/* Time Cards */}
        <div className="grid md:grid-cols-3 gap-6 mt-16">
          <TimeCard time="00:41" text='"Preciso dormir agora."' />
          <TimeCard time="01:17" text='"Se eu dormir agora ainda consigo 5 horas..."' />
          <TimeCard time="02:06" text="Frustração... cansaço... desespero." />
        </div>

        {/* Symptoms */}
        <div className="mt-20 bg-gradient-card rounded-2xl p-8 md:p-12 border border-border shadow-soft">
          <h3 className="font-display text-2xl md:text-3xl font-semibold mb-8 text-foreground text-center">
            No Dia Seguinte...
          </h3>
          
          <div className="grid md:grid-cols-2 gap-4">
            {[
              "Dificuldade de concentração",
              "Irritação com pequenas coisas",
              "Falta de energia",
              "Lapsos de memória",
              "Ansiedade sem motivo",
              "Cansaço constante"
            ].map((symptom, index) => (
              <div key={index} className="flex items-center gap-3 p-4 rounded-lg bg-secondary/50">
                <AlertCircle className="w-5 h-5 text-primary flex-shrink-0" />
                <span className="font-body text-foreground">{symptom}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

const TimeCard = ({ time, text }: { time: string; text: string }) => (
  <div className="bg-gradient-card rounded-2xl p-6 border border-border text-center shadow-soft hover:shadow-glow transition-all duration-300">
    <div className="flex items-center justify-center gap-2 mb-4">
      <Clock className="w-5 h-5 text-primary" />
      <span className="font-display text-3xl font-bold text-primary">{time}</span>
    </div>
    <p className="font-body text-muted-foreground italic">{text}</p>
  </div>
);

export default ProblemSection;
