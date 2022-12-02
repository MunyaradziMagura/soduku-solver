import { Component, createSignal } from 'solid-js';
import Board from './Components/Board'
import styles from './App.module.css';
import sudokuChecker from '../server/sudokuChecker'
const App: Component = () => {
  const [valid, setValid] = createSignal("false")
  const [editableBoard, setEditableBoard] = createSignal(true)
  // let boardState = [
  //   [7, 2, 6, 3, 5, 9, 4, 1, 8],
  //   [4, 5, 8, 1, 6, 7, 2, 3, 9],
  //   [9, 1, 3, 8, 2, 4, 7, 6, 5],
  //   [1, 6, 2, 9, 7, 5, 3, 8, 4],
  //   [3, 9, 4, 2, 8, 6, 1, 5, 7],
  //   [8, 7, 5, 4, 1, 3, 9, 2, 6],
  //   [5, 3, 7, 6, 4, 1, 8, 9, 2],
  //   [6, 8, 9, 7, 3, 2, 5, 4, 1],
  //   [2, 4, 1, 5, 9, 8, 6, 7, 3]
  // ]
  let initialBoard = [
    [7, 0, 6, 3, 0, 9, 4, 1, 8],
    [4, 0, 0, 1, 0, 0, 2, 3, 9],
    [9, 0, 0, 8, 0, 4, 7, 6, 5],
    [1, 0, 0, 9, 0, 5, 3, 8, 4],
    [3, 0, 0, 2, 0, 6, 1, 5, 7],
    [8, 0, 0, 0, 0, 0, 0, 0, 6],
    [0, 0, 7, 6, 4, 0, 0, 0, 2],
    [6, 0, 9, 0, 0, 2, 0, 0, 1],
    [0, 4, 0, 5, 0, 8, 0, 0, 0]
  ]
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

  return (
    <div>
      <Board boardState={boardState} editableBoard={setEditableBoard} initialBoard={initialBoard} />
      <button onClick={() => setValid(sudokuChecker(boardState))}>check</button>
    </div>
  );
};

export default App;
