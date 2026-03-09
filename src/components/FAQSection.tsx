import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "E se minha insônia for antiga?",
    answer: `Essa é uma das dúvidas mais comuns. Muitas pessoas acreditam que, depois de anos dormindo mal, o cérebro simplesmente não consegue mais voltar ao normal.

Mas a verdade é outra.

O cérebro humano possui algo chamado neuroplasticidade. Isso significa que ele tem capacidade de aprender novos padrões e abandonar padrões antigos.

Se o cérebro conseguiu aprender o padrão da insônia... ele também pode aprender novamente o padrão do sono.

E é exatamente isso que o método ensina.`
  },
  {
    question: "E se eu já tentei de tudo?",
    answer: `Essa é outra situação extremamente comum. Muitas pessoas já tentaram:

• Chás calmantes
• Melatonina
• Aplicativos de sono
• Meditação
• Técnicas de respiração
• Medicamentos

Alguns funcionam por um tempo. Mas depois o problema volta.

Isso acontece porque essas soluções geralmente tratam apenas os sintomas.

O Método Recondicionamento do Sono trabalha com algo diferente: ele atua no mecanismo que gera a insônia.

Quando o mecanismo muda... o padrão de sono muda junto.`
  },
  {
    question: "Vou precisar tomar remédios?",
    answer: `Não.

O método foi criado justamente para ajudar pessoas que desejam dormir naturalmente.

O foco do processo é:

• Regular o sistema nervoso
• Equilibrar os hormônios do sono
• Recondicionar o cérebro para dormir novamente

Ou seja, o objetivo é permitir que o próprio corpo volte ao funcionamento natural.`
  },
  {
    question: "Isso é complicado de aplicar?",
    answer: `Não.

Na verdade, um dos principais objetivos do método foi criar algo simples e prático.

Você não precisa:

❌ Mudar completamente sua rotina
❌ Fazer práticas complicadas
❌ Passar horas aplicando técnicas

As estratégias foram organizadas para serem fáceis de aplicar no dia a dia.

Este método foi estruturado para ser simples. Nada de teorias complexas. Nada de rotinas impossíveis. Nada de mudanças radicais na vida.

A ideia é ensinar seu corpo a fazer algo que ele já sabe fazer: dormir.`
  },
  {
    question: "E se isso não funcionar comigo?",
    answer: `Entendemos essa preocupação. Por isso oferecemos uma garantia total de 7 dias.

Você pode acessar todo o conteúdo, aplicar as estratégias e avaliar com calma.

Se dentro desse período você achar que o método não é para você, basta solicitar o reembolso.

Sem perguntas. Sem burocracia. Seu dinheiro será devolvido.

Isso significa que você não assume nenhum risco.`
  }
];

const FAQSection = () => {
  return (
    <section className="py-24 md:py-36 bg-secondary/30">
      <div className="container mx-auto px-6 max-w-3xl">
        <div className="text-center mb-14">
          <span className="inline-block text-sm font-body font-medium text-primary mb-5 tracking-widest uppercase">
            Dúvidas Frequentes
          </span>
          <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-5 leading-tight">
            Antes de Continuar... <span className="text-gradient">Vamos Esclarecer</span>
          </h2>
          <p className="font-body text-muted-foreground text-lg leading-relaxed">
            É completamente normal que, depois de tentar várias soluções, você tenha algumas perguntas na cabeça.
            <br />
            Na verdade, quase todas as pessoas que hoje dormem bem novamente tiveram as mesmas dúvidas no início.
          </p>
        </div>

        <Accordion type="single" collapsible className="space-y-5">
          {faqs.map((faq, index) => (
            <AccordionItem 
              key={index} 
              value={`item-${index}`}
              className="bg-gradient-card rounded-xl border border-border px-7 data-[state=open]:border-primary/30 data-[state=open]:shadow-glow transition-all duration-300"
            >
              <AccordionTrigger className="font-display text-left text-foreground hover:no-underline py-6 text-lg">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="font-body text-muted-foreground pb-6 leading-relaxed whitespace-pre-line text-base">
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
