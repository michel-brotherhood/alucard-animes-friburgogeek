import { Trophy, Medal } from "lucide-react";

const resultados = {
  geek: [
    { posicao: 1, nome: "Thayse", personagem: "Bella - A Bela e a Fera", nota: 9.25 },
    { posicao: 2, nome: "Romulo Oliveira", personagem: "Spawn", nota: 9.00 },
    { posicao: 3, nome: "Rodrigo", personagem: "Indiana Jones", nota: 8.60 },
  ],
  game: [
    { posicao: 1, nome: "Italo Belorio", personagem: "Guarda Five Nights at Freddy", nota: 8.70 },
    { posicao: 2, nome: "Erick Augusto", personagem: "Resident Evil - Umbrela Corps", nota: 8.25 },
    { posicao: 3, nome: "Guilherme", personagem: "Cloud - Final Fantasy 7", nota: 7.50 },
  ],
};

const getMedalColor = (posicao: number) => {
  switch (posicao) {
    case 1:
      return "text-yellow-400";
    case 2:
      return "text-gray-300";
    case 3:
      return "text-amber-600";
    default:
      return "text-muted-foreground";
  }
};

const getMedalEmoji = (posicao: number) => {
  switch (posicao) {
    case 1:
      return "🥇";
    case 2:
      return "🥈";
    case 3:
      return "🥉";
    default:
      return "";
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
      className={`flex items-center justify-between p-4 rounded-xl transition-all ${
        isFirst 
          ? "bg-gradient-to-r from-red-900/60 to-red-800/40 border-2 border-red-400 shadow-lg shadow-red-500/30" 
          : "bg-black/40 border border-white/20 hover:border-white/30"
      }`}
    >
      <div className="flex items-center gap-3">
        <span className="text-2xl">{getMedalEmoji(posicao)}</span>
        <div>
          <p className={`font-bold ${isFirst ? "text-white text-lg" : "text-white"}`}>
            {nome}
          </p>
          <p className="text-gray-300 text-sm italic">{personagem}</p>
        </div>
      </div>
      <div className="text-right">
        <p className={`font-extrabold ${isFirst ? "text-yellow-400 text-2xl" : "text-yellow-300 text-xl"}`}>
          {nota.toFixed(2)}
        </p>
        <p className="text-gray-400 text-xs uppercase tracking-wide">média</p>
      </div>
    </div>
  );
};

interface CategorySectionProps {
  title: string;
  results: typeof resultados.geek;
}

const CategorySection = ({ title, results }: CategorySectionProps) => {
  return (
    <div className="bg-black/50 backdrop-blur-sm rounded-2xl p-5 md:p-6 border border-white/10">
      <div className="flex items-center mb-4">
        <h3 className="text-accent font-bold text-xl uppercase tracking-wide flex items-center gap-2">
          <Trophy className="w-5 h-5" />
          {title}
        </h3>
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
    <section id="resultados-cosplay" className="py-16 md:py-20 bg-background">
      <div className="max-w-6xl mx-auto px-4 md:px-8">
        {/* Header */}
        <div className="text-center mb-10 md:mb-12">
          <div className="flex items-center justify-center gap-3 mb-4">
            <Medal className="w-8 h-8 text-accent" />
            <h2 className="text-2xl md:text-4xl font-bold text-foreground uppercase tracking-wide">
              Resultados do Concurso de Cosplay
            </h2>
            <Medal className="w-8 h-8 text-accent" />
          </div>
          <p className="text-muted-foreground text-lg">
            Confira os vencedores do concurso de cosplay nas categorias GEEK e GAME
          </p>
        </div>

        {/* Results Grid */}
        <div className="grid md:grid-cols-2 gap-6 md:gap-8">
          <CategorySection title="GEEK" results={resultados.geek} />
          <CategorySection title="GAME" results={resultados.game} />
        </div>
      </div>
    </section>
  );
};

export default CosplayResults;
