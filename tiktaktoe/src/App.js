import React, { Component } from 'react';
import './App.css';
import Board from './board';




class App extends Component {
  
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Tik Tak Toe</h1>
        </header>
        <br></br>
        <Board />

      </div>

    );
  }

}

export default App;
