import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FloatingMenu from "@/components/FloatingMenu";
import { Card, CardContent } from "@/components/ui/card";
import { Clock } from "lucide-react";

const schedule = {
  sabado: [
    { time: "10:00", event: "Abertura dos portões", location: "Entrada Principal" },
    { time: "11:00", event: "Show de abertura", location: "STAGE Principal" },
    { time: "12:00", event: "Painel com dubladores", location: "STAGE Principal" },
    { time: "13:00", event: "Competição de cosplay - Fase 1", location: "STAGE Principal" },
    { time: "14:00", event: "Show de K-pop", location: "STAGE Principal" },
    { time: "15:00", event: "Torneio de games", location: "Arena Games" },
    { time: "16:00", event: "Meet & Greet VIP", location: "Área VIP" },
    { time: "17:00", event: "Desfile de cosplay", location: "STAGE Principal" },
    { time: "18:00", event: "Show principal", location: "STAGE Principal" },
    { time: "19:00", event: "Encerramento do dia", location: "STAGE Principal" },
  ],
  domingo: [
    { time: "10:00", event: "Abertura dos portões", location: "Entrada Principal" },
    { time: "11:00", event: "Workshop de desenho", location: "Artist Alley" },
    { time: "12:00", event: "Painel com artistas", location: "STAGE Principal" },
    { time: "13:00", event: "Competição de cosplay - Final", location: "STAGE Principal" },
    { time: "14:00", event: "Show de J-music", location: "STAGE Principal" },
    { time: "15:00", event: "Final do torneio de games", location: "Arena Games" },
    { time: "16:00", event: "Sorteios e premiações", location: "STAGE Principal" },
    { time: "17:00", event: "Show de encerramento", location: "STAGE Principal" },
    { time: "18:00", event: "Despedida oficial", location: "STAGE Principal" },
  ],
};

const Cronograma = () => {
  return (
    <div className="min-h-screen overflow-x-hidden">
      <Header />
      
      <section className="bg-gradient-to-b from-primary to-secondary py-16 px-6">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-4xl md:text-6xl font-black text-accent text-center mb-6">
            CRONOGRAMA
          </h1>
          <p className="text-xl text-white/90 text-center mb-12">
            Programação completa dos 2 dias de evento
          </p>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Sábado */}
            <div>
              <div className="bg-accent rounded-t-2xl p-4 text-center">
                <h2 className="text-3xl font-black text-secondary">SÁBADO</h2>
                <p className="text-secondary/80 font-bold">10 de Janeiro</p>
              </div>
              
              <div className="bg-white/10 backdrop-blur-sm rounded-b-2xl p-6 space-y-4 border-2 border-accent/30">
                {schedule.sabado.map((item, index) => (
                  <Card key={index} className="bg-secondary/50 border-accent/50">
                    <CardContent className="p-4">
                      <div className="flex items-start gap-4">
                        <div className="bg-accent rounded-full p-2 flex-shrink-0">
                          <Clock className="w-5 h-5 text-secondary" />
                        </div>
                        <div className="flex-1">
                          <div className="text-accent font-black text-lg">{item.time}</div>
                          <div className="text-white font-bold">{item.event}</div>
                          <div className="text-white/70 text-sm">{item.location}</div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>

            {/* Domingo */}
            <div>
              <div className="bg-accent rounded-t-2xl p-4 text-center">
                <h2 className="text-3xl font-black text-secondary">DOMINGO</h2>
                <p className="text-secondary/80 font-bold">11 de Janeiro</p>
              </div>
              
              <div className="bg-white/10 backdrop-blur-sm rounded-b-2xl p-6 space-y-4 border-2 border-accent/30">
                {schedule.domingo.map((item, index) => (
                  <Card key={index} className="bg-secondary/50 border-accent/50">
                    <CardContent className="p-4">
                      <div className="flex items-start gap-4">
                        <div className="bg-accent rounded-full p-2 flex-shrink-0">
                          <Clock className="w-5 h-5 text-secondary" />
                        </div>
                        <div className="flex-1">
                          <div className="text-accent font-black text-lg">{item.time}</div>
                          <div className="text-white font-bold">{item.event}</div>
                          <div className="text-white/70 text-sm">{item.location}</div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
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
