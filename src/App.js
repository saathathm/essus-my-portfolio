import "./App.css";
import About from "./components/About";
import Contact from "./components/Contact";
import Home from "./components/Home";
import Portfolio from "./components/Portfolio";
import MySkills from "./components/MySkills";
import Footer from "./components/layouts/Footer";
import Header from "./components/layouts/Header";

function App() {
  return (
    <div className="App">
      <Header />
      <Home />
      <About />
      <MySkills />
      <Portfolio />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
