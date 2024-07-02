import "./App.css";
import NavBar from "./components/Navbar/NavBar";
import About from "./pages/About";
import Home from "./pages/Home";
import Proyectos from "./pages/Proyectos";

function App() {
  return (
    <div>
      <NavBar />

      <Home />
      <About />
      <Proyectos />
    </div>
  );
}

export default App;
