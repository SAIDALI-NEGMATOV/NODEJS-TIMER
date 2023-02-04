import React, { Component } from 'react';
import Time from './Components/Timer/Time';
import './App.css'

class App extends Component {
  render() {
    return (
      <div className="Timer">
        <Time/>
      </div>
    );
  }
}

export default App;
