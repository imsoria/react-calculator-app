import React from 'react';
import '../style/button.css'

function Boton(props) {
  const itsOperator = VALUE => {
    return isNaN(VALUE) && (VALUE !== '.') &&(VALUE !== '=');
  }
   
    return(
        <div className={`container-button ${itsOperator(props.children) ? 'operator': ''}`.trimEnd()}  
        onClick={()=> props.manageClick(props.children)} > {/*Trim end es para quitar los espacios al final, esta function le asigna una clase a los divs dependiendo de si es un numero o un operador*/}
            {props.children}
        </div>
    )
}
/*tambien se puede usar una funcion if else en lugar de la funcion de arriba*/
export default Boton;
