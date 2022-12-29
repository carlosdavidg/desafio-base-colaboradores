import { useState } from "react";

const FormColaboradores = ({ estadoListaColaboradores, setEstadoListaColaboradores }) => {

  //Creamos 1 estado para cada input. (1 para el nombre y 1 para el correo).
  const [estadoNombre, setEstadoNombre] = useState('');
  const [estadoCorreo, setEstadoCorreo] = useState('');

  const agregarColaborador = (e) => {

    //Detenemos la ejecucion "enviar" del submit, y tomamos el control sobre los datos. (nombre y correo) para evitar que la muestre y se borre al desaparezca al instante.
    e.preventDefault();

    //Renderizamos una copia exacta de la lista de colaboradores original y adicionamos los valores que capturamos en los inputs gracias a los estados definidos en este componente.

    setEstadoListaColaboradores([...estadoListaColaboradores, { nombre: estadoNombre, correo: estadoCorreo }]);

  }


  return (
    <div>
      <form onSubmit={agregarColaborador} className="form">
        <label>Nombre Colaborador</label> <br />
        <input type="text" id="nombre" name="nombre" placeholder="Nombre colaborador" onChange={(event) => setEstadoNombre(event.target.value)} /> <br />
        <label>Correo Colaborador</label> <br />
        <input type="email" id="email" name="email" placeholder="Email colaborador" onChange={(event) => setEstadoCorreo(event.target.value)} /> <br />
        <button>Agregar Colaborador</button>
      </form>
      <hr/>
    </div>
  )
}

export default FormColaboradores