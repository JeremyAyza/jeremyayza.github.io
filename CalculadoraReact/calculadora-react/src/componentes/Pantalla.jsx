import React from "react";
import '../style/Pantalla.css'


// const Pantalla= ()=>( solo parentesis 
//                      porque retornará directamente
const Pantalla= ({input})=>(

    <div className="input">
        {input}
    </div>

);

export default Pantalla;