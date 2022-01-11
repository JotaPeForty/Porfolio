import React from 'react'
import '../Style/AcercaDeMi.scss';
import dev from "../Img/developer.png"

const AcercaDeMi = () => {
    return (
        <div className="container_ADM" id="AcercaDeMi">
        <div className="cont_img"><img src={dev} alt="dev"/></div>
        <div className="cont_text">
            <h1>Acerca de mi</h1>
            <p>👉Hola, mi nombre es Juan Pablo, soy Desarrollador Full Stack y Fotógrafo. Retome el camino a este maravilloso mundo IT, después de pasar 14 años en un rubro diferente, el cual me dio la experiencia de transformar un sector de la empresa y formar un equipo de trabajo excelente como así también el desafío diario de la resolución de problemas. Siento que es momento de poner mi experiencia junto todos mis conocimientos a disposición de quien la requiera en esta nueva etapa.</p>
            <p>Comencé aprendiendo lo básico, luego reparación de pc y redes, ahí nomas descubrí el diseño y aprendí de forma autodidacta algunas herramientas, hasta mi primer curso de diseño web. Luego curse la mitad de la carrera de Técnico Sup. en fotografía, que me dio mas herramientas y conocimientos en diseño, y hoy ya con conocimientos más avanzados(JavaScript, React, Redux, NodeJs, Express, PosgreSQL, HTML5, CSS3, Sass) y todo un mundo y lenguajes por seguir descubriendo.</p>
            <p>Hoy me encuentro a las puertas de una nueva etapa de mi vida, de reunir todo lo aprendido y poder crecer en este mundo IT, por eso estoy en búsqueda de ese grupo humano para crecer más, y juntos…</p>
            <p>Si crees que soy lo que estas buscando….</p>
            </div>
        </div>
    )
}

export default AcercaDeMi
