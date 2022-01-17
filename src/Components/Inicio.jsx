import React from "react";
import {ContInicio, ContH1} from "../Styled/Inicio.js";
import {FormattedMessage} from 'react-intl';
import yo from "../Img/yo.png"

const inicio = () => {
  return (
    <ContInicio id="Inicio">
      <ContH1>
        <h1><FormattedMessage id="Inicio.h1a" defaultMessage="Bienvenidos a"/></h1>
        <h1><FormattedMessage id="Inicio.h1b" defaultMessage="Mi Porfolio"/></h1>
      </ContH1>
      <img src={yo} alt="juan pablo benavente" />
    </ContInicio>
  );
};

export default inicio;
