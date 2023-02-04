import React, { Component } from 'react';
import './Nav.css'

class Nav extends Component {
    render() {
        return (
            <nav>
               <div className="left">
                <a href="#">Why Xref</a>
                <a href="#">Solutions</a>
                <a href="#">Platform</a>
                <a href="#">Resources</a>
                <a href="#">Pricing</a>
               </div>
               <div className="right">
                <a href="#">sign in</a>
                <button><a href="#">Request a demo</a></button>
               </div>
            </nav>
    )
  }
}

export default Nav;
