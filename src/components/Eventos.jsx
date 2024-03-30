import axios from 'axios';
import React, { useEffect, useState } from 'react'

function Eventos() {

    const token = localStorage.getItem("token");

    const page = "http://localhost:1337"

    const config = {
        headers: {
          Authorization: "Bearer " + token,
        },
      };

      useEffect(()=> {
        axios.get(`${page}/api/eventos?populate=*`, config)
        .then((res) => setEventos(res.data.data))
        .catch(function (error){console.log(error)})
      },[])

      const [eventos, setEventos] =useState([]);

      console.log(eventos);

  return (
    <>
      {eventos.map(evento => (
        <div key={evento.id}>
        <h2>{evento.attributes.nombre}</h2>
        <h4>{evento.attributes.equipoA}</h4>
        <p>vs</p>
        <h4>{evento.attributes.equipoB}</h4>
        </div>
      ))}
    </>
  )
}

export default Eventos
