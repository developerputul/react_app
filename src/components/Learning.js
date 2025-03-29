import React, { Component } from "react";
import { render } from '@testing-library/react';

class Learning extends Component{

    constructor(props) {
        super(props);

    this.state = {
       fruits:[
        {name: 'Mango', weight: '120gm'},
        {name: 'Orange', weight: '20gm'},
        {name: 'Apple', weight: '40gm'},
        {name: 'Jackfruit', weight: '300gm'},
       ]
    }
}

clickHandler = () => {
    console.log('Hello Easy Learning');
    alert('Welcome to Easy Learning');
}
    render(){
        return (
            <div>
                <button onClick={this.clickHandler}>Click Me</button>
            <h1>Fruit Name is {this.state.fruits[1].name}</h1>
            
         </div>
        );
    }
}

export default Learning; 
