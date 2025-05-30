
import React from 'react';
import { Button } from '@/components/ui/button';

const Header = () => {
  return (
    <header className="fixed top-0 w-full bg-white/95 backdrop-blur-sm border-b border-gray-100 z-50">
      <div className="container mx-auto px-4 h-16 flex items-center justify-between">
        <div className="flex items-center space-x-2">
          <div className="w-8 h-8 bg-neurofit-gradient rounded-lg"></div>
          <span className="text-xl font-bold text-gray-900">NeuroFit</span>
        </div>
        
        <nav className="hidden md:flex items-center space-x-8">
          <a href="#sobre" className="text-gray-600 hover:text-neurofit-blue transition-colors">
            Sobre
          </a>
          <a href="#servicos" className="text-gray-600 hover:text-neurofit-blue transition-colors">
            Serviços
          </a>
          <a href="#contato" className="text-gray-600 hover:text-neurofit-blue transition-colors">
            Contato
          </a>
        </nav>

        <Button className="bg-neurofit-gradient hover:opacity-90 text-white">
          Agendar Demo
        </Button>
      </div>
    </header>
  );
};

export default Header;
