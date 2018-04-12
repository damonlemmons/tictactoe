import React, { Component } from 'react';
import Square from './square';
import './Board.css';

class Board extends Component {
  constructor(props) {
    super(props)
    this.state = {
      board: [0,0,0,0,0,0,0,0,0],
			count: 0
    }
  }

	handleClick(e){
		let index = e.target.innerHTML
		let newCount = this.state.count	+ 1
		let newBoard = this.state.board
		if(newCount%2!==0 ){
				newBoard[index] = 1
		} else {
				newBoard[index] = 2
		}
		this.setState({count: newCount, board: newBoard})		// update count attribute to 1
		console.log("index: " + index)
		console.log("count " + this.state.count)
		console.log("newBoard: "+ newBoard)
		console.log("board: " + this.state.board)

		//console.log(e.target);
		// TODO: handleClick should update state for the square that was clicked and advance the turn to the next player
	}


  render() {
		let thisBoard = this.state.board
		//console.log(this.state.board)
		let squares = thisBoard.map((square,index)=>{
    	return (
					<Square content={index} onClick={this.handleClick.bind(this)} />
				)
				 //console.log(squares)
			})
			return(
						<div id="Board">
							{ squares }
						</div>
					)
				}




}
export default Board;


/*
import React, {Component} from 'react'
import Square from '../components/Square'
import './Board.css'

class Board extends Component {
	constructor(props) {
		super(props)
		this.state = {
			// set up an in State representation of the game board, use it to track changes as the game is played
			board: [0,0,0,0,0,0,0,0,0],
			// keep track of which player's turn it is
			count: 0
		}
		// TODO: : The game should reset to an unplayed state when a player wins
	}

	// handleClick takes in a click event and logs the target
	handleClick(e){
		console.log(e.target);
		// TODO: handleClick should update state for the square that was clicked and advance the turn to the next player
	}

	render() {
		// create a variable "board" to contain a copy of the board object in state
		let { board } = this.state

		// map over each item in board, creating a new square element (instance of the Square class/component) each time
		let squares = board.map(function(square, index){
			return(
				<Square content={index} onClick={this.handleClick} />
			)
		})

		//TODO: The onClick functionatlity for each square needs to be built out.

		return(
			<div id="Board">
				{ squares }
			</div>
		)
	}
}

export default Board
*/
