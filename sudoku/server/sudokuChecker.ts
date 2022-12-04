
export default function sudokuChecker(_boardState: number[][]) {
  const boardState = [...[_boardState][0]]
  const validNumbersControl = [1, 2, 3, 4, 5, 6, 7, 8, 9]

  let validBoard = true
  let validTotal = 45 // total sum of each row, col, and 3x3 cube

  boardState.forEach((row: any, index: any) => {
    let colResult = 0
    // check each row total is 45
    let rowResult: number = row.reduce((total: number, currentValue: number) => total + currentValue)
    if (rowResult != validTotal) validBoard = false

    // check each col total is 45
    row.forEach((val: number, subIndex: number) => {
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

  const boardValidationState = (validBoard) ? "board is valid" : "board is invalid"

  // check each box,returns true or false
  return boardValidationState
}
