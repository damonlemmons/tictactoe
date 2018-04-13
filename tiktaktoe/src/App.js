import React, { Component } from 'react';
import './App.css';
import Results from './results';
import Board from './board';




class App extends Component {
  constructor(props){
    super(props)

  }
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Tik Tak Toe</h1>
        </header>
        <br></br>
        <Board whoWon/>

      </div>

    );
  }

}

export default App;
