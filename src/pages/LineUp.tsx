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
                <Card className="bg-gradient-to-br from-accent/20 to-primary/20 backdrop-blur-sm border-2 border-accent hover:border-accent/80 transition-all hover:scale-105">
                  <CardContent className="p-4 text-center">
                    <div className="relative mb-4">
                      <div className="absolute -top-2 -right-2 bg-accent text-secondary text-xs font-black px-2 py-1 rounded-full z-10">
                        CONFIRMADO
                      </div>
                      <img 
                        src={pedroAzevedoImg} 
                        alt="Pedro Azevedo - Dublador"
                        className="w-full h-48 object-cover rounded-lg"
                      />
                    </div>
                    <h3 className="text-xl font-black text-accent mb-1">PEDRO AZEVEDO</h3>
                    <p className="text-white/90 text-sm font-bold mb-3">Dublador</p>
                    <div className="text-white/70 text-xs mb-4 space-y-1">
                      <p>🦍 Donkey Kong (Super Mario Bros.)</p>
                      <p>💪 Hercules (Marvel/MCU)</p>
                      <p>✨ Dot Barrett (Mashle)</p>
                    </div>
                    <a 
                      href="https://www.instagram.com/pedroazevedodub/" 
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-accent hover:text-accent/80 transition-colors text-sm font-bold"
                    >
                      <Instagram className="w-4 h-4" />
                      @pedroazevedodub
                    </a>
                  </CardContent>
                </Card>

                {/* Cards "Em breve" */}
                {[1, 2, 3].map((_, index) => (
                  <Card key={index} className="bg-white/10 backdrop-blur-sm border-accent/30 hover:border-accent transition-all">
                    <CardContent className="p-6 text-center">
                      <div className="w-32 h-32 mx-auto mb-4 flex items-center justify-center">
                        <img 
                          src={eventLogo} 
                          alt="Friburgo Geek"
                          className="w-full h-full object-contain opacity-50"
                        />
                      </div>
                      <p className="text-white/70 text-sm">Em breve...</p>
                    </CardContent>
                  </Card>
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
