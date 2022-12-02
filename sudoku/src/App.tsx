import { Component, createSignal } from 'solid-js';
import Board from './Components/Board'
import styles from './App.module.css';
import sudokuChecker from '../server/sudokuChecker'
const App: Component = () => {
  const [valid, setValid] = createSignal("false")
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
      <Board boardState={boardState} />
      <button onClick={() => setValid(sudokuChecker(boardState))}>check</button>
      <div>Count: {valid}</div>
    </div>
  );
};

export default App;
