import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FloatingMenu from "@/components/FloatingMenu";
import FAQ from "@/components/FAQ";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Check, ShoppingCart } from "lucide-react";
import { Badge } from "@/components/ui/badge";

const Ingressos = () => {
const tickets = [
    {
      name: "INGRESSO ÚNICO",
      price: "35,00",
      badge: "promocional",
      features: [
        "Acesso ao evento das 12h às 18h",
        "Todas as atrações incluídas",
        "Grátis para crianças de 0 a 6 anos",
        "Grátis para idosos acima de 65 anos"
      ]
    },
    {
      name: "INGRESSO DUPLO",
      price: "60,00",
      badge: "promocional",
      popular: false,
      features: [
        "2 ingressos para o evento",
        "Acesso a todas as atrações",
        "Economia de R$ 10,00",
        "Válido para duas pessoas"
      ]
    },
    {
      name: "INGRESSO TRIPLO",
      price: "85,00",
      badge: "promocional",
      features: [
        "3 ingressos para o evento",
        "Acesso a todas as atrações",
        "Economia de R$ 20,00",
        "Válido para três pessoas"
      ]
    },
    {
      name: "VIP",
      price: "130,00",
      badge: "promocional",
      popular: true,
      features: [
        "Acesso VIP exclusivo",
        "Benefícios especiais",
        "Experiência premium",
        "Brindes exclusivos"
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="container mx-auto px-4 py-12">
        <div className="text-center mb-12 px-4">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-black text-primary mb-4">
            COMO VAI SER A SUA AVENTURA?
          </h1>
          <p className="text-base md:text-lg text-foreground/80 max-w-3xl mx-auto">
            Compare os ingressos e encontre a opção perfeita para a aventura que você quer viver no <span className="font-bold text-primary">Friburgo Geek Natal</span>.
            <br className="hidden sm:block" />
            <span className="block sm:inline mt-2 sm:mt-0">Todos os ingressos possuem disponibilidade limitada.</span>
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {tickets.map((ticket, index) => (
            <Card 
              key={index} 
              className={`relative overflow-hidden transition-all hover:shadow-2xl ${
                ticket.popular ? 'ring-2 ring-primary shadow-xl lg:scale-105' : ''
              }`}
            >
              {ticket.popular && (
                <div className="absolute top-3 -right-2 z-10 rotate-12">
                  <Badge className="bg-destructive text-white text-xs px-3 py-1 shadow-lg">MAIS VENDIDO</Badge>
                </div>
              )}
              
              <CardHeader className="text-center pb-4 pt-8">
                <CardTitle className="text-2xl md:text-3xl font-black text-foreground mb-2">
                  {ticket.name}
                </CardTitle>
                <CardDescription className="text-xs md:text-sm">A partir de</CardDescription>
                <div className="mt-2">
                  <span className="text-4xl md:text-5xl font-black text-primary">
                    {ticket.price.split(',')[0]}
                  </span>
                  <span className="text-xl md:text-2xl font-bold text-primary">,{ticket.price.split(',')[1]}</span>
                </div>
                <Badge variant="secondary" className="mt-3 bg-accent text-accent-foreground font-bold text-xs">
                  {ticket.badge}
                </Badge>
              </CardHeader>
              
              <CardContent className="space-y-2 px-4 md:px-6">
                {ticket.features.map((feature, i) => (
                  <div key={i} className="flex items-start gap-2">
                    <Check className="w-4 h-4 md:w-5 md:h-5 text-primary flex-shrink-0 mt-0.5" />
                    <span className="text-xs md:text-sm text-foreground/80">{feature}</span>
                  </div>
                ))}
              </CardContent>
              
              <CardFooter className="px-4 md:px-6">
                <Button 
                  className="w-full bg-primary hover:bg-primary/90 text-white font-bold py-5 md:py-6 rounded-full text-base md:text-lg shadow-lg"
                >
                  <ShoppingCart className="w-4 h-4 md:w-5 md:h-5 mr-2" />
                  QUERO ESTE
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>

        <Card className="bg-muted/50 border-primary/20 mx-4">
          <CardHeader className="px-4 md:px-6">
            <CardTitle className="text-xl sm:text-2xl font-black text-primary text-center">
              O QUE ESTÁ INCLUÍDO EM TODOS OS INGRESSOS?
            </CardTitle>
          </CardHeader>
          <CardContent className="px-4 md:px-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 md:gap-4">
              {[
                "Arena Gamer free play",
                "Campeonatos e competições",
                "Beat Saber VR",
                "Cine Anime",
                "Animekê e K-POP",
                "Estandes de vendas geek"
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-2">
                  <Check className="w-4 h-4 md:w-5 md:h-5 text-primary flex-shrink-0" />
                  <span className="font-semibold text-sm md:text-base text-foreground">{item}</span>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </main>
      
      <FAQ />
      <Footer />
      <FloatingMenu />
    </div>
  );
};

export default Ingressos;
