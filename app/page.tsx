import Header from "./components/Header";
import Summary from "./components/Summary";
import Skills from "./components/Skills";
import Experience from "./components/Experience";
import Education from "./components/Education";
import Projects from "./components/Projects";
import Navigation from "./components/Navigation";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-background">
      <div className="max-w-4xl mx-auto p-4 lg:pr-40">
        <Header />
        <Navigation />
        <div className="space-y-12" id="content">
          <div id="summary">
            <Summary />
          </div>
          <div id="skills">
            <Skills />
          </div>
          <div id="experience">
            <Experience />
          </div>
          <div id="education">
            <Education />
          </div>
          <div id="projects">
            <Projects />
          </div>
        </div>
      </div>
      <Footer />
    </main>
  );
}