import PasswordGate from "./PasswordGate";
import type { ReactNode } from "react";

interface Props {
  showModal: boolean;
  onClose: () => void;
  onSuccess: () => void;
  children?: ReactNode; // <-- children opcional
}

export default function ReportGate({
  showModal,
  onClose,
  onSuccess,
  children,
}: Props) {
  const correctPassword = import.meta.env.VITE_REPORT_PASSWORD;

  const validate = (input: string) => input === correctPassword;

  if (!showModal) return null;

  return (
    <PasswordGate
      onValidate={validate}
      onClose={onClose}
      onSuccess={onSuccess}
      length={correctPassword?.length || 4}
    >
      {children} {/* renderizamos children dentro */}
    </PasswordGate>
  );
}
