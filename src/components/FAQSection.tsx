import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "E se minha insônia for antiga?",
    answer: "O cérebro humano possui algo chamado neuroplasticidade. Isso significa que ele tem capacidade de aprender novos padrões e abandonar padrões antigos. Se o cérebro conseguiu aprender o padrão da insônia, ele também pode aprender novamente o padrão do sono."
  },
  {
    question: "E se eu já tentei de tudo?",
    answer: "A maioria das soluções trata apenas os sintomas. O Método Recondicionamento do Sono trabalha com algo diferente: ele atua no mecanismo que gera a insônia. Quando o mecanismo muda, o padrão de sono muda junto."
  },
  {
    question: "Vou precisar tomar remédios?",
    answer: "Não. O método foi criado justamente para ajudar pessoas que desejam dormir naturalmente. O foco do processo é regular o sistema nervoso, equilibrar os hormônios do sono e recondicionar o cérebro para dormir novamente."
  },
  {
    question: "Isso é complicado de aplicar?",
    answer: "Não. Um dos principais objetivos do método foi criar algo simples e prático. Você não precisa mudar completamente sua rotina, fazer práticas complicadas ou passar horas aplicando técnicas. As estratégias foram organizadas para serem fáceis de aplicar no dia a dia."
  }
];

const FAQSection = () => {
  return (
    <section className="py-20 md:py-32 bg-secondary/30">
      <div className="container mx-auto px-6 max-w-3xl">
        <div className="text-center mb-12">
          <span className="inline-block text-sm font-body font-medium text-primary mb-4 tracking-wider uppercase">
            Dúvidas Frequentes
          </span>
          <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground">
            Perguntas <span className="text-gradient">Comuns</span>
          </h2>
        </div>

        <Accordion type="single" collapsible className="space-y-4">
          {faqs.map((faq, index) => (
            <AccordionItem 
              key={index} 
              value={`item-${index}`}
              className="bg-gradient-card rounded-xl border border-border px-6 data-[state=open]:border-primary/30 data-[state=open]:shadow-glow transition-all duration-300"
            >
              <AccordionTrigger className="font-display text-left text-foreground hover:no-underline py-5">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="font-body text-muted-foreground pb-5 leading-relaxed">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
};

export default FAQSection;
