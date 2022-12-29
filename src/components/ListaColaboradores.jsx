// Usamos estas 2 props para que identifique al state creado en App.js que contiene la base de datos de colaboradores y también el state que contiene el valor del input "Buscador"

const ListaColaboradores = ({ estadoListaColaboradores, valorBuscador }) => {


  return (
    <div>
      <h2>Listado de colaboradores</h2>
      <div>
        <ul>
           {estadoListaColaboradores.filter((e)=> e.nombre.toLowerCase().includes(valorBuscador.toLowerCase()))
           .map((colaborador) => <li key={colaborador.id}>{colaborador.nombre} {colaborador.correo}</li>)}
        </ul>
      </div>
    </div>
  )
}

export default ListaColaboradores