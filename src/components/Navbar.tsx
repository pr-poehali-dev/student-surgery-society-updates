import { useState } from "react";
import Icon from "@/components/ui/icon";

interface NavbarProps {
  activeSection: string;
  onNavigate: (section: string) => void;
  onApply: () => void;
}

const NAV_ITEMS = [
  { id: "home", label: "Главная" },
  { id: "news", label: "Новости" },
  { id: "directions", label: "Направления" },
  { id: "history", label: "История" },
  { id: "videos", label: "Видео" },
  { id: "contacts", label: "Контакты" },
];

const Navbar = ({ activeSection, onNavigate, onApply }: NavbarProps) => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-md border-b border-gray-100 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <button
            onClick={() => onNavigate("home")}
            className="flex items-center gap-3 group"
          >
            <div className="w-10 h-10 rounded-lg bg-sho-red flex items-center justify-center shadow-lg group-hover:scale-105 transition-transform">
              <span className="text-white font-oswald font-bold text-sm leading-none">СХО</span>
            </div>
            <div className="hidden sm:block">
              <div className="font-oswald font-bold text-sho-dark text-base leading-tight">СХО КрасГМУ</div>
              <div className="text-xs text-gray-500 leading-tight">Студенческое хирургическое общество</div>
            </div>
          </button>

          <div className="hidden lg:flex items-center gap-1">
            {NAV_ITEMS.map((item) => (
              <button
                key={item.id}
                onClick={() => onNavigate(item.id)}
                className={`px-3 py-2 text-sm font-medium rounded-lg transition-all duration-200 ${
                  activeSection === item.id
                    ? "text-sho-red bg-red-50"
                    : "text-gray-600 hover:text-sho-red hover:bg-red-50"
                }`}
              >
                {item.label}
              </button>
            ))}
          </div>

          <div className="flex items-center gap-3">
            <button
              onClick={onApply}
              className="hidden sm:flex items-center gap-2 bg-sho-red hover:bg-sho-red-dark text-white text-sm font-semibold px-4 py-2 rounded-lg transition-all duration-200 hover:scale-105 animate-pulse-red"
            >
              <Icon name="FileText" size={16} />
              Подать заявку
            </button>

            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="lg:hidden p-2 rounded-lg text-gray-600 hover:text-sho-red hover:bg-red-50 transition-colors"
            >
              <Icon name={menuOpen ? "X" : "Menu"} size={24} />
            </button>
          </div>
        </div>
      </div>

      {menuOpen && (
        <div className="lg:hidden bg-white border-t border-gray-100 shadow-lg animate-fade-in">
          <div className="max-w-7xl mx-auto px-4 py-3 space-y-1">
            {NAV_ITEMS.map((item) => (
              <button
                key={item.id}
                onClick={() => {
                  onNavigate(item.id);
                  setMenuOpen(false);
                }}
                className={`w-full text-left px-4 py-2.5 text-sm font-medium rounded-lg transition-colors ${
                  activeSection === item.id
                    ? "text-sho-red bg-red-50"
                    : "text-gray-700 hover:text-sho-red hover:bg-red-50"
                }`}
              >
                {item.label}
              </button>
            ))}
            <button
              onClick={() => {
                onApply();
                setMenuOpen(false);
              }}
              className="w-full flex items-center justify-center gap-2 bg-sho-red text-white text-sm font-semibold px-4 py-2.5 rounded-lg mt-2"
            >
              <Icon name="FileText" size={16} />
              Подать заявку
            </button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
