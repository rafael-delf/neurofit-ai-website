
import React from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight, Zap, Bot, TrendingUp } from 'lucide-react';

const Hero = () => {
  return (
    <section className="pt-24 pb-12 bg-gradient-to-br from-gray-50 to-white overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="animate-fade-in">
            <div className="inline-flex items-center px-4 py-2 bg-blue-50 text-neurofit-blue rounded-full text-sm font-medium mb-6">
              <Zap className="w-4 h-4 mr-2" />
              Tecnologia de Ponta para Academias
            </div>
            
            <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 leading-tight mb-6">
              Revolucione sua academia com{' '}
              <span className="bg-neurofit-gradient bg-clip-text text-transparent">
                Inteligência Artificial
              </span>
            </h1>
            
            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              Automatize processos, otimize operações e proporcione uma experiência excepcional 
              aos seus alunos com nossas soluções de IA personalizadas.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 mb-8">
              <Button 
                size="lg" 
                className="bg-neurofit-gradient hover:opacity-90 text-white h-12 px-8"
              >
                Agendar Demonstração
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
              <Button 
                variant="outline" 
                size="lg" 
                className="border-neurofit-blue text-neurofit-blue hover:bg-blue-50 h-12 px-8"
              >
                Ver Como Funciona
              </Button>
            </div>
            
            <div className="flex items-center space-x-6 text-sm text-gray-500">
              <div className="flex items-center">
                <Bot className="w-4 h-4 mr-2 text-neurofit-blue" />
                Automação Inteligente
              </div>
              <div className="flex items-center">
                <TrendingUp className="w-4 h-4 mr-2 text-neurofit-blue" />
                Resultados Comprovados
              </div>
            </div>
          </div>
          
          <div className="relative animate-fade-in">
            <div className="relative z-10">
              <div className="bg-white rounded-2xl shadow-2xl p-8 transform rotate-3 hover:rotate-0 transition-transform duration-300">
                <div className="bg-neurofit-gradient rounded-lg p-6 mb-4">
                  <div className="w-12 h-12 bg-white/20 rounded-lg flex items-center justify-center mb-4">
                    <Bot className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-white font-semibold mb-2">IA Personalizada</h3>
                  <p className="text-white/80 text-sm">
                    Chatbots inteligentes para atendimento 24/7
                  </p>
                </div>
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-600">Automação de Agendamentos</span>
                    <span className="text-sm font-semibold text-green-600">+85%</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-600">Satisfação do Cliente</span>
                    <span className="text-sm font-semibold text-green-600">+92%</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-600">Redução de Custos</span>
                    <span className="text-sm font-semibold text-green-600">-40%</span>
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
