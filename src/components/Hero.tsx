import { Button } from "@/components/ui/button";
import { Calendar, Clock, MapPin, ArrowRight } from "lucide-react";
import eventPhoto from "@/assets/event-photo-1.jpg";

const Hero = () => {
  return (
    <section className="bg-background py-8 md:py-12 px-4 md:px-8 relative">
      <div className="max-w-[1400px] mx-auto">
        <div className="border-[12px] md:border-[16px] border-foreground rounded-[3rem] md:rounded-[4rem] p-6 md:p-12 bg-gradient-to-br from-background to-secondary/20">
          <div className="grid lg:grid-cols-2 gap-8 md:gap-12 items-center">
            
            {/* Left Content */}
            <div className="space-y-6 md:space-y-8 order-2 lg:order-1">
              <p className="text-muted-foreground text-sm md:text-base font-semibold uppercase tracking-wider">
                Obrigado por participar!
              </p>
              
              <h1 className="text-3xl md:text-4xl xl:text-5xl font-black text-foreground leading-[1.3] tracking-tight max-w-lg">
                Friburgo Geek Natal 2025 foi <span className="text-accent">incrível!</span>
              </h1>
              
              <div className="h-1 w-20 md:w-32 bg-foreground"></div>
              
              <p className="text-muted-foreground text-base md:text-lg max-w-md leading-relaxed">
                Agradecemos a todos que fizeram parte dessa edição especial. Vocês são a alma do nosso evento! Confira os resultados dos concursos e nos vemos no próximo!
              </p>
              
              {/* Próximo Evento Card */}
              <div className="bg-foreground text-background rounded-3xl p-6 md:p-8 max-w-sm relative overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-accent/20 rounded-full -mr-16 -mt-16"></div>
                
                <div className="relative">
                  <p className="text-xs font-bold text-accent uppercase tracking-wider mb-2">
                    Próximo Evento
                  </p>
                  
                  <h3 className="text-xl md:text-2xl font-black text-background mb-4">
                    Nit Geek Festival
                  </h3>
                  
                  <div className="space-y-2 mb-6">
                    <div className="flex items-center gap-3 text-background/80">
                      <Calendar className="w-4 h-4 text-accent" />
                      <span className="text-sm">Em breve</span>
                    </div>
                    <div className="flex items-center gap-3 text-background/80">
                      <Clock className="w-4 h-4 text-accent" />
                      <span className="text-sm">12h às 18h</span>
                    </div>
                    <div className="flex items-center gap-3 text-background/80">
                      <MapPin className="w-4 h-4 text-accent" />
                      <span className="text-sm">Niterói - RJ</span>
                    </div>
                  </div>
                  
                  <a 
                    href="https://nitgeekfestival.alucardanimes.com.br/" 
                    target="_blank" 
                    rel="noopener noreferrer"
                  >
                    <Button 
                      className="bg-accent text-foreground hover:bg-accent/90 font-bold rounded-full px-6 py-2 flex items-center gap-2"
                    >
                      Saiba Mais
                      <ArrowRight className="w-4 h-4" />
                    </Button>
                  </a>
                </div>
              </div>
            </div>
            
            {/* Right Image */}
            <div className="relative order-1 lg:order-2">
              <div className="relative">
                {/* Main Image */}
                <div className="relative rounded-3xl md:rounded-[2.5rem] overflow-hidden border-8 md:border-[12px] border-foreground/80 shadow-2xl">
                  <img 
                    src={eventPhoto}
                    alt="Friburgo Geek Natal 2025"
                    className="w-full h-auto object-cover"
                  />
                </div>
              </div>
            </div>
            
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
