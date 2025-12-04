import { useState } from "react";
import NumericKeyboard from "./NumericKeyboard";
import type { ReactNode } from "react";

interface Props {
  onValidate: (password: string) => boolean;
  onClose: () => void;
  onSuccess: () => void;
  length?: number;
  children?: ReactNode; // <-- Recibimos children opcional
}

export default function PasswordGate({
  onValidate,
  onClose,
  onSuccess,
  length = 4,
  children, // <-- Desestructuramos children
}: Props) {
  const [input, setInput] = useState("");
  const [error, setError] = useState("");

  const handlePress = (value: string) => {
    if (input.length >= length) return;
    setInput((prev) => prev + value);
    setError("");
  };

  const handleDelete = () => {
    setInput((prev) => prev.slice(0, -1));
    setError("");
  };

  const handleSubmit = () => {
    const ok = onValidate(input);
    if (ok) {
      onClose(); // Cierra modal de contraseña
      onSuccess(); // Abre formulario
      setInput("");
      setError("");
    } else {
      setError("Contraseña incorrecta");
      setInput("");
    }
  };

  const onBoxClick = (e: React.MouseEvent) => {
    e.stopPropagation();
  };

  return (
    <div
      style={styles.modal}
      onClick={onClose} // cerrar modal al hacer click fuera
    >
      <div style={styles.box} onClick={onBoxClick}>
        <h2>Introduce la contraseña</h2>
        <div style={styles.display}>{input.replace(/./g, "•") || ""}</div>
        {error && <p style={{ color: "red" }}>{error}</p>}
        <NumericKeyboard onPress={handlePress} onDelete={handleDelete} />
        <button
          style={styles.button}
          onClick={handleSubmit}
          disabled={input.length < length}
        >
          Aceptar
        </button>
        {children} {/* <-- Aquí mostramos el contenido pasado */}
      </div>
    </div>
  );
}

const styles = {
  modal: {
    position: "fixed" as const,
    top: 0,
    left: 0,
    width: "100vw",
    height: "100vh",
    background: "rgba(0,0,0,0.4)",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    zIndex: 999,
  },
  box: {
    background: "white",
    padding: 24,
    borderRadius: 12,
    width: 320,
    textAlign: "center" as const,
  },
  display: {
    fontSize: 28,
    marginTop: 12,
    letterSpacing: 8,
    minHeight: 36,
  },
  button: {
    width: "100%",
    padding: 12,
    marginTop: 14,
    fontSize: 18,
    cursor: "pointer",
    borderRadius: 10,
  },
};
