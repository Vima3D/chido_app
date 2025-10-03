interface RuleItemProps {
  number: string;
  description: string;
}

const RuleItem: React.FC<RuleItemProps> = ({ number, description }) => {
  return (
    <li className="d-flex mb-3">
      <span
        className="d-inline-flex justify-content-center align-items-center border rounded bg-secondary text-white fw-bold me-3"
        style={{ width: "80px", height: "30px" }}
      >
        {number}
      </span>
      <div>
        <p className="mb-0 small">{description}</p>
      </div>
    </li>
  );
};

export default RuleItem;
