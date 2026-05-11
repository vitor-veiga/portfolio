import { useState } from "react";
import {
  MapPin,
  Calendar,
  CheckCircle2,
  Globe,
  Database,
  Server,
  Lock,
  Layers,
  ChevronLeft,
  ChevronRight,
  Award,
  Users,
  TrendingUp,
  ExternalLink,
} from "lucide-react";
import GeometricBackground from "../ui/GeometricBackground";
import FadeIn from "../ui/FadeIn";

import img1 from "../../assets/guaraquecaba/map.jpg";
import img2 from "../../assets/guaraquecaba/raster.jpg";
import img3 from "../../assets/guaraquecaba/admin.jpg";
import img4 from "../../assets/guaraquecaba/login.jpg";
import img5 from "../../assets/guaraquecaba/settings.jpg";
import img6 from "../../assets/guaraquecaba/dashboard.jpg";
import img7 from "../../assets/guaraquecaba/3d.jpg";

const techStack = [
  {
    icon: <Globe className="w-5 h-5" />,
    category: "Front-end",
    items: ["React", "TypeScript", "TailwindCSS", "MapLibre GL JS"],
  },
  {
    icon: <Server className="w-5 h-5" />,
    category: "Back-end",
    items: ["Python", "Flask", "REST APIs"],
  },
  {
    icon: <Database className="w-5 h-5" />,
    category: "Banco de Dados",
    items: ["PostgreSQL", "PostGIS", "Consultas Espaciais"],
  },
  {
    icon: <Lock className="w-5 h-5" />,
    category: "Segurança",
    items: ["JWT Auth", "RBAC", "HTTPS"],
  },
  {
    icon: <Layers className="w-5 h-5" />,
    category: "GIS & Dados",
    items: ["Análise Espacial", "Camadas vetoriais", "WMS/WFS"],
  },
];

const highlights = [
  {
    icon: <CheckCircle2 className="w-6 h-6" />,
    title: "Aprovado pela Prefeitura",
    description:
      "Apresentado e aprovado diretamente pela Prefeitura Municipal de Guaraqueçaba com avaliação positiva de usabilidade.",
  },
  {
    icon: <Users className="w-6 h-6" />,
    title: "Prova de Conceito Operação Rondon",
    description:
      "Adotado como prova de conceito em reunião com todas as universidades participantes da Operação Rondon PR.",
  },
  {
    icon: <Award className="w-6 h-6" />,
    title: "Reconhecimento Acadêmico",
    description:
      "Projeto apresentado no Festival Inova Iguassu 2025 (Itaipu Parquetec) e no 23° CONEX – UEPG.",
  },
  {
    icon: <TrendingUp className="w-6 h-6" />,
    title: "Impacto Real na Gestão Pública",
    description:
      "Plataforma voltada ao suporte à tomada de decisão em planejamento urbano e territorial de municípios de baixo IDH.",
  },
];

// Coloque as imagens em src/assets/guaraquecaba/ e atualize os caminhos abaixo.
// Exemplo: import img1 from "../../assets/guaraquecaba/screenshot-1.png";
const images: { src: string; caption: string }[] = [
  { src: img1, caption: "Mapa interativo com camadas territoriais" },
  { src: img7, caption: "Visualização 3D" },
  { src: img2, caption: "Mapa interativo com ortofoto" },
  { src: img6, caption: "Dashboard do sistema" },
  { src: img3, caption: "Interface de administração e gestão" },
  { src: img4, caption: "Tela de login do sistema" },
  { src: img5, caption: "Configurações do usuário" },
];

const hasImages = images.length > 0;

