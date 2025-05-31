
import React from 'react';
import { Button } from '@/components/ui/button';
import { MessageSquare } from 'lucide-react';
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from '@/components/ui/dropdown-menu';
import { ChevronDown } from 'lucide-react';

const CTA = () => {
  return (
    <section id="contato" className="py-20 bg-neurofit-gradient">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="text-center lg:text-left">
            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">
              Pronto para ter o funcionário mais eficiente da sua equipe?
            </h2>
            <p className="text-xl text-white/90 mb-8">
              Converse conosco e descubra como nossa I.A. personalizada pode impulsionar o atendimento da sua academia.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button 
                    size="lg" 
                    className="bg-white text-neurofit-blue hover:bg-gray-100 h-12 px-8"
                  >
                    <MessageSquare className="mr-2 w-5 h-5" />
                    Falar Conosco Agora
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
            
            <div className="mt-8 text-white/80">
              <p className="text-sm">
                🎓 Desenvolvido por estudantes de IA da UFG • 🤖 Agentes 100% personalizados • 📈 Resultados comprovados
              </p>
            </div>
          </div>
          
          <div className="flex justify-center lg:justify-end">
            <img 
              src="/lovable-uploads/58f10732-f220-4b80-aa09-200e57894b0c.png" 
              alt="Robot with Phone" 
              className="w-64 h-64 object-contain"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTA;
