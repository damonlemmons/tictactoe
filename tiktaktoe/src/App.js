import React, { Component } from 'react';
import './App.css';
import Results from './results';
import Square from './square';
import Board from './board';



class App extends Component {
  constructor(props){
    super(props)
    this.state = {
      result: 'who won?'
    }
  }
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Tik Tak Toe</h1>
        </header>
        <Results result={this.state.result}/>
        <br></br>
        <Board />

      </div>

    );
  }
}

export default App;
