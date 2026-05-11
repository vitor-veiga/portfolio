import { lazy, Suspense } from "react";
import GeometricBackground from "../ui/GeometricBackground";
import FadeIn from "../ui/FadeIn";

const GlobeCanvas = lazy(() => import("./GlobeCanvas"));

export default function PresentationArea() {
  return (
    <main
      id="apresentacao"
      className="flex-1 min-h-screen relative overflow-hidden flex flex-col md:flex-row items-center px-6 md:px-16 gap-8 py-16 md:py-0"
    >
      <GeometricBackground variant="presentation" />
      {/* Conteúdo */}
      <FadeIn className="relative z-10 max-w-xl md:shrink-0 w-full">
        <p className="text-secondary-400 text-sm uppercase tracking-widest font-semibold mb-3">
          Bem-vindo ao meu portfólio
        </p>
        <h1 className="text-3xl md:text-5xl font-extrabold text-secondary-900 leading-tight mb-4">
          Olá, eu sou <br />
          <span className="text-primary-700">Vitor Veiga!</span>
        </h1>
        <p className="text-secondary-600 text-lg leading-relaxed mb-8">
          Desenvolvedor web apaixonado por construir plataformas inteligentes
          para gestão municipal, unindo tecnologia, design e dados geoespaciais.
        </p>
        <div className="flex gap-4 mb-12">
          <a
            href="#contato"
            className="px-6 py-3 bg-primary-700 hover:bg-primary-600 text-white font-semibold rounded-lg transition-colors duration-200 shadow-lg shadow-black/40"
          >
            Entre em contato
          </a>
          <a
            href="#sobre"
            className="px-6 py-3 border border-secondary-300 hover:border-primary-700 text-secondary-700 hover:text-primary-700 font-semibold rounded-lg transition-colors duration-200"
          >
            Saiba mais
          </a>
        </div>

        {/* Stats */}
        <div className="flex gap-8">
          {[
            { value: "2+", label: "Anos de experiência" },
            { value: "10+", label: "Tecnologias" },
          ].map(({ value, label }) => (
            <div key={label} className="border-l-2 border-primary-700 pl-4">
              <p className="text-2xl font-bold text-secondary-900">{value}</p>
              <p className="text-xs text-secondary-500 mt-0.5">{label}</p>
            </div>
          ))}
        </div>
      </FadeIn>

      {/* Globo 3D — full height no desktop, altura fixa no mobile */}
      <div className="flex items-center justify-center w-full h-100 my-10 md:mt-0 md:flex-1 md:self-stretch md:h-auto">
        <Suspense fallback={null}>
          <div className="w-full h-full md:min-h-125">
            <GlobeCanvas />
          </div>
        </Suspense>
      </div>
    </main>
  );
}
