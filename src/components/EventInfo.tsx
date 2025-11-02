import { Calendar, MapPin } from "lucide-react";

const EventInfo = () => {
  return (
    <section className="bg-primary py-8 px-4 md:px-6 text-center">
      <div className="max-w-4xl mx-auto flex flex-col md:flex-row items-center justify-center gap-6 md:gap-8 text-white">
        <div className="flex items-start md:items-center gap-3 w-full md:w-auto">
          <Calendar className="w-6 h-6 md:w-7 md:h-7 flex-shrink-0 mt-1 md:mt-0" />
          <span className="text-base md:text-xl font-bold text-left md:text-center leading-relaxed">
            14 de Dezembro de 2025 - 12h às 18h
          </span>
        </div>
        <div className="hidden md:block w-px h-8 bg-white/30"></div>
        <div className="flex items-start md:items-center gap-3 w-full md:w-auto">
          <MapPin className="w-6 h-6 md:w-7 md:h-7 flex-shrink-0 mt-1 md:mt-0" />
          <span className="text-base md:text-xl font-bold text-left md:text-center leading-relaxed">
            Sindicato Dos Têxteis, Nova Friburgo - RJ
          </span>
        </div>
      </div>
    </section>
  );
};

export default EventInfo;
