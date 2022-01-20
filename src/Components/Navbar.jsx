import React, { useContext } from "react";
import {
  ContNavBar,
  ContBtn,
  BanderasBtn,
  Nav,
  NameBtn,
  MenuLink,
} from "../Styled/NavBar.js";
import es from "../Img/lang/spain.png";
import en from "../Img/lang/united-kingdom.png";
import { FormattedMessage } from "react-intl";
import { langContext } from "../Context/langContext.js";
//import { FaMoon, FaSun } from "react-icons/fa";
//import { FaBars } from "react-icons/fa";

const Navbar = () => {
  const idioma = useContext(langContext);
  //console.log("data=>", window.screen.width);
  return (
    <ContNavBar>
      <NameBtn>
        <h3>Juan Pablo Benavente</h3>
        {/* <MenuBtn href="#"><FaBars id="menuBtn"/></MenuBtn> */}
      </NameBtn>
      <Nav>
        <MenuLink href="/">
          <FormattedMessage id="Navbar.inicio" defaultMessage="Inicio" />
        </MenuLink>
        <MenuLink href="#AcercaDeMi">
          <FormattedMessage
            id="Navbar.acercademi"
            defaultMessage="Acerca de mi"
          />
        </MenuLink>
        <MenuLink href="#Habilidades">
          <FormattedMessage
            id="Navbar.habilidades"
            defaultMessage="Habilidades"
          />
        </MenuLink>
        <MenuLink href="#Proyectos">
          <FormattedMessage id="Navbar.proyectos" defaultMessage="Proyectos" />
        </MenuLink>
        <MenuLink href="#Contacto">
          <FormattedMessage id="Navbar.contacto" defaultMessage="Contacto" />
        </MenuLink>
      </Nav>
        <ContBtn>
          <BanderasBtn onClick={() => idioma.establecerLenguaje("es-AR")}>
            <img src={es} alt="en" />
          </BanderasBtn>
          <BanderasBtn onClick={() => idioma.establecerLenguaje("en-US")}>
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
