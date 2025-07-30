import { SudokuGrid } from '@components/SudokuGrid/SudokuGrid';

import styles from './App.module.scss';

export const App: React.FC = () => {
  return (
    <div className={styles.container}>
      <h1>Sudoku Solver</h1>
      <SudokuGrid />
      <div className={styles.controls}>
        <button className={styles.button}>Solve</button>
        <button className={styles.button}>Generate new</button>
        <button className={styles.button}>Clear</button>
      </div>
    </div>
  );
};
