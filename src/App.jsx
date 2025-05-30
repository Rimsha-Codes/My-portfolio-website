
import Footer from "./sections/Footer";
import Contact from "./sections/Contact";
import TechStack from "./sections/TechStack";
import Hero from "./sections/Hero";
import ShowcaseSection from "./sections/ShowcaseSection";
import Navbar from "./components/NavBar";
import DeveloperPersona from "./sections/DeveloperPersona";

const App = () => (
  <>
    <Navbar />
    <Hero />
    <ShowcaseSection />
    <TechStack />
    <DeveloperPersona />
    <Contact />
    <Footer />
  </>
);

export default App;
