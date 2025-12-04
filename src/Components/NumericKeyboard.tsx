import "./NumericKeyboard.css";

interface Props {
  onPress: (value: string) => void;
  onDelete: () => void;
}

export default function NumericKeyboard({ onPress, onDelete }: Props) {
  const keys = ["1", "2", "3", "4", "5", "6", "7", "8", "9"]; // sin 0

  return (
    <div className="keyboard-container">
      {keys.map((k) => (
        <button key={k} className="keyboard-key" onClick={() => onPress(k)}>
          {k}
        </button>
      ))}
      <button className="keyboard-delete" onClick={onDelete}>
        Borrar
      </button>
    </div>
  );
}
