import React from "react";

const SizeOption = ({ value, sizeOption, selectSize, changeSize }) => {
  return (
    <div>
      <input
        className="m-1"
        key={`${sizeOption.property_id}`}
        type="radio"
        id={`sizesChoice${value}`}
        name={sizeOption.name}
        value={value}
        checked={selectSize == value ? true : false}
        onChange={changeSize}
      />
      <label for={`sizesChoice${value}`}>{sizeOption.name}</label>
    </div>
  );
};

export default SizeOption;
