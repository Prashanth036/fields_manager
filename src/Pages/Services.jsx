import React, { useEffect, useState } from "react";
import { services_data } from "../Constant/data";
import "../Styles/Services.css";
import "../Styles/About.css";
import Text from "../components/About";
import Icon_share from "../assets/Icon_share.svg";

const getServices = new Promise((resolve) => {
  setTimeout(() => {
    resolve(services_data);
  }, 2000);
});

export const Services = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const getData = async () => {
      try {
        const response = await getServices;
        console.log(response);
        setData(response);
      } catch (err) {
        console.log(err);
      }
    };
    getData();
  }, []);

  return (
    <>
      <div className="about-container">
        <h1 className="text">About</h1>
        <img src={Icon_share} className="share-icon" />
      </div>
      <Text />
      <h2 className="text">Available Sports</h2>
      {data.length > 0 && (
        <div className="card">
          <div className="card-items">
            {data[0].available_sports.map((sport, index) => (
              <div key={index} className="text-sports">
                <img src={sport.icon} alt={sport.name} className="image" />
                {sport.name}
              </div>
            ))}
          </div>
        </div>
      )}
    </>
  );
};
