import { TIMELINE } from "@/data/siteData";

const PAST_MEMBERS = [
  { name: "Степанов Артём Викторович", years: "2018–2022", role: "Капитан СХО", achievement: "Чемпион СФО 2020" },
  { name: "Громова Екатерина Сергеевна", years: "2019–2023", role: "Куратор ССХ", achievement: "Призёр ВНОС 2022" },
  { name: "Николаев Павел Андреевич", years: "2017–2021", role: "Куратор нейрохирургии", achievement: "Лауреат конференции СФО 2021" },
  { name: "Лебедева Мария Ивановна", years: "2020–2024", role: "Куратор абдоминальной", achievement: "Победитель олимпиады СГМУ 2023" },
  { name: "Харитонов Денис Олегович", years: "2016–2020", role: "Куратор травматологии", achievement: "Чемпион ВНОС 2019" },
  { name: "Соколова Анна Николаевна", years: "2021–2025", role: "Куратор гинекологии", achievement: "Лучший участник СФО 2024" },
];

const ACHIEVEMENTS = [
  { year: "2026", title: "Чемпионы СФО", desc: "1 место на олимпиаде Сибирского федерального округа" },
  { year: "2024", title: "Победа СФО", desc: "1 место на олимпиаде Сибирского федерального округа" },
  { year: "2023", title: "Призёры ВНОС", desc: "2 место на Всероссийской нейрохирургической олимпиаде студентов" },
  { year: "2022", title: "Победители СГМУ", desc: "1 место на олимпиаде Сибирского государственного медуниверситета" },
  { year: "2020", title: "Чемпионы СФО", desc: "1 место среди вузов Сибирского федерального округа" },
  { year: "2019", title: "Победа ВНОС", desc: "1 место на Всероссийской олимпиаде студентов-хирургов" },
];

const HistorySection = () => {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-12">
          <div className="text-sho-red font-semibold text-sm uppercase tracking-widest mb-2">Путь СХО</div>
          <h2 className="font-oswald text-4xl sm:text-5xl font-bold text-sho-dark red-line">
            ИСТОРИЯ
          </h2>
        </div>

        {/* История в датах */}
        <div className="mb-16">
          <h3 className="font-oswald text-2xl font-bold text-sho-dark mb-6">История в датах</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {TIMELINE.map((item) => (
              <div key={item.year} className="bg-white rounded-xl p-5 border border-gray-100">
                <div className="font-oswald text-2xl font-bold text-sho-red mb-1">{item.year}</div>
                <div className="font-semibold text-sho-dark text-sm">{item.event}</div>
                <div className="text-gray-500 text-xs mt-1">{item.desc}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Заслуги */}
        <div className="mb-16">
          <h3 className="font-oswald text-2xl font-bold text-sho-dark mb-6">Наши победы</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {ACHIEVEMENTS.map((item) => (
              <div key={item.year + item.title} className="bg-white rounded-xl p-5 border border-gray-100 flex gap-4 items-start">
                <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-sho-red flex items-center justify-center">
                  <span className="text-white font-oswald font-bold text-xs leading-tight text-center">{item.year}</span>
                </div>
                <div>
                  <div className="font-bold text-sho-dark text-sm">{item.title}</div>
                  <div className="text-gray-500 text-xs mt-1">{item.desc}</div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Прошлые участники */}
        <div>
          <h3 className="font-oswald text-2xl font-bold text-sho-dark mb-6">Выпускники СХО</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {PAST_MEMBERS.map((member) => (
              <div key={member.name} className="bg-white rounded-xl p-5 border border-gray-100 flex gap-4 items-start">
                <div className="w-12 h-12 rounded-full bg-gray-100 flex items-center justify-center flex-shrink-0">
                  <span className="text-gray-400 text-lg font-bold">{member.name.charAt(0)}</span>
                </div>
                <div>
                  <div className="font-bold text-sho-dark text-sm leading-tight">{member.name}</div>
                  <div className="text-sho-red text-xs font-semibold mt-0.5">{member.role}</div>
                  <div className="text-gray-400 text-xs">{member.years}</div>
                  <div className="text-gray-600 text-xs mt-1 italic">{member.achievement}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HistorySection;
