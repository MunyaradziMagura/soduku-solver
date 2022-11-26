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

    // check each row 
    boardState.map(row => {
      let result: number = row.reduce((total, currentValue) => total + currentValue)
      if (result < 45) validBoard = false
    })
    // check each col 

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
