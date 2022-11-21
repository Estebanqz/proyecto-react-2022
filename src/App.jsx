import { useEffect, useState } from "react"
import axios from "axios"
import "./App.css"

function App() {

  const [criptos, setCriptos] = useState ()

  useEffect(() =>{
    axios.get(`https://api.coincap.io/v2/assets `)
    //con fetch .then((resp) => resp.json())
    .then((data) => {
      //console.log(data)
      setCriptos(data.data.data)
    })
    .catch(() => {
      console.error("La peticion fallo")
    })
  },[])

  if (!criptos) return <span>Cargando...</span>

  return (
    <>
      <h1>Lista de critomonedas</h1>
      <ol>
        { 
        criptos.map(({id, name, priceUsd}) => (
          <li key={id}>Nombre: {name} Precio: {priceUsd}</li>
         ))
        }       
      </ol>
    </>
  )
}

export default App
