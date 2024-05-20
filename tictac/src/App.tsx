import React, { useState } from 'react';
import './App.css';

function App() {
  const [board, setBoard] = useState(Array(9).fill(null)); // Represents the Tic Tac Toe board
  const [xIsNext, setXIsNext] = useState(true); // Indicates whether it's X's turn or not

  // Function to handle a click on a square
  const handleClick = (index) => {
    // If the square is already filled or the game is over, return early
    if (calculateWinner(board) || board[index]) {
      return;
    }

    // Create a copy of the current board array
    const newBoard = [...board];

    // Update the square with 'X' or 'O' depending on whose turn it is
    newBoard[index] = xIsNext ? 'X' : 'O';

    // Update the board state and toggle the player
    setBoard(newBoard);
    setXIsNext(!xIsNext);
  };

  // Function to determine the winner of the game
  const calculateWinner = (squares) => {
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
      const [a, b, c] = lines[i];
      if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
        return squares[a];
      }
    }
    return null;
  };

  // Function to render a square
  const renderSquare = (index) => {
    return (
      <button className="square" onClick={() => handleClick(index)}>
        {board[index]}
      </button>
    );
  };

  // Determine the winner or if the game is still ongoing
  const winner = calculateWinner(board);
  const status = winner ? `Winner: ${winner}` : `Next player: ${xIsNext ? 'X' : 'O'}`;

  return (
    <div className="game">
      <div className="game-board">
        <div className="board-row">
          {renderSquare(0)}
          {renderSquare(1)}
          {renderSquare(2)}
        </div>
        <div className="board-row">
          {renderSquare(3)}
          {renderSquare(4)}
          {renderSquare(5)}
        </div>
        <div className="board-row">
          {renderSquare(6)}
          {renderSquare(7)}
          {renderSquare(8)}
        </div>
      </div>
      <div className="game-info">
        <div>{status}</div>
      </div>
    </div>
  );
}

export default App;
