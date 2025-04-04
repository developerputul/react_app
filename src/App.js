import React from 'react';
 class App extends React.Component {

  state = {
    email: "",
    password: "",
   
  }
  formSubmit = (e) => {
    e.preventDefault();
    console.log(this.state.email, this.state.password);
   
  }
 

  render() {
    return (
      <div className='App'>
        <h1>{this.state.email}</h1>
        <h1>{this.state.password}</h1>

        <div>
          <form onSubmit={this.formSubmit}>
            <div class="form-group" style={{marginLeft:200}}>
                <label>User Name:</label> <br></br>
                <input type='email' name='email' onChange={(event)=>{this.setState({email:event.target.value})}}></input><br></br>
                <input type='password' name='password'onChange={(event)=>{this.setState({password:event.target.value})}}></input><br></br>
                
                <button type='submit'>Submit</button>
            </div>
          </form>
        </div>
      </div>
    )
  }
 }
export default App;
