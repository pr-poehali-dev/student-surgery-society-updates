import { useState } from "react";
import Icon from "@/components/ui/icon";
import { DIRECTIONS } from "@/data/siteData";

interface DirectionModalProps {
  direction: (typeof DIRECTIONS)[0];
  onClose: () => void;
  onApply: () => void;
}

const TABS = [
  { id: "about", label: "О направлении" },
  { id: "operations", label: "Операции" },
  { id: "books", label: "Литература" },
  { id: "selection", label: "Отбор" },
];

const DirectionModal = ({ direction, onClose, onApply }: DirectionModalProps) => {
  const [activeTab, setActiveTab] = useState("about");

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" onClick={onClose} />
      <div className="relative bg-white rounded-3xl w-full max-w-2xl max-h-[90vh] overflow-hidden shadow-2xl animate-scale-in">
        <div className="bg-gradient-to-r from-sho-red-dark to-sho-red p-8 text-white">
          <button
            onClick={onClose}
            className="absolute top-4 right-4 w-10 h-10 rounded-full bg-white/20 hover:bg-white/30 flex items-center justify-center transition-colors"
          >
            <Icon name="X" size={20} />
          </button>
          <div className="flex items-center gap-4 mb-4">
            <div className="w-16 h-16 rounded-2xl bg-white/20 flex items-center justify-center">
              <Icon name={direction.icon} size={32} fallback="Stethoscope" />
            </div>
            <div>
              <div className="text-white/60 text-sm font-medium uppercase tracking-wide">Направление</div>
              <h2 className="font-oswald text-3xl font-bold">{direction.short}</h2>
              <p className="text-white/80 text-sm">{direction.name}</p>
            </div>
          </div>
          <div className="flex items-center gap-3 bg-white/10 rounded-xl p-3">
            <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center">
              <Icon name="User" size={18} />
            </div>
            <div>
              <div className="font-semibold text-sm">{direction.curator.name}</div>
              <div className="text-white/70 text-xs">{direction.curator.role} · {direction.curator.course}</div>
            </div>
          </div>
        </div>

        <div className="flex border-b border-gray-100 px-6 overflow-x-auto scrollbar-hide">
          {TABS.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`px-4 py-3 text-sm font-semibold whitespace-nowrap border-b-2 transition-colors ${
                activeTab === tab.id
                  ? "border-sho-red text-sho-red"
                  : "border-transparent text-gray-500 hover:text-gray-700"
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        <div className="p-6 overflow-y-auto max-h-[40vh]">
          {activeTab === "about" && (
            <div className="animate-fade-in">
              <p className="text-gray-600 leading-relaxed mb-6">{direction.description}</p>
              <div className="bg-red-50 border border-red-100 rounded-xl p-4">
                <div className="flex items-center gap-2 mb-2">
                  <Icon name="Info" size={16} className="text-sho-red" />
                  <span className="font-semibold text-sho-dark text-sm">Контакты куратора</span>
                </div>
                <p className="text-sm text-gray-600">{direction.curator.name}</p>
                <p className="text-sm text-gray-500">{direction.curator.role}, {direction.curator.course}</p>
                <div className="flex gap-3 mt-3">
                  <a
                    href="https://vk.com"
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center gap-2 text-xs bg-blue-600 text-white px-3 py-1.5 rounded-lg hover:bg-blue-700 transition-colors"
                  >
                    <Icon name="MessageCircle" size={12} />
                    ВКонтакте
                  </a>
                  <a
                    href="https://t.me"
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center gap-2 text-xs bg-sky-500 text-white px-3 py-1.5 rounded-lg hover:bg-sky-600 transition-colors"
                  >
                    <Icon name="Send" size={12} />
                    Telegram
                  </a>
                </div>
              </div>
            </div>
          )}

          {activeTab === "operations" && (
            <div className="animate-fade-in">
              <p className="text-sm text-gray-500 mb-4">Основные операции и вмешательства направления:</p>
              <div className="space-y-2">
                {direction.operations.map((op, i) => (
                  <div key={i} className="flex items-center gap-3 p-3 bg-gray-50 rounded-xl">
                    <div className="w-6 h-6 rounded-full bg-sho-red text-white text-xs flex items-center justify-center font-bold flex-shrink-0">
                      {i + 1}
                    </div>
                    <span className="text-sm text-gray-700">{op}</span>
                  </div>
                ))}
              </div>
            </div>
          )}

          {activeTab === "books" && (
            <div className="animate-fade-in">
              <p className="text-sm text-gray-500 mb-4">Рекомендуемая литература для подготовки:</p>
              <div className="space-y-3">
                {direction.books.map((book, i) => (
                  <div key={i} className="flex items-start gap-3 p-4 bg-gray-50 rounded-xl">
                    <div className="w-10 h-10 rounded-lg bg-sho-red/10 flex items-center justify-center flex-shrink-0">
                      <Icon name="BookOpen" size={18} className="text-sho-red" />
                    </div>
                    <div>
                      <div className="font-semibold text-sm text-sho-dark">{book.title}</div>
                      <div className="text-xs text-gray-500 mt-0.5">{book.author}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {activeTab === "selection" && (
            <div className="animate-fade-in">
              <p className="text-sm text-gray-500 mb-4">Критерии оценки и требования к отбору:</p>
              <div className="space-y-2 mb-6">
                {direction.selectionCriteria.map((crit, i) => (
                  <div key={i} className="flex items-start gap-3 p-3 bg-gray-50 rounded-xl">
                    <Icon name="CheckCircle" size={18} className="text-green-500 flex-shrink-0 mt-0.5" />
                    <span className="text-sm text-gray-700">{crit}</span>
                  </div>
                ))}
              </div>
              <div className="bg-amber-50 border border-amber-200 rounded-xl p-4">
                <div className="flex items-center gap-2 mb-2">
                  <Icon name="Calendar" size={16} className="text-amber-600" />
                  <span className="font-semibold text-amber-800 text-sm">Ближайший отбор</span>
                </div>
                <p className="text-xs text-amber-700">
                  Отбор проводится в начале каждого семестра. Следите за новостями и официальными группами СХО.
                </p>
              </div>
            </div>
          )}
        </div>

        <div className="px-6 pb-6 pt-4 border-t border-gray-100 flex gap-3">
          <button
            onClick={onApply}
            className="flex-1 bg-sho-red hover:bg-sho-red-dark text-white font-bold py-3 rounded-xl transition-all hover:scale-105 flex items-center justify-center gap-2"
          >
            <Icon name="FileText" size={18} />
            Подать заявку в {direction.short}
          </button>
          <button
            onClick={onClose}
            className="px-6 border-2 border-gray-200 text-gray-600 font-semibold py-3 rounded-xl hover:bg-gray-50 transition-colors"
          >
            Закрыть
          </button>
        </div>
      </div>
    </div>
  );
};

export default DirectionModal;
