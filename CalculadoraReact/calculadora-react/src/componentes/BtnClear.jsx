import React from "react";
import '../style/BtnClear.css'

const BtnClear =(props)=>(
  <div 
  className="btn-clear"
  onClick={props.limpiar}
  > 
    {props.children}
  </div>


)
export default BtnClear