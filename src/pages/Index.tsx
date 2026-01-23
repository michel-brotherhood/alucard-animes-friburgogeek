import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Countdown from "@/components/Countdown";
import EventInfo from "@/components/EventInfo";
import CosplayGallery from "@/components/CosplayGallery";
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
        description="Evento geek completo em Nova Friburgo: cosplay, k-pop, animekê, videogames (Tekken 8, Street Fighter 6, Mortal Kombat 1, League of Legends), retro games e muito mais! 15 de março de 2026, 12h-18h. Ingressos à venda!"
        canonical="/"
        keywords="Friburgo Geek, evento geek Nova Friburgo, cosplay, k-pop, animekê, torneio videogames, Tekken 8, Street Fighter 6, Mortal Kombat 1, League of Legends, FIFA 2025, Just Dance, retro games, Alucard Animes, cultura pop, anime, games"
      />
      <Header />
      <Hero />
      <Countdown />
      <EventInfo />
      <CosplayGallery />
      <VendorsSection />
      <AlucardSection />
      <FAQ />
      <Footer />
      <FloatingMenu />
    </div>
  );
};

export default Index;
