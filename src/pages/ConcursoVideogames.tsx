import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FloatingMenu from "@/components/FloatingMenu";
import { SEO } from "@/components/SEO";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Clock, Users, Gamepad2 } from "lucide-react";
import mortalKombat from "@/assets/mortal-kombat-11-banner.webp";
import streetFighter from "@/assets/street-fighter-6-banner.webp";
import kof2002 from "@/assets/kof-2002-banner.webp";
import fifa26 from "@/assets/fifa-26-banner.webp";
import gamesBackground from "@/assets/games-background.jpg";

const ConcursoVideogames = () => {
  const jogos = [
    {
      title: "Mortal Kombat 11",
      categoria: "Luta",
      image: mortalKombat,
    },
    {
      title: "Street Fighter 6",
      categoria: "Luta",
      image: streetFighter,
    },
    {
      title: "KoF 2002",
      categoria: "Luta",
      image: kof2002,
    },
    {
      title: "FIFA 26",
      categoria: "Futebol",
      image: fifa26,
    },
  ];

  return (
    <div className="min-h-screen relative overflow-hidden">
      <SEO 
        title="Campeonato de Videogames 2026 - KoF 2002, Street Fighter 6, MK11 e FIFA 26"
        description="Torneios de videogames no Friburgo Geek: KoF 2002, Street Fighter 6, Mortal Kombat 11 e FIFA 26. Formato mata-mata, premiação R$ 100. Inscrições abertas!"
        canonical="/concursos/videogames"
        keywords="torneio KoF 2002, campeonato Street Fighter 6, Mortal Kombat 11, FIFA 26, videogames Nova Friburgo"
      />
      {/* Background Image with Overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-50"
        style={{
          backgroundImage: `url(${gamesBackground})`,
          filter: 'blur(3px)',
        }}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-background to-muted opacity-85" />
      
      {/* Content */}
      <div className="relative z-10">
        <Header />
      
      <section className="py-16 px-4 bg-gradient-to-b from-background to-muted">
        <div className="container mx-auto max-w-7xl">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-6xl font-bold mb-4 bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent">
              CAMPEONATO DE GAMES
            </h1>
            <p className="text-xl text-muted-foreground">
              Inscreva-se nos torneios e mostre suas habilidades! 🎮
            </p>
          </div>

          {/* Informações Principais */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            <Card className="text-center hover:scale-105 transition-all duration-300">
              <CardContent className="pt-6">
                <Clock className="w-12 h-12 text-primary mx-auto mb-3" />
                <h3 className="font-bold text-lg mb-2">Horário</h3>
                <p className="text-muted-foreground text-sm">12:00 às 17:00</p>
              </CardContent>
            </Card>

            <Card className="text-center hover:scale-105 transition-all duration-300 bg-accent/10 border-2 border-accent">
              <CardContent className="pt-6">
                <Users className="w-12 h-12 text-accent mx-auto mb-3" />
                <h3 className="font-bold text-lg mb-2">Taxa de Inscrição</h3>
                <p className="text-muted-foreground text-sm font-bold">R$ 15,00 por jogo</p>
              </CardContent>
            </Card>

            <Card className="text-center hover:scale-105 transition-all duration-300">
              <CardContent className="pt-6">
                <Gamepad2 className="w-12 h-12 text-primary mx-auto mb-3" />
                <h3 className="font-bold text-lg mb-2">Formato</h3>
                <p className="text-muted-foreground text-sm">Mata-Mata</p>
              </CardContent>
            </Card>
          </div>

          {/* Jogos Disponíveis */}
          <div className="mb-12">
            <h2 className="text-3xl font-bold text-center mb-8">Jogos Disponíveis</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
              {jogos.map((jogo, index) => (
                <Card key={index} className="overflow-hidden group hover:scale-105 transition-all duration-300 hover:shadow-2xl">
                  <div className="relative h-80 overflow-hidden">
                    <img
                      src={jogo.image}
                      alt={jogo.title}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
                    <div className="absolute bottom-0 left-0 right-0 p-4">
                      <h3 className="text-white text-xl font-bold mb-1">{jogo.title}</h3>
                      <p className="text-white/80 text-sm">{jogo.categoria}</p>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </div>

          {/* Regras e Informações */}
          <Card className="mb-12">
            <CardHeader>
              <CardTitle className="text-3xl font-bold text-center">Regras e Informações</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="bg-accent/10 rounded-lg p-6 border-2 border-accent">
                <h4 className="font-bold text-xl mb-3 text-accent">⏰ Horário dos Campeonatos</h4>
                <p className="text-muted-foreground mb-2 text-lg">
                  Os campeonatos começarão às <strong className="text-accent">12:00 horas</strong> e terminarão às <strong className="text-accent">17:00 horas</strong>
                </p>
              </div>

              <div className="bg-primary/10 rounded-lg p-6 border-2 border-primary">
                <h4 className="font-bold text-xl mb-3 text-primary">💰 Taxa de Inscrição</h4>
                <p className="text-muted-foreground text-lg">
                  <strong className="text-primary">Atenção!</strong> Taxa de inscrição: <strong className="text-primary">R$ 15,00</strong> para cada jogo, pagas no dia do evento na arena gamer
                </p>
              </div>

              <div>
                <h4 className="font-bold text-xl mb-3 text-primary">Formato do Campeonato</h4>
                <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                  <li>Todos os campeonatos são disputados no formato <strong>Mata-Mata</strong></li>
                  <li>As inscrições são realizadas no local do evento na arena gamer</li>
                  <li>Cada participante pode se inscrever em múltiplos jogos (pagando a taxa para cada)</li>
                  <li>Horários específicos de cada jogo serão divulgados no dia do evento</li>
                </ul>
              </div>

              <div className="bg-primary/10 rounded-lg p-6 border-2 border-primary">
                <h4 className="font-bold text-xl mb-3 text-primary">⚠️ Regras Importantes</h4>
                <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                  <li>É necessário apresentar documento com foto</li>
                  <li>Os campeonatos seguem as regras oficiais de cada jogo</li>
                  <li>Não é permitido o uso de controles modificados ou trapaças</li>
                  <li>A organização se reserva o direito de desqualificar participantes que não seguirem as regras</li>
                  <li>As decisões da arbitragem são finais</li>
                </ul>
              </div>

              <div>
                <h4 className="font-bold text-xl mb-3 text-primary">Premiação</h4>
                <p className="text-muted-foreground mb-2">
                  R$ 100,00 de premiação para cada campeonato.
                </p>
              </div>

              <div className="bg-accent/10 rounded-lg p-6 border-2 border-accent">
                <h4 className="font-bold text-xl mb-3 text-accent">📝 Como Participar</h4>
                <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                  <li>As inscrições serão abertas no dia do evento, diretamente na arena gamer</li>
                  <li>Chegue cedo para garantir sua vaga, pois o número de participantes é limitado</li>
                  <li>Traga R$ 15,00 em dinheiro para pagar a taxa de inscrição de cada jogo</li>
                  <li>Você pode se inscrever em quantos jogos quiser (pagando a taxa individual para cada)</li>
                </ul>
              </div>
            </CardContent>
          </Card>

          <div className="text-center">
            <Button 
              size="lg"
              className="text-lg px-8 py-6 bg-gradient-to-r from-primary to-accent hover:shadow-2xl hover:scale-105 transition-all duration-300"
            >
              <Gamepad2 className="mr-2 h-5 w-5" />
              Mais Informações no Evento
            </Button>
          </div>
        </div>
      </section>

        <Footer />
        <FloatingMenu />
      </div>
    </div>
  );
};

export default ConcursoVideogames;
