import Icon from "@/components/ui/icon";

interface FooterProps {
  onNavigate: (section: string) => void;
}

const Footer = ({ onNavigate }: FooterProps) => {
  return (
    <footer className="bg-sho-dark text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-10">
          <div className="sm:col-span-2 lg:col-span-1">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 rounded-xl bg-sho-red flex items-center justify-center">
                <span className="text-white font-oswald font-bold">СХО</span>
              </div>
              <div>
                <div className="font-oswald font-bold text-lg">СХО КрасГМУ</div>
                <div className="text-white/50 text-xs">с 2015 года</div>
              </div>
            </div>
            <p className="text-white/60 text-sm leading-relaxed">
              Студенческое хирургическое общество КрасГМУ им. проф. В.Ф. Войно-Ясенецкого.
              10 направлений. Олимпиады. Профессиональный рост.
            </p>
            <div className="flex gap-3 mt-4">
              <a
                href="https://vk.me/join/SUlrvgxOZExGtiSchMCFdAENfYb5RC9LZ04="
                target="_blank"
                rel="noreferrer"
                className="w-9 h-9 rounded-lg bg-white/10 hover:bg-sho-red flex items-center justify-center transition-colors"
              >
                <Icon name="MessageCircle" size={16} className="text-white" />
              </a>
              <div className="w-9 h-9 rounded-lg bg-white/10 flex items-center justify-center">
                <Icon name="Send" size={16} className="text-white/40" />
              </div>
            </div>
          </div>

          <div>
            <h4 className="font-oswald font-bold text-lg mb-4">Навигация</h4>
            <ul className="space-y-2">
              {[
                { id: "home", label: "Главная" },
                { id: "news", label: "Новости" },
                { id: "directions", label: "Направления" },
                { id: "history", label: "История" },
                { id: "videos", label: "Видеоуроки" },
                { id: "contacts", label: "Контакты" },
              ].map((item) => (
                <li key={item.id}>
                  <button
                    onClick={() => onNavigate(item.id)}
                    className="text-white/60 hover:text-white text-sm transition-colors hover:translate-x-1 transform inline-block"
                  >
                    {item.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-oswald font-bold text-lg mb-4">Направления</h4>
            <ul className="space-y-1.5">
              {["ССХ", "Торакальная", "Абдоминальная", "Эндовидео", "Пластическая", "Травматология", "Гинекология", "Нейрохирургия", "Урология", "АИР"].map((d) => (
                <li key={d}>
                  <button
                    onClick={() => onNavigate("directions")}
                    className="text-white/60 hover:text-white text-sm transition-colors"
                  >
                    {d}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-oswald font-bold text-lg mb-4">Контакты</h4>
            <div className="space-y-3">
              <div className="flex items-start gap-2">
                <Icon name="MapPin" size={14} className="text-sho-red mt-1 flex-shrink-0" />
                <span className="text-white/60 text-sm">г. Красноярск, ул. Партизана Железняка, 1</span>
              </div>
              <div className="flex items-center gap-2">
                <Icon name="Building" size={14} className="text-sho-red flex-shrink-0" />
                <span className="text-white/60 text-sm">КрасГМУ, Кафедра ОХиТА</span>
              </div>
            </div>
            <button
              onClick={() => onNavigate("admin")}
              className="mt-6 flex items-center gap-2 text-white/30 hover:text-white/60 text-xs transition-colors"
            >
              <Icon name="Settings" size={12} />
              Администратор
            </button>
          </div>
        </div>

        <div className="border-t border-white/10 pt-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="text-white/40 text-sm">
            © 2026 СХО КрасГМУ. Все права защищены.
          </div>
          <div className="flex items-center gap-2 text-white/30 text-xs">
            <Icon name="Heart" size={12} className="text-sho-red" />
            Сделано с любовью к хирургии
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
