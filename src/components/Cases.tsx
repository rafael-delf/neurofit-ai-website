
import React from 'react';
import { TrendingUp, Users, Clock, Calendar } from 'lucide-react';

const Cases = () => {
  const cases = [
    {
      name: 'Academia Ideal',
      logo: '/lovable-uploads/bcbb7f42-3ac7-48ab-ba9c-87525e47b440.png',
      results: [
        { metric: 'Leads Capturados', value: '+250%', icon: TrendingUp },
        { metric: 'Agendamentos', value: '+200%', icon: Calendar },
        { metric: 'Atendimentos 24h', value: '100%', icon: Clock }
      ]
    },
    {
      name: 'Academia Ultra',
      logo: '/lovable-uploads/52f59b76-1710-4cde-8843-eaf2faaaa3a8.png',
      results: [
        { metric: 'Conversão de Leads', value: '+180%', icon: Users },
        { metric: 'Tempo de Resposta', value: '-99%', icon: Clock },
        { metric: 'Satisfação Cliente', value: '+85%', icon: TrendingUp }
      ]
    }
  ];

  return (
    <section id="cases" className="py-20 bg-gradient-to-br from-gray-50 to-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            Cases de{' '}
            <span className="bg-neurofit-gradient bg-clip-text text-transparent">
              Sucesso
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Veja como nossos agentes virtuais transformaram a operação de academias parceiras.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {cases.map((case_, index) => (
            <div 
              key={index}
              className="bg-white rounded-2xl shadow-xl p-8 hover:shadow-2xl transition-all duration-300"
            >
              <div className="flex items-center mb-6">
                <img 
                  src={case_.logo} 
                  alt={`${case_.name} Logo`}
                  className="h-12 object-contain mr-4"
                />
                <h3 className="text-xl font-bold text-gray-900">{case_.name}</h3>
              </div>
              
              <div className="space-y-4">
                {case_.results.map((result, resultIndex) => (
                  <div key={resultIndex} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                    <div className="flex items-center">
                      <div className="w-8 h-8 bg-neurofit-gradient rounded-lg flex items-center justify-center mr-3">
                        <result.icon className="w-4 h-4 text-white" />
                      </div>
                      <span className="text-sm text-gray-600">{result.metric}</span>
                    </div>
                    <span className="text-lg font-bold text-neurofit-blue">{result.value}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Cases;
