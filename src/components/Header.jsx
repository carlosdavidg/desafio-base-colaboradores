const Header = ({setValorBuscador}) => {


  return (
    <div>
        <div className="header">
            <h2>Buscador de Colaboradores</h2>
            <input type="text" id="search" name="search" placeholder="Buscar a un colaborador" onChange={(e)=> setValorBuscador(e.target.value)}></input>
        </div>
    </div>
  )
}

export default Header