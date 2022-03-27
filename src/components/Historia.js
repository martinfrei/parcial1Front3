import React, { Component } from 'react';

class Historia extends Component {
    
    componentWillUnmount(){
        alert('Fin')
        
    }
    

    render() {
        
        return (
            <>
            <div className='historia'>
                <h2>{this.props.texto}</h2>
                
            </div>
            <div className='opcion'>
                <div className='contenedor-opciones'>
                    <button className='botones opciones' id="A" onClick={()=>this.props.sumarContador("A")} >A</button>
                    <p className='opciones'>{this.props.opcionA}</p>
                </div>
                <div className='contenedor-opciones'>
                    <button className='botones opciones' id="B" onClick={()=>this.props.sumarContador("B")} >B</button>
                    <p className='opciones'>{this.props.opcionB}</p>
                </div>
                
                </div>
                </>
        );
    }
}

export default Historia;
