const S = "#162d4a"; // primary-700

type Variant =
  | "presentation"
  | "about"
  | "services"
  | "projects"
  | "featured"
  | "resume"
  | "contact";

interface Props {
  variant: Variant;
}

function PresentationShapes() {
  return (
    <>
      {/* Círculo grande — canto superior direito */}
      <circle
        cx="1080"
        cy="-30"
        r="370"
        fill="none"
        stroke={S}
        strokeWidth="1"
        opacity="0.07"
      />
      <circle
        cx="1080"
        cy="-30"
        r="210"
        fill="none"
        stroke={S}
        strokeWidth="1"
        opacity="0.05"
      />
      {/* Quadrado rotacionado — canto inferior esquerdo */}
      <rect
        x="40"
        y="680"
        width="110"
        height="110"
        fill="none"
        stroke={S}
        strokeWidth="1"
        opacity="0.08"
        transform="rotate(15 95 735)"
      />
      {/* Linhas diagonais paralelas — canto inferior direito */}
      <line
        x1="900"
        y1="900"
        x2="1200"
        y2="600"
        stroke={S}
        strokeWidth="1"
        opacity="0.06"
      />
      <line
        x1="945"
        y1="900"
        x2="1200"
        y2="645"
        stroke={S}
        strokeWidth="1"
        opacity="0.06"
      />
      <line
        x1="990"
        y1="900"
        x2="1200"
        y2="690"
        stroke={S}
        strokeWidth="1"
        opacity="0.06"
      />
      {/* Cruz — lateral esquerda */}
      <line
        x1="80"
        y1="415"
        x2="80"
        y2="455"
        stroke={S}
        strokeWidth="1.5"
        opacity="0.11"
      />
      <line
        x1="60"
        y1="435"
        x2="100"
        y2="435"
        stroke={S}
        strokeWidth="1.5"
        opacity="0.11"
      />
      {/* Pontos espalhados — topo centro */}
      <circle cx="560" cy="80" r="3" fill={S} opacity="0.07" />
      <circle cx="595" cy="105" r="2" fill={S} opacity="0.05" />
      <circle cx="530" cy="108" r="2" fill={S} opacity="0.05" />
    </>
  );
}

function AboutShapes() {
  return (
    <>
      {/* Retângulo rotacionado — canto superior esquerdo */}
      <rect
        x="-80"
        y="-80"
        width="340"
        height="340"
        fill="none"
        stroke={S}
        strokeWidth="1"
        opacity="0.06"
        transform="rotate(15 90 90)"
      />
      {/* Círculos concêntricos — canto inferior direito */}
      <circle
        cx="1150"
        cy="870"
        r="280"
        fill="none"
        stroke={S}
        strokeWidth="1"
        opacity="0.07"
      />
      <circle
        cx="1150"
        cy="870"
        r="160"
        fill="none"
        stroke={S}
        strokeWidth="1"
        opacity="0.05"
      />
      {/* Losango — lateral direita, centro */}
      <rect
        x="1060"
        y="355"
        width="70"
        height="70"
        fill="none"
        stroke={S}
        strokeWidth="1"
        opacity="0.09"
        transform="rotate(45 1095 390)"
      />
      {/* Grade de pontos — inferior esquerdo */}
      <circle cx="60" cy="640" r="2.5" fill={S} opacity="0.08" />
      <circle cx="90" cy="640" r="2.5" fill={S} opacity="0.08" />
      <circle cx="120" cy="640" r="2.5" fill={S} opacity="0.08" />
      <circle cx="60" cy="668" r="2.5" fill={S} opacity="0.06" />
      <circle cx="90" cy="668" r="2.5" fill={S} opacity="0.06" />
      <circle cx="120" cy="668" r="2.5" fill={S} opacity="0.06" />
      <circle cx="60" cy="696" r="2.5" fill={S} opacity="0.05" />
      <circle cx="90" cy="696" r="2.5" fill={S} opacity="0.05" />
      <circle cx="120" cy="696" r="2.5" fill={S} opacity="0.05" />
    </>
  );
}

