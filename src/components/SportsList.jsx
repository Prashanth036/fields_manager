import React from "react";
import "../Styles/SportsList.css";
import IconText from "./IconText";

export const SportsList = ({ heading, data }) => {
  return (
    <div className="sports-list">
      <h2 className="sports-heading">{heading}</h2>
      {data.length > 0 && (
        <div className="sports-card">
          <div className="card-items">
            {data.map((sport, index) => (
              <IconText key={index} icon={sport.icon} text={sport.name} />
            ))}
          </div>
        </div>
      )}
    </div>
  );
};
