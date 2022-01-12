import React from 'react'
import '../Style/AcercaDeMi.scss';
import {FormattedMessage} from 'react-intl';
import dev from "../Img/developer.png"

const AcercaDeMi = () => {
    return (
        <div className="container_ADM" id="AcercaDeMi">
        <div className="cont_img"><img src={dev} alt="dev"/></div>
        <div className="cont_text">
            <h1><FormattedMessage id="acercademi.h1" defaultMessage="Acerca de mi"/></h1>
            <p><FormattedMessage id="acercademi.p1"/></p>
            <p><FormattedMessage id="acercademi.p2"/></p>
            <p><FormattedMessage id="acercademi.p3"/></p>
            <p><FormattedMessage id="acercademi.p4"/></p>
            </div>
        </div>
    )
}

export default AcercaDeMi
