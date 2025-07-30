export interface SudokuInputProps {
  id: string;
  value?: string | null;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
}
