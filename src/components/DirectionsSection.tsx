import Icon from "@/components/ui/icon";
import { DIRECTIONS } from "@/data/siteData";

interface DirectionsSectionProps {
  onSelectDirection: (direction: (typeof DIRECTIONS)[0]) => void;
  onApply: () => void;
}

const DirectionsSection = ({ onSelectDirection, onApply }: DirectionsSectionProps) => {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-12 gap-4">
          <div>
            <div className="text-sho-red font-semibold text-sm uppercase tracking-widest mb-2">Специализации</div>
            <h2 className="font-oswald text-4xl sm:text-5xl font-bold text-sho-dark red-line">
              НАШИ НАПРАВЛЕНИЯ
            </h2>
          </div>
          <button
            onClick={onApply}
            className="flex items-center gap-2 bg-sho-red text-white font-semibold px-6 py-3 rounded-xl hover:bg-sho-red-dark transition-all hover:scale-105"
          >
            <Icon name="FileText" size={18} />
            Подать заявку
          </button>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 mb-8">
          {DIRECTIONS.map((dir, i) => (
            <button
              key={dir.id}
              onClick={() => onSelectDirection(dir)}
              className="group relative bg-white border-2 border-gray-100 rounded-2xl p-5 text-left card-hover overflow-hidden"
              style={{ animationDelay: `${i * 0.05}s` }}
            >
              <div className="absolute top-0 left-0 w-1 h-full bg-sho-red rounded-l-2xl group-hover:w-full group-hover:opacity-10 transition-all duration-300" />
              <div className="relative z-10">
                <div className="w-12 h-12 rounded-xl bg-red-50 group-hover:bg-sho-red flex items-center justify-center mb-4 transition-colors duration-300">
                  <Icon
                    name={dir.icon}
                    size={22}
                    className="text-sho-red group-hover:text-white transition-colors duration-300"
                    fallback="Stethoscope"
                  />
                </div>
                <div className="font-oswald font-bold text-sho-dark text-lg leading-tight mb-1">
                  {dir.short}
                </div>
                <div className="text-xs text-gray-500 leading-snug mb-3 line-clamp-2">
                  {dir.name}
                </div>
                <div className="text-xs text-gray-400">
                  Куратор: {dir.curator.name.split(" ")[0]} {dir.curator.name.split(" ")[1]}
                </div>
                <div className="mt-3 flex items-center gap-1 text-sho-red text-xs font-semibold opacity-0 group-hover:opacity-100 transition-opacity">
                  Подробнее <Icon name="ArrowRight" size={12} />
                </div>
              </div>
            </button>
          ))}
        </div>

        <div className="bg-gradient-to-r from-sho-red to-sho-red-dark rounded-2xl p-8 text-white">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-6">
            <div>
              <h3 className="font-oswald text-2xl sm:text-3xl font-bold mb-2">Хочешь стать частью СХО?</h3>
              <p className="text-white/80 text-sm">
                Нажми на направление, чтобы узнать подробности. Отбор проходит каждый семестр.
              </p>
            </div>
            <button
              onClick={onApply}
              className="flex-shrink-0 bg-white text-sho-red font-bold px-8 py-4 rounded-xl hover:bg-gray-100 transition-all hover:scale-105 shadow-lg"
            >
              Оставить заявку →
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DirectionsSection;