import React from "react";
import contact from "../Img/contact.png";
import mail from "../Img/icons/mail.png";
import lin from "../Img/icons/linkedin.png";
import torre from "../Img/icons/torre.png";
import twitter from "../Img/icons/twitter.png";
import wp from "../Img/icons/whatsapp.png";
import {FormattedMessage} from 'react-intl';
import "../Style/Contacto.scss";

const Contacto = () => {
  return (
    <div className="container_contacto" id="Contacto">
      <div>
        <h1><FormattedMessage id="Contactos.h1" defaultMessage="Contactos"/></h1>
        <br/>
        <table>
          <tr>
            <td className="cont_td">
              <a href="mailto:juanp.benavente@gmail.com" target="_blank" rel="noreferrer">
                <img
                  src={mail}
                  alt="mailto:juanp.benavente@gmail.com/"
                />
              </a>
            </td>
            <td><h5>E-mail</h5></td>
            </tr>
            <tr>
            <td><h5>LinkedIn</h5></td>
            <td className="cont_td">
              <a
                href="https://www.linkedin.com/in/juan-pablo-benavente-dev/"
                target="_blank" rel="noreferrer">
                <img
                  src={lin}
                  alt="https://www.linkedin.com/in/juan-pablo-benavente-dev/"
                />
              </a>
            </td>
            </tr>
            <tr>
            <td className="cont_td">
              <a href="https://twitter.com/JuanP_Benavente" target="_blank" rel="noreferrer">
                <img
                  src={twitter}
                  alt="https://twitter.com/JuanP_Benavente"
                />
              </a>
            </td>
            <td><h5>Twitter</h5></td>
            </tr>
            <tr>
            <td><h5>Torre</h5></td>
            <td className="cont_td">
              <a href="https://torre.co/es/juanpbenavente" target="_blank" rel="noreferrer">
                <img
                  src={torre}
                  alt="https://torre.co/es/juanpbenavente"
                />
              </a>
            </td>
            </tr>
            <tr>
            <td className="cont_td">
              <a
                href="https://api.whatsapp.com/send?phone=3515946885"
                target="_blank" rel="noreferrer">
                <img
                  src={wp}
                  alt="https://api.whatsapp.com/send?phone=3515946885"
                />
              </a>
            </td>
            <td><h5>WhatsApp</h5></td>
          </tr>
        </table>
      </div>
      <div>
        <img src={contact} alt="Contact" className="contact"/>
      </div>
    </div>
  );
};

export default Contacto;
