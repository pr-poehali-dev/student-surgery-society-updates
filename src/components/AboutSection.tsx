const AboutSection = () => {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl">
          <div className="text-sho-red font-semibold text-sm uppercase tracking-widest mb-2">О нас</div>
          <h2 className="font-oswald text-3xl sm:text-4xl font-bold text-sho-dark mb-6 red-line">
            КТО МЫ ТАКИЕ?
          </h2>
          <p className="text-gray-600 text-lg leading-relaxed mb-4">
            Студенческое хирургическое общество КрасГМУ — это команда увлечённых студентов-медиков, которые хотят стать настоящими хирургами. Мы учимся не только в аудиториях — мы тренируемся в симуляционных лабораториях, участвуем в олимпиадах по всей стране и готовимся под руководством опытных наставников.
          </p>
          <p className="text-gray-600 text-lg leading-relaxed">
            Здесь каждый найдёт своё направление: от абдоминальной до нейрохирургии. Мы принимаем студентов с 3 курса через конкурсный отбор.
          </p>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
