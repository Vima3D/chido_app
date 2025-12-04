import "bootstrap/dist/css/bootstrap.min.css";
import Logo from "./Components/Logo";
import RulesList from "./Components/RulesList";
import ListaTrabajadores from "./Components/ListaTrabajadores";
import FormularioModal from "./Components/FormularioModal";
import type { Reporte } from "./Components/FormularioModal";
import { useState } from "react";

const App: React.FC = () => {
  const trabajadores = [
    "Jose",
    "Blanca",
    "Ehedei",
    "Pietro",
    "Ana",
    "Flor",
    "Cristian",
    "Carlota",
    "Victor",
  ];
  const [showModal, setShowModal] = useState(false);

  const handleSubmit = (reporte: Reporte) => {
    console.log("Reporte enviado:", reporte);
  };

  return (
    <div className="min-vh-100 d-flex justify-content-center bg-light px-3 py-5 w-100">
      <div className="w-100" style={{ maxWidth: "600px" }}>
        <div className="bg-secondary bg-dark rounded-4 shadow p-4 p-sm-5">
          <Logo />

          <main className="text-center">
            <p className="fs-5 fw-semibold text-white">
              La acumulación de 10 faltas en un mes conlleva
            </p>

            <RulesList />

            <ListaTrabajadores trabajadores={trabajadores} />

            <FormularioModal
              show={showModal}
              onClose={() => setShowModal(false)}
              onSubmit={handleSubmit}
              trabajadores={trabajadores} // ✅ se pasa aquí
            />
          </main>
        </div>
      </div>
    </div>
  );
};

export default App;
