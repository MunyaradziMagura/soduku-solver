import type { Component } from 'solid-js';
import Board from './Components/Board'
import styles from './App.module.css';

const App: Component = () => {
  let boardState = [
    [7, 2, 6, 3, 5, 9, 4, 1, 8],
    [4, 5, 8, 1, 6, 7, 2, 3, 9],
    [9, 1, 3, 8, 2, 4, 7, 6, 5],
    [1, 6, 2, 9, 7, 5, 3, 8, 4],
    [3, 9, 4, 2, 8, 6, 1, 5, 7],
    [8, 7, 5, 4, 1, 3, 9, 2, 6],
    [5, 3, 7, 6, 4, 1, 8, 9, 2],
    [6, 8, 9, 7, 3, 2, 5, 4, 1],
    [2, 4, 1, 5, 9, 8, 6, 7, 3]
  ]
  function checkSoduku() {
    let validBoard = true
    let validTotal = 45 // total sum of each row, col, and 3x3 cube

    boardState.forEach((row, index) => {
      let colResult = 0
      // check each row total is 45
      let rowResult: number = row.reduce((total, currentValue) => total + currentValue)
      if (rowResult != validTotal) validBoard = false

      // check each col total is 45
      row.forEach((val, subIndex) => {
        colResult += boardState[subIndex][index]

        if (index % 3 == 0 && subIndex % 3 == 0) {
          console.log(threebyThree(boardState, subIndex, index))

        }
      })
      if (colResult != validTotal) validBoard = false
    })

    // check each box
    console.log(validBoard)
  }

  function threebyThree(_grid: any, _x: number, _y: number) {

    // three by three grid 
    let grid3x3 = []
    // loop through a three by three 
    for (let i = 0; i < 3; i++) {
      let tempGrid = [] // stores one by three grid 
      for (let j = 0; j < 3; j++) {
        tempGrid.push(_grid[_y + i][_x + j])
      }
      grid3x3.push(tempGrid)
    }
    return grid3x3;
  }
  return (
    <div>
      <Board boardState={boardState} />
      <button onClick={() => checkSoduku()}>check</button>
    </div>
  );
};

export default App;
