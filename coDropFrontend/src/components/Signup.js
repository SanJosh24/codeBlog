import React, { Component } from 'react';
import '../App.css';
import axios from 'axios';

class Signup extends Component {
  constructor(props){
    super(props);
    this.state = { username: "", password: "", email: ""};
  }

  handleFormSubmit = (event,props) => {
    event.preventDefault();
    
    // const {title, description} = this.state;

    var theTask = {
      username: this.state.username,
      password: this.state.password,
      email: this.state.email
    }
   
    axios.post("http://localhost:5000/api/signup", {theTask})
    .then( () => {
      console.log("this is the current state when creating a task ------------------" , theTask)
        // this.props.getData();
        this.setState({username: "", password: "", email: ""});
    })
    .catch( error => console.log(error) )
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
      <div className="Signup">
          
        <h1>Signup page!</h1>
        <form onSubmit={this.handleFormSubmit}>
          <label>Username</label>
          <input type="text" name="username" value={this.state.username} onChange={e => this.handleChange(e)}/>
          <label>Password</label>
          <input type="password" name="password" value={this.state.password} onChange={e => this.handleChange(e)}/>
          <label>Email</label>
          <input type="text" name="email" value={this.state.email} onChange={e => this.handleChange(e)}/>

          <button>Signdup</button>
        </form>
      </div>
    );
  }
}
export default Signup;