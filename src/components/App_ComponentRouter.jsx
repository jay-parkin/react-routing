import { BrowserRouter, Route, Routes } from "react-router-dom";
import "../styles/App.css";
import HomePage from "../pages/HomePage";
import AboutPage from "../pages/AboutPage";
import ContactPage from "../pages/ContactPage";
import ProjectLayout from "../pages/_templates/ProjectLayout";
import Navbar from "./NavBar";
import PokemonProject from "../pages/projects/PokemonProject";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        {/* This is our custom navbar! */}
        <Navbar />

        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/projects" element={<ProjectLayout />}>
            <Route path="pokemon" element={<PokemonProject />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
