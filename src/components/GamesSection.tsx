import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Gamepad2 } from "lucide-react";
import { Link } from "react-router-dom";
import { useSelectedGames } from "@/hooks/useSelectedGames";

const GamesSection = () => {
  const { games } = useSelectedGames();

  return (
    <section className="py-20 px-4 bg-gradient-to-b from-background via-muted to-background relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-primary/10 via-transparent to-transparent" />

      <div className="container mx-auto relative z-10">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent">
            CAMPEONATO DE GAMES
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Inscreva-se nos torneios dos jogos mais populares e mostre suas habilidades!
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12 max-w-4xl mx-auto">
          {games.map((game) => {
            const Icon = game.icon;
            return (
              <Card
                key={game.id}
                className="relative overflow-hidden group hover:scale-105 transition-all duration-300 hover:shadow-2xl"
              >
                <div className={`relative h-64 overflow-hidden bg-gradient-to-br ${game.gradient}`}>
                  <img
                    src={game.image}
                    alt={game.title}
                    loading="lazy"
                    width={1024}
                    height={576}
                    className="w-full h-full object-contain transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className={`absolute inset-0 bg-gradient-to-t ${game.gradient} opacity-20 group-hover:opacity-10 transition-opacity pointer-events-none`} />
                  <div className={`absolute top-4 right-4 w-12 h-12 rounded-full bg-gradient-to-br ${game.gradient} flex items-center justify-center shadow-lg`}>
                    <Icon className="w-6 h-6 text-white" />
                  </div>
                </div>

                <div className="p-4 bg-card">
                  <h3 className="text-xl font-bold text-center mb-1">{game.title}</h3>
                  <p className="text-muted-foreground text-center text-sm">{game.category}</p>
                </div>
              </Card>
            );
          })}
        </div>

        <div className="text-center px-4">
          <Link to="/concursos/videogames">
            <Button
              size="lg"
              className="text-sm md:text-lg px-4 md:px-8 py-5 md:py-6 bg-gradient-to-r from-primary to-accent hover:shadow-2xl hover:scale-105 transition-all duration-300 w-full sm:w-auto"
            >
              <Gamepad2 className="mr-2 h-4 w-4 md:h-5 md:w-5" />
              VER REGULAMENTO
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default GamesSection;
