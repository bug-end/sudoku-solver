import React from 'react';

import { SudokuInputProps } from './SudokuInput.types';

import styles from './SudokuInput.module.scss';

export const SudokuInput: React.FC<SudokuInputProps> = ({ value, onChange }) => {
  return (
    <input
      className={styles.input}
      type="text"
      value={value}
      onChange={(e) => onChange(e.target.value)}
      maxLength={1}
    />
  );
};
