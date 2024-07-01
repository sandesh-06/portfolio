import { Footer, Header, MovingText } from "./components";
import { Contact, Projects, Skills, Home } from "./sections";
import { scroll } from "framer-motion";

function App() {
  return (
    <>
      <Header />

      <main className="pt-16 bg-[#070707] lg:px-0 font-nunito">
        <Home />
        <MovingText />
        <Skills />
        <Projects />
        <Contact />
      </main>

      <Footer />
    </>
  );
}

export default App;