function ServicesShapes() {
  return (
    <>
      {/* Triângulo — canto superior direito */}
      <polygon
        points="990,40 1180,360 800,360"
        fill="none"
        stroke={S}
        strokeWidth="1"
        opacity="0.06"
      />
      {/* Linhas horizontais paralelas — lateral esquerda */}
      <line
        x1="40"
        y1="345"
        x2="210"
        y2="345"
        stroke={S}
        strokeWidth="1"
        opacity="0.09"
      />
      <line
        x1="40"
        y1="372"
        x2="210"
        y2="372"
        stroke={S}
        strokeWidth="1"
        opacity="0.07"
      />
      <line
        x1="40"
        y1="399"
        x2="210"
        y2="399"
        stroke={S}
        strokeWidth="1"
        opacity="0.06"
      />
      <line
        x1="40"
        y1="426"
        x2="210"
        y2="426"
        stroke={S}
        strokeWidth="1"
        opacity="0.05"
      />
      {/* Quadrado rotacionado — topo esquerdo */}
      <rect
        x="80"
        y="80"
        width="80"
        height="80"
        fill="none"
        stroke={S}
        strokeWidth="1"
        opacity="0.08"
        transform="rotate(30 120 120)"
      />
      {/* Grade de pontos — inferior direito */}
      <circle cx="1050" cy="745" r="2.5" fill={S} opacity="0.08" />
      <circle cx="1080" cy="745" r="2.5" fill={S} opacity="0.08" />
      <circle cx="1110" cy="745" r="2.5" fill={S} opacity="0.08" />
      <circle cx="1050" cy="773" r="2.5" fill={S} opacity="0.07" />
      <circle cx="1080" cy="773" r="2.5" fill={S} opacity="0.07" />
      <circle cx="1110" cy="773" r="2.5" fill={S} opacity="0.07" />
      <circle cx="1050" cy="801" r="2.5" fill={S} opacity="0.05" />
      <circle cx="1080" cy="801" r="2.5" fill={S} opacity="0.05" />
      <circle cx="1110" cy="801" r="2.5" fill={S} opacity="0.05" />
      {/* Arco — inferior centro */}
      <path
        d="M 480 960 A 220 220 0 0 1 920 960"
        fill="none"
        stroke={S}
        strokeWidth="1"
        opacity="0.06"
      />
    </>
  );
}

function ProjectsShapes() {
  return (
    <>
      {/* Círculo com cruz — canto superior esquerdo */}
      <circle
        cx="130"
        cy="160"
        r="185"
        fill="none"
        stroke={S}
        strokeWidth="1"
        opacity="0.06"
      />
      <line
        x1="130"
        y1="-25"
        x2="130"
        y2="345"
        stroke={S}
        strokeWidth="1"
        opacity="0.05"
      />
      <line
        x1="-55"
        y1="160"
        x2="315"
        y2="160"
        stroke={S}
        strokeWidth="1"
        opacity="0.05"
      />
      {/* Quadrados rotacionados — lateral direita */}
      <rect
        x="1055"
        y="195"
        width="65"
        height="65"
        fill="none"
        stroke={S}
        strokeWidth="1"
        opacity="0.08"
        transform="rotate(20 1087 228)"
      />
      <rect
        x="1095"
        y="345"
        width="45"
        height="45"
        fill="none"
        stroke={S}
        strokeWidth="1"
        opacity="0.07"
        transform="rotate(35 1117 368)"
      />
      {/* Linhas diagonais — inferior direito */}
      <line
        x1="880"
        y1="810"
        x2="1200"
        y2="490"
        stroke={S}
        strokeWidth="1"
        opacity="0.06"
      />
      <line
        x1="930"
        y1="860"
        x2="1200"
        y2="590"
        stroke={S}
        strokeWidth="1"
        opacity="0.06"
      />
      {/* Pontos — inferior centro */}
      <circle cx="620" cy="825" r="3" fill={S} opacity="0.07" />
      <circle cx="652" cy="812" r="2" fill={S} opacity="0.05" />
      <circle cx="642" cy="848" r="2" fill={S} opacity="0.05" />
    </>
  );
}

