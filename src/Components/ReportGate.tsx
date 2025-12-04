import PasswordGate from "./PasswordGate";

interface Props {
  showModal: boolean;
  onClose: () => void;
  onSuccess: () => void;
}

export default function ReportGate({ showModal, onClose, onSuccess }: Props) {
  const correctPassword = import.meta.env.VITE_REPORT_PASSWORD;

  // Solo valida, no llama a onSuccess aquí
  const validate = (input: string) => input === correctPassword;

  if (!showModal) return null;

  return (
    <PasswordGate
      onValidate={validate}
      onClose={onClose}
      onSuccess={onSuccess} // Se llama dentro de PasswordGate al validar OK
      length={correctPassword?.length || 4}
    />
  );
}
