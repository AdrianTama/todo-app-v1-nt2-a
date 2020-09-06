import React, { Component } from "react";
import Todo from './components/todo'
import "./style.css";


let id = 0;

export default class TodoApp extends Component{

  constructor(){
    super();

    this.state = {
      tareas:[]
    }
  }


  /**
   * Render principal
   */
  render(){
    return (
      <div>
        <h1> TodoApp</h1>
        <div> Cantidad tareas: {this.state.tareas.length}</div>
        <div>
          Tareas por hacer: {
            // Array filter
            this.state.tareas.filter(tarea => (tarea.checked == false)).length
          }
        </div>
        <button onClick={ () => ( this.addTodo() ) }> Agregar tarea</button>
        <ul>
          {
            this.state.tareas.map(todo => (
              <Todo 
                tarea={todo} 
                // Paso un prop al componente Todo, para que se active del lado del checkbox
                onToggle={ () => this.toggleTodo(todo.id)} 

                // Paso un prop al componente Todo, para que se active del lado del boton borrar
                onDelete={ () => this.removeTodo(todo.id)}
              />
            ))
          }
        </ul>
        
      </div>
    )
  }

  /**
   * Agrego Tarea
   */
  addTodo(){
    const titulo = prompt("Que tarea queres agregar?");

    const nuevaTarea = {
      id: id++,
      titulo: titulo,
      checked: false
    }

    this.setState({
      tareas: [
        ...this.state.tareas,
        nuevaTarea
      ]
    })
  }

  //Callback toggleTodo: actualizo el estado de la tarea con !checked
  toggleTodo(id){
    console.log("Aqui se supone que cambio la tarea ID: ", id)

    this.setState({
      tareas: this.state.tareas.map(tarea => {
        if (tarea.id !== id) return tarea

        return {
          id: tarea.id,
          titulo: tarea.titulo,
          // Cambio valor del booleano checked
          checked: !tarea.checked
        }
      })
    })

  }

  //Callback removeTodo: actualizo el estado de la tarea filtrando las tareas con respecto al ID pasado por parametro.
  removeTodo(id){
    console.log("Aqui elimino la tarea ID: ", id)

    this.setState({
      // Hago un filter de las tareas y retorno toda tarea cuto id sea distinto al bsucado
      tareas: this.state.tareas.filter(tarea => {
        return (tarea.id !== id)
      })
    })
  }

}
