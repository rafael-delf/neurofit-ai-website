
import React from 'react';
import { Instagram } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-8">
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-8 h-8 bg-neurofit-gradient rounded-lg"></div>
              <span className="text-xl font-bold">NeuroFit</span>
            </div>
            <p className="text-gray-400 mb-4">
              Revolucionando academias com automações inteligentes e IA de ponta.
            </p>
            <div className="flex space-x-4">
              <a 
                href="https://instagram.com/neurofit.ia" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition-colors"
              >
                <Instagram className="w-5 h-5" />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="font-semibold mb-4">Soluções</h3>
            <ul className="space-y-2 text-gray-400">
              <li><a href="#" className="hover:text-white transition-colors">Chatbots IA</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Agendamento Automático</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Análise de Dados</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Gestão de Membros</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-semibold mb-4">Contato</h3>
            <ul className="space-y-2 text-gray-400">
              <li>
                <a 
                  href="https://www.notion.so/NeuroFit-1f331096abee80e980fee627cf43cd05" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="hover:text-white transition-colors"
                >
                  Documentação Completa
                </a>
              </li>
              <li>
                <a 
                  href="https://instagram.com/neurofit.ia" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="hover:text-white transition-colors"
                >
                  @neurofit.ia
                </a>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400">
          <p>&copy; 2024 NeuroFit. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
