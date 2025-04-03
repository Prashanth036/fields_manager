import React, { useState } from "react";
import FormInput from "./FormInput";
import "../Styles/sportsform.css";
import { formFields, RESERVE_PAGE_TEXT } from "../Constant/data";

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
    alert("Form submitted!");
  };
  return (
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
  );
};

export default SportsForm;
