import type { Component } from 'solid-js';
import Board from './Components/Board'
import styles from './App.module.css';

const App: Component = () => {
  let boardState = [
    [1, 2, 3, 4, 5, 6, 7, 8, 9],
    [1, 2, 3, 4, 5, 6, 7, 8, 9],
    [1, 2, 3, 4, 5, 6, 7, 8, 9],
    [1, 2, 3, 4, 5, 6, 7, 8, 9],
    [1, 2, 3, 4, 5, 6, 7, 8, 9],
    [1, 2, 3, 4, 5, 6, 7, 8, 9],
    [1, 2, 3, 4, 5, 6, 7, 8, 9],
    [1, 2, 3, 4, 5, 6, 7, 8, 9],
    [1, 2, 3, 4, 5, 6, 7, 8, 9]
  ]
  function checkSoduku() {
    let validBoard = true

    boardState.forEach((row, index) => {
      // check each row 
      let rowResult: number = row.reduce((total, currentValue) => total + currentValue)
      // let colResult: number = 

      console.log(row)
      if (rowResult < 45) validBoard = false
    })
    // check each col 

    console.log(boardState[8][8])
    // check each box

    console.log(validBoard)
  }
  return (
    <div>
      <Board boardState={boardState} />
      <button onClick={() => checkSoduku()}>check</button>
    </div>
  );
};

export default App;
