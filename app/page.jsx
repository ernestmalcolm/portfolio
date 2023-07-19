import About from "../components/about";
import Contact from "../components/contact";
import LandingPage from "../components/landingPage";
import Portfolio from "../components/portfolio";
import Skills from "../components/skills";

export default function Page() {
  return (
    <div>
      <LandingPage />
      <About />
      <Skills />
      {/* <Portfolio /> */}
      <Contact />
    </div>
  );
}
