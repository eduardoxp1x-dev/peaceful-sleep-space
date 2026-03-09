import { Moon } from "lucide-react";
import { Button } from "@/components/ui/button";

const FooterSection = () => {
  return (
    <section className="py-24 md:py-36 bg-gradient-hero">
      <div className="container mx-auto px-6 max-w-3xl text-center">
        {/* Two Options */}
        <div className="mb-20">
          <h2 className="font-display text-2xl md:text-3xl font-bold mb-10 text-foreground leading-[1.15]">
            Isso Significa Que Você Tem <span className="text-gradient">Duas Opções</span> Agora
          </h2>
          
          <div className="grid md:grid-cols-2 gap-7 mb-14">
            <div className="bg-gradient-card rounded-xl p-7 border border-border">
              <h3 className="font-display text-lg font-semibold text-muted-foreground mb-5">Opção 1</h3>
              <p className="font-body text-muted-foreground text-[15px] leading-[1.8]">
                Fechar esta página. Continuar tentando dormir todas as noites. 
                Torcer para que, de alguma forma, o problema desapareça sozinho.
              </p>
            </div>
            
            <div className="bg-gradient-card rounded-xl p-7 border border-primary/30 shadow-glow">
              <h3 className="font-display text-lg font-semibold text-foreground mb-5">Opção 2</h3>
              <p className="font-body text-foreground text-[15px] leading-[1.8]">
                Dar ao seu cérebro a oportunidade de reaprender a dormir naturalmente.
                Começar hoje o processo que já ajudou tantas pessoas a recuperar suas noites.
              </p>
            </div>
          </div>

          <p className="font-body text-muted-foreground mb-5 text-[17px] leading-[1.85]">
            E finalmente voltar a sentir algo que talvez esteja faltando há muito tempo:
          </p>
          <p className="font-display text-2xl md:text-3xl font-bold text-gradient mb-10">
            descanso verdadeiro.
          </p>
        </div>

        {/* Final Vision */}
        <div className="bg-gradient-card rounded-2xl p-10 border border-border mb-14">
          <h3 className="font-display text-xl md:text-2xl font-semibold text-foreground mb-8">
            Imagine Como Serão Suas Próximas Noites
          </h3>
          <div className="grid md:grid-cols-2 gap-10 text-left">
            <ul className="space-y-3 font-body text-muted-foreground text-[17px] leading-[1.75]">
              <li>• Deitar</li>
              <li>• Relaxar</li>
              <li>• Fechar os olhos</li>
              <li>• E sentir o sono chegar naturalmente</li>
              <li className="text-foreground font-medium">• Sem esforço. Sem ansiedade. Sem luta.</li>
            </ul>
            <ul className="space-y-3 font-body text-muted-foreground text-[17px] leading-[1.75]">
              <li>• Acordar com energia</li>
              <li>• Ter clareza mental</li>
              <li>• Sentir o corpo leve</li>
              <li>• Viver o dia com mais presença</li>
            </ul>
          </div>
          
          <p className="font-body text-muted-foreground text-center mt-8 text-[17px]">
            Tudo isso começa com algo simples:
          </p>
          <p className="font-display text-xl md:text-2xl font-bold text-gradient text-center mt-3">
            uma boa noite de sono.
          </p>
        </div>

        {/* Final CTA */}
        <div className="mb-14">
          <h2 className="font-display text-3xl md:text-4xl lg:text-[2.75rem] font-bold mb-7 text-foreground leading-[1.15]">
            Clique no Botão Abaixo Para <span className="text-gradient">Começar Agora</span>
          </h2>
          <p className="font-body text-xl text-muted-foreground mb-10 leading-[1.85]">
            Comece hoje o processo de recondicionamento do seu sono.
            <br />
            Recupere suas noites. Recupere sua energia. Recupere sua qualidade de vida.
          </p>
          
          <Button 
            size="lg" 
            className="bg-primary hover:bg-primary/90 text-primary-foreground font-body font-semibold px-10 py-6 text-lg rounded-full shadow-glow transition-all duration-300 hover:scale-105 tracking-wide"
            onClick={() => window.open('https://pay.kiwify.com.br/bPiQ3nY', '_blank')}
          >
            QUERO VOLTAR A DORMIR BEM
          </Button>
          
          <p className="font-body text-sm text-muted-foreground mt-5">
            Acesso imediato ao Método Recondicionamento do Sono.
          </p>
        </div>

        {/* Footer */}
        <div className="pt-14 border-t border-border">
          <div className="flex items-center justify-center gap-2.5 mb-5">
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
