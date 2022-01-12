import React, {useContext} from 'react';
import "../Style/Navbar.scss";
import es from '../Img/lang/spain.png';
import en from '../Img/lang/united-kingdom.png';
import {FormattedMessage} from 'react-intl';
import {langContext} from '../Context/langContext.js'
import { GiHamburgerMenu } from "react-icons/gi";

const Navbar = () => {
  const idioma = useContext(langContext)
  return (
    <div className="container_navbar">
      <div className="button_H3">
        <button>
          <GiHamburgerMenu />
        </button>
        <h3>Juan Pablo Benavente</h3>
      </div>
      <nav>
        <a href="#Inicio"><FormattedMessage id="Navbar.inicio" defaultMessage="Inicio"/></a>
        <a href="#AcercaDeMi"><FormattedMessage id="Navbar.acercademi" defaultMessage="Acerca de mi"/></a>
        <a href="#Habilidades"><FormattedMessage id="Navbar.habilidades" defaultMessage="Habilidades"/></a>
        <a href="#Proyectos"><FormattedMessage id="Navbar.proyectos" defaultMessage="Proyectos"/></a>
        <a href="#Contacto"><FormattedMessage id="Navbar.contacto" defaultMessage="Contacto"/></a>
      </nav>
      <div className="cont_banderas">
					<button onClick={() => idioma.establecerLenguaje('es-AR')} className="banderas"><img src={es} alt="en"/></button>
					<button onClick={() => idioma.establecerLenguaje('en-US')} className="banderas"><img src={en} alt="sp"/></button>
				</div>
    </div>
  );
};

export default Navbar;
