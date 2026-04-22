import { useState } from "react";
import Icon from "@/components/ui/icon";
import type { Application } from "@/pages/Index";

interface AdminPanelProps {
  applications: Application[];
  onClose: () => void;
}

const AdminPanel = ({ applications, onClose }: AdminPanelProps) => {
  const [search, setSearch] = useState("");
  const [filterDir, setFilterDir] = useState("");
  const [selected, setSelected] = useState<Application | null>(null);

  const filtered = applications.filter((a) => {
    const matchSearch =
      a.name.toLowerCase().includes(search.toLowerCase()) ||
      a.email.toLowerCase().includes(search.toLowerCase());
    const matchDir = filterDir ? a.direction === filterDir : true;
    return matchSearch && matchDir;
  });

  const directions = [...new Set(applications.map((a) => a.direction))];

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" onClick={onClose} />
      <div className="relative bg-white rounded-3xl w-full max-w-4xl max-h-[90vh] overflow-hidden shadow-2xl animate-scale-in flex flex-col">
        <div className="bg-gradient-to-r from-sho-dark to-gray-800 p-6 text-white flex-shrink-0">
          <button
            onClick={onClose}
            className="absolute top-4 right-4 w-10 h-10 rounded-full bg-white/20 hover:bg-white/30 flex items-center justify-center transition-colors"
          >
            <Icon name="X" size={20} />
          </button>
          <div className="flex items-center gap-3 mb-4">
            <div className="w-12 h-12 rounded-xl bg-sho-red flex items-center justify-center">
              <Icon name="LayoutDashboard" size={22} className="text-white" />
            </div>
            <div>
              <h2 className="font-oswald text-2xl font-bold">Панель администратора</h2>
              <p className="text-white/70 text-sm">Заявки на вступление в СХО</p>
            </div>
          </div>
          <div className="flex flex-wrap gap-3">
            <div className="bg-white/10 rounded-xl px-4 py-2 text-center">
              <div className="font-oswald text-2xl font-bold">{applications.length}</div>
              <div className="text-white/70 text-xs">Всего заявок</div>
            </div>
            <div className="bg-white/10 rounded-xl px-4 py-2 text-center">
              <div className="font-oswald text-2xl font-bold">{directions.length}</div>
              <div className="text-white/70 text-xs">Направлений</div>
            </div>
          </div>
        </div>

        <div className="p-4 border-b border-gray-100 flex-shrink-0">
          <div className="flex gap-3">
            <div className="flex-1 relative">
              <Icon name="Search" size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
              <input
                type="text"
                placeholder="Поиск по имени или email..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="w-full pl-9 pr-4 py-2.5 border-2 border-gray-200 rounded-xl text-sm focus:border-sho-red outline-none transition-colors"
              />
            </div>
            <select
              value={filterDir}
              onChange={(e) => setFilterDir(e.target.value)}
              className="border-2 border-gray-200 rounded-xl px-3 py-2.5 text-sm focus:border-sho-red outline-none bg-white"
            >
              <option value="">Все направления</option>
              {directions.map((d) => (
                <option key={d} value={d}>{d}</option>
              ))}
            </select>
          </div>
        </div>

        <div className="flex-1 overflow-y-auto">
          {filtered.length === 0 ? (
            <div className="flex flex-col items-center justify-center h-40 text-gray-400">
              <Icon name="Inbox" size={40} className="mb-3 opacity-50" />
              <p className="text-sm">Заявок не найдено</p>
            </div>
          ) : (
            <div className="divide-y divide-gray-100">
              {filtered.map((app) => (
                <div
                  key={app.id}
                  className="flex items-center gap-4 p-4 hover:bg-gray-50 cursor-pointer transition-colors"
                  onClick={() => setSelected(app)}
                >
                  <div className="w-10 h-10 rounded-full bg-red-50 flex items-center justify-center flex-shrink-0">
                    <span className="font-bold text-sho-red text-sm">
                      {app.name.split(" ").map((n) => n[0]).slice(0, 2).join("")}
                    </span>
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="font-semibold text-sho-dark text-sm truncate">{app.name}</div>
                    <div className="text-gray-500 text-xs">{app.email} · {app.phone}</div>
                  </div>
                  <div className="flex-shrink-0 flex items-center gap-3">
                    <span className="bg-red-50 text-sho-red text-xs font-bold px-2.5 py-1 rounded-full">
                      {app.direction}
                    </span>
                    <span className="text-gray-400 text-xs">{app.course} курс</span>
                    <span className="text-gray-300 text-xs">{app.date}</span>
                    <Icon name="ChevronRight" size={16} className="text-gray-300" />
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        {selected && (
          <div className="fixed inset-0 z-60 flex items-center justify-center p-4">
            <div className="absolute inset-0 bg-black/40" onClick={() => setSelected(null)} />
            <div className="relative bg-white rounded-2xl w-full max-w-md p-6 shadow-2xl animate-scale-in">
              <button
                onClick={() => setSelected(null)}
                className="absolute top-4 right-4 w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center"
              >
                <Icon name="X" size={16} />
              </button>
              <div className="flex items-center gap-4 mb-6">
                <div className="w-14 h-14 rounded-full bg-red-100 flex items-center justify-center">
                  <span className="font-bold text-sho-red text-xl">
                    {selected.name.split(" ").map((n) => n[0]).slice(0, 2).join("")}
                  </span>
                </div>
                <div>
                  <div className="font-bold text-sho-dark">{selected.name}</div>
                  <div className="text-sho-red text-sm font-semibold">{selected.direction} · {selected.course} курс</div>
                </div>
              </div>
              <div className="space-y-3">
                {[
                  { icon: "Mail", label: "Email", value: selected.email },
                  { icon: "Phone", label: "Телефон", value: selected.phone },
                  { icon: "Calendar", label: "Дата заявки", value: selected.date },
                ].map((item) => (
                  <div key={item.label} className="flex items-center gap-3 p-3 bg-gray-50 rounded-xl">
                    <Icon name={item.icon} size={16} className="text-sho-red flex-shrink-0" />
                    <div>
                      <div className="text-xs text-gray-400">{item.label}</div>
                      <div className="text-sm font-semibold text-sho-dark">{item.value}</div>
                    </div>
                  </div>
                ))}
                <div className="p-3 bg-gray-50 rounded-xl">
                  <div className="text-xs text-gray-400 mb-1">Мотивация</div>
                  <div className="text-sm text-gray-700 leading-relaxed">{selected.motivation}</div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default AdminPanel;
