import React, { Component } from 'react';

class Square extends Component {
  constructor(props) {
    super(props)
    this.state = {

    }
  }


  render() {
    return(
      <div  className = "Square" onClick={this.props.onClick}>{this.props.content}
      </div>
    )
  }
}




export default Square

/*
import React, {Component} from 'react'

class Square extends Component {
	render() {
		return(
			<div>{this.props.content}</div>
		)
	}
}

export default Square  */
