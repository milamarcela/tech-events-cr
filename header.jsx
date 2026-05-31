import React from 'react';
import { NavLink } from 'react-router-dom'; // Usamos NavLink para detectar la página activa automáticamente
import './Header.css'; // Tu archivo de estilos para el header

const Header = () => {
    return (
    <header className="site-header">
    <div className="container head-content">
        <NavLink to="/" className="logo">
        TechEvents <span>CR</span>
        </NavLink>
        <nav className="main-nav">
        <ul>
            <li>
            <NavLink to="/" className={({ isActive }) => isActive ? "active" : ""}>
                Inicio
            </NavLink>
            </li>
            <li>
            <NavLink to="/eventos" className={({ isActive }) => isActive ? "active" : ""}>
                Eventos
            </NavLink>
            </li>
            <li>
            <NavLink to="/detalles" className={({ isActive }) => isActive ? "active" : ""}>
                Detalles
            </NavLink>
            </li>
        </ul>
        </nav>
    </div>
    </header>
);
};

export default Header;