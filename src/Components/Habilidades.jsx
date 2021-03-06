import React from "react";
import { ContHabilidades, ContIcons } from "../Styled/Habilidades";
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
import skills from "../Img/skills.png";
import {FormattedMessage} from 'react-intl';


const Habilidades = () => {
  return (
    <ContHabilidades id="Habilidades">
    <div>
        <img src={skills} alt="skills"/>
      </div>
      <ContIcons>
        <h1><FormattedMessage id="Habilidades.h1" defaultMessage="Habilidades"/></h1>
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
              <a href="https://developer.mozilla.org/es/docs/Web/CSS" target="_blank" rel="noreferrer">
                <img src={css} alt="CSS" />
              </a>
              <br />
              CSS 3
            </td>
            <td>
              <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript" target="_blank" rel="noreferrer">
                <img src={js} alt="Javascript" />
              </a>
              <br />
              JavaScript
            </td>
            </tr>
            <tr>
            <td>
              <a href="https://reactjs.org/" target="_blank" rel="noreferrer">
                <img src={react} alt="ReactJS" />
              </a>
              <br />
              ReactJS
            </td>
            <td>
              <a href="https://redux.js.org/" target="_blank" rel="noreferrer">
                <img src={redux} alt="Redux" />
              </a>
              <br />
              Redux
            </td>
            <td>
              <a href="https://nodejs.org/en/" target="_blank" rel="noreferrer">
                <img src={node} alt="NodeJS" />
              </a>
              <br />
              NodeJS
            </td>
            </tr>
            <tr>
            <td>
              <a href="https://expressjs.com/" target="_blank" rel="noreferrer">
                <img src={express} alt="ExpressJS" />
              </a>
              <br />
              ExpressJS
            </td>
            <td>
              <a href="https://www.postgresql.org/" target="_blank" rel="noreferrer">
                <img src={postgres} alt="Postgresql" />
              </a>
              <br />
              PostgreSQL
            </td>
            <td>
              <a href="https://sequelize.org/" target="_blank" rel="noreferrer">
                <img src={sequelize} alt="sequelize" />
              </a>
              <br />
              Sequelize
            </td>
            <td>
              <a href="https://git-scm.com/" target="_blank" rel="noreferrer">
                <img src={sass} alt="git" />
              </a>
              <br />
              Sass
            </td>
            <td>
              <a href="https://git-scm.com/" target="_blank" rel="noreferrer">
                <img src={git} alt="git" />
              </a>
              <br />
              Git
            </td>
          </tr>
        </table>
      </ContIcons>
      
    </ContHabilidades>
  );
};

export default Habilidades;
