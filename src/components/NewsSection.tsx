import { NEWS } from "@/data/siteData";

const TAG_COLORS: Record<string, string> = {
  "Достижения": "bg-green-100 text-green-700",
  "Отбор": "bg-blue-100 text-blue-700",
  "Мероприятия": "bg-purple-100 text-purple-700",
  "Обучение": "bg-orange-100 text-orange-700",
};

const NewsSection = () => {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-12">
          <div className="text-sho-red font-semibold text-sm uppercase tracking-widest mb-2">Актуальное</div>
          <h2 className="font-oswald text-4xl sm:text-5xl font-bold text-sho-dark red-line">
            НОВОСТИ
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {NEWS.map((item, i) => (
            <article
              key={item.id}
              className={`bg-white rounded-2xl p-6 card-hover border border-gray-100 ${i === 0 ? "md:col-span-2 flex flex-col sm:flex-row gap-6" : ""}`}
            >
              {i === 0 && (
                <div className="w-full sm:w-48 h-32 sm:h-auto bg-gradient-to-br from-sho-red to-sho-red-dark rounded-xl flex items-center justify-center flex-shrink-0">
                  <span className="text-5xl">🏆</span>
                </div>
              )}
              <div className="flex flex-col justify-between">
                <div>
                  <div className="flex items-center gap-3 mb-3">
                    <span className={`text-xs font-semibold px-3 py-1 rounded-full ${TAG_COLORS[item.tag] || "bg-gray-100 text-gray-600"}`}>
                      {item.tag}
                    </span>
                    <span className="text-xs text-gray-400">{item.date}</span>
                  </div>
                  <h3 className={`font-oswald font-bold text-sho-dark mb-2 ${i === 0 ? "text-2xl sm:text-3xl" : "text-xl"}`}>
                    {item.title}
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed">{item.text}</p>
                </div>
                <button className="mt-4 text-sho-red text-sm font-semibold flex items-center gap-1 hover:gap-2 transition-all w-fit">
                  Читать далее →
                </button>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default NewsSection;