export default function FeaturedProjectArea() {
  const [activeImage, setActiveImage] = useState(0);

  const prev = () =>
    setActiveImage((i) => (i - 1 + images.length) % images.length);
  const next = () => setActiveImage((i) => (i + 1) % images.length);

  return (
    <section
      id="maior-projeto"
      className="relative overflow-hidden min-h-screen px-6 md:px-16 py-24 flex flex-col justify-center"
    >
      <GeometricBackground variant="featured" />
      {/* Cabeçalho */}
      <FadeIn>
        <div className="mb-14">
          <p className="text-secondary-400 text-sm uppercase tracking-widest font-semibold mb-2">
            Projeto de destaque
          </p>
          <h2 className="text-4xl font-extrabold text-secondary-900">
            Meu maior <span className="text-primary-700">projeto</span>
          </h2>
          <div className="w-12 h-0.5 bg-primary-600 rounded-full mt-4" />
        </div>
      </FadeIn>

      <FadeIn delay={150}>
        <div className="flex flex-col gap-12 max-w-5xl">
          {/* Hero card */}
          <div className="relative bg-white/80 backdrop-blur-sm border border-secondary-200 rounded-2xl overflow-hidden shadow-sm">
            {/* Faixa colorida topo */}
            <div className="h-1.5 w-full bg-linear-to-r from-primary-700 via-primary-600 to-primary-800" />

            <div className="p-4 md:p-8 flex flex-col gap-6">
              {/* Título e meta */}
              <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4">
                <div className="flex flex-col gap-2">
                  <div className="flex items-center gap-2">
                    <span className="text-xs font-semibold uppercase tracking-widest text-primary-700 bg-primary-50 px-3 py-1 rounded-full border border-primary-600/20">
                      WebGIS · Gestão Pública
                    </span>
                    <span className="flex items-center gap-1.5 text-xs text-emerald-600 bg-emerald-50 border border-emerald-200 px-3 py-1 rounded-full font-medium">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                      Em andamento
                    </span>
                  </div>
                  <h3 className="text-2xl font-extrabold text-secondary-900 leading-tight">
                    WebGIS — Plano Diretor Participativo
                    <br />
                    <span className="text-primary-700">Guaraqueçaba, PR</span>
                  </h3>
                </div>

                <div className="flex flex-col gap-1.5 shrink-0 text-sm text-secondary-500">
                  <div className="flex items-center gap-2">
                    <Calendar className="w-4 h-4" />
                    dez/2024 – atualmente
                  </div>
                  <div className="flex items-center gap-2">
                    <MapPin className="w-4 h-4" />
                    Guaraqueçaba, PR — Brasil
                  </div>
                </div>
              </div>

              {/* Descrição */}
              <div className="flex flex-col gap-3 text-secondary-600 leading-relaxed text-sm">
                <p>
                  Plataforma WebGIS desenvolvida no âmbito do projeto de
                  assessoria para elaboração de{" "}
                  <span className="text-secondary-800 font-semibold">
                    Planos Diretores Participativos de municípios com IDH médio
                    e baixo no Paraná
                  </span>
                  , coordenado pelo Escritório / Laboratório de Planejamento
                  Urbano da UEPG. O sistema foi concebido para centralizar dados
                  territoriais, facilitar a participação popular e apoiar
                  tecnicamente a prefeitura no planejamento urbano e ambiental
                  do município.
                </p>
                <p>
                  A plataforma integra visualização de camadas geoespaciais,
                  autenticação de usuários, gestão de dados territoriais e
                  painéis para análise. Foi apresentada e{" "}
                  <span className="text-secondary-800 font-semibold">
                    aprovada diretamente pela Prefeitura Municipal de
                    Guaraqueçaba
                  </span>{" "}
                  com avaliação positiva quanto à usabilidade e aplicabilidade
                  para a gestão territorial.
                </p>
                <p>
                  Posteriormente, o projeto foi adotado como{" "}
                  <span className="text-secondary-800 font-semibold">
                    prova de conceito na Operação Rondon PR
                  </span>
                  , sendo aprovado em reunião com todas as universidades
                  participantes como base para o sistema integrado de coleta e
                  visualização de dados das ações de extensão no estado.
                </p>
              </div>

              {/* Links */}
              <div className="flex items-center gap-3 pt-2 border-t border-secondary-100">
                <span className="flex items-center gap-1.5 text-xs text-secondary-400 italic">
                  <Lock className="w-3.5 h-3.5" />
                  Repositório privado — projeto institucional
                </span>
              </div>
            </div>
          </div>

          {/* Galeria de imagens */}
          {hasImages ? (
            <div className="flex flex-col gap-4">
              <h4 className="text-secondary-800 font-semibold text-base">
                Screenshots da plataforma
              </h4>
              <div
                className="relative rounded-xl overflow-hidden bg-secondary-100 border border-secondary-200"
                style={{ aspectRatio: "16 / 10" }}
              >
                <img
                  src={images[activeImage].src}
                  alt={images[activeImage].caption}
                  className="w-full h-full object-cover"
                />
                {images.length > 1 && (
                  <>
                    <button
                      onClick={prev}
                      aria-label="Imagem anterior"
                      className="absolute left-3 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white text-secondary-700 rounded-full p-2 shadow transition"
                    >
                      <ChevronLeft className="w-5 h-5" />
                    </button>
                    <button
                      onClick={next}
                      aria-label="Próxima imagem"
                      className="absolute right-3 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white text-secondary-700 rounded-full p-2 shadow transition"
                    >
                      <ChevronRight className="w-5 h-5" />
                    </button>
                    <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-1.5">
                      {images.map((_, i) => (
                        <button
                          key={i}
                          onClick={() => setActiveImage(i)}
                          aria-label={`Ver imagem ${i + 1}: ${images[i].caption}`}
                          className={`w-2 h-2 rounded-full transition ${
                            i === activeImage
                              ? "bg-white"
                              : "bg-white/40 hover:bg-white/70"
                          }`}
                        />
                      ))}
                    </div>
                  </>
                )}
              </div>
              <p className="text-xs text-secondary-400 text-center italic">
                {images[activeImage].caption}
              </p>
            </div>
          ) : (
            <div className="flex flex-col gap-4">
              <h4 className="text-secondary-800 font-semibold text-base">
                Screenshots da plataforma
              </h4>
              <div className="rounded-xl border-2 border-dashed border-secondary-200 bg-secondary-50 flex flex-col items-center justify-center gap-3 py-16 text-secondary-400">
                <ExternalLink className="w-8 h-8 opacity-40" />
                <p className="text-sm">
                  Adicione imagens em{" "}
                  <code className="text-xs bg-secondary-100 px-1.5 py-0.5 rounded">
                    src/assets/guaraquecaba/
                  </code>{" "}
                  e importe-as no componente
                </p>
              </div>
            </div>
          )}

          {/* Destaques / impacto */}
          <div className="flex flex-col gap-6">
            <h4 className="text-secondary-800 font-semibold text-base">
              Impacto & conquistas
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {highlights.map(({ icon, title, description }) => (
                <div
                  key={title}
                  className="flex gap-4 items-start bg-white hover:bg-secondary-50/80 hover:border-secondary-300 border border-secondary-200 rounded-xl p-5 shadow-sm transition-all duration-200"
                >
                  <div className="text-primary-700 shrink-0 mt-0.5">{icon}</div>
                  <div>
                    <h5 className="text-secondary-800 font-semibold text-sm mb-1">
                      {title}
                    </h5>
                    <p className="text-secondary-500 text-xs leading-relaxed">
                      {description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Stack tecnológica */}
          <div className="flex flex-col gap-6">
            <h4 className="text-secondary-800 font-semibold text-base">
              Stack tecnológica
            </h4>
            <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-5">
              {techStack.map(({ icon, category, items }) => (
                <div
                  key={category}
                  className="flex flex-col gap-3 bg-white/80 backdrop-blur-sm border border-secondary-200 hover:bg-secondary-50/80 hover:border-secondary-300 rounded-xl p-4 shadow-sm transition-all duration-200f"
                >
                  <div className="flex items-center gap-2 text-primary-700">
                    {icon}
                    <span className="text-xs font-semibold text-secondary-700 uppercase tracking-wide">
                      {category}
                    </span>
                  </div>
                  <ul className="flex flex-col gap-1">
                    {items.map((item) => (
                      <li
                        key={item}
                        className="text-xs text-secondary-500 flex items-center gap-1.5"
                      >
                        <span className="w-1 h-1 rounded-full bg-primary-600 shrink-0" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div>
      </FadeIn>
    </section>
  );
}
