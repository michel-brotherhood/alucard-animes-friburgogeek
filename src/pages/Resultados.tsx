import Header from "@/components/Header";
import CosplayResults from "@/components/CosplayResults";
import Footer from "@/components/Footer";
import FloatingMenu from "@/components/FloatingMenu";
import { SEO } from "@/components/SEO";

const Resultados = () => {
  return (
    <div className="min-h-screen overflow-x-hidden">
      <SEO
        title="Resultados - Concurso de Cosplay"
        description="Confira os vencedores do concurso de cosplay do Friburgo Geek 2026 nas categorias Anime e Desfile Livre."
        canonical="/resultados"
        keywords="resultados cosplay, Friburgo Geek 2026, vencedores cosplay, concurso cosplay"
      />
      <Header />
      <CosplayResults />
      <Footer />
      <FloatingMenu />
    </div>
  );
};

export default Resultados;
