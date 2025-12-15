import { Button } from "@/components/ui/button";
import { Menu } from "lucide-react";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import friburgoGeekLogo from "@/assets/friburgo-geek-logo.png";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Bloquear scroll do body e esconder floating menu quando menu abrir
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
      document.body.classList.add('mobile-menu-open');
    } else {
      document.body.style.overflow = 'unset';
      document.body.classList.remove('mobile-menu-open');
    }
    return () => {
      document.body.style.overflow = 'unset';
      document.body.classList.remove('mobile-menu-open');
    };
  }, [isMenuOpen]);

  return (
    <header className="w-full bg-background">
      <div className="max-w-[1400px] mx-auto px-4 md:px-8 py-4">
        <nav className="bg-primary rounded-full py-2 md:py-3 px-4 md:px-8 flex items-center justify-between shadow-lg">
          <div className="flex items-center gap-4 md:gap-12">
            <Link to="/" className="flex items-center hover:opacity-90 transition-opacity">
              <img 
                src={friburgoGeekLogo} 
                alt="Friburgo Geek Logo" 
                className="h-16 md:h-20 w-auto object-contain"
              />
            </Link>
          
          <div className="hidden lg:flex items-center gap-2">
            <Link 
              to="/" 
              className="px-4 py-2 text-white text-sm font-bold hover:bg-white/10 transition-colors rounded-full"
            >
              Home
            </Link>
            <Link 
              to="/o-evento" 
              className="px-4 py-2 text-white text-sm font-semibold hover:bg-white/10 transition-colors rounded-full"
            >
              O evento
            </Link>
            <Link 
              to="/quem-somos" 
              className="px-4 py-2 text-white text-sm font-semibold hover:bg-white/10 transition-colors rounded-full"
            >
              Quem somos
            </Link>
            <Link 
              to="/cronograma" 
              className="px-4 py-2 text-white text-sm font-semibold hover:bg-white/10 transition-colors rounded-full"
            >
              Cronograma
            </Link>
            
            <Link 
              to="/resultados-concursos" 
              className="px-4 py-2 text-white text-sm font-semibold hover:bg-white/10 transition-colors rounded-full"
            >
              Resultados Concursos
            </Link>
            
            <Link 
              to="/contato" 
              className="px-4 py-2 text-white text-sm font-semibold hover:bg-white/10 transition-colors rounded-full"
            >
              Contato
            </Link>
          </div>
        </div>

        <div className="flex items-center gap-2 md:gap-3">
          <a href="https://nitgeekfestival.alucardanimes.com.br/" target="_blank" rel="noopener noreferrer" className="hidden md:block">
            <Button 
              className="bg-accent text-primary hover:bg-accent/90 font-bold text-xs md:text-sm px-4 md:px-8 py-2 md:py-2.5 rounded-full shadow-lg"
            >
              Quero Participar do Próximo Evento
            </Button>
          </a>
          
          <button 
            className="lg:hidden text-white ml-2"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <Menu className="w-6 h-6" />
          </button>
        </div>
        </nav>
      </div>

      {/* Overlay Mobile Menu */}
      {isMenuOpen && (
        <>
          {/* Backdrop */}
          <div 
            className="lg:hidden fixed inset-0 bg-black/70 backdrop-blur-sm z-40 animate-fade-in"
            onClick={() => setIsMenuOpen(false)}
          />
          
          {/* Menu Drawer */}
          <div className="lg:hidden fixed inset-0 w-full bg-primary shadow-2xl z-50 animate-slide-in-right overflow-hidden flex flex-col">
            <div className="p-6 flex flex-col h-full">
              {/* Header com Logo e Close */}
              <div className="flex items-start justify-between mb-8">
                <img 
                  src={friburgoGeekLogo} 
                  alt="Friburgo Geek" 
                  className="h-12 w-auto"
                />
                <button 
                  onClick={() => setIsMenuOpen(false)}
                  className="text-white/80 hover:text-white transition-colors p-1"
                >
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>

              {/* Menu Items */}
              <nav className="flex flex-col gap-2 flex-1">
                <Link 
                  to="/" 
                  onClick={() => setIsMenuOpen(false)}
                  className="text-white font-bold py-3 px-3 rounded-full hover:bg-white/10 transition-colors"
                >
                  Home
                </Link>
                <Link 
                  to="/o-evento" 
                  onClick={() => setIsMenuOpen(false)}
                  className="text-white font-semibold py-3 px-3 rounded-full hover:bg-white/10 transition-colors"
                >
                  O evento
                </Link>
                <Link 
                  to="/quem-somos" 
                  onClick={() => setIsMenuOpen(false)}
                  className="text-white font-semibold py-3 px-3 rounded-full hover:bg-white/10 transition-colors"
                >
                  Quem somos
                </Link>
                <Link 
                  to="/cronograma" 
                  onClick={() => setIsMenuOpen(false)}
                  className="text-white font-semibold py-3 px-3 rounded-full hover:bg-white/10 transition-colors"
                >
                  Cronograma
                </Link>
                <Link 
                  to="/resultados-concursos" 
                  onClick={() => setIsMenuOpen(false)}
                  className="text-white font-semibold py-3 px-3 rounded-full hover:bg-white/10 transition-colors"
                >
                  Resultados Concursos
                </Link>
                <Link 
                  to="/contato" 
                  onClick={() => setIsMenuOpen(false)}
                  className="text-white font-semibold py-3 px-3 rounded-full hover:bg-white/10 transition-colors"
                >
                  Contato
                </Link>
              </nav>

              {/* CTA Button - fixo no final */}
              <a 
                href="https://nitgeekfestival.alucardanimes.com.br/"
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setIsMenuOpen(false)}
                className="mt-auto pt-6"
              >
                <Button className="w-full bg-transparent border-2 border-accent text-accent hover:bg-accent hover:text-primary font-bold py-5 rounded-full transition-colors">
                  QUERO PARTICIPAR DO PRÓXIMO EVENTO
                </Button>
              </a>
            </div>
          </div>
        </>
      )}
    </header>
  );
};

export default Header;
