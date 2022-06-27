import React from "react";
import "./../style.css";

const TabButton = ({ tab, text, icon: Icon }) => {
  return (
    <button
      className="nav-link tab-button d-flex flex-column align-items-center justify-content-center"
      id={`pills-${tab}-tab`}
      data-bs-toggle="pill"
      data-bs-target={`#pills-${tab}`}
      type="button"
      role="tab"
      aria-controls={`pills-${tab}`}
      aria-selected="true"
    >
      {Icon && <Icon size="30" />}
      {text}
    </button>
  );
};

export default TabButton;
