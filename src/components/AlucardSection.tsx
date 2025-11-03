import alucardLogo from "@/assets/alucard-animes-logo.png";
import { Button } from "@/components/ui/button";
import { Instagram, Facebook } from "lucide-react";

const AlucardSection = () => {
  return (
    <section className="py-20 px-6 bg-gradient-to-b from-secondary via-primary to-secondary relative overflow-hidden">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-black text-accent mb-4">
            SOBRE A PRODUTORA
          </h2>
          <div className="flex justify-center mb-8">
            <img 
              src={alucardLogo} 
              alt="Alucard Animes - Desde 2003" 
              className="w-48 md:w-64 h-auto"
            />
          </div>
        </div>

        {/* Content */}
        <div className="bg-white/10 backdrop-blur-sm border-2 border-accent/30 rounded-3xl p-8 md:p-12 mb-8">
          <div className="prose prose-invert max-w-none">
            <p className="text-white/90 text-base md:text-lg leading-relaxed mb-6">
              A história da Alucard Animes começa em 2003, quando a cena de animes e cultura geek no Brasil estava em plena expansão, mas o mercado ainda era carente de opções para os fãs. Naquela época, o acesso a produtos relacionados a animes, videogames e cultura pop ainda era limitado, e muitos fãs se viam obrigados a recorrer a opções importadas ou de difícil acesso. Foi nesse cenário que a Alucard Animes surgiu, fundada por Roberto Riedl Junior e o Grupo CVG MANGÁ, amigos apaixonados pela cultura geek e motivados pela necessidade de preencher essa lacuna no mercado.
            </p>

            <p className="text-white/90 text-base md:text-lg leading-relaxed mb-6">
              O primeiro passo da empresa foi focar na venda de DVDs de animes, que naquela época eram itens difíceis de encontrar no Brasil. Muitos fãs tinham dificuldade em assistir aos seus animes favoritos devido à falta de opções de compra e à escassez de lançamentos no mercado nacional. A Alucard Animes, então, tornou-se uma referência para aqueles que desejavam adquirir DVDs de animes, oferecendo não apenas os títulos mais populares, mas também lançamentos exclusivos que conquistaram uma base fiel de consumidores.
            </p>

            <p className="text-white/90 text-base md:text-lg leading-relaxed mb-6">
              Além dos DVDs, a Alucard Animes percebeu que o público estava cada vez mais sedento por produtos geeks em geral, como videogames, action figures, roupas temáticas e outros artigos de cultura pop. Foi então que a empresa expandiu seu portfólio, passando a comercializar uma vasta gama de produtos voltados para todos os fãs de animes, games e geek culture. A cada ano, novos produtos eram adicionados ao catálogo, sempre com o intuito de atender às necessidades dos seus clientes, que buscavam um lugar especializado onde pudessem encontrar tudo relacionado ao seu universo de paixão.
            </p>

            <p className="text-white/90 text-base md:text-lg leading-relaxed mb-6">
              Mas a Alucard Animes não se limitou apenas à venda de produtos. Sabendo da importância de conectar as pessoas e criar uma comunidade, a empresa começou a organizar eventos de animes, onde fãs podiam se reunir, trocar ideias, assistir a shows e participar de atividades temáticas. Esses eventos tornaram-se cada vez mais populares, atraindo não apenas os fãs de animes, mas também aqueles que se identificavam com a cultura geek como um todo. De pequenas convenções a grandes eventos, a Alucard Animes sempre buscou proporcionar experiências inesquecíveis para seu público, criando um ambiente acolhedor e vibrante.
            </p>

            <p className="text-white/90 text-base md:text-lg leading-relaxed mb-6">
              Com o passar dos anos, a empresa se consolidou como um dos maiores nomes do mercado de animes e cultura geek do Brasil. A Alucard Animes não apenas acompanhou a evolução do mercado, mas também se antecipou às tendências, trazendo aos fãs produtos exclusivos, lançamentos antecipados e uma curadoria cuidadosa de itens e eventos que conquistaram o coração do público.
            </p>

            <p className="text-white/90 text-base md:text-lg leading-relaxed">
              Hoje, após mais de duas décadas de história, a Alucard Animes continua a ser referência, mantendo sua essência de compromisso com a qualidade, inovação e paixão pela cultura geek. A empresa segue como um elo entre os fãs e seus universos favoritos, mostrando que, por trás de cada DVD vendido, de cada produto geek oferecido, e de cada evento realizado, existe uma verdadeira história de dedicação e amor por um mercado que só cresce e encanta cada vez mais.
            </p>
          </div>
        </div>

        {/* CTA and Social Media */}
        <div className="flex flex-col md:flex-row items-center justify-center gap-6">
          <Button 
            size="lg"
            className="bg-accent text-primary hover:bg-accent/90 font-bold text-base px-10 py-6 rounded-full"
            asChild
          >
            <a 
              href="https://www.instagram.com/alucardanimes/" 
              target="_blank" 
              rel="noopener noreferrer"
            >
              CONHECER MAIS
            </a>
          </Button>

          {/* Social Media Links */}
          <div className="flex gap-4">
            <a
              href="https://www.instagram.com/alucardanimes/"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white/10 backdrop-blur-sm border-2 border-accent/30 rounded-full p-4 hover:bg-accent/20 hover:scale-110 transition-all"
              aria-label="Instagram Alucard Animes"
            >
              <Instagram className="w-6 h-6 text-accent" />
            </a>
            <a
              href="https://www.facebook.com/AlucardAnimes"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white/10 backdrop-blur-sm border-2 border-accent/30 rounded-full p-4 hover:bg-accent/20 hover:scale-110 transition-all"
              aria-label="Facebook Alucard Animes"
            >
              <Facebook className="w-6 h-6 text-accent" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AlucardSection;
