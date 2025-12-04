import { useState } from "react";
import ReportGate from "../Components/ReportGate";
import FormularioModal from "../Components/FormularioModal";
import type { Reporte } from "../Components/FormularioModal";

export default function WorkersList() {
  const [showPasswordGate, setShowPasswordGate] = useState(false);
  const [showForm, setShowForm] = useState(false);

  // Abrir modal para pedir contraseña
  const handleWorkerClick = () => {
    setShowPasswordGate(true);
  };

  // Cuando contraseña es correcta, abrir formulario y cerrar gate
  const handlePasswordSuccess = () => {
    setShowPasswordGate(false);
    setShowForm(true);
  };

  // Guardar datos del formulario (ejemplo)
  const handleSubmit = (reporte: Reporte) => {
    console.log("Reporte enviado:", reporte);
    setShowForm(false);
  };

  return (
    <>
      <div
        onClick={handleWorkerClick}
        style={{
          cursor: "pointer",
          padding: 20,
          border: "1px solid #ccc",
          marginBottom: 12,
          width: 200,
        }}
      >
        Trabajador 1 (clic aquí)
      </div>

      {/* Modal para pedir contraseña */}
      <ReportGate
        showModal={showPasswordGate}
        onClose={() => setShowPasswordGate(false)}
        onSuccess={handlePasswordSuccess}
      />

      {/* Modal formulario para agregar reporte */}
      <FormularioModal
        show={showForm}
        onClose={() => setShowForm(false)}
        onSubmit={handleSubmit}
        trabajadores={["Trabajador 1", "Trabajador 2"]} // ejemplo
      />
    </>
  );
}
