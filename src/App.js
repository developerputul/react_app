import React from 'react';
 class App extends React.Component {

  state = {
    email: "",
    password: "",
    emailError: "",
    passwordError: "",
   
  }

  validate(){
    if(!this.state.email>0 && !this.state.password>0){
      this.setState({emailError: "Email and Password required"})

    }else if(!this.state.email>0){
      this.setState({emailError: "Email Required"})
    }else if(!this.state.password>0){
      this.setState({passwordError: "Password Required"})
    }else{
      return true; 
    }
  }
  formSubmit = (e) => {
    e.preventDefault();
    if(this.validate()){
      alert("Form Submit Done");
    }
    // console.log(this.state.email, this.state.password, this.state.emailError, this.state.passwordError);
   
  }
 

  render() {
    return (
      <div className='App'>
        <h1>Login Panel</h1>
        <h1>{this.state.password}</h1>

        <div>
          <form onSubmit={this.formSubmit}>
            <div class="form-group" style={{marginLeft:200}}>
                <label>Email:</label> <br></br>

                <input type='email' name='email' onChange={(event)=>{this.setState({email:event.target.value})}}></input><br></br>
                <strong style={{color: "red"}}>{this.state.emailError}</strong><br></br>

                <label>Password:</label> <br></br>
                <input type='password' name='password'onChange={(event)=>{this.setState({password:event.target.value})}}></input><br></br>
                <strong style={{color: "red"}}>{this.state.passwordError}</strong><br></br>

                <button type='submit'>Submit</button>
            </div>
          </form>
        </div>
      </div>
    )
  }
 }
export default App;
