import { useState } from 'react';

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
  const [sudokuGrid, setSudokuGrid] = useState(initialState);
  console.log('sudokuGrid', sudokuGrid);

  const handleChange = () => {
    // TODO: add logic + validation
  };

  return (
    <div className={styles.wrapper}>
      {sudokuGrid.map((row, rowIndex) =>
        row.map((cell, cellIndex) => (
          <SudokuInput
            key={`cell-${rowIndex}-${cellIndex}`}
            id={`cell-${rowIndex}-${cellIndex}`}
            data-row={rowIndex}
            data-cell={cellIndex}
            value={cell}
            onChange={handleChange}
          />
        )),
      )}
    </div>
  );
};
