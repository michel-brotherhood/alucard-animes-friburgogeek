import Header from "@/components/Header";
import Hero from "@/components/Hero";
import CosplayResults from "@/components/CosplayResults";
import Countdown from "@/components/Countdown";
import EventInfo from "@/components/EventInfo";
import VendorsSection from "@/components/VendorsSection";
import AlucardSection from "@/components/AlucardSection";
import FAQ from "@/components/FAQ";
import Footer from "@/components/Footer";
import FloatingMenu from "@/components/FloatingMenu";
import { SEO } from "@/components/SEO";

const Index = () => {
  return (
    <div className="min-h-screen overflow-x-hidden">
      <SEO 
        title="Friburgo Geek 2026 - Maior Evento Geek de Nova Friburgo"
        description="Evento geek completo em Nova Friburgo: cosplay, k-pop, animekê, videogames, retro games e muito mais! Confira os resultados do Friburgo Geek 2026."
        canonical="/"
        keywords="Friburgo Geek, evento geek Nova Friburgo, cosplay, k-pop, animekê, torneio videogames, retro games, Alucard Animes, cultura pop, anime, games"
      />
      <Header />
      <Hero />
      <CosplayResults />
      <Countdown />
      <EventInfo />
      <VendorsSection />
      <AlucardSection />
      <FAQ />
      <Footer />
      <FloatingMenu />
    </div>
  );
};

export default Index;
