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
    const validNumbersControl = [1, 2, 3, 4, 5, 6, 7, 8, 9]

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

        // check if we are at an intersection of 3x3 within the grid
        if (index % 3 == 0 && subIndex % 3 == 0) {
          const threeByThreeBoard = threebyThree(boardState, subIndex, index).flat()

          // convert the array into a 1d array for validation. then check if all elements within the array are equal to the validNumbersControl array
          const threeXThreeValidation = threeByThreeBoard.every((element) => {
            if (validNumbersControl.includes(element)) return true
            return false
          });

          if (!threeXThreeValidation) validBoard = false
          // check that the 3x3 grid is not larger or smaller than 45
          if (threeByThreeBoard.reduce((total, currentValue) => total + currentValue) != validTotal) validBoard = false

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
    return grid3x3; // returns 3x3 array
  }
  return (
    <div>
      <Board boardState={boardState} />
      <button onClick={() => checkSoduku()}>check</button>
    </div>
  );
};

export default App;
