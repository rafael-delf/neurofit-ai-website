
import React from 'react';
import { Bot, Calendar, MessageSquare, Clock, Users, Zap } from 'lucide-react';

const Features = () => {
  const features = [
    {
      icon: Bot,
      title: 'Agentes Virtuais Personalizados',
      description: 'Agentes com a cara da sua academia, treinados especificamente para seu negócio e valores.'
    },
    {
      icon: Clock,
      title: 'Atendimento 24/7',
      description: 'Responde instantaneamente sobre planos, horários, aulas, estrutura e promoções mesmo fora do horário comercial.'
    },
    {
      icon: Calendar,
      title: 'Agendamento Automático',
      description: 'Agende aulas experimentais e avaliações físicas automaticamente, sem intervenção humana.'
    },
    {
      icon: MessageSquare,
      title: 'Disparos de mensagens automáticos',
      description: 'Mensagens automáticas para alunos ausentes, planos prestes a vencer, parabenizações por frequência e aniversário e muito mais!'
    },
    {
      icon: Users,
      title: 'Captura de Leads Qualificados',
      description: 'Identifica e captura leads interessados, direcionando-os para conversão.'
    },
    {
      icon: Zap,
      title: 'Integração Simples',
      description: 'Conecta-se facilmente às plataformas que sua academia já utiliza.'
    }
  ];

  return (
    <section id="servicos" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            Agentes Virtuais{' '}
            <span className="bg-neurofit-gradient bg-clip-text text-transparent">
              Inteligentes
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Desenvolvidos por estudantes de Inteligência Artificial da UFG, nossos agentes são o membro mais 
            eficiente e incansável da sua equipe.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index}
              className="bg-white rounded-xl border border-gray-100 p-8 hover:shadow-lg transition-all duration-300 hover:-translate-y-1 group"
            >
              <div className="w-12 h-12 bg-neurofit-gradient rounded-lg flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <feature.icon className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                {feature.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
