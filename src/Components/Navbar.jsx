import React, { useContext } from "react";
import { ContNavBar, ContBtn, BanderasBtn } from "../Styled/NavBar.js";
import es from "../Img/lang/spain.png";
import en from "../Img/lang/united-kingdom.png";
import { FormattedMessage } from "react-intl";
import { langContext } from "../Context/langContext.js";
//import { FaMoon, FaSun } from "react-icons/fa";

const Navbar = () => {
  const idioma = useContext(langContext);

  return (
    <ContNavBar>
      <div>
        <h3>Juan Pablo Benavente</h3>
      </div>
      <nav>
        <a href="/">
          <FormattedMessage id="Navbar.inicio" defaultMessage="Inicio" />
        </a>
        <a href="#AcercaDeMi">
          <FormattedMessage
            id="Navbar.acercademi"
            defaultMessage="Acerca de mi"
          />
        </a>
        <a href="#Habilidades">
          <FormattedMessage
            id="Navbar.habilidades"
            defaultMessage="Habilidades"
          />
        </a>
        <a href="#Proyectos">
          <FormattedMessage id="Navbar.proyectos" defaultMessage="Proyectos" />
        </a>
        <a href="#Contacto">
          <FormattedMessage id="Navbar.contacto" defaultMessage="Contacto" />
        </a>
      </nav>
      <ContBtn>
        <BanderasBtn
          onClick={() => idioma.establecerLenguaje("es-AR")}>
          <img src={es} alt="en" />
        </BanderasBtn>
        <BanderasBtn
          onClick={() => idioma.establecerLenguaje("en-US")}>
          <img src={en} alt="sp" />
        </BanderasBtn>
        {/* <button
          className="switch"
          id="switch"
          onClick={() => {
            document.body.classList.toggle("dark");
            document.querySelector("#switch").classList.toggle("active");
          }}
        >
          <span>
            <FaSun />
          </span>
          <span>
            <FaMoon />
          </span>
        </button> */}
      </ContBtn>
    </ContNavBar>
  );
};

export default Navbar;
