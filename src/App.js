
// --- | Importação de estilo | ---

import './App.css';

// --- | Importação de páginas | ---

import Home      from    "./pages/Home";
import Contato   from    "./pages/Contato"; 
import Galeria   from    "./pages/Galeria"; 
import Admin     from    "./admin/Admin"

// --- | Importação de LIBS | ---

import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/contato" element={<Contato />} />
          <Route path="/galeria" element={<Galeria />} />
          <Route path="/admin" element={<Admin />} />
        </Routes>
    </BrowserRouter>
  );
}

export default App;
