import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import '../App.css';

class Navbar extends Component {
  render() {
    return (
      <div className="Navbar">
        <nav className="navbar navi">
          <img alt="Brand" src="/CoDrop.jpg" />
          <Link to ="/">
          <button className="buttonz">Home</button>
          </Link>
          <Link to = "/blogs">
          <button className="buttonz">Blogs</button>
          </Link>
          <Link to = "/clans">
          <button className="buttonz">Clans</button>
          </Link>
          <Link to = "/login">
          <button className="buttonz">Login</button>
          </Link>
          <Link to = "/signup">
          <button className="buttonz">Signup</button>
          </Link>
        </nav>
      </div>
    );
  }
}
export default Navbar;