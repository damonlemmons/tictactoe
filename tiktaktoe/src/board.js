import React, { Component } from 'react';
import Square from './square';
import './Board.css';



class Board extends Component {
  constructor(props) {
    super(props)
    this.state = {
      board: ["", "", "", "", "", "", "", "", ""],
			count: 0
    }
  }

//this function resets the board after the game
 reset(){
	this.setState({board: ["", "", "", "", "", "", "", "", ""], count: 0})
}

  //this function takes in a square object and the index of that square
	handleClick(element, index){
		let newCount = this.state.count	+ 1
		let newBoard = this.state.board

    //this if statement marks x or o based on whether the click is an odd or an even click
		if(newCount%2!==0 ){
			if (newBoard[index] === ""){
				newBoard[index] = "x"
			  element = "X"
        //updates the count and the board array to store x's and o's
				this.setState({count: newCount, board: newBoard})
			} else {
        //prevents a square from being clicked twice
				alert ("that square has been played you moron!!!!!")
			}
      //same as above
		} else {
				if (newBoard[index] ===""){
				newBoard[index] = "o"
				element = "O"
				this.setState({count: newCount, board: newBoard})
				} else {
				alert ("that square has been played you moron!!!!!")
			}
		}
	}


  render() {
    //deciding who's the winner or if it's a tie
		let winner
		var crappyCounter = this.state.count
		console.log(crappyCounter)
    // if all nine squares have been clicked with no winner, alerts players of a tie and resets the game.
		if (crappyCounter ===  9){
      alert("Both of you delinquents are losers")
      this.reset()
      //if there's a winner, alert the winner and resets
    } else {
      (crappyCounter <= 9 && crappyCounter >= 3)
    {
			calcWinner(this.state.board)
    }	if( winner === "x" || winner ==="o"){
					alert( "The winner winner chicken dinner: " + winner)
        this.reset()
		}
  }
  //this function identifies the winning combinations of squares.
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

     //compares our board array to winning combination arrays to see if there's a winner and return who is the winner (x or o)
		 for (let i = 0; i < lines.length; i++) {
		 	let [a, b, c] = lines[i];
		 	if (squares[a]  && squares[a] === squares[b] && squares[a] === squares[c]) {
			//	console.log(squares[a])
				winner = squares[a]
				return winner;
		 	}
		 }
		 return null;
		 }


     //create a board of nine square objects using the map function.
		let thisBoard = this.state.board
		//console.log(thisBoard)
		//console.log(this.state.board)
		let squares = thisBoard.map((square,index)=>{
    	return (
        //return object of the sqaure class
					<Square content={this.state.board[index]}
            //onclick is passing the sqaure object and the index of the square to the handleClick function.
           onClick={this.handleClick.bind(this,square,index)}/>
				)
			})
      //returning the array of square objects
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
