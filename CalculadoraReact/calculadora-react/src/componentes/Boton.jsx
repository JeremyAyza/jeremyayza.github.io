import React from "react";
import '../style/Boton.css'


function Boton(props){

  const esOperador=valor=>{
    // si No es un número && no es un punto && no es un '='
    // si F && F && F=> F
    return isNaN(valor) && (valor!=".") && (valor !='=')
  }


  return(
    <div 
    className={`boton-contenedor ${esOperador(props.children) ? 'operador':'' }`.trimEnd()}
    onClick={()=>props.manejarClic(props.children)}
    >
      {props.children}
    </div>


  )
}
  

export default Boton