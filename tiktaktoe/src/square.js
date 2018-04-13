import React, { Component } from 'react';


//blueprint for one square - board.js creates nine of these squares
class Square extends Component {


  render() {
    return(
      <div  className="Square" onClick={this.props.onClick}> {this.props.content}
      </div>
    )

  }
}




export default Square
