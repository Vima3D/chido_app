import { useState } from "react";

export interface Reporte {
  testigo: string;
  motivo: string;
  descripcion: string;
  fecha: string;
}

interface FormularioModalProps {
  show: boolean;
  onClose: () => void;
  onSubmit: (reporte: Reporte) => void;
  trabajadores: string[]; // ✅ se recibe desde App.tsx
}

const motivos = ["Sucio", "Lento", "Actitud", "Fallo"];

const FormularioModal: React.FC<FormularioModalProps> = ({
  show,
  onClose,
  onSubmit,
  trabajadores,
}) => {
  const [testigo, setTestigo] = useState("");
  const [motivo, setMotivo] = useState("");
  const [descripcion, setDescripcion] = useState("");

  const handleSubmit = () => {
    if (!testigo || !motivo || !descripcion) {
      alert("Por favor completa los campos obligatorios.");
      return;
    }

    const fecha = new Date().toISOString();
    onSubmit({ testigo, motivo, descripcion, fecha });

    setTestigo("");
    setMotivo("");
    setDescripcion("");
    onClose();
  };

  if (!show) return null;

  return (
    <div className="position-fixed top-0 start-0 w-100 h-100 bg-dark bg-opacity-50 d-flex align-items-center justify-content-center z-3">
      <div className="bg-white rounded p-4" style={{ width: "400px" }}>
        <h5 className="mb-3">Formulario de Reporte</h5>

        {/* Testigo con lista desplegable */}
        <div className="mb-3">
          <label className="form-label">Nombre del testigo</label>
          <select
            className="form-select"
            value={testigo}
            onChange={(e) => setTestigo(e.target.value)}
          >
            <option value="">Seleccione</option>
            {trabajadores.map((t) => (
              <option key={t} value={t}>
                {t}
              </option>
            ))}
          </select>
        </div>

        {/* Motivos como botones */}
        <div className="mb-3">
          <label className="form-label">Motivo</label>
          <div className="d-flex flex-wrap gap-2">
            {motivos.map((m) => (
              <button
                key={m}
                type="button"
                className={`btn ${
                  motivo === m ? "btn-warning" : "btn-outline-secondary"
                }`}
                onClick={() => setMotivo(m)}
              >
                {m}
              </button>
            ))}
          </div>
        </div>

        {/* Descripción */}
        <div className="mb-3">
          <label className="form-label">Descripción</label>
          <textarea
            className="form-control"
            rows={3}
            value={descripcion}
            onChange={(e) => setDescripcion(e.target.value)}
          />
        </div>

        {/* Botones de acción */}
        <div className="d-flex justify-content-end gap-2">
          <button className="btn btn-secondary" onClick={onClose}>
            Cancelar
          </button>
          <button className="btn btn-primary" onClick={handleSubmit}>
            Enviar
          </button>
        </div>
      </div>
    </div>
  );
};

export default FormularioModal;
