import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FloatingMenu from "@/components/FloatingMenu";
import FAQ from "@/components/FAQ";
import { SEO } from "@/components/SEO";
import { Star, Instagram, ChevronDown, ChevronUp } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import eventLogo from "@/assets/friburgo-geek-icon.png";
import negrayscowFoto from "@/assets/negrayscow-foto.webp";
import negrayscowLogo from "@/assets/negrayscow-logo.png";

interface Artist {
  name: string;
  photo: string;
  logo: string;
  bio: string;
  members: string;
  instagram: string;
}

const artists: Artist[] = [
  {
    name: "Negrayscow",
    photo: negrayscowFoto,
    logo: negrayscowLogo,
    bio: "Formada em 2008 em Petrópolis, a banda se destacou no YouTube com covers e paródias de temática geek. Mais tarde lançou algumas músicas autorais e definiu a fórmula Heavy Metal + Humor + Nerdice em seus álbuns.",
    members: "Popoto — Guitarra e voz, Gabriel Macumba — Bateria, flauta e voz, Patrick — Baixo e voz, Lello — Voz e percussão",
    instagram: "https://www.instagram.com/negrayscow/",
  },
];

const ArtistCard = ({ artist, index }: { artist: Artist; index: number }) => {
  const [open, setOpen] = useState(false);
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="p-[3px] rounded-2xl bg-gradient-to-br from-primary/30 via-secondary/30 to-cyan-400/30 hover:from-primary/50 hover:via-secondary/50 hover:to-cyan-400/50 transition-all duration-300"
    >
      <div className="bg-secondary rounded-2xl overflow-hidden h-full flex flex-col">
        <div className="relative aspect-[4/3] overflow-hidden">
          <img src={artist.photo} alt={artist.name} className="w-full h-full object-cover" loading="lazy" />
        </div>
        <div className="relative px-5 -mt-8">
          <div className="w-16 h-16 rounded-xl bg-secondary border-2 border-accent/40 flex items-center justify-center overflow-hidden">
            <img src={artist.logo} alt={`${artist.name} logo`} className="w-12 h-12 object-contain" loading="lazy" />
          </div>
        </div>
        <div className="px-5 pt-3 pb-5 flex flex-col flex-1">
          <h3 className="text-2xl font-black text-accent mb-2">{artist.name}</h3>
          <button
            onClick={() => setOpen(!open)}
            className="flex items-center gap-1 text-accent font-bold text-sm hover:text-accent/80 transition-colors w-fit"
            aria-expanded={open}
          >
            {open ? "Fechar" : "Saiba mais"}
            {open ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
          </button>

          <AnimatePresence initial={false}>
            {open && (
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: "auto", opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ duration: 0.3 }}
                className="overflow-hidden"
              >
                <div className="mt-4 bg-[#0d2238]/60 rounded-xl p-4 border border-white/10">
                  <p className="text-white/80 text-sm leading-relaxed mb-4">{artist.bio}</p>
                  <p className="text-white/80 text-sm leading-relaxed">
                    <span className="text-accent font-bold">Integrantes:</span> {artist.members}
                  </p>
                </div>
                <a
                  href={artist.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-4 inline-flex items-center justify-center gap-2 bg-accent hover:bg-accent/90 text-secondary font-bold text-sm px-5 py-3 rounded-full transition-all hover:scale-105 w-full"
                >
                  <Instagram className="w-4 h-4" />
                  Seguir no Instagram
                </a>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </motion.div>
  );
};

const LineUp = () => {
  const placeholders = Math.max(0, 4 - artists.length);
  return (
    <div className="min-h-screen overflow-x-hidden">
      <SEO 
        title="Line-Up 2026 - Artistas e Atrações"
        description="Confira as atrações do Friburgo Geek 2026 em 7 de Junho. Negrayscow confirmada e mais artistas em breve!"
        canonical="/line-up"
        keywords="line-up Friburgo Geek, Negrayscow, artistas Friburgo Geek, atrações evento geek, Nova Friburgo"
      />
      <Header />
      
      <section className="bg-secondary py-16 px-6">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-4xl md:text-6xl font-black text-accent text-center mb-6">
            LINE-UP
          </h1>
          <p className="text-xl text-white/90 text-center mb-12">
            Atrações do Friburgo Geek 2026
          </p>

          <div className="space-y-12">
            <div>
              <div className="flex items-center gap-3 mb-6">
                <div className="bg-accent p-3 rounded-full">
                  <Star className="w-6 h-6 text-secondary" />
                </div>
                <h2 className="text-3xl font-black text-accent">Artistas</h2>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 items-start">
                {artists.map((artist, index) => (
                  <ArtistCard key={artist.name} artist={artist} index={index} />
                ))}
                {Array.from({ length: placeholders }).map((_, index) => (
                  <motion.div
                    key={`ph-${index}`}
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: (artists.length + index) * 0.1 }}
                    className="p-[3px] rounded-2xl bg-gradient-to-br from-primary/30 via-secondary/30 to-cyan-400/30"
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
              🌟 Mais artistas serão anunciados em breve! 🌟
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
