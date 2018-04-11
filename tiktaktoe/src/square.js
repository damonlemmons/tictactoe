import React, { Component } from 'react';

class Square extends Component {
  handleClick(event){
    event.preventDefault()
  }

  render() {
    return(
      <button className = "button" onClick={this.handleClick.bind(this)}>
        <input type='button' value='' />
      </button>
    )
  }
}

















export default Square
