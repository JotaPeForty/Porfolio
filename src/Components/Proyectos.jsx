import React from "react";
import { FaYoutube, FaExternalLinkAlt } from "react-icons/fa";
import "../Style/Proyectos.scss";
import launch from "../Img/launch.png";
import climapp from "../Img/proyect/climApp.jpg";
import pronto from "../Img/proyect/muypronto.jpg";
import gimme from "../Img/proyect/gimmearide.jpg";

const Proyectos = () => {
  return (
    <div className="container_proyectos" id="Proyectos">
      <div className="cont_proyect">
        <h1>Proyectos</h1>
        <table>
          <tr>
            <td>
              <img src={climapp} alt="ClimApp" />
              <div className="pro_icons">
                <h3>ClimApp</h3>
                <div className="pro_tube">
                  <a href="https:" target="_blank" rel="noreferrer">
                    <FaYoutube />
                  </a>
                </div>
                <div className="pro_link">
                  <a
                    href="https://clim-app-spa.vercel.app/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <FaExternalLinkAlt />
                  </a>
                </div>
              </div>
            </td>
            <td>
              <img src={pronto} alt="ClimApp" />
              <div className="pro_icons">
                <h3>FoodApp</h3>
                <div className="pro_tube">
                  <a href="https://" target="_blank" rel="noreferrer">
                    <FaYoutube />
                  </a>
                </div>
                <div className="pro_link">
                  <a href="https://" target="_blank" rel="noreferrer">
                    <FaExternalLinkAlt />
                  </a>
                </div>
              </div>
            </td>
          </tr>
          <tr>
            <td>
              <img src={pronto} alt="ClimApp" />
              <div className="pro_icons">
                <h3>DogApp</h3>
                <div className="pro_tube">
                  <a href="https:" target="_blank" rel="noreferrer">
                    <FaYoutube />
                  </a>
                </div>
                <div className="pro_link">
                  <a
                    href="https://clim-app-spa.vercel.app/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <FaExternalLinkAlt />
                  </a>
                </div>
              </div>
            </td>
            <td>
              <img src={gimme} alt="ClimApp" />
              <div className="pro_icons">
                <h3>Gimmearide</h3>
                <div className="pro_tube">
                  <a href="https://" target="_blank" rel="noreferrer">
                    <FaYoutube />
                  </a>
                </div>
                <div className="pro_link">
                  <a href="https://gimmearide.vercel.app/" target="_blank" rel="noreferrer">
                    <FaExternalLinkAlt />
                  </a>
                </div>
              </div>
            </td>
          </tr>
        </table>
      </div>
      <div>
        <img src={launch} alt="Proyectos" />
      </div>
    </div>
  );
};

export default Proyectos;
