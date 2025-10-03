import React, { useState, useEffect } from "react";
import FormularioModal from "./FormularioModal";
import ReportesModal from "./ReportesModal";
import type { Reporte } from "./FormularioModal";
import "./CuadroTrabajador.css";

interface CuadroTrabajadorProps {
  nombre: string;
  trabajadores: string[];
}

const STORAGE_PREFIX = "reportes_";

const CuadroTrabajador: React.FC<CuadroTrabajadorProps> = ({
  nombre,
  trabajadores,
}) => {
  const [mostrarFormulario, setMostrarFormulario] = useState(false);
  const [mostrarModalReportes, setMostrarModalReportes] = useState(false);
  const [reportes, setReportes] = useState<Reporte[]>([]);

  // Cargar reportes desde localStorage
  useEffect(() => {
    const datos = localStorage.getItem(STORAGE_PREFIX + nombre);
    if (datos) {
      try {
        setReportes(JSON.parse(datos));
      } catch {
        setReportes([]);
      }
    }
  }, [nombre]);

  // Guardar reportes en localStorage
  useEffect(() => {
    localStorage.setItem(STORAGE_PREFIX + nombre, JSON.stringify(reportes));
  }, [nombre, reportes]);

  const manejarNuevoReporte = (reporte: Reporte) => {
    if (reportes.length >= 5) return;
    setReportes((prev) => [...prev, reporte]);
    setMostrarFormulario(false);
  };

  const completado = reportes.length === 5;

  return (
    <>
      <div
        className={`cuadro-trabajador border rounded p-4 w-100 mb-3 d-flex align-items-center justify-content-between
          ${completado ? "bg-danger" : "bg-light hover-dark"}`}
        style={{
          maxWidth: "700px",
          margin: "0 auto",
          cursor: completado ? "not-allowed" : "pointer",
        }}
        onClick={() => {
          if (!completado) setMostrarFormulario(true);
        }}
      >
        <div
          className="border rounded p-3 me-2 bg-white"
          style={{
            cursor: "pointer",
            minWidth: "80px",
            maxWidth: "80px",
            textAlign: "center",
            userSelect: "none",
          }}
          onClick={(e) => {
            e.stopPropagation();
            setMostrarModalReportes(true);
          }}
          title="Ver reportes"
        >
          <h5 className="mb-0">{nombre}</h5>
        </div>

        <div className="d-flex flex-wrap gap-2 justify-content-end">
          {[...Array(5)].map((_, index) => (
            <div
              key={index}
              className="border rounded"
              style={{
                width: "60px",
                height: "60px",
                backgroundColor: index < reportes.length ? "orange" : "white",
              }}
              title={
                index < reportes.length ? "Reporte enviado" : "Enviar reporte"
              }
            />
          ))}
        </div>
      </div>

      {/* Modal para crear nuevo reporte */}
      <FormularioModal
        show={mostrarFormulario}
        onClose={() => setMostrarFormulario(false)}
        onSubmit={manejarNuevoReporte}
        trabajadores={trabajadores}
      />

      {/* Modal para ver reportes */}
      <ReportesModal
        show={mostrarModalReportes}
        onClose={() => setMostrarModalReportes(false)}
        nombre={nombre}
        reportes={reportes}
      />
    </>
  );
};

export default CuadroTrabajador;
