import { SudokuInput } from '@components/SudokuInput/SudokuInput';

import styles from './SudokuGrid.module.scss';

const initialState = [
  [null, null, null, null, null, null, null, null, null],
  [null, null, null, null, null, null, null, null, null],
  [null, null, null, null, null, null, null, null, null],
  [null, null, null, null, null, null, null, null, null],
  [null, null, null, null, null, null, null, null, null],
  [null, null, null, null, null, null, null, null, null],
  [null, null, null, null, null, null, null, null, null],
  [null, null, null, null, null, null, null, null, null],
  [null, null, null, null, null, null, null, null, null],
];

export const SudokuGrid: React.FC = () => {
  console.log('initialState', initialState);
  return (
    <div className={styles.wrapper}>
      {initialState.map((row, rowIndex) => (
        <ol key={rowIndex} className={styles.row}>
          {row.map((cell, cellIndex) => (
            <li key={cellIndex} className={styles.cell}>
              <SudokuInput value={cell || `${rowIndex},${cellIndex}`} onChange={() => {}} />
            </li>
          ))}
        </ol>
      ))}
    </div>
  );
};
