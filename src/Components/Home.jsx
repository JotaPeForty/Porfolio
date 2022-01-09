import React from "react";
import "../Style/Home.scss";
import Navbar from "./Navbar";
import Inicio from "./Inicio";
import AcercaDeMi from "./AcercaDeMi";
import Habilidades from "./Habilidades";
import Proyectos from "./Proyectos";
import Contacto from "./Contacto";

const Home = () => {
  return (
    <div className="home">
      <Navbar />
      <Inicio />
      <AcercaDeMi />
      <Habilidades />
      <Proyectos />
      <Contacto />
    </div>
  );
};

export default Home;
