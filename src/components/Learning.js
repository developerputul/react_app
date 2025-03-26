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
    render(){
        return (
            <div>
            <h1>Fruit Name is {this.state.fruits[1].name}</h1>
            <h1>Fruit Name is {this.state.fruits[2].name}</h1>
            <h1>Fruit Name is {this.state.fruits[3].name}</h1>
         </div>
        );
    }
}

export default Learning; 
