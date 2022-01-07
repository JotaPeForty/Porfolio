import React from "react";
import "../Style/Navbar.scss";
import { TiThMenu } from "react-icons/ti";
import { ImHome } from "react-icons/im";
import { BsPersonLinesFill } from "react-icons/bs";
import { GiSkills } from "react-icons/gi";
import { IoIosRocket } from "react-icons/io";
import { MdContacts } from "react-icons/md";

const Navbar = () => {
  return (
    <div className="sidebar">
      <div className="logo_name">
        <TiThMenu className="logo"/>
        <span className="name">Juan Pablo Benavente</span>
      </div>
      <div></div>
      <div>
        <ul className="nav_list">
          <li>
            <a href="./">
              <span className="links_name"><ImHome />Inicio</span>
            </a>
          </li>
          <li>
            <a href="./">
              <span className="links_name"><BsPersonLinesFill />Sobre mi</span>
            </a>
          </li>
          <li>
            <a href="./">
              <span className="links_name"><GiSkills />Habilidades Tech</span>
            </a>
          </li>
          <li>
            <a href="./">
              <span className="links_name"><IoIosRocket />Proyectos</span>
            </a>
          </li>
          <li>
            <a href="./">
              <span className="links_name"><MdContacts />Contacto</span>
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
