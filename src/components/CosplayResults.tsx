import { Trophy, Medal, Crown, Award } from "lucide-react";

const resultados = {
  anime: [
    { posicao: 1, nome: "Giovana", personagem: "Angel Death – Chainsaw Man", nota: 7.00 },
    { posicao: 2, nome: "Victor Hugo", personagem: "Ichigo – Bleach", nota: 6.50 },
    { posicao: 3, nome: "Felipe Attila", personagem: "Monkey D Luffy – One Piece", nota: 6.50 },
  ],
  desfileLivre: [
    { posicao: 1, nome: "Clara Torres", personagem: "Astrid – How to Train Your Dragon", nota: 9.25 },
    { posicao: 2, nome: "Isabelly Trindade", personagem: "ADA – Resident Evil 4", nota: 8.00 },
    { posicao: 3, nome: "Helena e Maria Julia", personagem: "Mario e Luigi", nota: 7.50 },
  ],
};

const getMedalIcon = (posicao: number) => {
  switch (posicao) {
    case 1: return <Crown className="w-6 h-6 text-accent" />;
    case 2: return <Medal className="w-5 h-5 text-gray-300" />;
    case 3: return <Award className="w-5 h-5 text-amber-600" />;
    default: return null;
  }
};

interface ResultCardProps {
  posicao: number;
  nome: string;
  personagem: string;
  nota: number;
}

const ResultCard = ({ posicao, nome, personagem, nota }: ResultCardProps) => {
  const isFirst = posicao === 1;

  return (
    <div
      className={`flex items-center justify-between p-4 md:p-5 rounded-2xl transition-all duration-300 ${
        isFirst
          ? "bg-gradient-to-r from-primary/30 to-accent/10 border-2 border-accent/60 shadow-xl shadow-accent/10"
          : "bg-secondary/30 border border-secondary/40 hover:border-secondary/60 hover:bg-secondary/40"
      }`}
    >
      <div className="flex items-center gap-4">
        <div className={`w-10 h-10 rounded-full flex items-center justify-center shrink-0 ${
          isFirst ? "bg-accent/20" : "bg-secondary/40"
        }`}>
          {getMedalIcon(posicao)}
        </div>
        <div>
          <p className={`font-bold text-white ${isFirst ? "text-lg md:text-xl" : "text-base"}`}>
            {nome}
          </p>
          <p className="text-white/60 text-sm italic">{personagem}</p>
        </div>
      </div>
      <div className="text-right shrink-0 ml-4">
        <p className={`font-black ${isFirst ? "text-accent text-2xl md:text-3xl" : "text-accent/80 text-xl md:text-2xl"}`}>
          {nota.toFixed(2)}
        </p>
        <p className="text-white/40 text-[10px] uppercase tracking-widest font-semibold">média</p>
      </div>
    </div>
  );
};

interface CategorySectionProps {
  title: string;
  subtitle: string;
  results: typeof resultados.anime;
}

const CategorySection = ({ title, subtitle, results }: CategorySectionProps) => {
  return (
    <div className="bg-gradient-to-br from-secondary/80 to-secondary/60 backdrop-blur-md rounded-3xl p-6 md:p-8 border border-secondary/30 shadow-2xl">
      <div className="flex items-center gap-3 mb-6">
        <div className="bg-accent/20 p-2 rounded-xl">
          <Trophy className="w-6 h-6 text-accent" />
        </div>
        <div>
          <h3 className="text-accent font-black text-2xl uppercase tracking-wider">
            {title}
          </h3>
          <p className="text-white/50 text-xs font-medium">{subtitle}</p>
        </div>
      </div>
      <div className="flex flex-col gap-3">
        {results.map((result) => (
          <ResultCard
            key={`${title}-${result.posicao}`}
            posicao={result.posicao}
            nome={result.nome}
            personagem={result.personagem}
            nota={result.nota}
          />
        ))}
      </div>
    </div>
  );
};

const CosplayResults = () => {
  return (
    <section id="resultados-cosplay" className="py-16 md:py-24 bg-foreground">
      <div className="max-w-5xl mx-auto px-4 md:px-8">
        <div className="text-center mb-12 md:mb-16">
          <p className="text-accent text-sm font-bold uppercase tracking-widest mb-3">
            Friburgo Geek 2026
          </p>
          <h2 className="text-3xl md:text-5xl font-black text-white uppercase tracking-tight mb-4">
            Resultados do Cosplay
          </h2>
          <div className="h-1 w-16 bg-accent mx-auto mb-4" />
          <p className="text-white/60 text-base md:text-lg max-w-lg mx-auto">
            Confira os vencedores do concurso de cosplay
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6 md:gap-8">
          <CategorySection title="ANIME" subtitle="3 classificados" results={resultados.anime} />
          <CategorySection title="DESFILE LIVRE" subtitle="3 classificados" results={resultados.desfileLivre} />
        </div>
      </div>
    </section>
  );
};

export default CosplayResults;
