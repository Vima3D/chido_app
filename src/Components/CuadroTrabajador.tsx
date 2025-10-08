import React, { useState, useEffect } from "react";
import { collection, addDoc, getDocs, query, where } from "firebase/firestore";
import { db } from "../firebaseConfig";
import FormularioModal from "./FormularioModal";
import ReportesModal from "./ReportesModal";
import type { Reporte } from "./FormularioModal";
import "./CuadroTrabajador.css";

interface CuadroTrabajadorProps {
  nombre: string;
  trabajadores: string[];
}

const CuadroTrabajador: React.FC<CuadroTrabajadorProps> = ({
  nombre,
  trabajadores,
}) => {
  const [mostrarFormulario, setMostrarFormulario] = useState(false);
  const [mostrarModalReportes, setMostrarModalReportes] = useState(false);
  const [reportes, setReportes] = useState<Reporte[]>([]);
  const [cargando, setCargando] = useState(true);

  // 🔹 Cargar reportes desde Firestore
  useEffect(() => {
    const cargarReportes = async () => {
      setCargando(true);
      try {
        const q = query(
          collection(db, "reportes"),
          where("nombre", "==", nombre)
        );
        const querySnapshot = await getDocs(q);
        const lista: Reporte[] = [];
        querySnapshot.forEach((doc) => lista.push(doc.data() as Reporte));
        setReportes(lista);
      } catch (error) {
        console.error("Error al cargar reportes:", error);
      } finally {
        setCargando(false);
      }
    };

    cargarReportes();
  }, [nombre]);

  // 🔹 Guardar nuevo reporte en Firestore
  const manejarNuevoReporte = async (reporte: Reporte) => {
    if (reportes.length >= 5) return;
    const nuevo = { ...reporte, nombre };

    try {
      await addDoc(collection(db, "reportes"), nuevo);
      setReportes((prev) => [...prev, nuevo]);
      setMostrarFormulario(false);
    } catch (error) {
      console.error("Error al guardar reporte:", error);
      alert("No se pudo guardar el reporte. Revisa la consola.");
    }
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
          {cargando ? (
            <span>Cargando...</span>
          ) : (
            [...Array(10)].map((_, index) => (
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
            ))
          )}
        </div>
      </div>

      <FormularioModal
        show={mostrarFormulario}
        onClose={() => setMostrarFormulario(false)}
        onSubmit={manejarNuevoReporte}
        trabajadores={trabajadores}
      />

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
