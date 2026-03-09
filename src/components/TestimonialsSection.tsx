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
    <section className="py-20 md:py-32 bg-gradient-hero">
      <div className="container mx-auto px-6 max-w-5xl">
        <div className="text-center mb-16">
          <span className="inline-block text-sm font-body font-medium text-primary mb-4 tracking-wider uppercase">
            Resultados Reais
          </span>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Foi Exatamente Essa Transformação Que{" "}
            <span className="text-gradient">Muitas Pessoas Começaram a Relatar</span>
          </h2>
          <p className="font-body text-lg text-muted-foreground max-w-2xl mx-auto">
            Depois de aplicar o método de recondicionamento do sono. Pessoas que estavam há anos dormindo mal 
            começaram a relatar mudanças surpreendentes.
          </p>
        </div>

        {/* Common Results */}
        <div className="bg-gradient-card rounded-2xl p-8 border border-border mb-12">
          <h3 className="font-display text-xl font-semibold text-foreground mb-6 text-center">
            Alguns exemplos reais de experiências comuns:
          </h3>
          <div className="grid md:grid-cols-2 gap-4">
            {commonResults.map((result, index) => (
              <div key={index} className="flex items-start gap-3 p-4 rounded-lg bg-secondary/50">
                <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                <span className="font-body text-foreground italic">"{result}"</span>
              </div>
            ))}
          </div>
        </div>

        {/* Detailed Testimonials */}
        <div className="grid md:grid-cols-2 gap-6 mb-12">
          {testimonials.map((testimonial, index) => (
            <TestimonialCard key={index} {...testimonial} />
          ))}
        </div>

        {/* Conclusion */}
        <div className="bg-gradient-card rounded-2xl p-8 border border-primary/20 shadow-soft">
          <p className="font-body text-muted-foreground text-center mb-4">
            Esses relatos têm algo em comum.
          </p>
          <p className="font-body text-foreground text-center font-medium mb-4">
            Nenhuma dessas pessoas tinha um "cérebro quebrado".
          </p>
          <p className="font-body text-muted-foreground text-center">
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
  <div className="bg-gradient-card rounded-2xl p-6 md:p-8 border border-border shadow-soft hover:shadow-glow transition-all duration-300">
    <Quote className="w-10 h-10 text-primary/40 mb-4" />
    <p className="font-body text-foreground mb-6 leading-relaxed italic">
      "{text}"
    </p>
    <div className="flex items-center gap-3">
      <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center">
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
