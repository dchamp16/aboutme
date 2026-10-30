import Header from "./components/Header";
import Summary from "./components/Summary";
import Skills from "./components/Skills";
import Certifications from "./components/Certifications";
import Experience from "./components/Experience";
import Education from "./components/Education";
import Projects from "./components/Projects";
import Navigation from "./components/Navigation";
import Footer from "./components/Footer";
import { RoleProvider, RoleSwitcher } from "./context/RoleContext";

export default function Home() {
  return (
    <RoleProvider>
      <main className="min-h-screen bg-background">
        <div className="max-w-4xl mx-auto p-4 lg:pr-40">
          <Header />
          <Navigation />
          <RoleSwitcher />
          <div id="content" className="divide-y divide-border">
            <Summary />
            <Certifications />
            <Skills />
            <Experience />
            <Education />
            <Projects />
          </div>
        </div>
        <Footer />
      </main>
    </RoleProvider>
  );
}
