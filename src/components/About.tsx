
import React from 'react';
import { Button } from '@/components/ui/button';
import { ExternalLink, Instagram } from 'lucide-react';

const About = () => {
  return (
    <section id="sobre" className="py-20 bg-gradient-to-br from-gray-50 to-white">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
              Por que escolher a{' '}
              <span className="bg-neurofit-gradient bg-clip-text text-transparent">
                NeuroFit?
              </span>
            </h2>
            
            <div className="space-y-6 mb-8">
              <div className="flex items-start space-x-4">
                <div className="w-6 h-6 bg-neurofit-gradient rounded-full flex-shrink-0 mt-1"></div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">Especialização em Academias</h3>
                  <p className="text-gray-600">
                    Desenvolvemos soluções específicas para o setor fitness, entendendo suas necessidades únicas.
                  </p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <div className="w-6 h-6 bg-neurofit-gradient rounded-full flex-shrink-0 mt-1"></div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">Tecnologia de Ponta</h3>
                  <p className="text-gray-600">
                    Utilizamos as mais avançadas tecnologias de IA para criar automações inteligentes e eficientes.
                  </p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <div className="w-6 h-6 bg-neurofit-gradient rounded-full flex-shrink-0 mt-1"></div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">Suporte Completo</h3>
                  <p className="text-gray-600">
                    Acompanhamos sua academia desde a implementação até o sucesso das automações.
                  </p>
                </div>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                className="bg-neurofit-gradient hover:opacity-90 text-white"
                onClick={() => window.open('https://www.notion.so/NeuroFit-1f331096abee80e980fee627cf43cd05', '_blank')}
              >
                Saiba Mais no Notion
                <ExternalLink className="ml-2 w-4 h-4" />
              </Button>
              <Button 
                variant="outline" 
                className="border-neurofit-blue text-neurofit-blue hover:bg-blue-50"
                onClick={() => window.open('https://instagram.com/neurofit.ia', '_blank')}
              >
                <Instagram className="mr-2 w-4 h-4" />
                @neurofit.ia
              </Button>
            </div>
          </div>
          
          <div className="relative">
            <div className="bg-white rounded-2xl shadow-xl p-8">
              <div className="bg-neurofit-gradient rounded-xl p-6 text-white mb-6">
                <h3 className="text-2xl font-bold mb-2">+50%</h3>
                <p className="text-white/90">Aumento na eficiência operacional</p>
              </div>
              
              <div className="space-y-4">
                <div className="flex justify-between items-center">
                  <span className="text-gray-600">Redução de tempo em tarefas administrativas</span>
                  <span className="font-semibold text-neurofit-blue">70%</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-600">Melhoria na satisfação do cliente</span>
                  <span className="font-semibold text-neurofit-blue">85%</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-600">Aumento na retenção de alunos</span>
                  <span className="font-semibold text-neurofit-blue">60%</span>
                </div>
              </div>
            </div>
            
            <div className="absolute -z-10 top-4 right-4 w-full h-full bg-neurofit-gradient opacity-10 rounded-2xl"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
