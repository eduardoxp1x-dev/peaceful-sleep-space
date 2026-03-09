import { Moon } from "lucide-react";
import { Button } from "@/components/ui/button";

const FooterSection = () => {
  return (
    <section className="py-20 md:py-32 bg-gradient-hero">
      <div className="container mx-auto px-6 max-w-3xl text-center">
        {/* Two Options */}
        <div className="mb-16">
          <h2 className="font-display text-2xl md:text-3xl font-bold mb-8 text-foreground">
            Isso Significa Que Você Tem <span className="text-gradient">Duas Opções</span> Agora
          </h2>
          
          <div className="grid md:grid-cols-2 gap-6 mb-12">
            <div className="bg-gradient-card rounded-xl p-6 border border-border">
              <h3 className="font-display text-lg font-semibold text-muted-foreground mb-4">Opção 1</h3>
              <p className="font-body text-muted-foreground text-sm">
                Fechar esta página. Continuar tentando dormir todas as noites. 
                Torcer para que, de alguma forma, o problema desapareça sozinho.
              </p>
            </div>
            
            <div className="bg-gradient-card rounded-xl p-6 border border-primary/30 shadow-glow">
              <h3 className="font-display text-lg font-semibold text-foreground mb-4">Opção 2</h3>
              <p className="font-body text-foreground text-sm">
                Dar ao seu cérebro a oportunidade de reaprender a dormir naturalmente.
                Começar hoje o processo que já ajudou tantas pessoas a recuperar suas noites.
              </p>
            </div>
          </div>

          <p className="font-body text-muted-foreground mb-4">
            E finalmente voltar a sentir algo que talvez esteja faltando há muito tempo:
          </p>
          <p className="font-display text-2xl font-bold text-gradient mb-8">
            descanso verdadeiro.
          </p>
        </div>

        {/* Final Vision */}
        <div className="bg-gradient-card rounded-2xl p-8 border border-border mb-12">
          <h3 className="font-display text-xl font-semibold text-foreground mb-6">
            Imagine Como Serão Suas Próximas Noites
          </h3>
          <div className="grid md:grid-cols-2 gap-8 text-left">
            <ul className="space-y-2 font-body text-muted-foreground">
              <li>• Deitar</li>
              <li>• Relaxar</li>
              <li>• Fechar os olhos</li>
              <li>• E sentir o sono chegar naturalmente</li>
              <li className="text-foreground font-medium">• Sem esforço. Sem ansiedade. Sem luta.</li>
            </ul>
            <ul className="space-y-2 font-body text-muted-foreground">
              <li>• Acordar com energia</li>
              <li>• Ter clareza mental</li>
              <li>• Sentir o corpo leve</li>
              <li>• Viver o dia com mais presença</li>
            </ul>
          </div>
          
          <p className="font-body text-muted-foreground text-center mt-6">
            Tudo isso começa com algo simples:
          </p>
          <p className="font-display text-xl font-bold text-gradient text-center mt-2">
            uma boa noite de sono.
          </p>
        </div>

        {/* Final CTA */}
        <div className="mb-12">
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold mb-6 text-foreground">
            Clique no Botão Abaixo Para <span className="text-gradient">Começar Agora</span>
          </h2>
          <p className="font-body text-xl text-muted-foreground mb-8">
            Comece hoje o processo de recondicionamento do seu sono.
            <br />
            Recupere suas noites. Recupere sua energia. Recupere sua qualidade de vida.
          </p>
          
          <Button 
            size="lg" 
            className="bg-primary hover:bg-primary/90 text-primary-foreground font-body font-semibold px-10 py-6 text-lg rounded-full shadow-glow transition-all duration-300 hover:scale-105"
          >
            QUERO VOLTAR A DORMIR BEM
          </Button>
          
          <p className="font-body text-sm text-muted-foreground mt-4">
            Acesso imediato ao Método Recondicionamento do Sono.
          </p>
        </div>

        {/* Footer */}
        <div className="pt-12 border-t border-border">
          <div className="flex items-center justify-center gap-2 mb-4">
            <Moon className="w-6 h-6 text-primary" />
            <span className="font-display text-xl font-semibold text-foreground">Recondicionamento do Sono</span>
          </div>
          <p className="font-body text-sm text-muted-foreground">
            © {new Date().getFullYear()} Todos os direitos reservados.
          </p>
        </div>
      </div>
    </section>
  );
};

export default FooterSection;
