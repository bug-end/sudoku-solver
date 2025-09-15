export interface SudokuInputProps {
  id: string;
  value?: number | null;
  onChange?: (value: number | null) => void;
}
