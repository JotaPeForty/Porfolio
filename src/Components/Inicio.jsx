import React from "react";
import "../Style/Inicio.scss";
import {FormattedMessage} from 'react-intl';
import yo from "../Img/yo.png"

const inicio = () => {
  return (
    <div className="container_inicio" id="Inicio">
      <div className="container_H1">
        <h1><FormattedMessage id="Inicio.h1a" defaultMessage="Bienvenidos a"/></h1>
        <h1><FormattedMessage id="Inicio.h1b" defaultMessage="Mi Porfolio"/></h1>
      </div>
      <img src={yo} alt="juan pablo benavente" />
    </div>
  );
};

export default inicio;
