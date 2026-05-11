import {
  Home,
  User,
  Briefcase,
  FolderOpen,
  Star,
  FileText,
  Mail,
} from "lucide-react";
import { useScrollSpy } from "../../hooks/useScrollSpy";

const navLinks = [
  { label: "Início", href: "#apresentacao", icon: Home },
  { label: "Sobre", href: "#sobre", icon: User },
  { label: "Serviços", href: "#servicos", icon: Briefcase },
  { label: "Projetos", href: "#projetos", icon: FolderOpen },
  { label: "Destaque", href: "#maior-projeto", icon: Star },
  { label: "Resumo", href: "#resumo", icon: FileText },
  { label: "Contato", href: "#contato", icon: Mail },
];

const sectionIds = navLinks.map(({ href }) => href.slice(1));

export default function MobileNavBar() {
  const activeId = useScrollSpy(sectionIds);

  return (
    <nav className="fixed bottom-0 left-0 right-0 z-50 bg-primary-900/95 backdrop-blur-sm border-t border-primary-700/50 pb-safe">
      <ul className="flex items-center justify-around px-2 py-2">
        {navLinks.map(({ label, href, icon: Icon }) => {
          const isActive = activeId === href.slice(1);
          return (
            <li key={label}>
              <a
                href={href}
                className={`flex flex-col items-center gap-0.5 px-2 py-1 rounded-lg transition-colors duration-200 ${
                  isActive
                    ? "text-white"
                    : "text-primary-500 hover:text-primary-300"
                }`}
              >
                <Icon
                  className={`w-5 h-5 transition-colors duration-200 ${
                    isActive ? "text-primary-400" : ""
                  }`}
                />
                <span className="text-[10px] font-medium leading-none">
                  {label}
                </span>
              </a>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
