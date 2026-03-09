import { CheckCircle } from "lucide-react";
import { TestimonialsSection as TestimonialsMarquee } from "@/components/ui/testimonials-with-marquee";

const testimonials = [
  {
    author: {
      name: "Carlos",
      handle: "42 anos",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face"
    },
    text: "Eu ficava rolando na cama quase todas as noites. Era desesperador. Depois de entender o que estava acontecendo com meu sono, comecei a dormir muito mais rápido."
  },
  {
    author: {
      name: "Mariana",
      handle: "37 anos",
      avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&h=150&fit=crop&crop=face"
    },
    text: "Eu acordava sempre às 3 da manhã e não voltava a dormir. Achei que isso era algo que eu teria para sempre. Hoje durmo a noite inteira."
  },
  {
    author: {
      name: "Ricardo",
      handle: "48 anos",
      avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&h=150&fit=crop&crop=face"
    },
    text: "Minha mente não desligava nunca. Depois que comecei a aplicar o método, minha cabeça finalmente fica em silêncio quando deito."
  },
  {
    author: {
      name: "Fernanda",
      handle: "34 anos",
      avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&h=150&fit=crop&crop=face"
    },
    text: "Eu tinha medo da hora de dormir. Hoje eu simplesmente deito e apago."
  }
];

const commonResults = [
  "Eu levava quase duas horas para dormir. Hoje adormeço em poucos minutos.",
  "Passei anos acordando às 3 da manhã. Agora durmo a noite inteira.",
  "Minha mente finalmente fica em silêncio quando deito.",
  "Eu tinha medo da hora de dormir… agora simplesmente relaxo."
];

const TestimonialsSectionPage = () => {
  return (
    <>
      <TestimonialsMarquee
        title="Foi Exatamente Essa Transformação Que Muitas Pessoas Começaram a Relatar"
        description="Depois de aplicar o método de recondicionamento do sono. Pessoas que estavam há anos dormindo mal começaram a relatar mudanças surpreendentes."
        testimonials={testimonials}
      />

      <section className="pb-24 md:pb-36 bg-gradient-hero">
        <div className="container mx-auto px-6 max-w-4xl">
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
    </>
  );
};

export default TestimonialsSectionPage;
