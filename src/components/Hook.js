import React, { useState } from "react";
import { render } from '@testing-library/react';

const Hook = props => {
    const[fruiteState, setFruiteState] = useState({
            fruits:[
                {name: 'Mango', weight: '120gm'},
                {name: 'Orange', weight: '20gm'},
                {name: 'Apple', weight: '40gm'},
                {name: 'Jackfruit', weight: '300gm'},
            ]
        });
    
       const clickHandler = () => {

            setFruiteState({
                fruits:[
                    {name: 'Oppo', weight: '120gm'},
                    {name: 'Samgsung', weight: '20gm'},
                    {name: 'Realme', weight: '40gm'},
                    {name: 'Vivo', weight: '300gm'},
                   ]
            })
        }
   
        return (
            <div>
            <button onClick={clickHandler}>Click Me</button>
            <h1>Fruit Name is {fruiteState.fruits[0].name}</h1>
            <h1>Fruit Name is {fruiteState.fruits[1].name}</h1>
            <h1>Fruit Name is {fruiteState.fruits[2].name}</h1>
            <h1>Fruit Name is {fruiteState.fruits[3].name}</h1>
            
         </div>
        );
}

export default Hook; 

