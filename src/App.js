import data from "./components/data.json";
import Historia from "./components/Historia";
import React, { Component } from 'react'
import Historial from "./components/Historial";

export default class App extends Component {
  constructor(){
    super();
    this.state={
      contador:0,
      opcionesHistorial:[],
    }
  }
  
  sumarContador=(opcionParam)=>{
    //Aca agregamos la opcion que recibimos por parametro al array de opcionesHistoral
    this.setState({opcionesHistorial:this.state.opcionesHistorial.concat(opcionParam)})
    // Aca vamos comparando la opcion que recibimos por parametro y donde nos encontramos en el json para agregarle al contador el numero adecuado
    if(opcionParam==="B" && data[this.state.contador].id.charAt(1)==="a"){
      this.setState({contador:this.state.contador+3})
    }
    else if((opcionParam==="B" && data[this.state.contador].id.charAt(1)==="b") || (opcionParam==="A" && data[this.state.contador].id.charAt(1)==="a")  ){
      this.setState({contador:this.state.contador+2})
    }
    else if((opcionParam==="B" && data[this.state.contador].id.charAt(1)==="")){
      this.setState({contador:this.state.contador+2})
    }
    else if((opcionParam==="A" && data[this.state.contador].id.charAt(1)==="")){
      this.setState({contador:this.state.contador+1})
    }
    else{
      this.setState({contador:this.state.contador+1})
    }
  }
  render() {
    return (
      <div className="layout">
        {this.state.contador < data.length ? <>
        <Historia sumarContador={this.sumarContador} texto={data[this.state.contador].historia} opcionA={data[this.state.contador].opciones.a} opcionB={data[this.state.contador].opciones.b}/>
        <Historial opcionesSeleccionadas={this.state.opcionesHistorial}/>
        </>
        : 
        <h2 className="mensaje-final">Muchas gracias por haber jugado, reinicia la pagina para volver a empezar</h2>  }
      </div>
    )
  }
}

