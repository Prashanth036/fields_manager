import { cards } from "../Constant/data";

import React from "react";
import Icon_heart from "../assets/Icon_heart.svg";
import "../Styles/Cards.css";
import Icon_chevron_right from "../assets/Icon_chevron_right.svg";
const Cards = () => {
  return (
    <div className="cards-container">
      {cards.map((card, index) => (
        <div key={index} className="card">
          <div className="container">
            <img src={card.image} alt={card.name} className="image" />
            <img src={Icon_heart} className="icon-heart" />

          </div>
          <h3 className="text-name">{card.name}</h3>
          <p className="text-bio">{card.bio}</p>
          <div className="container">
            <p className="fee">{card.fee}</p>
            <img src={Icon_chevron_right} className="right-icon" />
          </div>
        </div>
      ))}
    </div>
  );
};
export default Cards;