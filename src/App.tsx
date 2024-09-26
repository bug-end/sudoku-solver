import { SudokuGrid } from './components/SudokuGrid/SudokuGrid';

import styles from './App.module.scss';

export const App: React.FC = () => {
  return (
    <div className={styles.container}>
      <h1>Sudoku Solver</h1>
      <div>
        <SudokuGrid />
        <button>TEST</button>
      </div>
    </div>
  );
};
