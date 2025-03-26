import React, { Component } from "react";
import { render } from '@testing-library/react';

class Learning extends Component{
    render(props){
        return <h1>I Love {props.name} </h1>
    }
}

export default Learning; 
