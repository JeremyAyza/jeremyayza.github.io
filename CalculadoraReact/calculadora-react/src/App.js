import './App.css';
import freeCodeCampLogo from './imgs/logoFCC.png';
import Boton from './componentes/Boton';
import Pantalla from './componentes/Pantalla';
import BtnClear from './componentes/BtnClear';
import Banner from './componentes/Banner';
import {useState} from 'react';
import {evaluate} from 'mathjs';

function App() {


  const [input,setInput]=useState('');


  const agregarInput=val=>{
    let ultimoIndice=input.length-1;
    let ultimaLetra=input[ultimoIndice];
    let operadores=["+","*","-","/"]

    if(input.length>=14){
      return
    }
    else if(operadores.includes(ultimaLetra) && (val=='=' || val=='.' )){
      return
    }

    if(operadores.includes(ultimaLetra) && operadores.includes(val)){
      if((val=='*' || val=='/' )&& (ultimaLetra=='*' || ultimaLetra=='/') ) {
        let newInput=input.substring(0,ultimoIndice)+val;
        setInput(newInput);
      }
      if((val=='+' || val=='-' )&& (ultimaLetra=='+' || ultimaLetra=='-') ) {
        let newInput=input.substring(0,ultimoIndice)+val;
        setInput(newInput);
      }
      if((val=='+' || val=='-' )&& (ultimaLetra=='*' || ultimaLetra=='/') ) {
        
        setInput(input+val);
      }

    }
    else if(ultimaLetra=='.' && val=='.'){
      return
    }
    else{
      setInput(input+val);
    }
  };

  const calcularResultado=()=>{
    let ultimoIndice=input.length-1;
    let ultimaLetra=input[ultimoIndice];
    let noValidos=["+","*","-","/",'.']
    if(noValidos.includes(ultimaLetra)){
      return
    }
    if(input){
      setInput(evaluate(input)); 
    }else{
      alert("Ingrese el primer valor.")
    }
    
  }
  


  return (
    <div className="App">

        <div className='container-banner' >
          <Banner></Banner>
        </div>
        


        <div className="contenedor-calculadora" >

          <Pantalla input={input}></Pantalla>

          <div className="row row-1">
            <Boton manejarClic={agregarInput}>1</Boton>
            <Boton manejarClic={agregarInput}>2</Boton>
            <Boton manejarClic={agregarInput}>3</Boton>
            <Boton manejarClic={agregarInput}>+</Boton>
          </div>
          <div className="row row-2">
            <Boton manejarClic={agregarInput} >4</Boton>
            <Boton manejarClic={agregarInput} >5</Boton>
            <Boton manejarClic={agregarInput} >6</Boton>
            <Boton manejarClic={agregarInput} >-</Boton>

          </div>
          <div className="row row-3">
            <Boton manejarClic={agregarInput} >7</Boton>
            <Boton manejarClic={agregarInput} >8</Boton>
            <Boton manejarClic={agregarInput} >9</Boton>
            <Boton manejarClic={agregarInput} >*</Boton>
          </div>
          <div className="row row-4">
            <Boton manejarClic={calcularResultado}>=</Boton>
            <Boton manejarClic={agregarInput} >0</Boton>
            <Boton manejarClic={agregarInput} >.</Boton>
            <Boton manejarClic={agregarInput} >/</Boton>
          </div>
          
          <div className="row row-5">
            <BtnClear limpiar={()=>setInput('')}  >Clear</BtnClear>
          </div>


        </div>
    </div>
  );
}

export default App;
