import React from 'react'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'
import {useForm} from "react-hook-form"

function Login() {

  const {register, handleSubmit, reset} = useForm();
  const navigate = useNavigate();
  const page = "http://localhost:1337"

  const submit = (data) => {
    axios.post(`${page}/api/auth/local`, data)
    .then((res) => {
      localStorage.setItem("usuario", res.data.user.username),
      localStorage.setItem("token", res.data.jwt);
      navigate("/principal")
    })
  }

  return (
    <div>
      <form onSubmit={handleSubmit(submit)}>
        <input type="text" id='identifier'{...register("identifier",{required:true})} />
        <input type="password" id='password' {...register("password",{required: true})}/>
        <button type='submit'>Acceder</button>
        <button type='reset'>Borrar</button>
      </form>
    </div>
  )
}

export default Login