import React, { useState } from "react";
import FormInput from "./FormInput";
import "../Styles/sportsform.css";
import { formFields, RESERVE_PAGE_TEXT } from "../Constant/data";
import { convertTo12HourFormat } from "../Utils/utils";

const SportsForm = () => {
  const [formData, setFormData] = useState({
    sport: "",
    date: "",
    time: "",
    duration: "",
    ground: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const formattedData = {
      ...formData,
      time: convertTo12HourFormat(formData.time),
      duration: convertTo12HourFormat(formData.duration),
    };
    console.log(formattedData);
    alert("Form submitted!");
    setFormData({
      sport: "",
      date: "",
      time: "",
      duration: "",
      ground: "",
    })
  };
  return (
    <div className="form">
      <h2>Reserve</h2>
      <form className="form-container" onSubmit={handleSubmit}>
        <div className="form-input">
          {formFields.map((field, index) => (
            <FormInput
              key={index}
              {...field}
              value={formData[field.name]}
              onChange={handleChange}
            />
          ))}
        </div>

        <div className="form-footer">
          <button type="submit" className="submit-button">
            Reserve
          </button>
          <p>{RESERVE_PAGE_TEXT}</p>
        </div>
      </form>
    </div>
  );
};

export default SportsForm;
