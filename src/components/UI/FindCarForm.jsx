// components/UI/FindCarForm.jsx
import React, { useState } from "react";
import "../../styles/find-car-form.css";
import { Form, FormGroup } from "reactstrap";
import { useNavigate } from 'react-router-dom';

const FindCarForm = () => {
  const [formData, setFormData] = useState({
    fromAddress: "",
    toAddress: "",
    journeyDate: "",
    journeyTime: "",
    carType: "ac",
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Data Submitted:", formData);

    // Redirect to CarListing page with state
    navigate('/cars', { state: formData });
  };

  return (
    <Form className="form" onSubmit={handleSubmit}>
      <div className="d-flex align-items-center justify-content-between flex-wrap">
        <FormGroup className="form__group">
          <input
            type="text"
            name="fromAddress"
            placeholder="From address"
            required
            value={formData.fromAddress}
            onChange={handleChange}
          />
        </FormGroup>

        <FormGroup className="form__group">
          <input
            type="text"
            name="toAddress"
            placeholder="To address"
            required
            value={formData.toAddress}
            onChange={handleChange}
          />
        </FormGroup>

        <FormGroup className="form__group">
          <input
            type="date"
            name="journeyDate"
            placeholder="Journey date"
            required
            value={formData.journeyDate}
            onChange={handleChange}
          />
        </FormGroup>

        <FormGroup className="form__group">
          <input
            className="journey__time"
            type="time"
            name="journeyTime"
            placeholder="Journey time"
            required
            value={formData.journeyTime}
            onChange={handleChange}
          />
        </FormGroup>

        <FormGroup className="select__group">
          <select
            name="carType"
            value={formData.carType}
            onChange={handleChange}
          >
            <option value="ac">AC Car</option>
            <option value="non-ac">Non AC Car</option>
          </select>
        </FormGroup>

        <FormGroup className="form__group">
          <button className="btn find__car-btn" type="submit">
            Find Car
          </button>
        </FormGroup>
      </div>
    </Form>
  );
};

export default FindCarForm;
