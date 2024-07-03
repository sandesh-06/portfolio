import { useEffect, useState } from "react";
import { Footer, Header, MovingText } from "./components";
import { Contact, Projects, Skills, Home, About } from "./sections";
import { scroll } from "framer-motion";
import { ThemeProvider } from "./context/themeContext";

function App() {
  const [themeMode, setThemeMode] = useState("dark");

  //in the context we have just defined the function, to provide functionality to the function, create the function with the same name and the functionality is assigned automatically by react.
  const changeTheme = () => {
    if (themeMode == "light") setThemeMode("dark");
    else setThemeMode("light");
  };

  useEffect(() => {
    document.querySelector("html").classList.remove("light", "dark");
    //remove any existing class

    //add the required class
    document.querySelector("html").classList.add(themeMode);
  }, [themeMode]);
  return (
    <ThemeProvider value={{ themeMode, changeTheme }}>
      <Header />

      <main className="pt-16 bg-white dark:bg-[#070707] lg:px-0 font-nunito">
        <Home />
        <About />
        <div className="my-20">
          <MovingText
            location={true}
            moveWords={["INDIA", "TAMIL NADU", "CHENNAI"]}
            animate="right"
          />
          <MovingText
            moveWords={["FULL STACK DEVELOPER", "UNDERGRAD", "OPEN TO WORK"]}
          />
        </div>
        <Skills />
        <Projects />
        <Contact />
      </main>

      <Footer />
    </ThemeProvider>
  );
}

export default App;
