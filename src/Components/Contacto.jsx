import React from "react";
import { ContContacto, ContTd, Contact } from "../Styled/Contacto";
import contact from "../Img/contact.png";
import mail from "../Img/icons/mail.png";
import lin from "../Img/icons/linkedin.png";
import torre from "../Img/icons/torre.png";
import twitter from "../Img/icons/twitter.png";
import wp from "../Img/icons/whatsapp.png";
import {FormattedMessage} from 'react-intl';


const Contacto = () => {
  return (
    <ContContacto id="Contacto">
      <div>
        <h1><FormattedMessage id="Contactos.h1" defaultMessage="Contactos"/></h1>
        <br/>
        <table>
          <tr>
            <ContTd>
              <a href="mailto:juanp.benavente@gmail.com" target="_blank" rel="noreferrer">
                <img
                  src={mail}
                  alt="mailto:juanp.benavente@gmail.com/"
                />
              </a>
            </ContTd>
            <td><h5>E-mail</h5></td>
            </tr>
            <tr>
            <td><h5>LinkedIn</h5></td>
            <ContTd>
              <a
                href="https://www.linkedin.com/in/juan-pablo-benavente-dev/"
                target="_blank" rel="noreferrer">
                <img
                  src={lin}
                  alt="https://www.linkedin.com/in/juan-pablo-benavente-dev/"
                />
              </a>
            </ContTd>
            </tr>
            <tr>
            <ContTd>
              <a href="https://twitter.com/JuanP_Benavente" target="_blank" rel="noreferrer">
                <img
                  src={twitter}
                  alt="https://twitter.com/JuanP_Benavente"
                />
              </a>
            </ContTd>
            <td><h5>Twitter</h5></td>
            </tr>
            <tr>
            <td><h5>Torre</h5></td>
            <ContTd>
              <a href="https://torre.co/es/juanpbenavente" target="_blank" rel="noreferrer">
                <img
                  src={torre}
                  alt="https://torre.co/es/juanpbenavente"
                />
              </a>
            </ContTd>
            </tr>
            <tr>
            <ContTd>
              <a
                href="https://api.whatsapp.com/send?phone=3515946885"
                target="_blank" rel="noreferrer">
                <img
                  src={wp}
                  alt="https://api.whatsapp.com/send?phone=3515946885"
                />
              </a>
            </ContTd>
            <td><h5>WhatsApp</h5></td>
          </tr>
        </table>
      </div>
      <div>
        <Contact src={contact} alt="Contact"/>
      </div>
    </ContContacto>
  );
};

export default Contacto;
