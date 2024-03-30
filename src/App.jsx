import {HashRouter, Routes, Route} from "react-router-dom"
import './App.css'
import Inicio from "./components/Inicio"
import Login from "./components/Login"
import CrearCuenta from "./components/CrearCuenta"
import ProtectedRoutes from "./components/ProtectedRoutes"
import Principal from "./components/Principal"

function App() {


  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<Inicio/>}/>
        <Route path="/login" element={<Login/>}/>
        <Route path="/crear" element={<CrearCuenta/>}/>
          <Route element={<ProtectedRoutes />}>
          <Route path="/principal" element={<Principal/>}/>
          </Route>
      </Routes>
    </HashRouter>
  )
}

export default App
