import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FloatingMenu from "@/components/FloatingMenu";
import CosplayResults from "@/components/CosplayResults";
import { SEO } from "@/components/SEO";

const ResultadosConcursos = () => {
  return (
    <div className="min-h-screen bg-background">
      <SEO 
        title="Resultados dos Concursos - Friburgo Geek Natal 2025"
        description="Confira os vencedores do concurso de cosplay do Friburgo Geek Natal 2025 nas categorias GEEK e GAME."
        canonical="/resultados-concursos"
      />
      <Header />
      <main className="pt-8">
        <CosplayResults />
      </main>
      <Footer />
      <FloatingMenu />
    </div>
  );
};

export default ResultadosConcursos;
