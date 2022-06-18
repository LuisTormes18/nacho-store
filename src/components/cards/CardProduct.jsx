import React from "react";

const CardProduct = ({ product }) => {
  return (
    <div className="card card-product text-center">
      <img src={product.url} className="card-img-top" alt="..." />
      <div className="card-body">
        <h5 className="card-title">Card title</h5>
        <p className="card-text">
          <span>Some quick example text to build on the card title</span>
          <span>$20</span>
        </p>
        <button className="btn btn-outline-warning">
          <span> Agregar </span>
        </button>
      </div>
    </div>
  );
};

export default CardProduct;
