import React, { Component } from 'react';
import Square from './square';
import './Board.css';
import './results'

class Board extends Component {
  constructor(props) {
    super(props)
    this.state = {
      board: ["", "", "", "", "", "", "", "", ""],
			count: 0
    }
  }


	handleClick(element, index){
		let squareNum = index
		let newCount = this.state.count	+ 1
		let newBoard = this.state.board

		if(newCount%2!==0 ){
			if (newBoard[index] ==""){
				newBoard[index] = "x"
				element = "X"
				this.setState({count: newCount, board: newBoard})
			} else {
				alert ("that square has been played you moron!!!!!")
			}
		} else {
				if (newBoard[index] ==""){
				newBoard[index] = "o"
				element = "O"
				this.setState({count: newCount, board: newBoard})
				} else {
				alert ("that square has been played you moron!!!!!")
			}
		}


	}

		//console.log(e.target);
		// TODO: handleClick should update state for the square that was clicked and advance the turn to the next player


  render() {
		var winner
		var crappyCounter = this.state.count
		console.log(crappyCounter)


		if (crappyCounter <= 9 && crappyCounter >= 3){
			calcWinner(this.state.board)
				if( winner === "x" || winner ==="o"){
					alert( "The winner is: " + winner)
					this.state
				}
		}

		function calcWinner(squares) {
		 const lines = [
		 	[0, 1, 2],
		 	[3, 4, 5],
		 	[6, 7, 8],
		 	[0, 3, 6],
		 	[1, 4, 7],
		 	[2, 5, 8],
		 	[0, 4, 8],
		 	[2, 4, 6],
		 ];
		 for (let i = 0; i < lines.length; i++) {
		 	let [a, b, c] = lines[i];
		 	if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
				console.log(squares[a])
				winner = squares[a]
				return winner;
		 	}
		 }
		 return null;
		 }



		let thisBoard = this.state.board
		console.log(thisBoard)
		//console.log(this.state.board)
		let squares = thisBoard.map((square,index)=>{
    	return (

					<Square content={this.state.board[index]} onClick={this.handleClick.bind(this,square,index)}/>
				)
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
