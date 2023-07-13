import "./App.css";
import About from "./components/About";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Projects from "./components/Projects";
import Quote from "./components/Quote";
import Skills from "./components/Skills";

function App() {
  return (
    <div className="scrollbar scrollbar-thumb-[#FF5C00]/80 scrollbar-track-gray-200 overflow-y-scroll h-screen">
      <Header />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Quote />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
