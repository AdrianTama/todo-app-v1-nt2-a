import React, {Component} from "react";
import "./style.css";
import Tarea from './components/tarea'

export default class App extends Component{

  constructor(){
    super();
    this.state = {
      tareas:[
        {
          titulo: "Tarea Nº 1",
          checked: false
        },
        {
          titulo: "Tarea Nº 2",
          checked: false
        }
      ]
    }
  }

  render(){
    console.log(this.state.tareas)
    return (
      <div>
        
        <ul class="list_tareas">
          {
            this.state.tareas.map(item => {
              // Estoy recorriendo el array de tarea para devolver el componente Tarea
              return (
                <Tarea tarea={item} />
              )
            })
          }
        </ul>
        <button onClick={() => (this.agregarTarea())}>Agregar Tarea</button>
      </div>
    )
  }

  agregarTarea(){
    const nuevaTarea = {
      titulo: `Tarea Nº ${this.state.tareas.length + 1}`,
      checked: false
    }

    this.setState({
      tareas: [
        ...this.state.tareas,
        nuevaTarea
      ]
    })

  }




}