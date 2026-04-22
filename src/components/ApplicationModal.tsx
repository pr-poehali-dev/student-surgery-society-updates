import { useState } from "react";
import Icon from "@/components/ui/icon";
import { DIRECTIONS } from "@/data/siteData";
import type { Application } from "@/pages/Index";

interface ApplicationModalProps {
  onClose: () => void;
  onSubmit: (data: Omit<Application, "id" | "date">) => void;
}

const ApplicationModal = ({ onClose, onSubmit }: ApplicationModalProps) => {
  const [step, setStep] = useState(1);
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    course: "",
    direction: "",
    motivation: "",
  });

  const handleChange = (field: string, value: string) => {
    setForm((prev) => ({ ...prev, [field]: value }));
  };

  const handleSubmit = () => {
    onSubmit(form);
    setSubmitted(true);
  };

  const isStep1Valid = form.name && form.email && form.phone && form.course;
  const isStep2Valid = form.direction && form.motivation;

  if (submitted) {
    return (
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
        <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" onClick={onClose} />
        <div className="relative bg-white rounded-3xl w-full max-w-md p-10 shadow-2xl animate-scale-in text-center">
          <div className="w-20 h-20 rounded-full bg-green-100 flex items-center justify-center mx-auto mb-6">
            <Icon name="CheckCircle" size={40} className="text-green-500" />
          </div>
          <h3 className="font-oswald text-3xl font-bold text-sho-dark mb-3">Заявка отправлена!</h3>
          <p className="text-gray-600 mb-2">
            <strong>{form.name}</strong>, твоя заявка на направление <strong>{form.direction}</strong> принята.
          </p>
          <p className="text-gray-500 text-sm mb-8">
            Мы свяжемся с тобой в ближайшее время для уточнения деталей отбора.
          </p>
          <button
            onClick={onClose}
            className="w-full bg-sho-red text-white font-bold py-3 rounded-xl hover:bg-sho-red-dark transition-colors"
          >
            Отлично!
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" onClick={onClose} />
      <div className="relative bg-white rounded-3xl w-full max-w-lg shadow-2xl animate-scale-in overflow-hidden">
        <div className="bg-gradient-to-r from-sho-red to-sho-red-dark p-6 text-white">
          <button
            onClick={onClose}
            className="absolute top-4 right-4 w-10 h-10 rounded-full bg-white/20 hover:bg-white/30 flex items-center justify-center transition-colors"
          >
            <Icon name="X" size={20} />
          </button>
          <h2 className="font-oswald text-3xl font-bold mb-1">Подать заявку</h2>
          <p className="text-white/80 text-sm">Отбор в СХО КрасГМУ</p>
          <div className="flex items-center gap-2 mt-4">
            {[1, 2].map((s) => (
              <div key={s} className="flex items-center gap-2">
                <div
                  className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold transition-all ${
                    step >= s ? "bg-white text-sho-red" : "bg-white/20 text-white"
                  }`}
                >
                  {step > s ? <Icon name="Check" size={14} /> : s}
                </div>
                <span className={`text-xs ${step >= s ? "text-white" : "text-white/50"}`}>
                  {s === 1 ? "Данные" : "Направление"}
                </span>
                {s < 2 && <div className={`w-8 h-0.5 ${step > s ? "bg-white" : "bg-white/30"}`} />}
              </div>
            ))}
          </div>
        </div>

        <div className="p-6">
          {step === 1 && (
            <div className="space-y-4 animate-fade-in">
              <div>
                <label className="block text-sm font-semibold text-sho-dark mb-1.5">ФИО *</label>
                <input
                  type="text"
                  placeholder="Иванов Иван Иванович"
                  value={form.name}
                  onChange={(e) => handleChange("name", e.target.value)}
                  className="w-full border-2 border-gray-200 rounded-xl px-4 py-3 text-sm focus:border-sho-red outline-none transition-colors"
                />
              </div>
              <div>
                <label className="block text-sm font-semibold text-sho-dark mb-1.5">Email *</label>
                <input
                  type="email"
                  placeholder="example@krasgmu.ru"
                  value={form.email}
                  onChange={(e) => handleChange("email", e.target.value)}
                  className="w-full border-2 border-gray-200 rounded-xl px-4 py-3 text-sm focus:border-sho-red outline-none transition-colors"
                />
              </div>
              <div>
                <label className="block text-sm font-semibold text-sho-dark mb-1.5">Телефон *</label>
                <input
                  type="tel"
                  placeholder="+7 900 000 00 00"
                  value={form.phone}
                  onChange={(e) => handleChange("phone", e.target.value)}
                  className="w-full border-2 border-gray-200 rounded-xl px-4 py-3 text-sm focus:border-sho-red outline-none transition-colors"
                />
              </div>
              <div>
                <label className="block text-sm font-semibold text-sho-dark mb-1.5">Курс *</label>
                <select
                  value={form.course}
                  onChange={(e) => handleChange("course", e.target.value)}
                  className="w-full border-2 border-gray-200 rounded-xl px-4 py-3 text-sm focus:border-sho-red outline-none transition-colors bg-white"
                >
                  <option value="">Выбери курс</option>
                  {["1", "2", "3", "4", "5", "6"].map((c) => (
                    <option key={c} value={c}>{c} курс</option>
                  ))}
                </select>
              </div>
            </div>
          )}

          {step === 2 && (
            <div className="space-y-4 animate-fade-in">
              <div>
                <label className="block text-sm font-semibold text-sho-dark mb-1.5">Направление *</label>
                <div className="grid grid-cols-2 gap-2 max-h-48 overflow-y-auto pr-1">
                  {DIRECTIONS.map((dir) => (
                    <button
                      key={dir.id}
                      onClick={() => handleChange("direction", dir.short)}
                      className={`p-3 rounded-xl border-2 text-left transition-all ${
                        form.direction === dir.short
                          ? "border-sho-red bg-red-50 text-sho-red"
                          : "border-gray-200 hover:border-gray-300"
                      }`}
                    >
                      <div className="font-bold text-xs">{dir.short}</div>
                      <div className="text-gray-400 text-xs mt-0.5 leading-tight line-clamp-1">{dir.name.split(" ")[0]}</div>
                    </button>
                  ))}
                </div>
              </div>
              <div>
                <label className="block text-sm font-semibold text-sho-dark mb-1.5">Почему хочешь вступить? *</label>
                <textarea
                  placeholder="Расскажи о своей мотивации, интересах в хирургии, опыте..."
                  value={form.motivation}
                  onChange={(e) => handleChange("motivation", e.target.value)}
                  rows={4}
                  className="w-full border-2 border-gray-200 rounded-xl px-4 py-3 text-sm focus:border-sho-red outline-none transition-colors resize-none"
                />
              </div>
            </div>
          )}
        </div>

        <div className="px-6 pb-6 flex gap-3">
          {step === 2 && (
            <button
              onClick={() => setStep(1)}
              className="px-6 border-2 border-gray-200 text-gray-600 font-semibold py-3 rounded-xl hover:bg-gray-50 transition-colors"
            >
              ← Назад
            </button>
          )}
          {step === 1 ? (
            <button
              onClick={() => setStep(2)}
              disabled={!isStep1Valid}
              className="flex-1 bg-sho-red text-white font-bold py-3 rounded-xl hover:bg-sho-red-dark transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
            >
              Далее →
            </button>
          ) : (
            <button
              onClick={handleSubmit}
              disabled={!isStep2Valid}
              className="flex-1 bg-sho-red text-white font-bold py-3 rounded-xl hover:bg-sho-red-dark transition-all hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
            >
              <Icon name="Send" size={18} />
              Отправить заявку
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default ApplicationModal;
