import React from "react";
import { ContProyectos, ContProyect, ProIcons, ProTube, ProLink } from "../Styled/Proyectos";
import { FaYoutube, FaExternalLinkAlt } from "react-icons/fa";
import {FormattedMessage} from 'react-intl';
import launch from "../Img/launch.png";
import climapp from "../Img/proyect/climApp.jpg";
import pronto from "../Img/proyect/muypronto.jpg";
//import cooming from "../Img/proyect/commingsoon.jpg";
import gimme from "../Img/proyect/gimmearide.jpg";

const Proyectos = () => {
  //console.log(lang)
  return (
    <ContProyectos id="Proyectos">
      <ContProyect>
        <h1><FormattedMessage id="Proyectos.h1" defaultMessage="Proyectos"/></h1>
        <table>
          <tr>
            <td>
              <img src={climapp} alt="ClimApp" />
              <ProIcons>
                <h3>ClimApp</h3>
                <ProTube>
                  <a href="https:" target="_blank" rel="noreferrer">
                    <FaYoutube />
                  </a>
                </ProTube>
                <ProLink>
                  <a
                    href="https://clim-app-spa.vercel.app/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <FaExternalLinkAlt />
                  </a>
                </ProLink>
              </ProIcons>
            </td>
            <td>
              <img src={pronto} alt="muypronto" />
              <ProIcons>
                <h3>FoodApp</h3>
                <ProTube>
                  <a href="https://" target="_blank" rel="noreferrer">
                    <FaYoutube />
                  </a>
                </ProTube>
                <ProLink>
                  <a href="https://" target="_blank" rel="noreferrer">
                    <FaExternalLinkAlt />
                  </a>
                </ProLink>
              </ProIcons>
            </td>
          </tr>
          <tr>
            <td>
              <img src={pronto} alt="muypronto" />
              <ProIcons>
                <h3>DogApp</h3>
                <ProTube>
                  <a href="https:" target="_blank" rel="noreferrer">
                    <FaYoutube />
                  </a>
                </ProTube>
                <ProLink>
                  <a
                    href="https://clim-app-spa.vercel.app/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <FaExternalLinkAlt />
                  </a>
                </ProLink>
              </ProIcons>
            </td>
            <td>
              <img src={gimme} alt="Gimmearide" />
              <ProIcons>
                <h3>Gimmearide</h3>
                <ProTube>
                  <a href="https://" target="_blank" rel="noreferrer">
                    <FaYoutube />
                  </a>
                </ProTube>
                <ProLink>
                  <a href="https://gimmearide.vercel.app/" target="_blank" rel="noreferrer">
                    <FaExternalLinkAlt />
                  </a>
                </ProLink>
              </ProIcons>
            </td>
          </tr>
        </table>
      </ContProyect>
      <div>
        <img src={launch} alt="Proyectos" />
      </div>
    </ContProyectos>
  );
};

export default Proyectos;
