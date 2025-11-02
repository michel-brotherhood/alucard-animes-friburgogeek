import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FloatingMenu from "@/components/FloatingMenu";
import FAQ from "@/components/FAQ";
import { Card, CardContent } from "@/components/ui/card";
import { Users, Calendar, MapPin, Star } from "lucide-react";

const stats = [
  { icon: Users, value: "50.000+", label: "Visitantes esperados" },
  { icon: Calendar, value: "2 Dias", label: "De pura diversão" },
  { icon: MapPin, value: "10.000m²", label: "De área de evento" },
  { icon: Star, value: "100+", label: "Atrações e atividades" },
];

const OEvento = () => {
  return (
    <div className="min-h-screen">
      <Header />
      
      <section className="bg-gradient-to-b from-secondary to-primary py-16 px-6">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-4xl md:text-6xl font-black text-accent text-center mb-6">
            O EVENTO
          </h1>
          <p className="text-xl text-white/90 text-center mb-12">
            O encontro perfeito para geeks, otakus e gamers em Nova Friburgo
          </p>

          {/* Hero Section */}
          <div className="bg-white/10 backdrop-blur-sm rounded-3xl p-8 md:p-12 mb-12 border-2 border-accent">
            <h2 className="text-3xl md:text-4xl font-black text-accent mb-6">
              Bem-vindo ao Friburgo Geek Natal! 🎄
            </h2>
            <div className="space-y-4 text-white/90 text-lg">
              <p>
                O <strong className="text-accent">Friburgo Geek Natal</strong> é um evento focado no universo 
                geek, otaku e gamer, produzido pela Alucard Animes. Prepare-se para um dia incrível repleto de 
                atividades, competições e muita diversão!
              </p>
              <p>
                No dia <strong className="text-accent">14 de dezembro, das 12h às 18h</strong>, você terá acesso a 
                arena gamer com videogames free play, Beat Saber no VR, campeonatos de jogos e cosplay, 
                animekê, cine anime, e muito mais!
              </p>
              <p>
                Seja você um geek veterano ou alguém descobrindo esse universo incrível, 
                o Friburgo Geek Natal tem algo especial para você!
              </p>
            </div>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            <Card className="bg-accent border-0 text-center">
              <CardContent className="p-6">
                <Users className="w-12 h-12 text-secondary mx-auto mb-4" />
                <div className="text-4xl font-black text-secondary mb-2">1 Dia</div>
                <div className="text-secondary/80 font-bold">De pura diversão</div>
              </CardContent>
            </Card>
            <Card className="bg-accent border-0 text-center">
              <CardContent className="p-6">
                <Calendar className="w-12 h-12 text-secondary mx-auto mb-4" />
                <div className="text-4xl font-black text-secondary mb-2">6 horas</div>
                <div className="text-secondary/80 font-bold">Das 12h às 18h</div>
              </CardContent>
            </Card>
            <Card className="bg-accent border-0 text-center">
              <CardContent className="p-6">
                <MapPin className="w-12 h-12 text-secondary mx-auto mb-4" />
                <div className="text-4xl font-black text-secondary mb-2">10+</div>
                <div className="text-secondary/80 font-bold">Videogames free play</div>
              </CardContent>
            </Card>
            <Card className="bg-accent border-0 text-center">
              <CardContent className="p-6">
                <Star className="w-12 h-12 text-secondary mx-auto mb-4" />
                <div className="text-4xl font-black text-secondary mb-2">8</div>
                <div className="text-secondary/80 font-bold">Campeonatos</div>
              </CardContent>
            </Card>
          </div>

          {/* Destaques */}
          <div className="space-y-6">
            <Card className="bg-primary/50 backdrop-blur-sm border-2 border-accent/50">
              <CardContent className="p-8">
                <h3 className="text-2xl font-black text-accent mb-4">🎮 Arena Gamer & Retrô Games</h3>
                <ul className="text-white/90 space-y-2 list-disc list-inside">
                  <li>Arena Gamer com mais de 10 videogames free play</li>
                  <li>Beat Saber no Playstation VR</li>
                  <li>Retrô Games para relembrar clássicos inesquecíveis</li>
                  <li>Campeonatos de FIFA 25, Mortal Kombat 1, Street Fighter 6 e Tekken 8</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="bg-secondary/50 backdrop-blur-sm border-2 border-accent/50">
              <CardContent className="p-8">
                <h3 className="text-2xl font-black text-accent mb-4">🎭 Cosplay, K-POP & Animeke</h3>
                <ul className="text-white/90 space-y-2 list-disc list-inside">
                  <li>Campeonato de Cosplay com 8 categorias e mil reais em brindes</li>
                  <li>Campeonato de K-POP Generations</li>
                  <li>Animeke livre para todos - solo ou dupla</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="bg-primary/50 backdrop-blur-sm border-2 border-accent/50">
              <CardContent className="p-8">
                <h3 className="text-2xl font-black text-accent mb-4">🎬 Cine Anime & Atividades Interativas</h3>
                <ul className="text-white/90 space-y-2 list-disc list-inside">
                  <li>Cine Anime com super exibição de animes</li>
                  <li>Board Games e Wood Games (jogos de madeira GEEK)</li>
                  <li>Swordplay para testar suas habilidades</li>
                  <li>Gincanas com brindes incríveis</li>
                  <li>Passa ou repassa com Misheru</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="bg-secondary/50 backdrop-blur-sm border-2 border-accent/50">
              <CardContent className="p-8">
                <h3 className="text-2xl font-black text-accent mb-4">🛍️ Estandes & Alimentação</h3>
                <ul className="text-white/90 space-y-2 list-disc list-inside">
                  <li>Estandes de vendas com produtos geeks exclusivos</li>
                  <li>Alimentação completa no local</li>
                </ul>
              </CardContent>
            </Card>
          </div>

          {/* Call to Action */}
          <div className="mt-12 text-center bg-accent/20 backdrop-blur-sm rounded-3xl p-8 border-2 border-accent">
            <h3 className="text-3xl font-black text-accent mb-4">
              Pronto para a aventura? 🚀
            </h3>
            <p className="text-white/90 text-lg mb-6">
              Garanta seu ingresso agora e faça parte dessa experiência inesquecível!
            </p>
            <a 
              href="/#ingressos" 
              className="inline-block bg-primary hover:bg-primary/90 text-white font-black text-xl px-12 py-4 rounded-full shadow-lg transition-all hover:scale-105"
            >
              Comprar Ingressos
            </a>
          </div>
        </div>
      </section>

      <FAQ />
      <Footer />
      <FloatingMenu />
    </div>
  );
};

export default OEvento;
