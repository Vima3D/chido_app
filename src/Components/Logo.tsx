import ChidoLogo from "../assets/CHIDO.png";

const Logo: React.FC = () => {
  return (
    <header className="text-center mb-4">
      <img
        src={ChidoLogo} // <- Vite resuelve la ruta automáticamente
        alt="Logo"
        className="img-fluid mb-3"
        style={{ maxWidth: "120px" }}
      />
      <h1 className="visually-hidden">Reglas de faltas</h1>
    </header>
  );
};

export default Logo;
