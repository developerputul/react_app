import React from 'react';
 class App extends React.Component {

  state = {
    username: ""
  }
  Changedata = (e) => {
      let val = e.target.name; //username
      let myvalue = e.target.value; //GettingValue
      this.setState({[val]: myvalue}); //value set on the state
  }

  render() {

    return (
      <div className='App'>
        <h1>Hello {this.state.username}</h1>

        <div>
          <form>
            <div class="form-group" style={{marginLeft:200}}>
                <label>User Name:</label> <br></br>
                <input type='text' name='username' onChange={this.Changedata}></input><br></br>
                <button type='submit'>Submit</button>
            </div>
          </form>
        </div>
      </div>
    )
  }
 }
export default App;
