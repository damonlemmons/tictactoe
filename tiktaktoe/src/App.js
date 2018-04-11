import React, { Component } from 'react';
import './App.css';
import Square from './square';



class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Tik Tak Toe</h1>
        </header>
        <Square />
      </div>

    );
  }
}

export default App;
