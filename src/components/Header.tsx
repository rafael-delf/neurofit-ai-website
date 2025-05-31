
import React from 'react';
import { Button } from '@/components/ui/button';
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from '@/components/ui/dropdown-menu';
import { ChevronDown } from 'lucide-react';

const Header = () => {
  return (
    <header className="fixed top-0 w-full bg-white/95 backdrop-blur-sm border-b border-gray-100 z-50">
      <div className="container mx-auto px-4 h-16 flex items-center justify-between">
        <div className="flex items-center space-x-3">
          <img 
            src="/lovable-uploads/55ad7daa-dd04-49b4-bda9-85c13413b423.png" 
            alt="NeuroFit Logo" 
            className="w-10 h-10 object-contain"
          />
          <span className="text-xl font-bold bg-neurofit-gradient bg-clip-text text-transparent font-serif">
            NeuroFit
          </span>
        </div>
        
        <nav className="hidden md:flex items-center space-x-8">
          <a href="#sobre" className="text-gray-600 hover:text-neurofit-blue transition-colors">
            Sobre
          </a>
          <a href="#servicos" className="text-gray-600 hover:text-neurofit-blue transition-colors">
            Serviços
          </a>
          <a href="#cases" className="text-gray-600 hover:text-neurofit-blue transition-colors">
            Cases
          </a>
          <a href="#contato" className="text-gray-600 hover:text-neurofit-blue transition-colors">
            Contato
          </a>
        </nav>

        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button className="bg-neurofit-gradient hover:opacity-90 text-white">
              Falar Conosco
              <ChevronDown className="ml-2 w-4 h-4" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent className="bg-white">
            <DropdownMenuItem 
              onClick={() => window.open('https://wa.me/5562996125341', '_blank')}
              className="cursor-pointer"
            >
              Rafael - Consultor
            </DropdownMenuItem>
            <DropdownMenuItem 
              onClick={() => window.open('https://wa.me/556295757585', '_blank')}
              className="cursor-pointer"
            >
              Gustavo - Consultor
            </DropdownMenuItem>
            <DropdownMenuItem 
              onClick={() => window.open('https://www.instagram.com/neurofit.ia', '_blank')}
              className="cursor-pointer"
            >
              Instagram
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </header>
  );
};

export default Header;
