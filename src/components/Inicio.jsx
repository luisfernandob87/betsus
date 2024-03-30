import React from 'react'
import {useNavigate} from "react-router-dom"

function Inicio() {
const navigate = useNavigate();

  return (
    <div>
      <button onClick={()=> {navigate("/login")}}>Login</button>
      <button onClick={()=> {navigate("/crear")}}>Crear Cuenta</button>
    </div>
  )
}

export default Inicio
