import Icon from "@/components/ui/icon";

interface HeroSectionProps {
  onApply: () => void;
  onNavigate: (section: string) => void;
}

const HeroSection = ({ onApply, onNavigate }: HeroSectionProps) => {
  return (
    <div className="relative min-h-screen flex items-center overflow-hidden pt-16">
      <div
        className="absolute inset-0 diagonal-cut"
        style={{
          background: "linear-gradient(135deg, #8B0000 0%, #C41E3A 50%, #1a1a1a 100%)",
        }}
      />
      <div className="absolute inset-0 opacity-10"
        style={{
          backgroundImage: `repeating-linear-gradient(
            45deg,
            transparent,
            transparent 40px,
            rgba(255,255,255,0.05) 40px,
            rgba(255,255,255,0.05) 80px
          )`
        }}
      />

      <div
        className="absolute right-0 top-0 bottom-0 w-1/2 bg-cover bg-center opacity-20"
        style={{
          backgroundImage: `url('https://cdn.poehali.dev/projects/14acfb03-c5a7-4233-a415-5220916be8c9/files/86a67c82-2f6f-4660-865a-3f79d66ba474.jpg')`,
          maskImage: "linear-gradient(to right, transparent, black 40%)",
          WebkitMaskImage: "linear-gradient(to right, transparent, black 40%)",
        }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 sm:py-32">
        <div className="max-w-3xl">
          <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 text-white/90 text-sm font-medium px-4 py-2 rounded-full mb-8 animate-fade-in">
            <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse"></span>
            Чемпионы Сибирского федерального округа 2026
          </div>

          <h1
            className="font-oswald text-5xl sm:text-7xl font-bold text-white leading-none mb-6 animate-slide-up"
            style={{ animationDelay: "0.1s" }}
          >
            СТУДЕНЧЕСКОЕ<br />
            <span className="text-white/60">ХИРУРГИЧЕСКОЕ</span><br />
            <span className="relative">ОБЩЕСТВО
              <span className="absolute -bottom-2 left-0 w-full h-1 bg-white/40 rounded"></span>
            </span>
          </h1>

          <p
            className="text-white/80 text-lg sm:text-xl font-light leading-relaxed mb-10 max-w-xl animate-fade-in"
            style={{ animationDelay: "0.3s" }}
          >
            КрасГМУ им. проф. В.Ф. Войно-Ясенецкого. 10 хирургических направлений.
            Мы готовим будущих хирургов к олимпиадам, операционной и профессиональному росту.
          </p>

          <div
            className="flex flex-wrap gap-4 animate-fade-in"
            style={{ animationDelay: "0.5s" }}
          >
            <button
              onClick={onApply}
              className="flex items-center gap-3 bg-white text-sho-red font-bold text-lg px-8 py-4 rounded-xl hover:bg-gray-100 transition-all duration-300 hover:scale-105 shadow-2xl"
            >
              <Icon name="FileText" size={22} />
              Оставить заявку
            </button>
            <button
              onClick={() => onNavigate("directions")}
              className="flex items-center gap-3 border-2 border-white/40 text-white font-semibold text-lg px-8 py-4 rounded-xl hover:bg-white/10 transition-all duration-300"
            >
              <Icon name="ChevronDown" size={22} />
              Наши направления
            </button>
          </div>

          <div
            className="flex flex-wrap gap-8 mt-16 animate-fade-in"
            style={{ animationDelay: "0.7s" }}
          >
            {[
              { num: "10", label: "Направлений хирургии" },
              { num: "60+", label: "Активных членов" },
              { num: "2015", label: "Год основания" },
              { num: "ТОП-1", label: "СФО 2026" },
            ].map((stat) => (
              <div key={stat.label} className="text-center">
                <div className="font-oswald text-4xl font-bold text-white">{stat.num}</div>
                <div className="text-white/60 text-sm mt-1">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>


    </div>
  );
};

export default HeroSection;