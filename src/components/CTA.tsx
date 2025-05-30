
import React from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight, MessageSquare } from 'lucide-react';

const CTA = () => {
  return (
    <section id="contato" className="py-20 bg-neurofit-gradient">
      <div className="container mx-auto px-4 text-center">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">
            Pronto para ter o agente virtual mais eficiente da sua equipe?
          </h2>
          <p className="text-xl text-white/90 mb-8">
            Converse conosco e descubra como nossos agentes virtuais personalizados 
            podem transformar o atendimento da sua academia.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              size="lg" 
              className="bg-white text-neurofit-blue hover:bg-gray-100 h-12 px-8"
              onClick={() => window.open('https://instagram.com/neurofit.ia', '_blank')}
            >
              <MessageSquare className="mr-2 w-5 h-5" />
              Falar Conosco Agora
            </Button>
            <Button 
              variant="outline" 
              size="lg" 
              className="border-white text-white hover:bg-white/10 h-12 px-8"
              onClick={() => window.open('https://www.notion.so/NeuroFit-1f331096abee80e980fee627cf43cd05', '_blank')}
            >
              Ver Documentação Completa
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
          </div>
          
          <div className="mt-8 text-white/80">
            <p className="text-sm">
              🎓 Desenvolvido por estudantes de IA da UFG • 🤖 Agentes 100% personalizados • 📈 Resultados comprovados
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTA;
