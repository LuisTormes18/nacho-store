import { CartListProducts, TotalCartValue } from "./../../../components";

const Resumen = () => {
  return (
    <div className="resumen-container">
      <h3>Resumen</h3>
      <CartListProducts />
      <TotalCartValue />
    </div>
  );
};

export default Resumen;
