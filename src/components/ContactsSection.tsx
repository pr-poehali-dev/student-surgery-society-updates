import Icon from "@/components/ui/icon";
import { CAPTAIN, LEADERS } from "@/data/siteData";

interface ContactsSectionProps {
  onApply: () => void;
}

const ContactsSection = ({ onApply }: ContactsSectionProps) => {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-12">
          <div className="text-sho-red font-semibold text-sm uppercase tracking-widest mb-2">Связь</div>
          <h2 className="font-oswald text-4xl sm:text-5xl font-bold text-sho-dark red-line">
            КОНТАКТЫ
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2 space-y-6">
            <div className="bg-gradient-to-r from-sho-red to-sho-red-dark rounded-2xl p-8 text-white">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-16 h-16 rounded-2xl bg-white/20 flex items-center justify-center">
                  <Icon name="Crown" size={28} className="text-white" />
                </div>
                <div>
                  <div className="text-white/70 text-sm uppercase tracking-wide">Капитан СХО</div>
                  <div className="font-oswald text-2xl font-bold">{CAPTAIN.name}</div>
                  <div className="text-white/80">{CAPTAIN.course}</div>
                </div>
              </div>
              <div className="flex flex-wrap gap-3 mt-4">
                <a
                  href="https://vk.me/join/SUlrvgxOZExGtiSchMCFdAENfYb5RC9LZ04="
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-2 bg-white/20 hover:bg-white/30 text-white px-4 py-2 rounded-xl text-sm font-semibold transition-colors"
                >
                  <Icon name="MessageCircle" size={16} />
                  ВКонтакте СХО
                </a>
                <a
                  href="https://t.me"
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-2 bg-white/20 hover:bg-white/30 text-white px-4 py-2 rounded-xl text-sm font-semibold transition-colors"
                >
                  <Icon name="Send" size={16} />
                  Telegram
                </a>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              {LEADERS.map((leader) => (
                <div key={leader.name} className="bg-white rounded-2xl p-5 border border-gray-100 card-hover">
                  <div className="w-12 h-12 rounded-xl bg-red-50 flex items-center justify-center mb-3">
                    <Icon name={leader.icon} size={22} className="text-sho-red" fallback="User" />
                  </div>
                  <div className="font-bold text-sho-dark text-sm leading-tight">{leader.name}</div>
                  <div className="text-sho-red text-xs font-semibold mt-1">{leader.role}</div>
                  <div className="text-gray-400 text-xs">{leader.degree}</div>
                </div>
              ))}
            </div>

            <div className="bg-white rounded-2xl p-6 border border-gray-100">
              <h3 className="font-oswald text-xl font-bold text-sho-dark mb-4">Организация</h3>
              <div className="space-y-3">
                <div className="flex items-start gap-3">
                  <Icon name="MapPin" size={18} className="text-sho-red flex-shrink-0 mt-1" />
                  <div>
                    <div className="font-semibold text-sm text-sho-dark">КрасГМУ им. проф. В.Ф. Войно-Ясенецкого</div>
                    <div className="text-gray-500 text-xs">г. Красноярск, ул. Партизана Железняка, 1</div>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Icon name="Building" size={18} className="text-sho-red flex-shrink-0 mt-1" />
                  <div>
                    <div className="font-semibold text-sm text-sho-dark">Кафедра ОХиТА</div>
                    <div className="text-gray-500 text-xs">Кафедра общей хирургии и топографической анатомии</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="space-y-4">
            <div className="bg-sho-dark rounded-2xl p-6 text-white">
              <h3 className="font-oswald text-xl font-bold mb-4">Вступить в СХО</h3>
              <p className="text-white/70 text-sm mb-5 leading-relaxed">
                Готов развиваться в хирургии? Оставь заявку — мы свяжемся с тобой и расскажем о ближайшем отборе.
              </p>
              <button
                onClick={onApply}
                className="w-full bg-sho-red hover:bg-sho-red-dark text-white font-bold py-3 rounded-xl transition-all hover:scale-105 flex items-center justify-center gap-2"
              >
                <Icon name="FileText" size={18} />
                Оставить заявку
              </button>
            </div>

            <div className="bg-white rounded-2xl p-6 border border-gray-100">
              <h3 className="font-semibold text-sho-dark mb-4">Социальные сети</h3>
              <div className="space-y-3">
                <a
                  href="https://vk.me/join/SUlrvgxOZExGtiSchMCFdAENfYb5RC9LZ04="
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-3 p-3 rounded-xl bg-blue-50 hover:bg-blue-100 transition-colors group"
                >
                  <div className="w-10 h-10 rounded-lg bg-blue-600 flex items-center justify-center">
                    <Icon name="MessageCircle" size={18} className="text-white" />
                  </div>
                  <div>
                    <div className="font-semibold text-sm text-sho-dark">ВКонтакте</div>
                    <div className="text-xs text-gray-500">Официальная группа СХО</div>
                  </div>
                  <Icon name="ExternalLink" size={14} className="text-gray-400 ml-auto group-hover:text-blue-600 transition-colors" />
                </a>
                <div className="flex items-center gap-3 p-3 rounded-xl bg-sky-50">
                  <div className="w-10 h-10 rounded-lg bg-sky-500 flex items-center justify-center">
                    <Icon name="Send" size={18} className="text-white" />
                  </div>
                  <div>
                    <div className="font-semibold text-sm text-sho-dark">Telegram</div>
                    <div className="text-xs text-gray-500">Скоро</div>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-red-50 border border-red-100 rounded-2xl p-5">
              <div className="flex items-center gap-2 mb-2">
                <Icon name="Clock" size={16} className="text-sho-red" />
                <span className="font-semibold text-sm text-sho-dark">Ближайший отбор</span>
              </div>
              <p className="text-xs text-gray-600 leading-relaxed">
                Отбор проводится в начале каждого семестра. Оставь заявку заранее — мы уведомим о датах.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactsSection;
