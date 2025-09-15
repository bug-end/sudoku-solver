import React, { useState } from 'react';

import { SudokuInputProps } from './SudokuInput.types';

import styles from './SudokuInput.module.scss';

export const SudokuInput: React.FC<SudokuInputProps> = ({ id, value, onChange, ...props }) => {
  const [inputValue, setInputValue] = useState(value?.toString() ?? '');

  const handleKeyDown = (event: React.KeyboardEvent) => {
    // Handle arrow key navigation
    if (['ArrowUp', 'ArrowDown', 'ArrowLeft', 'ArrowRight'].includes(event.key)) {
      event.preventDefault();

      // Extract row and cell indices from the id (format: cell-{row}-{cell})
      const match = id.match(/cell-(\d+)-(\d+)/);
      if (!match) return;

      const currentRow = parseInt(match[1]);
      const currentCell = parseInt(match[2]);

      let newRow = currentRow;
      let newCell = currentCell;

      switch (event.key) {
        case 'ArrowUp':
          newRow = currentRow > 0 ? currentRow - 1 : 8;
          break;
        case 'ArrowDown':
          newRow = currentRow < 8 ? currentRow + 1 : 0;
          break;
        case 'ArrowLeft':
          newCell = currentCell > 0 ? currentCell - 1 : 8;
          break;
        case 'ArrowRight':
          newCell = currentCell < 8 ? currentCell + 1 : 0;
          break;
      }

      // Focus the target cell
      const targetId = `cell-${newRow}-${newCell}`;
      const targetElement = document.getElementById(targetId);
      targetElement?.focus();
    }
  };

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = event.target.value;
    // Allow either empty string OR a single digit from 1 to 9
    const regex = /^[1-9]?$/;

    if (regex.test(newValue)) {
      setInputValue(newValue);
      // Call onChange with the appropriate value
      if (newValue === '') {
        onChange?.(null);
      } else {
        onChange?.(Number(newValue));
      }
    }
    // If regex test fails, do nothing - the input won't update
  };

  return (
    <input
      id={id}
      className={styles.input}
      type="text"
      value={inputValue}
      maxLength={1}
      min={1}
      max={9}
      autoComplete="off"
      onKeyDown={handleKeyDown}
      onChange={handleChange}
      {...props}
    />
  );
};
