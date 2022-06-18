import { Link, useNavigate } from "react-router-dom";

import "./cards.css";

const CardCategory = ({ category }) => {
  const navigate = useNavigate();
  function handleCardClick() {
    navigate(`./categories/${category.id}`);
  }
  return (
    <div className="card-category p-1 pointer" onClick={handleCardClick}>
      <img
        className="img-fluid"
        src={category.url}
        alt={category.title}
      />
      <h3 className="text-center p-2"> {category.title}</h3>
    </div>
  );
};

export default CardCategory;
