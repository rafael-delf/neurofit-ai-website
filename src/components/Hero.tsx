
import React from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight, Bot, Clock, Users } from 'lucide-react';

const Hero = () => {
  return (
    <section className="pt-24 pb-12 bg-gradient-to-br from-gray-50 to-white overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="animate-fade-in">
            <div className="inline-flex items-center px-4 py-2 bg-blue-50 text-neurofit-blue rounded-full text-sm font-medium mb-6">
              <Bot className="w-4 h-4 mr-2" />
              Agentes de Inteligência Artificial
            </div>
            
            <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 leading-tight mb-6">
              O membro mais{' '}
              <span className="bg-neurofit-gradient bg-clip-text text-transparent">
                eficiente
              </span>{' '}
              da sua equipe
            </h1>
            
            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              Sua academia merece mais que soluções genéricas. Já pensou em uma I.A. dedicada exclusivamente ao seu negócio? Essa é a nossa especialidade!
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 mb-8">
              <Button 
                size="lg" 
                className="bg-neurofit-gradient hover:opacity-90 text-white h-12 px-8"
                onClick={() => window.open('https://chatvolt.ai/@academiaideal', '_blank')}
              >
                Ver Demonstração
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
            </div>
            
            <div className="flex items-center space-x-6 text-sm text-gray-500">
              <div className="flex items-center">
                <Clock className="w-4 h-4 mr-2 text-neurofit-blue" />
                Disponível 24/7
              </div>
              <div className="flex items-center">
                <Users className="w-4 h-4 mr-2 text-neurofit-blue" />
                Completamente Personalizável
              </div>
            </div>
          </div>
          
          <div className="relative animate-fade-in">
            <div className="relative z-10">
              <div className="bg-white rounded-2xl shadow-2xl p-8 transform rotate-3 hover:rotate-0 transition-transform duration-300">
                <div className="bg-neurofit-gradient rounded-lg p-6 mb-4 relative">
                  <div className="w-12 h-12 bg-white/20 rounded-lg flex items-center justify-center mb-4">
                    <img 
                      src="/lovable-uploads/55ad7daa-dd04-49b4-bda9-85c13413b423.png" 
                      alt="NeuroFit Logo" 
                      className="w-8 h-8 object-contain"
                    />
                  </div>
                  <h3 className="text-white font-semibold mb-2">Agente Virtual NeuroFit</h3>
                  <div className="flex items-center">
                    <p className="text-white/80 text-sm flex-1">
                      "Olá! Como posso ajudar com sua academia hoje?"
                    </p>
                    <img 
                      src="/lovable-uploads/a9d09c2c-22db-4550-9d30-ae055fb9468b.png" 
                      alt="Robot Assistant" 
                      className="w-12 h-12 object-contain ml-2"
                    />
                  </div>
                </div>
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-600">Leads Capturados</span>
                    <span className="text-sm font-semibold text-green-600">+300%</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-600">Agendamentos Automáticos</span>
                    <span className="text-sm font-semibold text-green-600">+85%</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-600">Atendimento 24h</span>
                    <span className="text-sm font-semibold text-green-600">100%</span>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="absolute -top-4 -right-4 w-32 h-32 bg-neurofit-blue/10 rounded-full animate-float"></div>
            <div className="absolute -bottom-4 -left-4 w-24 h-24 bg-neurofit-blue/5 rounded-full animate-float" style={{animationDelay: '1s'}}></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
