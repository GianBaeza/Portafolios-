import "./App.css";
import NavBar from "./components/Navbar/NavBar";
import About from "./pages/About";
import Footer from "./pages/Footer";
import Home from "./pages/Home";
import Proyectos from "./pages/Proyectos";

function App() {
  return (
    <div>
      <NavBar />

      <Home />
      <About />
      <Proyectos />

      <Footer />
    </div>
  );
}

export default App;
