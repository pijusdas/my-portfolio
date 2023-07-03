import AbotMe from "./components/AboutMe/AbotMe";
import Banner from "./components/Banner/Banner";
import Contact from "./components/Contact/Contact";
import Footer from "./components/Footer/Footer";
import NavBar from "./components/NavBar/NavBar";
import Projects from "./components/Projects/Projects";
import Skills from "./components/Skills/Skills";

const App = () => {
  return (
    <div className="bg-indigo-950 text-white h-full px-12">
      <NavBar/>
      <Banner></Banner>
      <Skills></Skills>
      <AbotMe></AbotMe>
      <Projects/>
      <Contact/>
      <Footer/>
    </div>
  );
};

export default App;