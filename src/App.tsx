import SideBarArea from "./components/sideBar";
import PresentationArea from "./components/presentation";
import AboutArea from "./components/about";
import ServicesArea from "./components/services";
import ProjectsArea from "./components/projects";
import FeaturedProjectArea from "./components/featuredProject";
import ResumeArea from "./components/resume";
import ContactArea from "./components/contact";
import MobileHeader from "./components/mobileHeader/MobileHeader";
import MobileNavBar from "./components/mobileNavBar/MobileNavBar";
import ErrorBoundary from "./components/ErrorBoundary";

function App() {
  return (
    <ErrorBoundary>
      <div className="flex h-screen">
        {/* Sidebar — visível apenas em desktop */}
        <div className="hidden md:block sticky top-0 h-screen shrink-0">
          <SideBarArea />
        </div>

        <main id="main-scroll" className="flex-1 overflow-y-auto pb-16 md:pb-0">
          {/* Header compacto — visível apenas em mobile */}
          <div className="md:hidden">
            <MobileHeader />
          </div>

          <ErrorBoundary>
            <PresentationArea />
          </ErrorBoundary>
          <AboutArea />
          <ServicesArea />
          <ProjectsArea />
          <FeaturedProjectArea />
          <ResumeArea />
          <ContactArea />
        </main>

        {/* Bottom nav — visível apenas em mobile */}
        <div className="md:hidden">
          <MobileNavBar />
        </div>
      </div>
    </ErrorBoundary>
  );
}

export default App;
