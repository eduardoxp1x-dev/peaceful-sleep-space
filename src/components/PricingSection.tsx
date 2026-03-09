import { Button } from "@/components/ui/button";
import { PricingCard } from "@/components/ui/dark-gradient-pricing";
import { Check, Shield, Clock, Zap } from "lucide-react";

const modules = [
  {
    title: "Módulo 1 — Entendendo a Verdadeira Causa da Insônia",
    items: [
      "Por que seu cérebro permanece ativo à noite",
      "O papel do cortisol e da melatonina",
      "Os erros mais comuns que pioram a insônia"
    ]
  },
  {
    title: "Módulo 2 — Identificando Seu Tipo de Insônia",
    items: [
      "Dificuldade para adormecer",
      "Acordar durante a madrugada",
      "Acordar cedo demais"
    ]
  },
  {
    title: "Módulo 3 — Regulando o Sistema Nervoso",
    items: [
      "Técnicas para sair do estado de alerta",
      "Redução natural do cortisol",
      "Ativação do modo descanso"
    ]
  },
  {
    title: "Módulo 4 — Reprogramando o Sono",
    items: [
      "Práticas de recondicionamento",
      "Associação positiva com a cama",
      "Restauração do padrão natural"
    ]
  }
];

const bonuses = [
  {
    title: "Rotina Noturna de Relaxamento Profundo",
    description: "Um guia simples que mostra como preparar o corpo e o cérebro para o sono profundo."
  },
  {
    title: "Protocolo Anti-Mente Acelerada",
    description: "Estratégias práticas para silenciar pensamentos que aparecem quando você deita."
  },
  {
    title: "Guia de Hábitos que Melhoram o Sono",
    description: "Pequenas mudanças que podem aumentar drasticamente a qualidade do seu descanso."
  }
];

const handleCheckout = () => window.open('https://pay.kiwify.com.br/bPiQ3nY', '_blank');

