import data from "./components/data.json";
import Historia from "./components/Historia";
import React, { Component } from 'react'
import Historial from "./components/Historial";

export default class App extends Component {
  constructor(){
    super();
    this.state={
      historial:[],
      contador:0,
      opciones:[],
    }
  }
  
  sumarContador=(opcionParam)=>{
    this.setState({opciones:this.state.opciones.concat(opcionParam)})
    console.log(data[this.state.contador].id.charAt(1))
    console.log(opcionParam);
    // console.log(opcionParam)
    if(opcionParam==="B"&& data[this.state.contador].id.charAt(1)==="a"){
      this.setState({contador:this.state.contador+3})
      // console.log("opcParam B y data A");
    }
    else if((opcionParam==="B" && data[this.state.contador].id.charAt(1)==="b") || (opcionParam==="A" && data[this.state.contador].id.charAt(1)==="a")  ){
         this.setState({contador:this.state.contador+2})
        //  console.log("opcParam B y B o A y A");
    }
    else if((opcionParam==="B" && data[this.state.contador].id.charAt(1)==="")){
        this.setState({contador:this.state.contador+2})
        // console.log("opcParam B y '' ");
    }
    else if((opcionParam==="A" && data[this.state.contador].id.charAt(1)==="")){
        this.setState({contador:this.state.contador+1})
        // console.log("opcParam A y '' ");
    }

    else{
      this.setState({contador:this.state.contador+1})
      // console.log("+1 ");
    }
  }
  render() {
    // console.log("nuevo "+this.state.contador)
   
     
    return (
      <div className="layout">
        {this.state.contador < data.length ? <>
        <Historia sumarContador={this.sumarContador} texto={data[this.state.contador].historia} opcionA={data[this.state.contador].opciones.a} opcionB={data[this.state.contador].opciones.b}/>
        <Historial opcionesSeleccionadas={this.state.opciones}/>
        </>
        : <h2 className="mensaje-final">Muchas gracias por haber jugado, reinicia la pagina para volver a empezar</h2>  }
      </div>
    )
  }
}

