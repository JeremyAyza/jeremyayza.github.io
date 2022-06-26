import React from "react";
import  '../styles/Boton.css'

function Boton({text,tipo,manejarClick}){
  return(
    <button 
    className={tipo=="click"? 'boton-click':'boton-clear' }
    onClick={manejarClick}>
      {text}
    </button>


  )
}

export default Boton;