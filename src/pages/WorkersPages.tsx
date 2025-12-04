import { useState } from "react";
import FormularioModal from "../Components/FormularioModal";
import ReportGate from "../Components/ReportGate";

export default function WorkersPage() {
  const [showPasswordGate, setShowPasswordGate] = useState(false);
  const [showForm, setShowForm] = useState(false);
  const [selectedWorker, setSelectedWorker] = useState<string | null>(null);

  const handleWorkerClick = (workerName: string) => {
    setSelectedWorker(workerName);
    setShowPasswordGate(true);
  };

  const handlePasswordGateClose = () => {
    setShowPasswordGate(false);
  };

  const handlePasswordSuccess = () => {
    setShowPasswordGate(false);
    setShowForm(true);
  };

  const handleFormClose = () => {
    setShowForm(false);
    setSelectedWorker(null);
  };

  const handleSubmitReporte = (reporte: Reporte) => {
    console.log("Reporte guardado para:", selectedWorker, reporte);
    // Aquí puedes guardar el reporte en API o estado global

    handleFormClose();
  };

  return (
    <>
      <div
        style={{
          cursor: "pointer",
          padding: 10,
          border: "1px solid #ccc",
          width: 200,
          marginBottom: 12,
        }}
        onClick={() => handleWorkerClick("Trabajador 1")}
      >
        Trabajador 1 (clic aquí)
      </div>

      <ReportGate
        showModal={showPasswordGate}
        onClose={handlePasswordGateClose}
        onSuccess={handlePasswordSuccess}
      >
        {/* No mostramos nada aquí */}
      </ReportGate>

      <FormularioModal
        show={showForm}
        onClose={handleFormClose}
        onSubmit={handleSubmitReporte}
        trabajadores={[]}
      />
    </>
  );
}
