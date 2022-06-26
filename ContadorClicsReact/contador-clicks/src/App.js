
import './App.css';
import freeCodeCampLogo from './imgs/logoFCC.png';
import Boton from './componentes/Boton.js'
import Contador from './componentes/Contador.js';
import {useState} from 'react';

function App() {
  const [numClics, setNumClics]=useState(0);



  const manejarClick=()=>{
    setNumClics(numClics+1)
    console.log("Click")
  }
  const reiniciarContador=()=>{
    setNumClics(0);
    console.log('Reinicio')
  }

  return (
    <div className="App">
      <div className='freeCodeCamp-logo-contenedor'>
        <img className='freeCodeCampLogo' src={freeCodeCampLogo} alt='Logo de freeCodeCamp'/>
      </div>

      <div className='contenedor-principal'>
        <Contador
          numClicks={numClics}
        />


        <Boton
          text='Click'
          tipo='click'
          manejarClick={manejarClick}
          
        />
        <Boton
          text='Reiniciar'
          tipo='clear'
          manejarClick={reiniciarContador}
        />

      </div>

    </div>
  );
}

export default App;
