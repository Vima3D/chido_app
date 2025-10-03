import CuadroTrabajador from "./CuadroTrabajador";

interface ListaTrabajadoresProps {
  trabajadores: string[];
}

const ListaTrabajadores: React.FC<ListaTrabajadoresProps> = ({
  trabajadores,
}) => {
  return (
    <div className="container py-3">
      {trabajadores.map((nombre, index) => (
        <CuadroTrabajador
          key={index}
          nombre={nombre}
          trabajadores={trabajadores}
        />
      ))}
    </div>
  );
};

export default ListaTrabajadores;
