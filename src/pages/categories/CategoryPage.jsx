import { useParams } from "react-router-dom";

const CategoryPage = ({}) => {
  const { id } = useParams();

  return (
    <div>
      <h1>El Id es: {id}</h1>
    </div>
  );
};

export default CategoryPage;
