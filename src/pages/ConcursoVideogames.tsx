import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FloatingMenu from "@/components/FloatingMenu";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Trophy, Clock, Users, Gamepad2 } from "lucide-react";
import mortalKombat from "@/assets/mortal-kombat-1.png";
import streetFighter from "@/assets/street-fighter-6.png";
import tekken8 from "@/assets/tekken-8.png";
import justDance from "@/assets/just-dance.jpg";

const ConcursoVideogames = () => {
  const jogos = [
    {
      title: "Mortal Kombat 1",
      categoria: "Luta",
      image: mortalKombat,
    },
    {
      title: "Street Fighter 6",
      categoria: "Luta",
      image: streetFighter,
    },
    {
      title: "Tekken 8",
      categoria: "Luta",
      image: tekken8,
    },
    {
      title: "Just Dance",
      categoria: "Dança",
      image: justDance,
    },
  ];

  return (
    <div className="min-h-screen overflow-x-hidden">
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
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-12">
            <Card className="text-center hover:scale-105 transition-all duration-300">
              <CardContent className="pt-6">
                <Trophy className="w-12 h-12 text-primary mx-auto mb-3" />
                <h3 className="font-bold text-lg mb-2">Premiação</h3>
                <p className="text-muted-foreground text-sm">Troféus e prêmios</p>
              </CardContent>
            </Card>
            
            <Card className="text-center hover:scale-105 transition-all duration-300">
              <CardContent className="pt-6">
                <Clock className="w-12 h-12 text-primary mx-auto mb-3" />
                <h3 className="font-bold text-lg mb-2">Horário</h3>
                <p className="text-muted-foreground text-sm">Durante todo evento</p>
              </CardContent>
            </Card>

            <Card className="text-center hover:scale-105 transition-all duration-300">
              <CardContent className="pt-6">
                <Users className="w-12 h-12 text-primary mx-auto mb-3" />
                <h3 className="font-bold text-lg mb-2">Participação</h3>
                <p className="text-muted-foreground text-sm">Aberto a todos</p>
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
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
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
              <div>
                <h4 className="font-bold text-xl mb-3 text-primary">Formato do Campeonato</h4>
                <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                  <li>Todos os campeonatos são disputados no formato <strong>Mata-Mata</strong></li>
                  <li>As inscrições são realizadas no local do evento</li>
                  <li>Cada participante pode se inscrever em múltiplos jogos</li>
                  <li>Horários específicos serão divulgados no dia do evento</li>
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
                  Os vencedores de cada campeonato receberão troféus e prêmios especiais. 
                  Detalhes sobre as premiações serão divulgados durante o evento.
                </p>
              </div>

              <div className="bg-accent/10 rounded-lg p-6 border-2 border-accent">
                <h4 className="font-bold text-xl mb-3 text-accent">📝 Como Participar</h4>
                <p className="text-muted-foreground">
                  As inscrições serão abertas no dia do evento, diretamente na área de games. 
                  Chegue cedo para garantir sua vaga, pois o número de participantes é limitado!
                </p>
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
  );
};

export default ConcursoVideogames;
