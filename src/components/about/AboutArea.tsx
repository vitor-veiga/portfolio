import { Code2, Paintbrush, Zap, Download } from "lucide-react";
import GeometricBackground from "../ui/GeometricBackground";
import FadeIn from "../ui/FadeIn";

const skills = [
  {
    category: "Frontend",
    items: ["React", "TypeScript", "Tailwind CSS"],
  },
  { category: "Backend", items: ["Python", "Flask", "REST APIs"] },
  { category: "Ferramentas", items: ["Git", "Docker", "Vite", "PostgreSQL"] },
];

const highlights = [
  {
    icon: <Code2 className="w-6 h-6" />,
    title: "Desenvolvimento Web",
    description:
      "Criação de aplicações modernas com foco em performance, acessibilidade e experiência do usuário.",
  },
  {
    icon: <Paintbrush className="w-6 h-6" />,
    title: "Design de Interfaces",
    description:
      "Construção de UIs responsivas, limpas e intuitivas que conectam o usuário ao produto.",
  },
  {
    icon: <Zap className="w-6 h-6" />,
    title: "Aprendizado Contínuo",
    description:
      "Sempre explorando novas tecnologias e boas práticas para entregar soluções cada vez melhores.",
  },
];

export default function AboutArea() {
  return (
    <section
      id="sobre"
      className="relative overflow-hidden min-h-screen px-6 md:px-16 py-24 flex flex-col justify-center"
    >
      <GeometricBackground variant="about" />
      {/* Cabeçalho da seção */}
      <FadeIn>
        <div>
          <div className="mb-14">
            <p className="text-secondary-400 text-sm uppercase tracking-widest font-semibold mb-2">
              Conheça-me melhor
            </p>
            <h2 className="text-4xl font-extrabold text-secondary-900">
              Sobre <span className="text-primary-700">mim</span>
            </h2>
            <div className="w-12 h-0.5 bg-primary-600 rounded-full mt-4" />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16 max-w-5xl">
            {/* Coluna esquerda — bio + destaques */}
            <div className="flex flex-col gap-10">
              <div className="flex flex-col gap-4 text-secondary-600 leading-relaxed">
                <p>
                  Sou um desenvolvedor web apaixonado por construir produtos
                  digitais que fazem diferença. Atualmente, estou no meu{" "}
                  <span className="text-secondary-900 font-medium">
                    terceiro ano de graduação em Engenharia de Computação pela
                    UEPG - Universidade Estadual de Ponta Grossa
                  </span>
                  , tenho trabalhado em projetos que vão desde landing pages até
                  sistemas WebGIS complexos.
                </p>
                <p>
                  Acredito que bom código vai além de funcionar — ele precisa
                  ser legível, sustentável e pensado para quem vai usá-lo. Fora
                  do trabalho, gosto de explorar novas tecnologias e contribuir
                  para projetos open source.
                </p>
              </div>

              {/* Destaques */}
              <div className="flex flex-col gap-5">
                {highlights.map(({ icon, title, description }) => (
                  <div key={title} className="flex gap-4 items-start">
                    <div className="mt-0.5 text-primary-600 shrink-0">
                      {icon}
                    </div>
                    <div>
                      <h4 className="text-secondary-800 text-sm font-semibold mb-0.5">
                        {title}
                      </h4>
                      <p className="text-secondary-500 text-sm leading-relaxed">
                        {description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Coluna direita — habilidades */}
            <div className="flex flex-col gap-8">
              {skills.map(({ category, items }) => (
                <div key={category}>
                  <h4 className="text-xs uppercase tracking-widest text-secondary-400 font-semibold mb-3">
                    {category}
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {items.map((skill) => (
                      <span
                        key={skill}
                        className="text-sm text-secondary-700 bg-white/80 backdrop-blur-sm border border-secondary-200 px-3 py-1.5 rounded-lg"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              ))}

              {/* Download CV */}
              <a
                href="/curriculo.pdf"
                target="_blank"
                download
                className="mt-4 inline-flex items-center gap-2 self-start px-5 py-2.5 bg-primary-700 hover:bg-primary-600 text-white text-sm font-semibold rounded-lg transition-colors duration-200"
              >
                <Download className="w-4 h-4" />
                Download CV
              </a>
            </div>
          </div>
        </div>
      </FadeIn>
    </section>
  );
}
