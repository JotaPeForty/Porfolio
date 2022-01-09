import React from "react";
import "../Style/Navbar.scss";
import { GiHamburgerMenu } from "react-icons/gi";

const Navbar = () => {
  return (
    <div className="container_navbar">
      <div className="button_H3">
        <button>
          <GiHamburgerMenu />
        </button>
        <h3>Juan Pablo Benavente</h3>
      </div>
      <nav>
        <a href="#Inicio">Inicio</a>
        <a href="#AcercaDeMi">Acerca de mi</a>
        <a href="#Habilidades">Habilidades</a>
        <a href="#Proyectos">Proyectos</a>
        <a href="#Contacto">Contacto</a>
      </nav>
    </div>
  );
};

export default Navbar;
