import { Button } from "@/components/ui/button";
import { Menu, ChevronDown } from "lucide-react";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import friburgoGeekLogo from "@/assets/friburgo-geek-logo.png";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isConcursosOpen, setIsConcursosOpen] = useState(false);

  // Bloquear scroll do body quando menu abrir
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
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
            
            {/* Dropdown Concursos */}
            <div 
              className="relative group"
              onMouseEnter={() => setIsConcursosOpen(true)}
              onMouseLeave={() => setIsConcursosOpen(false)}
            >
              <button 
                className="px-4 py-2 text-white text-sm font-semibold hover:bg-white/10 transition-colors rounded-full flex items-center gap-1"
              >
                Concursos
                <ChevronDown className="w-4 h-4" />
              </button>
              
              {isConcursosOpen && (
                <div className="absolute top-full left-0 pt-2 z-50">
                  <div className="bg-primary rounded-2xl shadow-2xl py-2 min-w-[200px] border-2 border-accent/30">
                    <Link 
                      to="/#resultados-cosplay" 
                      className="block px-4 py-2 text-white text-sm font-semibold hover:bg-white/10 transition-colors"
                    >
                      📊 Resultados
                    </Link>
                  </div>
                </div>
              )}
            </div>
            
            <Link 
              to="/contato" 
              className="px-4 py-2 text-white text-sm font-semibold hover:bg-white/10 transition-colors rounded-full"
            >
              Contato
            </Link>
          </div>
        </div>

        <div className="flex items-center gap-2 md:gap-3">
          <a href="https://nitgeekfestival.alucardanimes.com.br/" target="_blank" rel="noopener noreferrer">
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
          <div className="lg:hidden fixed inset-0 w-full bg-primary shadow-2xl z-50 animate-slide-in-right overflow-y-auto">
            <div className="p-5 pb-6">
              {/* Close Button */}
              <button 
                onClick={() => setIsMenuOpen(false)}
                className="absolute top-3 right-3 text-white/80 hover:text-white transition-colors"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>

              {/* Logo */}
              <div className="mb-6">
                <img 
                  src={friburgoGeekLogo} 
                  alt="Friburgo Geek" 
                  className="h-10 w-auto"
                />
              </div>

              {/* Menu Items */}
              <nav className="flex flex-col gap-0.5">
                <Link 
                  to="/" 
                  onClick={() => setIsMenuOpen(false)}
                  className="text-white font-bold py-2.5 px-3 rounded-full hover:bg-white/10 transition-colors"
                >
                  Home
                </Link>
                <Link 
                  to="/o-evento" 
                  onClick={() => setIsMenuOpen(false)}
                  className="text-white font-semibold py-2.5 px-3 rounded-full hover:bg-white/10 transition-colors"
                >
                  O evento
                </Link>
                <Link 
                  to="/quem-somos" 
                  onClick={() => setIsMenuOpen(false)}
                  className="text-white font-semibold py-2.5 px-3 rounded-full hover:bg-white/10 transition-colors"
                >
                  Quem somos
                </Link>
                <Link 
                  to="/cronograma" 
                  onClick={() => setIsMenuOpen(false)}
                  className="text-white font-semibold py-2.5 px-3 rounded-full hover:bg-white/10 transition-colors"
                >
                  Cronograma
                </Link>
                
                {/* Concursos Section */}
                <div className="mt-2 mb-1">
                  <p className="text-accent text-xs font-bold uppercase tracking-wider px-3 mb-1">
                    Concursos
                  </p>
                  <Link 
                    to="/#resultados-cosplay" 
                    onClick={() => setIsMenuOpen(false)}
                    className="text-white/90 text-sm py-2 px-3 rounded-full hover:bg-white/10 transition-colors flex items-center gap-2"
                  >
                    <span className="text-base">📊</span>
                    <span>Resultados</span>
                  </Link>
                </div>

                <div className="border-t border-white/20 my-2"></div>
                
                <Link 
                  to="/contato" 
                  onClick={() => setIsMenuOpen(false)}
                  className="text-white font-semibold py-2.5 px-3 rounded-full hover:bg-white/10 transition-colors"
                >
                  Contato
                </Link>

                {/* CTA Button */}
                <a 
                  href="https://nitgeekfestival.alucardanimes.com.br/"
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => setIsMenuOpen(false)}
                  className="mt-4"
                >
                  <Button className="w-full bg-accent text-primary hover:bg-accent/90 font-bold py-5 rounded-full">
                    QUERO PARTICIPAR DO PRÓXIMO EVENTO
                  </Button>
                </a>
              </nav>
            </div>
          </div>
        </>
      )}
    </header>
  );
};

export default Header;
