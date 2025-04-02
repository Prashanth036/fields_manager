import React, { useEffect, useState } from "react";
import { services_data } from "../Constant/data";
import "../Styles/Services.css";

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
      <h2>Available Sports</h2>
      <div className="card">
        <div className="card-items">
          {data.length > 0 ? (
            data[0].available_sports.map((sport, index) => (
              <div key={index} className="text">
                <img src={sport.icon} alt={sport.name} className="image" />
                {sport.name}
              </div>
            ))
          ) : (
            <p>Loading...</p>
          )}
        </div>
      </div>
    </>
  );
};
