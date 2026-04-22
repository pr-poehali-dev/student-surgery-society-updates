import { useState } from "react";
import Icon from "@/components/ui/icon";
import { PRACTICAL_VIDEOS } from "@/data/siteData";

const VideosSection = () => {
  const [selectedVideo, setSelectedVideo] = useState<(typeof PRACTICAL_VIDEOS)[0] | null>(null);

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-12">
          <div className="text-sho-red font-semibold text-sm uppercase tracking-widest mb-2">Обучение</div>
          <h2 className="font-oswald text-4xl sm:text-5xl font-bold text-sho-dark red-line">
            ПРАКТИЧЕСКИЕ НАВЫКИ
          </h2>
          <p className="text-gray-500 mt-4 max-w-xl">
            Видеоуроки с комментариями кураторов — смотри и готовься к отбору.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {PRACTICAL_VIDEOS.map((video) => (
            <div
              key={video.id}
              className="group bg-white border-2 border-gray-100 rounded-2xl overflow-hidden card-hover cursor-pointer"
              onClick={() => setSelectedVideo(video)}
            >
              <div className="relative h-40 bg-gradient-to-br from-sho-red-dark to-sho-dark flex items-center justify-center overflow-hidden">
                <span className="text-7xl opacity-30 group-hover:opacity-50 transition-opacity group-hover:scale-110 transform transition-transform duration-300">
                  {video.thumbnail}
                </span>
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-14 h-14 rounded-full bg-white/20 backdrop-blur-sm border-2 border-white/40 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <Icon name="Play" size={22} className="text-white ml-1" />
                  </div>
                </div>
                <div className="absolute top-3 right-3 bg-black/60 text-white text-xs px-2 py-1 rounded-lg font-mono">
                  {video.duration}
                </div>
                <div className="absolute top-3 left-3 bg-sho-red text-white text-xs px-2 py-1 rounded-lg font-semibold">
                  {video.direction}
                </div>
              </div>
              <div className="p-5">
                <h3 className="font-oswald font-bold text-sho-dark text-lg mb-2 group-hover:text-sho-red transition-colors">
                  {video.title}
                </h3>
                <p className="text-gray-500 text-sm leading-relaxed line-clamp-2">{video.description}</p>
                <div className="mt-4 flex items-center gap-2 text-sho-red text-sm font-semibold">
                  <Icon name="Play" size={14} />
                  Смотреть
                </div>
              </div>
            </div>
          ))}
        </div>

        {selectedVideo && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
            <div className="absolute inset-0 bg-black/70 backdrop-blur-sm" onClick={() => setSelectedVideo(null)} />
            <div className="relative bg-white rounded-3xl w-full max-w-lg p-8 shadow-2xl animate-scale-in text-center">
              <button
                onClick={() => setSelectedVideo(null)}
                className="absolute top-4 right-4 w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center hover:bg-gray-200 transition-colors"
              >
                <Icon name="X" size={16} />
              </button>
              <span className="text-8xl mb-6 block">{selectedVideo.thumbnail}</span>
              <div className="inline-block bg-sho-red text-white text-xs px-3 py-1 rounded-full font-semibold mb-3">
                {selectedVideo.direction} · {selectedVideo.duration}
              </div>
              <h3 className="font-oswald text-2xl font-bold text-sho-dark mb-3">{selectedVideo.title}</h3>
              <p className="text-gray-600 text-sm leading-relaxed mb-6">{selectedVideo.description}</p>
              <div className="bg-amber-50 border border-amber-200 rounded-xl p-4 text-left">
                <div className="flex items-start gap-2">
                  <Icon name="Info" size={16} className="text-amber-600 mt-0.5 flex-shrink-0" />
                  <p className="text-xs text-amber-700">
                    Видеоматериалы будут добавлены кураторами направлений. Свяжитесь с куратором или подайте заявку, чтобы получить доступ к обучающим материалам.
                  </p>
                </div>
              </div>
              <button
                onClick={() => setSelectedVideo(null)}
                className="mt-6 w-full bg-sho-red text-white font-bold py-3 rounded-xl hover:bg-sho-red-dark transition-colors"
              >
                Закрыть
              </button>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default VideosSection;
