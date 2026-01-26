import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FloatingMenu from "@/components/FloatingMenu";
import FAQ from "@/components/FAQ";
import { SEO } from "@/components/SEO";
import { Card, CardContent } from "@/components/ui/card";
import { Star, Instagram } from "lucide-react";
import eventLogo from "@/assets/friburgo-geek-icon.png";
import pedroAzevedoImg from "@/assets/pedro-azevedo.jpg";

const LineUp = () => {
  return (
    <div className="min-h-screen overflow-x-hidden">
      <SEO 
        title="Line-Up 2026 - Artistas e Atrações"
        description="Pedro Azevedo (dublador de Donkey Kong, Hercules MCU) confirmado! Confira as atrações do Friburgo Geek 2026."
        canonical="/line-up"
        keywords="line-up Friburgo Geek, artistas Friburgo Geek, Pedro Azevedo dublador, atrações evento geek, Nova Friburgo"
      />
      <Header />
      
      <section className="bg-secondary py-16 px-6">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-4xl md:text-6xl font-black text-accent text-center mb-6">
            LINE-UP
          </h1>
          <p className="text-xl text-white/90 text-center mb-12">
            Atrações confirmadas para 2026!
          </p>

          <div className="space-y-12">
            <div>
              <div className="flex items-center gap-3 mb-6">
                <div className="bg-accent p-3 rounded-full">
                  <Star className="w-6 h-6 text-secondary" />
                </div>
                <h2 className="text-3xl font-black text-accent">Artistas</h2>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {/* Pedro Azevedo - Confirmado */}
                <div className="group p-[3px] rounded-2xl bg-gradient-to-br from-primary via-secondary to-cyan-400 hover:shadow-[0_0_30px_rgba(139,92,246,0.4)] transition-all duration-300 hover:scale-[1.02]">
                  <div className="bg-secondary rounded-2xl overflow-hidden h-full">
                    <div className="relative overflow-hidden">
                      <div className="absolute top-3 right-3 bg-primary text-white text-xs font-black px-3 py-1.5 rounded-full z-10 animate-pulse">
                        CONFIRMADO
                      </div>
                      <img 
                        src={pedroAzevedoImg} 
                        alt="Pedro Azevedo - Dublador"
                        className="w-full aspect-[3/4] object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                    </div>
                    <div className="p-5">
                      <h3 className="text-xl font-black text-white mb-1">Pedro Azevedo</h3>
                      <p className="text-primary text-sm font-bold mb-3">Dublador • Ator • Diretor</p>
                      <p className="text-white/80 text-xs leading-relaxed mb-4">
                        Pedro Henrique Barros de Azevedo (Niterói/RJ, 17 de outubro de 1990) é ator, dublador, diretor de dublagem e professor. Entre os destaques, estão Hércules (MCU), Donkey Kong (Super Mario Bros.), Dot Barrett (Mashle), Prowl (Transformers) e Harold (Bunnicula).
                      </p>
                      <a 
                        href="https://www.instagram.com/pedroazevedodub/" 
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 bg-primary hover:bg-primary/80 text-white text-sm font-bold px-4 py-2 rounded-full transition-colors w-full justify-center"
                      >
                        <Instagram className="w-4 h-4" />
                        Conhecer mais
                      </a>
                    </div>
                  </div>
                </div>

                {/* Cards "Em breve" */}
                {[1, 2, 3].map((_, index) => (
                  <div key={index} className="p-[3px] rounded-2xl bg-gradient-to-br from-primary/30 via-secondary/30 to-cyan-400/30 hover:from-primary/50 hover:via-secondary/50 hover:to-cyan-400/50 transition-all duration-300">
                    <div className="bg-secondary rounded-2xl overflow-hidden h-full flex flex-col items-center justify-center py-12 px-6">
                      <div className="w-24 h-24 mb-4 flex items-center justify-center">
                        <img 
                          src={eventLogo} 
                          alt="Friburgo Geek"
                          className="w-full h-full object-contain opacity-40"
                        />
                      </div>
                      <p className="text-white/50 text-sm font-medium">Em breve...</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="mt-12 text-center">
            <p className="text-accent text-lg font-bold">
              🌟 Mais artistas serão anunciados em breve! 🌟
            </p>
          </div>
        </div>

        {/* CTA Section */}
        <div className="mt-16 text-center bg-accent/20 backdrop-blur-sm rounded-3xl p-8 border-2 border-accent max-w-4xl mx-auto">
          <h3 className="text-3xl font-black text-accent mb-4">
            Não perca essa experiência! 🎉
          </h3>
          <p className="text-white/90 text-lg mb-6">
            Garanta seu ingresso agora e curta todos os artistas e atrações do Friburgo Geek!
          </p>
          <a 
            href="https://www.uticket.com.br/event/01LQBL1W152TA5" 
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-primary hover:bg-primary/90 text-white font-black text-xl px-12 py-4 rounded-full shadow-lg transition-all hover:scale-105"
          >
            Comprar Ingressos
          </a>
        </div>
      </section>

      <FAQ />
      <Footer />
      <FloatingMenu />
    </div>
  );
};

export default LineUp;
