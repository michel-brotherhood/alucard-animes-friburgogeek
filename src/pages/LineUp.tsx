import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FloatingMenu from "@/components/FloatingMenu";
import FAQ from "@/components/FAQ";
import { SEO } from "@/components/SEO";
import { Star } from "lucide-react";
import { motion } from "framer-motion";
import eventLogo from "@/assets/friburgo-geek-icon.png";

const LineUp = () => {
  return (
    <div className="min-h-screen overflow-x-hidden">
      <SEO 
        title="Line-Up 2026 - Artistas e Atrações"
        description="Confira as atrações do Friburgo Geek 2026 em 7 de Junho. Artistas serão anunciados em breve!"
        canonical="/line-up"
        keywords="line-up Friburgo Geek, artistas Friburgo Geek, atrações evento geek, Nova Friburgo"
      />
      <Header />
      
      <section className="bg-secondary py-16 px-6">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-4xl md:text-6xl font-black text-accent text-center mb-6">
            LINE-UP
          </h1>
          <p className="text-xl text-white/90 text-center mb-12">
            Atrações do Friburgo Geek 2026 — Em breve!
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
                {[0, 1, 2, 3].map((index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="p-[3px] rounded-2xl bg-gradient-to-br from-primary/30 via-secondary/30 to-cyan-400/30 hover:from-primary/50 hover:via-secondary/50 hover:to-cyan-400/50 transition-all duration-300"
                  >
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
                  </motion.div>
                ))}
              </div>
            </div>
          </div>

          <div className="mt-12 text-center">
            <p className="text-accent text-lg font-bold">
              🌟 Artistas serão anunciados em breve! 🌟
            </p>
          </div>
        </div>

        <div className="mt-16 text-center bg-accent/20 backdrop-blur-sm rounded-3xl p-8 border-2 border-accent max-w-4xl mx-auto">
          <h3 className="text-3xl font-black text-accent mb-4">
            Não perca essa experiência! 🎉
          </h3>
          <p className="text-white/90 text-lg mb-6">
            Garanta seu ingresso agora e curta todos os artistas e atrações do Friburgo Geek!
          </p>
          <a 
            href="https://www.uticket.com.br/evento/friburgo-geek/01LVOBX8IGFLC8" 
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
