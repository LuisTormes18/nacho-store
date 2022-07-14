import { useState, useEffect } from "react";
import { formatPriceToUsd } from "./../../utils/utils";
import ColorOption from "./ColorOption";
import SizeOption from "./SizeOption";

const properties = ({ properties, setTotalPrice }) => {
  const [color, setColor] = useState(0);
  const [size, setSize] = useState(0);
  useEffect(() => {
    console.log(color);
  }, [color]);
  useEffect(() => {
    console.log(size);
  }, [size]);

  function changeSize(e) {
    setSize(e.target.value);
  }
  function colors(property_options) {
    let colorData = property_options;
    const argColors = [];

    for (let i = 0; i < colorData.length; i++) {
      let value = i + 1;
      argColors.push(
        <ColorOption
          value={value}
          colorOption={colorData[i]}
          selectColor={color}
          setColor={setColor}
          setTotalPrice={setTotalPrice}
        />
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
          <SizeOption
            value={value}
            sizeOption={sizesData[i]}
            selectSize={size}
            changeSize={changeSize}
          />
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
