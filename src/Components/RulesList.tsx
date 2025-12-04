import RuleItem from "./RuleItem";

const RulesList: React.FC = () => {
  return (
    <ul
      className="list-unstyled text-start mx-auto mt-4 text-white"
      style={{ maxWidth: "400px" }}
    >
      <RuleItem number="1ra vez:" description="Dejar 50€ en el bote" />
      <RuleItem number="2da vez:" description="Amonestación" />
    </ul>
  );
};

export default RulesList;
