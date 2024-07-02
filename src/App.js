import "./App.css";
import NavBar from "./components/Navbar/NavBar";
import About from "./pages/About";
import Home from "./pages/Home";

function App() {
  return (
    <div>
      <NavBar />

      <Home />
      <About />
    </div>
  );
}

export default App;
