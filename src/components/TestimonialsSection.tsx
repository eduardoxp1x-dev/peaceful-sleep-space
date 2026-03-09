import { Quote, CheckCircle } from "lucide-react";

const testimonials = [
  {
    name: "Carlos",
    age: "42 anos",
    text: "Eu ficava rolando na cama quase todas as noites. Era desesperador. Depois de entender o que estava acontecendo com meu sono, comecei a dormir muito mais rápido."
  },
  {
    name: "Mariana",
    age: "37 anos",
    text: "Eu acordava sempre às 3 da manhã e não voltava a dormir. Achei que isso era algo que eu teria para sempre. Hoje durmo a noite inteira."
  },
  {
    name: "Ricardo",
    age: "48 anos",
    text: "Minha mente não desligava nunca. Depois que comecei a aplicar o método, minha cabeça finalmente fica em silêncio quando deito."
  },
  {
    name: "Fernanda",
    age: "34 anos",
    text: "Eu tinha medo da hora de dormir. Hoje eu simplesmente deito e apago."
  }
];

const commonResults = [
  "Eu levava quase duas horas para dormir. Hoje adormeço em poucos minutos.",
  "Passei anos acordando às 3 da manhã. Agora durmo a noite inteira.",
  "Minha mente finalmente fica em silêncio quando deito.",
  "Eu tinha medo da hora de dormir… agora simplesmente relaxo."
];

const TestimonialsSection = () => {
  return (
    <section className="py-24 md:py-36 bg-gradient-hero">
      <div className="container mx-auto px-6 max-w-4xl">
        <div className="text-center mb-20">
          <span className="inline-block text-sm font-body font-medium text-primary mb-5 tracking-widest uppercase">
            Resultados Reais
          </span>
          <h2 className="font-display text-3xl md:text-4xl lg:text-[2.75rem] font-bold text-foreground mb-5 leading-[1.15]">
            Foi Exatamente Essa Transformação Que{" "}
            <span className="text-gradient">Muitas Pessoas Começaram a Relatar</span>
          </h2>
          <p className="font-body text-lg text-muted-foreground max-w-2xl mx-auto leading-[1.85]">
            Depois de aplicar o método de recondicionamento do sono. Pessoas que estavam há anos dormindo mal 
            começaram a relatar mudanças surpreendentes.
          </p>
        </div>

        {/* Common Results */}
        <div className="bg-gradient-card rounded-2xl p-10 border border-border mb-14">
          <h3 className="font-display text-xl font-semibold text-foreground mb-8 text-center">
            Alguns exemplos reais de experiências comuns:
          </h3>
          <div className="grid md:grid-cols-2 gap-5">
            {commonResults.map((result, index) => (
              <div key={index} className="flex items-start gap-3.5 p-5 rounded-lg bg-secondary/50">
                <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                <span className="font-body text-foreground italic text-[15px] leading-[1.75]">"{result}"</span>
              </div>
            ))}
          </div>
        </div>

        {/* Detailed Testimonials */}
        <div className="grid md:grid-cols-2 gap-7 mb-14">
          {testimonials.map((testimonial, index) => (
            <TestimonialCard key={index} {...testimonial} />
          ))}
        </div>

        {/* Conclusion */}
        <div className="bg-gradient-card rounded-2xl p-10 border border-primary/20 shadow-soft">
          <p className="font-body text-muted-foreground text-center mb-5 text-[17px] leading-[1.85]">
            Esses relatos têm algo em comum.
          </p>
          <p className="font-body text-foreground text-center font-medium mb-5 text-lg">
            Nenhuma dessas pessoas tinha um "cérebro quebrado".
          </p>
          <p className="font-body text-muted-foreground text-center text-[17px] leading-[1.85]">
            Elas apenas estavam presas em um padrão errado de sono.
            <br />
            <span className="text-gradient font-semibold">E quando o padrão mudou... o sono voltou.</span>
          </p>
        </div>
      </div>
    </section>
  );
};

const TestimonialCard = ({ name, age, text }: { name: string; age: string; text: string }) => (
  <div className="bg-gradient-card rounded-2xl p-7 md:p-9 border border-border shadow-soft hover:shadow-glow transition-all duration-300">
    <Quote className="w-10 h-10 text-primary/40 mb-5" />
    <p className="font-body text-foreground mb-7 leading-[1.8] italic text-[15px]">
      "{text}"
    </p>
    <div className="flex items-center gap-3.5">
      <div className="w-11 h-11 rounded-full bg-primary/20 flex items-center justify-center">
        <span className="font-display text-lg font-semibold text-primary">{name[0]}</span>
      </div>
      <div>
        <p className="font-body font-medium text-foreground">{name}</p>
        <p className="font-body text-sm text-muted-foreground">{age}</p>
      </div>
    </div>
  </div>
);

export default TestimonialsSection;
