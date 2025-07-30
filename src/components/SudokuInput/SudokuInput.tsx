import React from 'react';

import { SudokuInputProps } from './SudokuInput.types';

import styles from './SudokuInput.module.scss';

export const SudokuInput: React.FC<SudokuInputProps> = ({ id, value, onChange, ...props }) => {
  return (
    <input
      id={id}
      className={styles.input}
      type="text"
      value={value ?? ''}
      maxLength={1}
      autoComplete="off"
      onChange={onChange}
      {...props}
    />
  );
};
