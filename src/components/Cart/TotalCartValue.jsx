import useTotalCartValue from "./../../hooks/useTotalCartValue";

const TotalCartValue = ({ text = "Total", size = null }) => {
  const { total } = useTotalCartValue();

  return (
    <div className="d-flex justify-content-between p-3 pb-0">
      <span className={`text-bold font-size-${size}`}>{text}</span>
      <span className={`text-bold font-size-${size}`}>{total}</span>
    </div>
  );
};

export default TotalCartValue;
