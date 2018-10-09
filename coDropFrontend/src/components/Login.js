import React, { Component } from 'react';
import '../App.css';
import axios from 'axios';

class Login extends Component {
  constructor(props){
    super(props);
    this.state = { username: "", password: "", email: ""};
  }

  handleFormSubmit = (event,props) => {
    event.preventDefault();
    axios.post(process.env.BASE_URL+"/login")
    // console.log("this is the current state when creating a task ------------------" , theTask)
    .then( (response) => {
      console.log("this is the current state when creating a task ------------------" , response)
        // this.props.getData();
        this.setState({username: "", password: "", email: ""});
    })
    .catch( error => console.log('=-=-=-=-=-=-=-=-=-=-=-',error) )
    // console.log(this.state);
    
  }

  handleChange = (event) => {  
    const {name, value} = event.target;
  //   ^ this is just fancy syntax for the 2 lines below
  //   const name = event.target.name;
  //   const value = event.target.value;
  // const projectID = this.props.projectId
    this.setState({[name]: value});
}


  render() {
    return (
      <div className="Login">
        <div>
        <form onSubmit={this.handleFormSubmit}>
          <label>Username</label>
          <input type="text" name="username" value={this.state.username} onChange={e => this.handleChange(e)} className="roundInput x" />
          <br/>
          <label>Password</label>
          <input type="password" name="password" value={this.state.password} onChange={e => this.handleChange(e)} className="roundInput z"/>
          <br/>
          <button className="buttonz xyz">Login</button>
        </form>
        </div>
      </div>
    );
  }
}
export default Login;