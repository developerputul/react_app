import React, { Component } from "react";
class Check extends Component{
    // constructor (props){
    //     super(props);
    //     this.state={
    //         men:[
    //             {name:'Putul', age:25},
    //             {name:'Tamim', age:30},
    //             {name:'Amit', age:28},
    //             {name:'David', age:32},
 
    //         ]
    //     }
    // }

    state = {
        name: 'Putul',
    }

    changeName = (e) => {
        this.setState({name: e.target.value});
    }

    render(){
       return <div>
        <input type="text" onChange={this.changeName} value={this.state.name}></input>
            <h1>Hello {this.state.name}</h1>
        </div>
    }
}

export default Check;