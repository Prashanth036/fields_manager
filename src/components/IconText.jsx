import React from "react";
import "../Styles/SportsList.css";

const IconText = ({ icon, text }) => {
  return (
    <div className="sports-text">
      <img src={icon} alt={text} className="sports-image" />
      {text}
    </div>
  );
};

export default IconText;
