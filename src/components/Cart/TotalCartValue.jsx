import useTotalCartValue from "./../../hooks/useTotalCartValue";

const TotalCartValue = ({ text = "Total" }) => {
  const { total } = useTotalCartValue();

  return (
    <div className="d-flex justify-content-between p-3 pb-0">
      <span className="text-bold">{text}</span>
      <span className="text-bold">{total}</span>
    </div>
  );
};

export default TotalCartValue;
