import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import { Check } from "lucide-react";

const tickets = [
  {
    name: "INGRESSO ÚNICO",
    price: "35,00",
    badge: "promocional",
    badgeColor: "bg-accent text-primary",
    features: [
      "Acesso ao evento das 12h às 18h",
      "Todas as atrações incluídas",
      "Grátis para crianças de 0 a 6 anos",
      "Grátis para idosos acima de 65 anos",
    ],
    note: "Meia-entrada com 1kg de alimento não perecível",
  },
  {
    name: "INGRESSO DUPLO",
    price: "60,00",
    badge: "promocional",
    badgeColor: "bg-accent text-primary",
    features: [
      "2 ingressos para o evento",
      "Acesso a todas as atrações",
      "Economia de R$ 10,00",
      "Válido para duas pessoas",
    ],
    note: "Meia-entrada com 1kg de alimento não perecível",
  },
  {
    name: "INGRESSO TRIPLO",
    price: "85,00",
    badge: "promocional",
    badgeColor: "bg-accent text-primary",
    features: [
      "3 ingressos para o evento",
      "Acesso a todas as atrações",
      "Economia de R$ 20,00",
      "Válido para três pessoas",
    ],
    note: "Meia-entrada com 1kg de alimento não perecível",
  },
  {
    name: "VIP",
    price: "130,00",
    badge: "promocional",
    badgeColor: "bg-destructive text-white",
    features: [
      "Acesso VIP exclusivo",
      "Benefícios especiais",
      "Experiência premium",
      "Brindes exclusivos",
    ],
    note: "Experiência completa e diferenciada!",
  },
];

const TicketCards = () => {
  return (
    <section id="ingressos" className="py-16 px-6 bg-gradient-to-b from-white to-muted">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-5xl font-black text-secondary mb-4">
            COMO VAI SER A SUA AVENTURA?
          </h2>
          <p className="text-lg text-foreground/80 max-w-3xl mx-auto">
            Compare os ingressos e encontre a opção perfeita para a aventura que você quer viver no{" "}
            <span className="font-bold text-primary">Friburgo Geek Natal</span>.
          </p>
          <p className="text-sm text-foreground/60 mt-2">
            Todos os ingressos possuem disponibilidade limitada.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {tickets.map((ticket) => (
            <Card 
              key={ticket.name} 
              className="relative overflow-hidden border-2 hover:border-primary transition-all hover:shadow-2xl"
            >
              <CardHeader className="text-center pb-4">
                <h3 className="text-2xl font-black text-secondary mb-2">{ticket.name}</h3>
                <p className="text-sm text-foreground/60 mb-4">A partir de</p>
                <div className="text-5xl font-black text-primary mb-2">
                  {ticket.price}
                </div>
                <div className={`inline-block px-4 py-1 rounded-full text-sm font-bold ${ticket.badgeColor}`}>
                  {ticket.badge}
                </div>
              </CardHeader>

              <CardContent className="space-y-3">
                {ticket.features.map((feature, index) => (
                  <div key={index} className="flex items-start gap-2">
                    <Check className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                    <span className="text-sm text-foreground/80">{feature}</span>
                  </div>
                ))}
              </CardContent>

              <CardFooter className="flex flex-col gap-3 px-4">
                <Button variant="skewed" className="w-full text-sm md:text-lg py-5 md:py-6 rounded-2xl">
                  QUERO ESTE
                </Button>
                <p className="text-xs text-center text-foreground/60 px-2">{ticket.note}</p>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TicketCards;
