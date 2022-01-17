import React from "react";
import { ContHome } from "../Styled/Home.js";
import Navbar from "./Navbar";
import Inicio from "./Inicio";
import AcercaDeMi from "./AcercaDeMi";
import Habilidades from "./Habilidades";
import Proyectos from "./Proyectos";
import Contacto from "./Contacto";

const Home = () => {
  return (
    <ContHome>
      <Navbar />
      <Inicio />
      <AcercaDeMi />
      <Habilidades />
      <Proyectos />
      <Contacto />
    </ContHome>
  );
};

export default Home;
