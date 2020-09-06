import React from 'react'



const Todo = (props) => {

  //console.log(props.onToggle.toString());

  return(
    <li>
      <input type="checkbox" checked={props.tarea.checked} onChange={props.onToggle} />
      <span>{props.tarea.titulo}</span>
      <button onClick={props.onDelete}> Eliminar</button>
    </li>
  )
}

export default Todo;