function FeaturedShapes() {
  return (
    <>
      {/* Arcos — inferior esquerdo */}
      <path
        d="M -80 720 A 360 360 0 0 1 580 720"
        fill="none"
        stroke={S}
        strokeWidth="1"
        opacity="0.06"
      />
      <path
        d="M -30 745 A 300 300 0 0 1 510 745"
        fill="none"
        stroke={S}
        strokeWidth="1"
        opacity="0.05"
      />
      {/* Retângulos aninhados — canto superior direito */}
      <rect
        x="1015"
        y="45"
        width="155"
        height="155"
        fill="none"
        stroke={S}
        strokeWidth="1"
        opacity="0.08"
      />
      <rect
        x="1040"
        y="70"
        width="105"
        height="105"
        fill="none"
        stroke={S}
        strokeWidth="1"
        opacity="0.06"
      />
      <rect
        x="1065"
        y="95"
        width="55"
        height="55"
        fill="none"
        stroke={S}
        strokeWidth="1"
        opacity="0.05"
      />
      {/* Linhas verticais paralelas — topo centro */}
      <line
        x1="555"
        y1="45"
        x2="555"
        y2="255"
        stroke={S}
        strokeWidth="1"
        opacity="0.07"
      />
      <line
        x1="585"
        y1="45"
        x2="585"
        y2="255"
        stroke={S}
        strokeWidth="1"
        opacity="0.06"
      />
      <line
        x1="615"
        y1="45"
        x2="615"
        y2="255"
        stroke={S}
        strokeWidth="1"
        opacity="0.05"
      />
      {/* Triângulo — inferior direito */}
      <polygon
        points="1040,900 1200,610 1200,900"
        fill="none"
        stroke={S}
        strokeWidth="1"
        opacity="0.06"
      />
    </>
  );
}

function ResumeShapes() {
  return (
    <>
      {/* Linha diagonal longa — canto superior esquerdo */}
      <line
        x1="-40"
        y1="120"
        x2="220"
        y2="-40"
        stroke={S}
        strokeWidth="1"
        opacity="0.07"
      />
      <line
        x1="-40"
        y1="165"
        x2="265"
        y2="-40"
        stroke={S}
        strokeWidth="1"
        opacity="0.05"
      />
      {/* Círculo — canto inferior esquerdo */}
      <circle
        cx="-60"
        cy="860"
        r="280"
        fill="none"
        stroke={S}
        strokeWidth="1"
        opacity="0.06"
      />
      <circle
        cx="-60"
        cy="860"
        r="180"
        fill="none"
        stroke={S}
        strokeWidth="1"
        opacity="0.05"
      />
      {/* Grade de pontos — topo direito */}
      <circle cx="1060" cy="80" r="2.5" fill={S} opacity="0.08" />
      <circle cx="1090" cy="80" r="2.5" fill={S} opacity="0.08" />
      <circle cx="1120" cy="80" r="2.5" fill={S} opacity="0.08" />
      <circle cx="1150" cy="80" r="2.5" fill={S} opacity="0.06" />
      <circle cx="1060" cy="108" r="2.5" fill={S} opacity="0.07" />
      <circle cx="1090" cy="108" r="2.5" fill={S} opacity="0.07" />
      <circle cx="1120" cy="108" r="2.5" fill={S} opacity="0.07" />
      <circle cx="1150" cy="108" r="2.5" fill={S} opacity="0.05" />
      <circle cx="1060" cy="136" r="2.5" fill={S} opacity="0.05" />
      <circle cx="1090" cy="136" r="2.5" fill={S} opacity="0.05" />
      <circle cx="1120" cy="136" r="2.5" fill={S} opacity="0.05" />
      {/* Losango — lateral direita, centro */}
      <rect
        x="1090"
        y="410"
        width="80"
        height="80"
        fill="none"
        stroke={S}
        strokeWidth="1"
        opacity="0.08"
        transform="rotate(45 1130 450)"
      />
      {/* Linhas verticais paralelas — inferior centro */}
      <line
        x1="540"
        y1="750"
        x2="540"
        y2="960"
        stroke={S}
        strokeWidth="1"
        opacity="0.07"
      />
      <line
        x1="568"
        y1="790"
        x2="568"
        y2="960"
        stroke={S}
        strokeWidth="1"
        opacity="0.05"
      />
      <line
        x1="596"
        y1="820"
        x2="596"
        y2="960"
        stroke={S}
        strokeWidth="1"
        opacity="0.04"
      />
    </>
  );
}

