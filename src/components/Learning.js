import React, { Component } from "react";
import './Learning.css'
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
    // console.log('Hello Easy Learning');
    // alert('Welcome to Easy Learning');
    // this.state.fruits[0] = 'Realme';
    this.setState({
        fruits:[
            {name: 'Oppo', weight: '120gm'},
            {name: 'Samgsung', weight: '20gm'},
            {name: 'Realme', weight: '40gm'},
            {name: 'Vivo', weight: '300gm'},
           ]
    })
}
    render(){

        const style = {
            backgroundColor: 'orange',
            border:'2px solid maroon',
            padding: '10px',
            font: 'inherit',
            cursor: 'pointer',
        }
        return (
            <div>
            <button style={style} onClick={this.clickHandler}>Click Me</button>
            <h1 className="Card">Fruit Name is {this.state.fruits[0].name}</h1>
            <h1 className="Card">Fruit Name is {this.state.fruits[1].name}</h1>
            <h1 className="Card">Fruit Name is {this.state.fruits[2].name}</h1>
            <h1 className="Card">Fruit Name is {this.state.fruits[3].name}</h1>
            
         </div>
        );
    }
}

export default Learning; 
