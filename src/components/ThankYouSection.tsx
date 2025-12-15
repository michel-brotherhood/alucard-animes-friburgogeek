import { Calendar, Clock, MapPin, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";
import eventPhoto from "@/assets/event-photo-1.jpg";

const ThankYouSection = () => {
  return (
    <section className="bg-accent py-12 md:py-16 px-6">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-10">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-primary mb-4">
            OBRIGADO POR PARTICIPAR!
          </h2>
          <p className="text-xl md:text-2xl text-secondary">
            Friburgo Geek Natal 2025 foi{" "}
            <span className="font-black text-primary">incrível!</span>
          </p>
          <div className="w-24 h-1 bg-primary mx-auto mt-6 rounded-full" />
        </div>

        {/* Content Grid */}
        <div className="grid md:grid-cols-2 gap-8 items-center">
          {/* Left - Text & Next Event */}
          <div className="space-y-6">
            <p className="text-lg text-secondary/90 leading-relaxed">
              Agradecemos a todos que fizeram parte dessa edição especial. 
              Vocês são a alma do nosso evento! Confira os resultados dos 
              concursos e nos vemos no próximo!
            </p>

            {/* Next Event Card */}
            <div className="bg-primary rounded-2xl p-6 shadow-lg">
              <h3 className="text-accent font-black text-lg mb-4 uppercase tracking-wide">
                Próximo Evento
              </h3>
              <h4 className="text-white font-black text-2xl mb-4">
                Nit Geek Festival
              </h4>
              <div className="space-y-3 text-white/90">
                <div className="flex items-center gap-3">
                  <Calendar className="w-5 h-5 text-accent" />
                  <span>Em breve</span>
                </div>
                <div className="flex items-center gap-3">
                  <Clock className="w-5 h-5 text-accent" />
                  <span>12h às 18h</span>
                </div>
                <div className="flex items-center gap-3">
                  <MapPin className="w-5 h-5 text-accent" />
                  <span>Niterói - RJ</span>
                </div>
              </div>
              <Button 
                variant="secondary" 
                className="mt-6 w-full bg-accent text-primary hover:bg-accent/90 font-bold"
                asChild
              >
                <a 
                  href="https://nitgeekfestival.alucardanimes.com.br/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2"
                >
                  Saiba Mais
                  <ExternalLink className="w-4 h-4" />
                </a>
              </Button>
            </div>
          </div>

          {/* Right - Event Photo */}
          <div className="relative">
            <div className="rounded-2xl overflow-hidden shadow-2xl border-4 border-primary/20">
              <img 
                src={eventPhoto} 
                alt="Friburgo Geek Natal 2025" 
                className="w-full h-auto object-cover aspect-[4/3]"
              />
            </div>
            {/* Decorative elements */}
            <div className="absolute -top-4 -right-4 w-24 h-24 bg-primary/20 rounded-full blur-2xl" />
            <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-accent/30 rounded-full blur-2xl" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ThankYouSection;
