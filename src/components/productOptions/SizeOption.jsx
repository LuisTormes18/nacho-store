import React from "react";

const SizeOption = ({ value, sizeOption, selectSize, changeSize }) => {
  return (
    <div>
      <input
        className="m-1"
        type="radio"
        id={`sizesChoice${value}`}
        name={sizeOption.name}
        value={value}
        checked={selectSize == value ? true : false}
        onChange={changeSize}
      />
      <label>{sizeOption.name}</label>
    </div>
  );
};

export default SizeOption;
