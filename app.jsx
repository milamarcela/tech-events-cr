import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header'; // Importas tu nuevo header
import Inicio from './pages/Inicio';
import Eventos from './pages/Eventos';
import Detalles from './pages/Detalles';
import Footer from './components/Footer'; // Si haces el footer component más adelante

function App() {
  return (
    <Router>
      {/* 1. El Header se coloca aquí, fijo para toda la aplicación */}
      <Header />

      {/* 2. El contenedor principal cambia dinámicamente según la URL */}
      <main className="main-content">
        <Routes>
          <Route path="/" element={<Inicio />} />
          <Route path="/eventos" element={<Eventos />} />
          <Route path="/detalles" element={<Detalles />} />
        </Routes>
      </main>

      {/* 3. El Footer también se queda fijo abajo */}
      <Footer />
    </Router>
  );
}

export default App;