const PricingSection = () => {
  return (
    <section className="py-24 md:py-36 bg-gradient-hero">
      <div className="container mx-auto px-6 max-w-5xl">
        {/* Header */}
        <div className="text-center mb-14">
          <span className="inline-block text-sm font-body font-medium text-primary mb-5 tracking-widest uppercase">
            A Solução Completa
          </span>
          <h2 className="font-display text-3xl md:text-4xl lg:text-[2.75rem] font-bold text-foreground mb-5 leading-[1.15]">
            Apresentando o{" "}
            <span className="text-gradient">MÉTODO RECONDICIONAMENTO DO SONO</span>
          </h2>
          <p className="font-body text-lg text-muted-foreground max-w-2xl mx-auto leading-[1.85]">
            Um programa prático criado para ajudar adultos que sofrem com insônia a reprogramar o cérebro 
            para dormir novamente de forma natural.
          </p>
        </div>

        {/* What makes it different */}
        <div className="bg-gradient-card rounded-2xl p-10 border border-border mb-14 max-w-3xl mx-auto">
          <h3 className="font-display text-xl md:text-2xl font-semibold text-foreground mb-5 text-center">
            O Que Torna Esse Método Diferente
          </h3>
          <p className="font-body text-muted-foreground text-center mb-8 text-[17px] leading-[1.85]">
            A maioria das soluções tenta apenas forçar o sono. Este método faz algo diferente.
            <br />
            <span className="text-foreground font-medium">
              Ele trabalha com três pilares fundamentais:
            </span>
          </p>
          
          <div className="grid md:grid-cols-3 gap-5">
            <div className="p-5 rounded-lg bg-secondary/50 text-center">
              <span className="font-body text-foreground font-medium">1. Identificação do padrão</span>
              <p className="font-body text-muted-foreground text-sm mt-2 leading-relaxed">Elimina tentativa e erro</p>
            </div>
            <div className="p-5 rounded-lg bg-secondary/50 text-center">
              <span className="font-body text-foreground font-medium">2. Regulagem do sistema nervoso</span>
              <p className="font-body text-muted-foreground text-sm mt-2 leading-relaxed">Reduz o estado de alerta</p>
            </div>
            <div className="p-5 rounded-lg bg-secondary/50 text-center">
              <span className="font-body text-foreground font-medium">3. Recondicionamento</span>
              <p className="font-body text-muted-foreground text-sm mt-2 leading-relaxed">Associa a cama com relaxamento</p>
            </div>
          </div>
          
          <p className="font-body text-center text-foreground font-medium mt-8 text-lg">
            Quando esses três elementos funcionam juntos... dormir deixa de ser uma luta.
          </p>
        </div>

        {/* Modules */}
        <div className="mb-14 max-w-3xl mx-auto">
          <h3 className="font-display text-2xl md:text-[1.75rem] font-semibold text-foreground mb-8 text-center">
            Veja Exatamente O Que Você Vai Receber
          </h3>
          
          <div className="grid md:grid-cols-2 gap-6">
            {modules.map((module, index) => (
              <div key={index} className="bg-gradient-card rounded-xl p-7 border border-border">
                <h4 className="font-display text-lg font-semibold text-foreground mb-5">
                  {module.title}
                </h4>
                <ul className="space-y-3">
                  {module.items.map((item, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <Check className="w-4 h-4 text-primary flex-shrink-0 mt-1" />
                      <span className="font-body text-muted-foreground text-[15px] leading-relaxed">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Bonuses */}
        <div className="bg-gradient-card rounded-2xl p-10 border border-primary/20 mb-14 max-w-3xl mx-auto">
          <h3 className="font-display text-xl md:text-2xl font-semibold text-center text-accent mb-3">
            + Bônus Exclusivos
          </h3>
          <p className="font-body text-muted-foreground text-center mb-8 text-[17px] leading-[1.85]">
            Para tornar o processo ainda mais fácil, você também recebe materiais complementares:
          </p>
          
          <div className="space-y-5">
            {bonuses.map((bonus, index) => (
              <div key={index} className="flex items-start gap-5 p-5 rounded-lg bg-secondary/50">
                <div className="w-9 h-9 rounded-full bg-accent/20 flex items-center justify-center flex-shrink-0">
                  <span className="font-display font-bold text-accent">{index + 1}</span>
                </div>
                <div>
                  <h4 className="font-display font-semibold text-foreground mb-1">{bonus.title}</h4>
                  <p className="font-body text-muted-foreground text-[15px] leading-relaxed">{bonus.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Pricing Card */}
        <div className="mb-14 max-w-lg mx-auto">
          <div className="text-center mb-10">
            <h3 className="font-display text-2xl md:text-3xl font-semibold text-foreground mb-3">
              Comece Agora
            </h3>
            <p className="font-body text-muted-foreground text-[17px]">
              Quanto vale para você voltar a dormir bem?
            </p>
          </div>

          <PricingCard
            tier="Método Completo"
            price="R$197"
            bestFor="Acesso completo ao método + bônus exclusivos. Pagamento único, sem mensalidades."
            CTA="QUERO VOLTAR A DORMIR BEM"
            benefits={[
              { text: "4 Módulos do Método", checked: true },
              { text: "Acesso vitalício", checked: true },
              { text: "Garantia de 7 dias", checked: true },
              { text: "3 Bônus exclusivos", checked: true },
              
            ]}
            className="border-primary/40 shadow-glow"
            onCtaClick={handleCheckout}
          />

          <p className="font-body text-muted-foreground text-center mt-6 text-sm">
            Pagamento único. Sem mensalidades. Parcele em até 12x de R$19,50.
          </p>
        </div>

        {/* Guarantees */}
        <div className="bg-gradient-card rounded-3xl p-10 md:p-14 border border-border max-w-3xl mx-auto">
          <div className="grid md:grid-cols-3 gap-5 text-center mb-10">
            <div className="flex flex-col items-center gap-2.5">
              <Shield className="w-6 h-6 text-primary" />
              <span className="font-body text-sm text-foreground font-medium">Garantia de 7 dias</span>
              <p className="font-body text-xs text-muted-foreground leading-relaxed">
                Teste tudo. Se não gostar, devolvemos seu dinheiro.
              </p>
            </div>
            <div className="flex flex-col items-center gap-2.5">
              <Zap className="w-6 h-6 text-primary" />
              <span className="font-body text-sm text-foreground font-medium">Acesso imediato</span>
              <p className="font-body text-xs text-muted-foreground leading-relaxed">
                Comece a aplicar hoje mesmo.
              </p>
            </div>
            <div className="flex flex-col items-center gap-2.5">
              <Clock className="w-6 h-6 text-primary" />
              <span className="font-body text-sm text-foreground font-medium">Acesso vitalício</span>
              <p className="font-body text-xs text-muted-foreground leading-relaxed">
                O conteúdo é seu para sempre.
              </p>
            </div>
          </div>

          <div className="p-7 rounded-xl bg-primary/5 border border-primary/20">
            <h4 className="font-display font-semibold text-foreground text-center mb-3">
              Garantia Total de 7 Dias
            </h4>
            <p className="font-body text-muted-foreground text-center text-[15px] leading-[1.8]">
              Você não precisa assumir nenhum risco. Depois de acessar o método, você terá 7 dias completos 
              para testar tudo. Veja o conteúdo. Aplique as estratégias. Avalie com calma. Se dentro desse 
              período você achar que o método não é para você, basta solicitar o reembolso. Sem perguntas. 
              Sem burocracia. Seu dinheiro será devolvido.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PricingSection;
