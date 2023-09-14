import logo from './logo.svg';
import './App.css';
import { useState, useEffect } from 'react';


function App() {
  const [cuidades, setcuidades] = useState(["Montevideo", "Maldonado", "Salto", "Artigas", "Rocha", "San Jose"])
  const [centro, setCentro] = useState(["centro1", "centro2", "centro3"])
  const [seleccion, setSelecion] = useState("");
  const [subSeleccionC, setSubSelecion] = useState("");
  const [estado,setEstado] = useStatetate(false);

useEffect({




},[])
const cardMontevido = () =>{

return <div>

  <p>Montevideo</p>
</div>


}

  return (
    <div className="App">

      <select >
        {cuidades.map((item) => {
          return <option key={item} > {item}</option>
        })}
    
      </select>

    </div>
  );
}

export default App;
