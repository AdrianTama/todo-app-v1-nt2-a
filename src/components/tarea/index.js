import React from 'react'

//const componenteTarea = ({tarea}) => (<li>{tarea.titulo}</li>)
const componenteTarea = ({tarea}) => {
  return (
    <li><b>{tarea.titulo}</b></li>
  )
}

export default componenteTarea;