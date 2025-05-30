
import React from 'react';
import { Bot, Calendar, BarChart3, MessageSquare, Users, Zap } from 'lucide-react';

const Features = () => {
  const features = [
    {
      icon: Bot,
      title: 'Chatbots Inteligentes',
      description: 'Atendimento automatizado 24/7 com respostas personalizadas e naturais.'
    },
    {
      icon: Calendar,
      title: 'Agendamento Automático',
      description: 'Sistema inteligente de agendamentos que otimiza horários e reduz conflitos.'
    },
    {
      icon: BarChart3,
      title: 'Análise de Dados',
      description: 'Insights valiosos sobre performance, frequência e comportamento dos alunos.'
    },
    {
      icon: MessageSquare,
      title: 'Comunicação Personalizada',
      description: 'Mensagens automáticas personalizadas baseadas no perfil de cada aluno.'
    },
    {
      icon: Users,
      title: 'Gestão de Membros',
      description: 'Automação completa do ciclo de vida dos membros, desde cadastro até renovação.'
    },
    {
      icon: Zap,
      title: 'Integração Rápida',
      description: 'Implementação simples que se integra aos sistemas existentes da sua academia.'
    }
  ];

  return (
    <section id="servicos" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            Soluções Completas de{' '}
            <span className="bg-neurofit-gradient bg-clip-text text-transparent">
              Automação
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Transforme sua academia com tecnologia de ponta que automatiza processos 
            e melhora a experiência dos seus alunos.
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
