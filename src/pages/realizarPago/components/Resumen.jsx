import { CartListProducts, TotalCartValue } from "./../../../components";

const Resumen = () => {
  return (
    <div className="container_radius">
      <h3 className="linea-bottom-gray p-2">Resumen</h3>
      <div className="p-2">
        <CartListProducts />
        <TotalCartValue />
      </div>
    </div>
  );
};

export default Resumen;
