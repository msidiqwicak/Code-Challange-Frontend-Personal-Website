import { useState } from "react";
import { listProyek } from "../data";

export default function Project() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === listProyek.length - 1 ? 0 : prevIndex + 1,
    );
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? listProyek.length - 1 : prevIndex - 1,
    );
  };

  const activeProject = listProyek[currentIndex];

  return (
    <div
      className="project hero min-h-screen bg-blue-950 mt-32 py-10 px-5 lg:px-15 text-white"
      id="project"
    >
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-3">My Featured Projects</h1>
          <p className="text-zinc-400 max-w-lg mx-auto">
            Explore my digital creations, ranging from company profiles to
            modern educational platforms
          </p>
        </div>

        <div className="relative overflow-hidden rounded-2xl bg-zinc-900 border border-zinc-800 shadow-2xl">
          <div className="relative h-64 md:h-96 lg:h-[480px]">
            {listProyek.map((proyek, index) => (
              <div
                key={proyek.id}
                className={`absolute inset-0 transition-all duration-700 ease-in-out transform ${
                  index === currentIndex
                    ? "opacity-100 scale-100"
                    : "opacity-0 scale-105 pointer-events-none"
                }`}
              >
                <img
                  src={proyek.gambar}
                  className="w-full h-full object-cover"
                  alt={proyek.nama}
                />
              </div>
            ))}
          </div>

          <button
            onClick={prevSlide}
            className="absolute left-4 top-1/2 -translate-y-1/2 bg-black/40 hover:bg-black/60 p-2 rounded-full backdrop-blur-sm transition-all border border-white/10"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M15 19l-7-7 7-7"
              />
            </svg>
          </button>
          <button
            onClick={nextSlide}
            className="absolute right-4 top-1/2 -translate-y-1/2 bg-black/40 hover:bg-black/60 p-2 rounded-full backdrop-blur-sm transition-all border border-white/10"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M9 5l7 7-7 7"
              />
            </svg>
          </button>
        </div>

        <div className="mt-8 flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div className="flex-1 transition-all duration-500">
            <h2 className="text-3xl font-bold mb-3 text-white tracking-tight">
              {activeProject.nama}
            </h2>

            <p className="text-zinc-400 mb-5 leading-relaxed max-w-2xl">
              {activeProject.desk}
            </p>

            <div className="flex flex-wrap gap-2">
              {activeProject.tools.map((tool, index) => (
                <span
                  key={index}
                  className="px-3 py-1 text-xs font-medium bg-zinc-800 border border-zinc-700 rounded-full text-zinc-300 shadow-sm"
                >
                  {tool}
                </span>
              ))}
            </div>
          </div>

          <div className="flex flex-col items-center gap-3">
            <a
              href={activeProject.link || "#"}
              className="w-full md:w-auto px-8 py-3 bg-blue-900 hover:bg-zinc-700 rounded-xl font-bold transition-all text-center shadow-lg shadow-blue-900/20"
            >
              See Website
            </a>
            <span className="text-xs font-mono text-zinc-500 uppercase tracking-widest">
              Project {currentIndex + 1} of {listProyek.length}
            </span>
          </div>
        </div>

        <div className="flex justify-center gap-2 mt-12">
          {listProyek.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`h-1.5 transition-all duration-300 rounded-full ${
                index === currentIndex ? "w-8 bg-blue-500" : "w-2 bg-zinc-700"
              }`}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
