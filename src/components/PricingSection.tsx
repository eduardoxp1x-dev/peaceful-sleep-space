import { Button } from "@/components/ui/button";
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

const PricingSection = () => {
  return (
    <section className="py-20 md:py-32 bg-gradient-hero">
      <div className="container mx-auto px-6 max-w-4xl">
        {/* Header */}
        <div className="text-center mb-12">
          <span className="inline-block text-sm font-body font-medium text-primary mb-4 tracking-wider uppercase">
            A Solução Completa
          </span>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Apresentando o{" "}
            <span className="text-gradient">MÉTODO RECONDICIONAMENTO DO SONO</span>
          </h2>
          <p className="font-body text-lg text-muted-foreground max-w-2xl mx-auto">
            Um programa prático criado para ajudar adultos que sofrem com insônia a reprogramar o cérebro 
            para dormir novamente de forma natural.
          </p>
        </div>

        {/* What makes it different */}
        <div className="bg-gradient-card rounded-2xl p-8 border border-border mb-12">
          <h3 className="font-display text-xl font-semibold text-foreground mb-4 text-center">
            O Que Torna Esse Método Diferente
          </h3>
          <p className="font-body text-muted-foreground text-center mb-6">
            A maioria das soluções tenta apenas forçar o sono. Este método faz algo diferente.
            <br />
            <span className="text-foreground font-medium">
              Ele trabalha com três pilares fundamentais:
            </span>
          </p>
          
          <div className="grid md:grid-cols-3 gap-4">
            <div className="p-4 rounded-lg bg-secondary/50 text-center">
              <span className="font-body text-foreground font-medium">1. Identificação do padrão</span>
              <p className="font-body text-muted-foreground text-sm mt-1">Elimina tentativa e erro</p>
            </div>
            <div className="p-4 rounded-lg bg-secondary/50 text-center">
              <span className="font-body text-foreground font-medium">2. Regulagem do sistema nervoso</span>
              <p className="font-body text-muted-foreground text-sm mt-1">Reduz o estado de alerta</p>
            </div>
            <div className="p-4 rounded-lg bg-secondary/50 text-center">
              <span className="font-body text-foreground font-medium">3. Recondicionamento</span>
              <p className="font-body text-muted-foreground text-sm mt-1">Associa a cama com relaxamento</p>
            </div>
          </div>
          
          <p className="font-body text-center text-foreground font-medium mt-6">
            Quando esses três elementos funcionam juntos... dormir deixa de ser uma luta.
          </p>
        </div>

        {/* Modules */}
        <div className="mb-12">
          <h3 className="font-display text-2xl font-semibold text-foreground mb-6 text-center">
            Veja Exatamente O Que Você Vai Receber
          </h3>
          
          <div className="grid md:grid-cols-2 gap-6">
            {modules.map((module, index) => (
              <div key={index} className="bg-gradient-card rounded-xl p-6 border border-border">
                <h4 className="font-display text-lg font-semibold text-foreground mb-4">
                  {module.title}
                </h4>
                <ul className="space-y-2">
                  {module.items.map((item, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <Check className="w-4 h-4 text-primary flex-shrink-0 mt-1" />
                      <span className="font-body text-muted-foreground text-sm">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Bonuses */}
        <div className="bg-gradient-card rounded-2xl p-8 border border-primary/20 mb-12">
          <h3 className="font-display text-xl font-semibold text-center text-accent mb-2">
            + Bônus Exclusivos
          </h3>
          <p className="font-body text-muted-foreground text-center mb-6">
            Para tornar o processo ainda mais fácil, você também recebe materiais complementares:
          </p>
          
          <div className="space-y-4">
            {bonuses.map((bonus, index) => (
              <div key={index} className="flex items-start gap-4 p-4 rounded-lg bg-secondary/50">
                <div className="w-8 h-8 rounded-full bg-accent/20 flex items-center justify-center flex-shrink-0">
                  <span className="font-display font-bold text-accent">{index + 1}</span>
                </div>
                <div>
                  <h4 className="font-display font-semibold text-foreground">{bonus.title}</h4>
                  <p className="font-body text-muted-foreground text-sm">{bonus.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Pricing Card */}
        <div className="bg-gradient-card rounded-3xl p-8 md:p-12 border border-primary/30 shadow-glow">
          <div className="text-center mb-8">
            <h3 className="font-display text-xl font-semibold text-foreground mb-2">
              Tudo Isso Para Ajudar Você a Recuperar Algo Essencial
            </h3>
            <p className="font-body text-gradient font-semibold text-lg">
              Suas noites de sono.
            </p>
          </div>

          {/* Price Question */}
          <div className="bg-secondary/50 rounded-xl p-6 mb-8">
            <p className="font-body text-foreground text-center font-medium mb-4">
              Quanto vale para você voltar a dormir bem?
            </p>
            <p className="font-body text-muted-foreground text-center text-sm">
              Dormir bem significa: Mais energia. Mais foco. Mais paciência. Mais produtividade. 
              Mais equilíbrio emocional. Mais qualidade de vida.
            </p>
          </div>

          {/* Price */}
          <div className="text-center mb-8">
            <p className="font-body text-muted-foreground mb-2">
              Hoje você pode começar o processo completo por apenas:
            </p>
            <div className="flex items-center justify-center gap-2">
              <span className="font-display text-5xl md:text-6xl font-bold text-gradient">R$197</span>
            </div>
            <p className="font-body text-muted-foreground mt-2">
              Pagamento único. Sem mensalidades. Sem taxas escondidas.
            </p>
            <p className="font-body text-foreground mt-4">
              Ou divida em até <span className="text-gradient font-semibold">12x de R$19,50</span>
            </p>
          </div>

          {/* CTA */}
          <Button 
            size="lg" 
            className="w-full bg-primary hover:bg-primary/90 text-primary-foreground font-body font-semibold py-6 text-lg rounded-full shadow-glow transition-all duration-300 hover:scale-[1.02]"
          >
            QUERO VOLTAR A DORMIR BEM
          </Button>

          {/* Guarantees */}
          <div className="mt-8 grid md:grid-cols-3 gap-4 text-center">
            <div className="flex flex-col items-center gap-2">
              <Shield className="w-6 h-6 text-primary" />
              <span className="font-body text-sm text-foreground font-medium">Garantia de 7 dias</span>
              <p className="font-body text-xs text-muted-foreground">
                Teste tudo. Se não gostar, devolvemos seu dinheiro.
              </p>
            </div>
            <div className="flex flex-col items-center gap-2">
              <Zap className="w-6 h-6 text-primary" />
              <span className="font-body text-sm text-foreground font-medium">Acesso imediato</span>
              <p className="font-body text-xs text-muted-foreground">
                Comece a aplicar hoje mesmo.
              </p>
            </div>
            <div className="flex flex-col items-center gap-2">
              <Clock className="w-6 h-6 text-primary" />
              <span className="font-body text-sm text-foreground font-medium">Acesso vitalício</span>
              <p className="font-body text-xs text-muted-foreground">
                O conteúdo é seu para sempre.
              </p>
            </div>
          </div>

          {/* Full Guarantee Text */}
          <div className="mt-8 p-6 rounded-xl bg-primary/5 border border-primary/20">
            <h4 className="font-display font-semibold text-foreground text-center mb-2">
              Garantia Total de 7 Dias
            </h4>
            <p className="font-body text-muted-foreground text-center text-sm">
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
