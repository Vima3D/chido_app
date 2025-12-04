import { useState } from "react";
import ReportGate from "../components/ReportGate";

export default function WorkersList() {
  const [showModal, setShowModal] = useState(false);

  const handleWorkerClick = () => {
    setShowModal(true);
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

      <ReportGate showModal={showModal} onClose={() => setShowModal(false)}>
        <h2>Agregar reporte</h2>
        <textarea
          placeholder="Describe el incidente o fallo"
          style={{ width: "100%", height: 120, padding: 8 }}
        />
        <button style={{ marginTop: 10 }}>Guardar reporte</button>
      </ReportGate>
    </>
  );
}
