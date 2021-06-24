import React from 'react';
 

export default function HookSquare(props) {
     return(
        <button className="square" onClick={props.onClick}>
            {props.value}
        </button>
     );
           
}

 