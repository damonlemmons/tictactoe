import React, { Component } from 'react';
import board from './board'

class Square extends Component {
  constructor(props) {
    super(props)
    this.state = {
      clicked:"no",
      squareNum:""
    }
}

    handleClick(event){
    event.preventDefault()
    this.setState({clicked:"yes"})
  }

  render() {
    return(
      <button className = "button" onClick={this.handleClick.bind(this)}>
        {this.state.clicked}
      </button>
    )
  }
}

















export default Square
