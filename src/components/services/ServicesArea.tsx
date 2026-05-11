import { Map, Code2, Cpu, Database, TrendingUp } from "lucide-react";
import GeometricBackground from "../ui/GeometricBackground";
import FadeIn from "../ui/FadeIn";

const services = [
  {
    icon: <Map className="w-7 h-7" />,
    title: "Plataformas WebGIS",
    description:
      "Desenvolvimento de sistemas de informação geográfica para a web, com mapas interativos, visualização de dados territoriais e suporte à tomada de decisão em gestão pública, urbana e ambiental.",
    tags: ["MapLibre", "Leaflet", "PostGIS", "Análise Espacial"],
  },
  {
    icon: <Code2 className="w-7 h-7" />,
    title: "Desenvolvimento Front-end",
    description:
      "Criação de interfaces modernas, responsivas e acessíveis com foco na experiência do usuário. Desde landing pages a aplicações web completas com alto nível de interatividade.",
    tags: ["React", "TypeScript", "TailwindCSS", "HTML5/CSS3"],
  },
  {
    icon: <Cpu className="w-7 h-7" />,
    title: "Back-end & APIs REST",
    description:
      "Construção de APIs robustas e seguras com autenticação JWT, integração de serviços externos e arquitetura voltada à escalabilidade e manutenibilidade.",
    tags: ["Python", "Flask", "REST APIs", "JWT / Supabase Auth"],
  },
  {
    icon: <Database className="w-7 h-7" />,
    title: "Banco de Dados Geoespacial",
    description:
      "Modelagem e consultas espaciais avançadas para armazenamento e análise de dados geográficos, com suporte a operações topológicas e integração com sistemas GIS.",
    tags: ["PostgreSQL", "PostGIS", "Supabase", "Consultas Espaciais"],
  },
  {
    icon: <TrendingUp className="w-7 h-7" />,
    title: "Modelagem Preditiva & Dados",
    description:
      "Aplicação de ciência de dados geográficos para modelagem preditiva em contextos ambientais e urbanos, com potencial uso em políticas públicas de saúde e planejamento territorial.",
    tags: ["Análise Espacial", "Dados Ambientais", "Modelagem", "Visualização"],
  },
];

export default function ServicesArea() {
  return (
    <section
      id="servicos"
      className="relative overflow-hidden min-h-screen px-6 md:px-16 py-24 flex flex-col justify-center"
    >
      <GeometricBackground variant="services" />
      {/* Cabeçalho */}
      <FadeIn>
        <div className="mb-14">
          <p className="text-secondary-400 text-sm uppercase tracking-widest font-semibold mb-2">
            Especialidades
          </p>
          <h2 className="text-4xl font-extrabold text-secondary-900">
            O que eu <span className="text-primary-700">faço</span>
          </h2>
          <div className="w-12 h-0.5 bg-primary-600 rounded-full mt-4" />
        </div>
      </FadeIn>

      {/* Grid de serviços */}
      <FadeIn delay={150}>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 max-w-5xl">
          {services.map(({ icon, title, description, tags }) => (
            <div
              key={title}
              className="group flex flex-col hover:bg-secondary-50/80 hover:border-secondary-300 gap-4 bg-white/80 backdrop-blur-sm border border-secondary-200 rounded-xl p-6 shadow-sm hover:shadow-md transition-all duration-300"
            >
              {/* Ícone */}
              <div className="text-primary-600 group-hover:text-primary-800 transition-colors duration-300">
                {icon}
              </div>

              {/* Título */}
              <h3 className="text-secondary-800 font-semibold text-base leading-snug">
                {title}
              </h3>

              {/* Descrição */}
              <p className="text-secondary-500 text-sm leading-relaxed flex-1">
                {description}
              </p>

              {/* Tags */}
              <div className="flex flex-wrap gap-1.5 pt-2 border-t border-secondary-100">
                {tags.map((tag) => (
                  <span
                    key={tag}
                    className="text-xs text-secondary-500 bg-secondary-50 px-2 py-0.5 rounded-md"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </FadeIn>
    </section>
  );
}
