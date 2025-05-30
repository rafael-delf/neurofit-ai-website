
import React from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight, Calendar } from 'lucide-react';

const CTA = () => {
  return (
    <section id="contato" className="py-20 bg-neurofit-gradient">
      <div className="container mx-auto px-4 text-center">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">
            Pronto para revolucionar sua academia?
          </h2>
          <p className="text-xl text-white/90 mb-8">
            Agende uma demonstração gratuita e descubra como a NeuroFit pode 
            transformar sua academia com automações inteligentes.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              size="lg" 
              className="bg-white text-neurofit-blue hover:bg-gray-100 h-12 px-8"
            >
              <Calendar className="mr-2 w-5 h-5" />
              Agendar Demonstração Gratuita
            </Button>
            <Button 
              variant="outline" 
              size="lg" 
              className="border-white text-white hover:bg-white/10 h-12 px-8"
            >
              Falar com Especialista
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
          </div>
          
          <div className="mt-8 text-white/80">
            <p className="text-sm">
              💡 Demonstração de 30 minutos • Sem compromisso • Resultados garantidos
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTA;
