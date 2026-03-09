import { Quote } from "lucide-react";

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

const TestimonialsSection = () => {
  return (
    <section className="py-20 md:py-32 bg-gradient-hero">
      <div className="container mx-auto px-6 max-w-5xl">
        <div className="text-center mb-16">
          <span className="inline-block text-sm font-body font-medium text-primary mb-4 tracking-wider uppercase">
            Depoimentos
          </span>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-foreground">
            O Que Dizem Quem{" "}
            <span className="text-gradient">Aplicou o Método</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {testimonials.map((testimonial, index) => (
            <TestimonialCard key={index} {...testimonial} />
          ))}
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
