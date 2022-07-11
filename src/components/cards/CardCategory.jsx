import { Link, useNavigate } from "react-router-dom";

import "./cards.css";

const CardCategory = ({ category }) => {
  const navigate = useNavigate();
  function handleCardClick() {
    navigate(`./categories/${category.id}`);
  }
  return (
    <div className="card-category p-1 pointer" onClick={handleCardClick}>
      <img className="img-fluid" src={category.picture_url} alt={category.name} />
      <h3 className="text-center p-2"> {category.name}</h3>
    </div>
  );
};

export default CardCategory;
