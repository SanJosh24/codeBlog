import React, { Component } from 'react';
import '../App.css';

class Navbar extends Component {
  render() {
    return (
      <div className="Navbar">
        <nav className="navbar navi">
          <img alt="Brand" src="/CoDrop.jpg" />
          <button>Home</button>
          <button>Blogs</button>
          <button>Clans</button>
          <button>Login</button>
          <button>Signup</button>
        </nav>
      </div>
    );
  }
}
export default Navbar;