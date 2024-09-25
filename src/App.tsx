import { SudokuBox } from './components/SudokuBox/SudokuBox';

import styles from './App.module.scss';

function App() {
  return (
    <div className={styles.container}>
      <h1>Sudoku Solver</h1>
      <div>
        <SudokuBox />
        <button>TEST</button>
      </div>
    </div>
  );
}

export default App;
