import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FloatingMenu from "@/components/FloatingMenu";
import { SEO } from "@/components/SEO";
import { Card, CardContent } from "@/components/ui/card";
import { 
  RefreshCw, Mic, Film, Flag, Ticket, Music, 
  Star, Trophy, Gift, HelpCircle, Edit, Gamepad2, 
  Puzzle, Store, ShoppingBag, UtensilsCrossed, Mic2 
} from "lucide-react";

const atividadesContinuas = [
  { Icon: Gamepad2, name: "Arena Gamer & Retrô Games" },
  { Icon: Trophy, name: "Campeonatos de Videogames" },
  { Icon: Gamepad2, name: "Mario Kart Live Home Circuit" },
  { Icon: Puzzle, name: "Wood Games - Jogos de Madeira" },
  { Icon: Store, name: "Stands de Vendas" },
  { Icon: ShoppingBag, name: "Yume Geek Store" },
  { Icon: UtensilsCrossed, name: "Praça de Alimentação" },
];

const stagePrincipal = [
  { time: "11:00", Icon: Ticket, event: "Entrada VIPs/Cosplay" },
  { time: "12:00", Icon: Ticket, event: "Entrada Antecipados" },
  { time: "12:00", Icon: Film, event: "Cine Anime" },
  { time: "13:00", Icon: Flag, event: "Gincanas" },
  { time: "14:30", Icon: Mic, event: "Palestra com Dublador Pedro Azevedo" },
  { time: "15:00", Icon: Music, event: "K-Stage Live" },
  { time: "15:30", Icon: Edit, event: "Encerramento Inscrições Cosplay" },
  { time: "16:00", Icon: Star, event: "Cosplay" },
  { time: "17:00", Icon: Mic2, event: "Animekê" },
  { time: "17:30", Icon: Trophy, event: "Resultados/Campeonatos" },
  { time: "17:40", Icon: Gift, event: "Sorteios" },
  { time: "17:50", Icon: HelpCircle, event: "Last Quizz" },
  { time: "18:00", Icon: Flag, event: "Encerramento" },
];

const Cronograma = () => {
  return (
    <div className="min-h-screen overflow-x-hidden">
      <SEO 
        title="Cronograma 2026 - Programação Completa do Evento"
        description="Veja a programação completa do Friburgo Geek 2026: concurso de cosplay, k-pop, animekê, torneios de games, dublador Pedro Azevedo, retro games e muito mais! Das 11h às 18h."
        canonical="/cronograma"
        keywords="cronograma Friburgo Geek, programação evento geek, horários concursos, Nova Friburgo"
      />
      <Header />
      
      <section className="bg-gradient-to-b from-primary to-secondary py-16 px-6">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-4xl md:text-6xl font-black text-accent text-center mb-6">
            CRONOGRAMA
          </h1>
          <p className="text-xl text-white/90 text-center mb-12">
            Programação completa
          </p>

          <div className="max-w-5xl mx-auto">
            {/* Header DOMINGO */}
            <div className="bg-accent rounded-t-2xl p-4 text-center">
              <h2 className="text-3xl font-black text-secondary">DOMINGO</h2>
              <p className="text-secondary/80 font-bold">15 de Março de 2026</p>
            </div>
            
            {/* Duas colunas */}
            <div className="bg-[#1a5f7a]/80 backdrop-blur-sm rounded-b-2xl p-4 md:p-6 border-2 border-accent/30">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                
                {/* Coluna Esquerda - Atividades Contínuas */}
                <div>
                  <div className="flex items-center gap-2 mb-4">
                    <RefreshCw className="w-5 h-5 text-accent" />
                    <h3 className="text-accent font-black text-lg uppercase">Atividades Contínuas</h3>
                  </div>
                  <p className="text-white/60 text-sm mb-4">Durante todo o evento</p>
                  
                  <div className="space-y-3">
                    {atividadesContinuas.map((item, index) => (
                      <Card key={index} className="bg-[#1a4a6e]/80 border-0">
                        <CardContent className="p-3 flex items-center gap-3">
                          <div className="bg-accent/20 rounded-lg p-2">
                            <item.Icon className="w-5 h-5 text-accent" />
                          </div>
                          <span className="text-white font-medium text-sm">{item.name}</span>
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                </div>

                {/* Coluna Direita - Stage Principal */}
                <div>
                  <div className="flex items-center gap-2 mb-4">
                    <Star className="w-5 h-5 text-accent" />
                    <h3 className="text-accent font-black text-lg uppercase">Stage Principal</h3>
                  </div>
                  <p className="text-white/60 text-sm mb-4">Horários programados</p>
                  
                  <div className="space-y-3">
                    {stagePrincipal.map((item, index) => (
                      <Card key={index} className="bg-[#1a4a6e]/80 border-0">
                        <CardContent className="p-3 flex items-center gap-3">
                          <div className="bg-accent rounded-lg px-2 py-1 min-w-[60px] text-center">
                            <span className="text-secondary font-black text-sm">{item.time}</span>
                          </div>
                          <div className="bg-accent/20 rounded-lg p-2">
                            <item.Icon className="w-4 h-4 text-accent" />
                          </div>
                          <span className="text-white font-medium text-sm">{item.event}</span>
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-12 text-center">
            <p className="text-accent text-lg font-bold">
              ⚠️ Cronograma sujeito a alterações
            </p>
          </div>
        </div>
      </section>

      <Footer />
      <FloatingMenu />
    </div>
  );
};

export default Cronograma;
