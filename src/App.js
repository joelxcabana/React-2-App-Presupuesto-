
import React,{useState,useEffect} from 'react';
import Pregunta from "./components/Pregunta";
import Formulario from './components/Formulario';
import Listado from './components/Listado';
import ControlPresupuesto from './components/ControlPresupuesto';

function App() {

  //definir state
  const [presupuesto,setPresupuesto] = useState(0);
  const [restante,setRestante] = useState(0);
  const [mostratpregunta, setMostratPregunta] = useState(true);
  const [gastos,setGastos] = useState([]);
  const [gasto,setGasto] = useState({});
  const [crearGasto,setCrearGasto] = useState(false);

  //useEfect que actualiza el restante
  useEffect(()=> {
    if(crearGasto){
      //agrega el nuevo presupuesto
      setGastos([...gastos,gasto]);
      //resetear a false

      //resta del presoupueso actual
      const presupuestoRestante = restante - gasto.cantidad;
      setRestante(presupuestoRestante);

      setCrearGasto(false);
    }
  },[gasto,setGasto,crearGasto,restante,gastos])

  return (
  <div className="container">
    <header>
       <h1>Gasto Semanal</h1>
       <div className="contenido-principal contenido">
         {mostratpregunta ?
         ( <Pregunta
            setPresupuesto={setPresupuesto}
            setRestante={setRestante}
            setMostratPregunta={setMostratPregunta}
          />
         )
         :
         (
          <div className="row">
            <div className="one-half column">
              <Formulario
                setGasto={setGasto}
                setCrearGasto={setCrearGasto}
              />
            </div>
            <div className="one-half column">
              <Listado
                gastos={gastos}
              />
              <ControlPresupuesto
              presupuesto={presupuesto}
              restante={restante}
              />
            </div>
         </div>

         )}
       </div>
    </header>
  </div>
  );
}

export default App;
