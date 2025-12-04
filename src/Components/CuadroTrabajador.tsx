import React, { useState, useEffect } from "react";
import { collection, addDoc, getDocs, query, where } from "firebase/firestore";
import { db } from "../firebaseConfig";
import FormularioModal from "./FormularioModal";
import ReportesModal from "./ReportesModal";
import ReportGate from "./ReportGate"; // Importamos el gate de contraseña
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

  // Estado para mostrar modal contraseña
  const [showPasswordGate, setShowPasswordGate] = useState(false);

  // Cargar reportes de Firestore
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

  // Guardar nuevo reporte en Firestore
  const manejarNuevoReporte = async (reporte: Reporte) => {
    if (reportes.length >= 10) return; // límite 10 reportes
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

  // Colores de fondo según cantidad reportes
  const cantidad = reportes.length;
  let fondo = "#f8f9fa";
  if (cantidad >= 10) {
    fondo = "#dc3545";
  } else if (cantidad >= 5) {
    fondo = "#b85e00";
  }
  const bloqueado = cantidad >= 10;

  // Al hacer clic en trabajador, primero abrir modal contraseña
  const abrirGateContrasena = () => {
    if (!bloqueado) setShowPasswordGate(true);
  };

  // Callback: si la contraseña es correcta
  const onPasswordSuccess = () => {
    setShowPasswordGate(false); // cerrar modal contraseña
    setMostrarFormulario(true); // abrir formulario
  };

  return (
    <>
      <div
        className="cuadro-trabajador border rounded p-3 w-100 mb-3 d-flex align-items-center"
        style={{
          maxWidth: "700px",
          margin: "0 auto",
          cursor: bloqueado ? "not-allowed" : "pointer",
          backgroundColor: fondo,
          color: "black",
          transition: "background-color 0.3s ease",
        }}
        onClick={abrirGateContrasena}
      >
        <div
          className="border rounded py-3 bg-white"
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
                  backgroundColor: index < cantidad ? "orange" : "white",
                }}
                title={index < cantidad ? "Reporte enviado" : "Enviar reporte"}
              />
            ))
          )}
        </div>
      </div>
      {/* Modal contraseña */}
      <ReportGate
        showModal={showPasswordGate}
        onClose={() => setShowPasswordGate(false)}
        onSuccess={onPasswordSuccess}
      />

      {/* Modal formulario */}
      <FormularioModal
        show={mostrarFormulario}
        onClose={() => setMostrarFormulario(false)}
        onSubmit={manejarNuevoReporte}
        trabajadores={trabajadores}
      />
      {/* Modal reportes */}
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
