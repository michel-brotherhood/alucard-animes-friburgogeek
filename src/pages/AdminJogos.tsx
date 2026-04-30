import { useMemo } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FloatingMenu from "@/components/FloatingMenu";
import { SEO } from "@/components/SEO";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Badge } from "@/components/ui/badge";
import { Gamepad2, RotateCcw, Save, AlertCircle } from "lucide-react";
import { Link } from "react-router-dom";
import { useSelectedGames } from "@/hooks/useSelectedGames";
import {
  GAMES_CATALOG,
  DEFAULT_SELECTED_GAME_IDS,
} from "@/lib/games-catalog";
import { useToast } from "@/hooks/use-toast";

const AdminJogos = () => {
  const { selectedIds, updateSelection } = useSelectedGames();
  const { toast } = useToast();

  const selectedSet = useMemo(() => new Set(selectedIds), [selectedIds]);

  const toggle = (id: string) => {
    const next = selectedSet.has(id)
      ? selectedIds.filter((x) => x !== id)
      : [...selectedIds, id];
    updateSelection(next);
  };

  const resetDefaults = () => {
    updateSelection(DEFAULT_SELECTED_GAME_IDS);
    toast({
      title: "Seleção restaurada",
      description: "Voltamos para a seleção padrão.",
    });
  };

  const confirmAndPreview = () => {
    toast({
      title: "Seleção salva",
      description: `${selectedIds.length} jogo(s) ativo(s) no campeonato.`,
    });
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-muted">
      <SEO
        title="Selecionar Jogos do Campeonato"
        description="Painel interno para escolher quais jogos aparecem no campeonato de videogames do Friburgo Geek."
        canonical="/admin/jogos"
        keywords="admin, jogos, campeonato, Friburgo Geek"
      />
      <Header />

      <section className="py-16 px-4">
        <div className="container mx-auto max-w-5xl">
          <div className="text-center mb-10">
            <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent">
              Selecionar Jogos do Campeonato
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Marque os jogos que devem aparecer na home e na página do campeonato.
              As alterações são aplicadas em tempo real e ficam salvas neste navegador.
            </p>
          </div>

          <Card className="mb-8 border-2 border-accent/40 bg-accent/5">
            <CardContent className="pt-6 flex items-start gap-3">
              <AlertCircle className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
              <p className="text-sm text-muted-foreground">
                Esta seleção é local (salva no seu navegador). Sempre que você
                marcar/desmarcar um jogo, a home e a página{" "}
                <Link to="/concursos/videogames" className="text-accent font-semibold underline">
                  /concursos/videogames
                </Link>{" "}
                — incluindo título, descrição e palavras-chave (SEO) — serão atualizadas automaticamente.
              </p>
            </CardContent>
          </Card>

          <div className="flex flex-wrap items-center justify-between gap-4 mb-6">
            <div className="text-sm text-muted-foreground">
              <strong className="text-foreground">{selectedIds.length}</strong>{" "}
              jogo(s) selecionado(s) de {GAMES_CATALOG.length}
            </div>
            <div className="flex gap-2">
              <Button variant="outline" onClick={resetDefaults}>
                <RotateCcw className="mr-2 h-4 w-4" />
                Restaurar padrão
              </Button>
              <Button onClick={confirmAndPreview}>
                <Save className="mr-2 h-4 w-4" />
                Confirmar
              </Button>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-10">
            {GAMES_CATALOG.map((game) => {
              const checked = selectedSet.has(game.id);
              return (
                <Card
                  key={game.id}
                  className={`overflow-hidden cursor-pointer transition-all duration-300 hover:shadow-xl ${
                    checked ? "ring-2 ring-accent shadow-lg" : "opacity-80 hover:opacity-100"
                  }`}
                  onClick={() => toggle(game.id)}
                >
                  <div className="relative h-40 overflow-hidden">
                    <img
                      src={game.image}
                      alt={game.title}
                      loading="lazy"
                      width={1024}
                      height={576}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />
                    <div className="absolute top-3 left-3">
                      <Checkbox
                        checked={checked}
                        onCheckedChange={() => toggle(game.id)}
                        onClick={(e) => e.stopPropagation()}
                        className="bg-white border-white data-[state=checked]:bg-accent data-[state=checked]:border-accent w-5 h-5"
                      />
                    </div>
                    <div className="absolute top-3 right-3">
                      <Badge variant="secondary">{game.category}</Badge>
                    </div>
                    <div className="absolute bottom-3 left-3 right-3">
                      <h3 className="text-white text-lg font-bold">{game.title}</h3>
                    </div>
                  </div>
                </Card>
              );
            })}
          </div>

          <Card>
            <CardHeader>
              <CardTitle className="text-xl">Pré-visualização da seleção atual</CardTitle>
            </CardHeader>
            <CardContent>
              {selectedIds.length === 0 ? (
                <p className="text-muted-foreground">
                  Nenhum jogo selecionado — a seleção padrão será exibida no site.
                </p>
              ) : (
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  {selectedIds.map((id) => {
                    const g = GAMES_CATALOG.find((x) => x.id === id);
                    if (!g) return null;
                    return (
                      <li key={id} className="flex items-center gap-2 text-sm">
                        <Gamepad2 className="w-4 h-4 text-primary" />
                        <span className="font-semibold">{g.title}</span>
                        <span className="text-muted-foreground">— {g.category}</span>
                      </li>
                    );
                  })}
                </ul>
              )}
              <div className="mt-6 flex gap-3">
                <Link to="/concursos/videogames">
                  <Button variant="outline">Ver página do campeonato</Button>
                </Link>
                <Link to="/">
                  <Button variant="outline">Ver home</Button>
                </Link>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      <Footer />
      <FloatingMenu />
    </div>
  );
};

export default AdminJogos;
