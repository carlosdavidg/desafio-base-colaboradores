import { useState } from "react";
import { BaseColaboradores } from "./Base_datos/basecolab.js"
import FormColaboradores from "./components/FormColaboradores.jsx";
import Header from "./components/Header.jsx";
import ListaColaboradores from "./components/ListaColaboradores.jsx";

function App() {
  // creamos un state y le asignamos como valor inicial la Base de datos de colaboradores que importamos previamente.

  const [estadoListaColaboradores, setEstadoListaColaboradores] = useState(BaseColaboradores);
  const [valorBuscador, setValorBuscador] = useState('');


  return (
    <div className="App">
      <Header
      setValorBuscador={setValorBuscador}
       />
      <FormColaboradores
        estadoListaColaboradores={estadoListaColaboradores}
        setEstadoListaColaboradores={setEstadoListaColaboradores} />
      <ListaColaboradores
        estadoListaColaboradores={estadoListaColaboradores}
        valorBuscador={valorBuscador}/>
    </div>
  );
}

export default App;

