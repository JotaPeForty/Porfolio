import React from "react";
import html from "../Img/icons/html5.png";
import css from "../Img/icons/CSS3.png";
import js from "../Img/icons/JavaScript.png";
import react from "../Img/icons/reactjs.png";
import redux from "../Img/icons/Redux.png";
import node from "../Img/icons/Node.js.png";
import express from "../Img/icons/expressjs.png";
import postgres from "../Img/icons/psql.png";
import sequelize from "../Img/icons/sequelize.png";
import sass from "../Img/icons/sass.png";
import git from "../Img/icons/git.png";
import cert from "../Img/Certificate.png";
import "../Style/Habilidades.scss";

const Habilidades = () => {
  return (
    <div className="container_habilidades" id="Habilidades">
      <div className="cont_icons">
        <h1>Lenguajes y herramientas</h1>
        <table>
          <tr>
            <td>
              <a href="https://html5.org/">
                <img src={html} alt="HTML5" />
              </a>
              <br />
              HTML 5
            </td>
            </tr>
            <tr>
            <td>
              <a href="https://developer.mozilla.org/es/docs/Web/CSS">
                <img src={css} alt="CSS" />
              </a>
              <br />
              CSS 3
            </td>
            <td>
              <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript">
                <img src={js} alt="Javascript" />
              </a>
              <br />
              JavaScript
            </td>
            </tr>
            <tr>
            <td>
              <a href="https://reactjs.org/">
                <img src={react} alt="ReactJS" />
              </a>
              <br />
              ReactJS
            </td>
            <td>
              <a href="https://redux.js.org/">
                <img src={redux} alt="Redux" />
              </a>
              <br />
              Redux
            </td>
            <td>
              <a href="https://nodejs.org/en/">
                <img src={node} alt="NodeJS" />
              </a>
              <br />
              NodeJS
            </td>
            </tr>
            <tr>
            <td>
              <a href="https://expressjs.com/">
                <img src={express} alt="ExpressJS" />
              </a>
              <br />
              ExpressJS
            </td>
            <td>
              <a href="https://www.postgresql.org/">
                <img src={postgres} alt="Postgresql" />
              </a>
              <br />
              PostgreSQL
            </td>
            <td>
              <a href="https://sequelize.org/">
                <img src={sequelize} alt="sequelize" />
              </a>
              <br />
              Sequelize
            </td>
            <td>
              <a href="https://git-scm.com/">
                <img src={sass} alt="git" />
              </a>
              <br />
              Sass
            </td>
            <td>
              <a href="https://git-scm.com/">
                <img src={git} alt="git" />
              </a>
              <br />
              Git
            </td>
          </tr>
        </table>
      </div>
      <div>
        <img src={cert} alt="certificate"/>
      </div>
    </div>
  );
};

export default Habilidades;