function ContactShapes() {
  return (
    <>
      {/* Círculos concêntricos — canto superior esquerdo */}
      <circle
        cx="-40"
        cy="-40"
        r="300"
        fill="none"
        stroke={S}
        strokeWidth="1"
        opacity="0.06"
      />
      <circle
        cx="-40"
        cy="-40"
        r="180"
        fill="none"
        stroke={S}
        strokeWidth="1"
        opacity="0.05"
      />
      {/* Grade de pontos — canto inferior direito */}
      <circle cx="1050" cy="780" r="2.5" fill={S} opacity="0.08" />
      <circle cx="1080" cy="780" r="2.5" fill={S} opacity="0.08" />
      <circle cx="1110" cy="780" r="2.5" fill={S} opacity="0.08" />
      <circle cx="1140" cy="780" r="2.5" fill={S} opacity="0.06" />
      <circle cx="1050" cy="808" r="2.5" fill={S} opacity="0.07" />
      <circle cx="1080" cy="808" r="2.5" fill={S} opacity="0.07" />
      <circle cx="1110" cy="808" r="2.5" fill={S} opacity="0.07" />
      <circle cx="1140" cy="808" r="2.5" fill={S} opacity="0.05" />
      <circle cx="1050" cy="836" r="2.5" fill={S} opacity="0.05" />
      <circle cx="1080" cy="836" r="2.5" fill={S} opacity="0.05" />
      <circle cx="1110" cy="836" r="2.5" fill={S} opacity="0.05" />
      {/* Losango — lateral direita, centro */}
      <rect
        x="1090"
        y="380"
        width="75"
        height="75"
        fill="none"
        stroke={S}
        strokeWidth="1"
        opacity="0.08"
        transform="rotate(45 1127 418)"
      />
      {/* Linhas horizontais paralelas — inferior esquerdo */}
      <line
        x1="40"
        y1="730"
        x2="220"
        y2="730"
        stroke={S}
        strokeWidth="1"
        opacity="0.08"
      />
      <line
        x1="40"
        y1="757"
        x2="220"
        y2="757"
        stroke={S}
        strokeWidth="1"
        opacity="0.06"
      />
      <line
        x1="40"
        y1="784"
        x2="220"
        y2="784"
        stroke={S}
        strokeWidth="1"
        opacity="0.05"
      />
      {/* Quadrado rotacionado — topo direito */}
      <rect
        x="1000"
        y="55"
        width="90"
        height="90"
        fill="none"
        stroke={S}
        strokeWidth="1"
        opacity="0.07"
        transform="rotate(20 1045 100)"
      />
    </>
  );
}

export default function GeometricBackground({ variant }: Props) {
  return (
    <div
      aria-hidden="true"
      className="absolute inset-0 overflow-hidden pointer-events-none z-[-1]"
    >
      <svg
        width="100%"
        height="100%"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1200 900"
        preserveAspectRatio="xMidYMid slice"
      >
        {variant === "presentation" && <PresentationShapes />}
        {variant === "about" && <AboutShapes />}
        {variant === "services" && <ServicesShapes />}
        {variant === "projects" && <ProjectsShapes />}
        {variant === "featured" && <FeaturedShapes />}
        {variant === "resume" && <ResumeShapes />}
        {variant === "contact" && <ContactShapes />}
      </svg>
    </div>
  );
}
