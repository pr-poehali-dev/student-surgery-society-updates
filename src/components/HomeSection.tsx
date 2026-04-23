import Icon from "@/components/ui/icon";
import { LEADERS, CAPTAIN } from "@/data/siteData";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";

interface HomeSectionProps {
  onApply: () => void;
  onNavigate: (section: string) => void;
}

const HomeSection = ({ onApply, onNavigate }: HomeSectionProps) => {
  return (
    <>
      <HeroSection onApply={onApply} onNavigate={onNavigate} />

      <AboutSection />

      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-oswald text-3xl sm:text-4xl font-bold text-sho-dark mb-10 text-center">
            Руководство
          </h2>
          <div className="flex flex-col sm:flex-row justify-center gap-6 mb-8">
            {LEADERS.map((leader) => (
              <div
                key={leader.name}
                className="flex flex-col items-center text-center bg-white rounded-2xl p-8 border border-gray-100 card-hover w-full sm:w-64"
              >
                <div className="w-32 h-32 rounded-full bg-gray-100 border-2 border-dashed border-gray-300 flex flex-col items-center justify-center mb-5 overflow-hidden flex-shrink-0">
                  <Icon name="Camera" size={28} className="text-gray-300" />
                  <span className="text-gray-300 text-xs mt-1.5">Фото</span>
                </div>
                <div className="font-bold text-sho-dark text-base leading-snug mb-1">{leader.name}</div>
                <div className="text-sho-red text-sm font-semibold">{leader.role}</div>
                <div className="text-gray-400 text-xs mt-0.5">{leader.degree}</div>
              </div>
            ))}
          </div>

          <div className="flex justify-center">
            <div className="flex items-center gap-3 bg-white border border-gray-200 rounded-xl px-5 py-3 text-sm text-gray-500">
              <Icon name="User" size={16} className="text-gray-400" />
              <span>Студенческое руководство — капитан: <span className="font-medium text-gray-700">{CAPTAIN.name}</span>, {CAPTAIN.course}</span>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default HomeSection;
