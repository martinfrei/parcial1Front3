import React, { Component } from 'react'

export default class Historial extends Component {
    renderizarHistorial(){
        let listaHistorial=this.props.opcionesSeleccionadas.slice(0,-1)
      
        return listaHistorial.map((opcion,i)=><li key={i}>{opcion.toUpperCase()}</li>)
    }
    
    
  render() {
    
    return (
      <div>
          <p>Seleccion anterior {this.props.opcionesSeleccionadas[this.props.opcionesSeleccionadas.length-1]}</p>
          <p>Historial de opciones elegidas: </p>
          <ul>
              {this.renderizarHistorial()}
          </ul>
          </div>
    )
    }
}

