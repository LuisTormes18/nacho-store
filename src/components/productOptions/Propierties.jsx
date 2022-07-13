import { useState, useEffect } from "react";
import { formatPriceToUsd } from "./../../utils/utils";

const properties = ({ properties }) => {
  const [color, setColor] = useState(0);
  const [size, setSize] = useState(0);
  useEffect(() => {
    console.log(color);
  }, [color]);
  useEffect(() => {
    console.log(size);
  }, [size]);
  function changeColor(e) {
    setColor(e.target.value);
  }
  function changeSize(e) {
    setSize(e.target.value);
  }
  function colors(property_options) {
    let colorData = property_options;
    const argColors = [];

    for (let i = 0; i < colorData.length; i++) {
      let value = i + 1;
      argColors.push(
        <div className="d-flex justify-content-between">
          <div>
            <input
              className="ps-2"
              key={`${colorData[i].property_id}`}
              type="radio"
              id={`colorChoice${value}`}
              name={colorData[i].name}
              value={value}
              checked={color == value ? true : false}
              onChange={changeColor}
            />
            <label for={`colorChoice${value}`}>{colorData[i].name}</label>
          </div>
          <span>
            {formatPriceToUsd(`${colorData[i].price_e2}`.slice(0, 2))}
          </span>
        </div>
      );
    }

    return argColors;
  }
  function sizes(property_options) {
    const argSizes = [];

    try {
      let sizesData = property_options;
      for (let i = 0; i < sizesData.length; i++) {
        let value = i + 1;
        argSizes.push(
          <div>
            <input
              key={`${sizesData[i].property_id}`}
              type="radio"
              id={`sizesChoice${value}`}
              name={sizesData[i].name}
              value={value}
              checked={size == value ? true : false}
              onChange={changeSize}
            />
            <label for={`sizesChoice${value}`}>{sizesData[i].name}</label>
          </div>
        );
      }
    } catch (err) {
      console.log("not sizes");
    }

    return argSizes;
  }
  return (
    <div className="p-3">
      {properties.map((pro) => (
        <div className="">
          <h5 className="card-title">{pro.name}</h5>

          {pro.name.includes("Talla") && sizes(pro.property_options)}
          {pro.name.includes("Color") && colors(pro.property_options)}

          <hr />
        </div>
      ))}
    </div>
  );
};

export default properties;
