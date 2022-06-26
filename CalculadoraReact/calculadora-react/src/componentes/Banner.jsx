import React from "react";
import freeCodeCampLogo from '../imgs/logoFCC.png';
import '../style/Banner.css'

function Banner(){
    return(
        <div className="freecodecamp-logo-contenedor">
          <img src={freeCodeCampLogo} className="freecodecamp-logo" alt="Logo de freeCodeCamp" />
        </div>
    )
}
export default Banner;