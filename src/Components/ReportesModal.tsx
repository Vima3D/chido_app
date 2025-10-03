import React from "react";
import type { Reporte } from "./FormularioModal";

interface ReportesModalProps {
  show: boolean;
  onClose: () => void;
  nombre: string;
  reportes: Reporte[];
}

const ReportesModal: React.FC<ReportesModalProps> = ({
  show,
  onClose,
  nombre,
  reportes,
}) => {
  if (!show) return null;

  return (
    <div
      className="modal d-block"
      tabIndex={-1}
      role="dialog"
      style={{ backgroundColor: "rgba(0,0,0,0.5)" }}
      onClick={onClose}
    >
      <div
        className="modal-dialog"
        role="document"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title">Reportes de {nombre}</h5>
            <button
              type="button"
              className="btn-close"
              onClick={onClose}
            ></button>
          </div>
          <div className="modal-body">
            {reportes.length === 0 && <p>No hay reportes para esta persona.</p>}
            {reportes.map((r, i) => (
              <div key={i} className="border rounded p-2 mb-2">
                <p>
                  <strong>Nombre Testigo:</strong> {r.testigo}
                </p>
                <p>
                  <strong>Motivo:</strong> {r.motivo}
                </p>

                {/* ✅ Descripción en bloque sin espacio extra */}
                <div className="">
                  <p className="mb-0 fw-bold">Descripción:</p>
                  <p className="mb-3">{r.descripcion}</p>
                </div>

                <p>
                  <small>
                    <em>{new Date(r.fecha).toLocaleString()}</em>
                  </small>
                </p>
              </div>
            ))}
          </div>
          <div className="modal-footer">
            <button className="btn btn-secondary" onClick={onClose}>
              Cerrar
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ReportesModal;
