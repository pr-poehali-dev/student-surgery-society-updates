import Icon from "@/components/ui/icon";
import { LEADERS, TIMELINE, CAPTAIN } from "@/data/siteData";

const HistorySection = () => {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-12">
          <div className="text-sho-red font-semibold text-sm uppercase tracking-widest mb-2">О нас</div>
          <h2 className="font-oswald text-4xl sm:text-5xl font-bold text-sho-dark red-line">
            ИСТОРИЯ СХО
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          <div>
            <div
              className="w-full h-64 sm:h-80 rounded-2xl bg-cover bg-center relative overflow-hidden"
              style={{ backgroundImage: `url('https://cdn.poehali.dev/projects/14acfb03-c5a7-4233-a415-5220916be8c9/files/2ed8b8f2-6432-42ff-a13c-e4f77d31a924.jpg')` }}
            >
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
              <div className="absolute bottom-4 left-4 right-4">
                <div className="text-white font-oswald text-xl font-bold">Чемпионы СФО 2024</div>
                <div className="text-white/80 text-sm">Олимпиада Сибирского федерального округа</div>
              </div>
            </div>

            <div className="mt-6 space-y-2">
              {TIMELINE.map((item) => (
                <div key={item.year} className="flex gap-4 items-start">
                  <div className="flex-shrink-0 w-14 font-oswald font-bold text-sho-red text-lg">{item.year}</div>
                  <div className="flex-1 pb-4 border-l-2 border-gray-200 pl-4">
                    <div className="font-semibold text-sho-dark text-sm">{item.event}</div>
                    <div className="text-gray-500 text-xs mt-1">{item.desc}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div>
            <h3 className="font-oswald text-2xl font-bold text-sho-dark mb-6">Руководство</h3>
            <div className="space-y-4 mb-8">
              {LEADERS.map((leader) => (
                <div
                  key={leader.name}
                  className="flex items-center gap-4 bg-white rounded-2xl p-5 border border-gray-100 card-hover"
                >
                  <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-sho-red to-sho-red-dark flex items-center justify-center flex-shrink-0">
                    <Icon name={leader.icon} size={24} className="text-white" fallback="User" />
                  </div>
                  <div>
                    <div className="font-bold text-sho-dark text-sm">{leader.name}</div>
                    <div className="text-sho-red text-xs font-semibold">{leader.role}</div>
                    <div className="text-gray-500 text-xs">{leader.degree}</div>
                  </div>
                </div>
              ))}
            </div>

            <h3 className="font-oswald text-2xl font-bold text-sho-dark mb-4">Студенческое руководство</h3>
            <div className="bg-gradient-to-r from-sho-red to-sho-red-dark rounded-2xl p-6 text-white">
              <div className="flex items-center gap-4">
                <div className="w-14 h-14 rounded-xl bg-white/20 flex items-center justify-center flex-shrink-0">
                  <Icon name="Star" size={26} className="text-white" />
                </div>
                <div>
                  <div className="font-oswald text-xl font-bold">{CAPTAIN.name}</div>
                  <div className="text-white/80 text-sm">{CAPTAIN.role} · {CAPTAIN.course}</div>
                </div>
              </div>
            </div>

            <div
              className="mt-6 w-full h-40 rounded-2xl bg-cover bg-center"
              style={{ backgroundImage: `url('https://cdn.poehali.dev/projects/14acfb03-c5a7-4233-a415-5220916be8c9/files/da530f99-916e-4921-bda0-7dfb4d34a788.jpg')` }}
            />
          </div>
        </div>

        <div>
          <h3 className="font-oswald text-2xl font-bold text-sho-dark mb-6">Состав команды — кураторы направлений</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
            {[
              { name: "Дьяконова Анна Александровна", role: "Зам. капитана, куратор ССХ", course: "5 курс" },
              { name: "Романов Кирилл Алексеевич", role: "Куратор нейрохирургии", course: "4 курс" },
              { name: "Кудрявцев Михаил Денисович", role: "Куратор травматологии", course: "5 курс" },
              { name: "Солодилов Анатолий Игоревич", role: "Куратор эндовидео", course: "5 курс" },
              { name: "Мезенцев Николай Алексеевич", role: "Куратор урологии", course: "3 курс" },
              { name: "Япаров Ильяс Нурыевич", role: "Куратор торакальной", course: "3 курс" },
              { name: "Пивикова Дарья Алексеевна", role: "Куратор гинекологии", course: "5 курс" },
              { name: "Шакирова Марьям Рашитовна", role: "Куратор пластической", course: "5 курс" },
              { name: "Иманкулов Дастан Зандаевич", role: "Куратор абдоминальной", course: "5 курс" },
              { name: "Большакова Екатерина Дмитриевна", role: "Куратор АИР", course: "4 курс" },
            ].map((member) => (
              <div
                key={member.name}
                className="bg-white border border-gray-100 rounded-xl p-4 card-hover"
              >
                <div className="w-10 h-10 rounded-full bg-red-50 flex items-center justify-center mb-3">
                  <Icon name="User" size={18} className="text-sho-red" />
                </div>
                <div className="font-semibold text-sho-dark text-sm leading-tight">{member.name}</div>
                <div className="text-sho-red text-xs mt-1">{member.role}</div>
                <div className="text-gray-400 text-xs">{member.course}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HistorySection;
