import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { HelmetProvider } from 'react-helmet-async';
import ScrollToTop from "@/components/ScrollToTop";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import MapaEvento from "./pages/MapaEvento";
import Cronograma from "./pages/Cronograma";
import Standistas from "./pages/Standistas";
import OEvento from "./pages/OEvento";
import Ingressos from "./pages/Ingressos";
import Ajuda from "./pages/Ajuda";
import Contato from "./pages/Contato";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import QuemSomos from "./pages/QuemSomos";
import Resultados from "./pages/Resultados";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <HelmetProvider>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/o-evento" element={<OEvento />} />
          <Route path="/mapa" element={<MapaEvento />} />
          <Route path="/cronograma" element={<Cronograma />} />
          <Route path="/standistas" element={<Standistas />} />
          <Route path="/ingressos" element={<Ingressos />} />
          <Route path="/ajuda" element={<Ajuda />} />
          <Route path="/contato" element={<Contato />} />
          <Route path="/quem-somos" element={<QuemSomos />} />
          <Route path="/resultados" element={<Resultados />} />
          <Route path="/politica-privacidade" element={<PrivacyPolicy />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
    </HelmetProvider>
  </QueryClientProvider>
);

export default App;
