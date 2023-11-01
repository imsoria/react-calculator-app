import React from 'react';
import '../style/buttonclear.css'

 const BotonClear = (props) => (
    <div className='clear-button' onClick={props.manageClear}>
      {props.children}
    </div>
    );

export default BotonClear;