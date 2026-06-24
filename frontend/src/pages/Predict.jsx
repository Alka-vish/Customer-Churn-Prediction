import { useState } from "react";
import api from "../services/api";
import ResultCard from "../components/ResultCard";
import "./Predict.css";

function Predict() {

  const [result, setResult] = useState(null);

  const [formData, setFormData] = useState({
    gender: "Female",
    SeniorCitizen: 0,
    Partner: "Yes",
    Dependents: "No",
    tenure: 12,
    PhoneService: "Yes",
    MultipleLines: "No",
    InternetService: "Fiber optic",
    OnlineSecurity: "No",
    OnlineBackup: "Yes",
    DeviceProtection: "No",
    TechSupport: "No",
    StreamingTV: "Yes",
    StreamingMovies: "Yes",
    Contract: "Month-to-month",
    PaperlessBilling: "Yes",
    PaymentMethod: "Electronic check",
    MonthlyCharges: 75.5,
    TotalCharges: 906
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]:
        e.target.value
    });
  };

  const handleSubmit = async (e) => {

    e.preventDefault();

    try {

      const response =
        await api.post(
          "/predict",
          formData
        );

      setResult(response.data);

    } catch (error) {

      console.log(error);

    }
  };

  return (
    <div className="container">

      <h2>Predict Customer Churn</h2>

      <form onSubmit={handleSubmit}>

        <div className="form-grid">

          <select
            name="gender"
            onChange={handleChange}
          >
            <option>Female</option>
            <option>Male</option>
          </select>

          <select
            name="Partner"
            onChange={handleChange}
          >
            <option>Yes</option>
            <option>No</option>
          </select>

          <select
            name="Dependents"
            onChange={handleChange}
          >
            <option>Yes</option>
            <option>No</option>
          </select>

          <select
            name="PhoneService"
            onChange={handleChange}
          >
            <option>Yes</option>
            <option>No</option>
          </select>

          <select
            name="MultipleLines"
            onChange={handleChange}
          >
            <option>Yes</option>
            <option>No</option>
            <option>No phone service</option>
          </select>

          <select
            name="InternetService"
            onChange={handleChange}
          >
            <option>DSL</option>
            <option>Fiber optic</option>
            <option>No</option>
          </select>

          <select
            name="OnlineSecurity"
            onChange={handleChange}
          >
            <option>Yes</option>
            <option>No</option>
          </select>

          <select
            name="OnlineBackup"
            onChange={handleChange}
          >
            <option>Yes</option>
            <option>No</option>
          </select>

          <select
            name="DeviceProtection"
            onChange={handleChange}
          >
            <option>Yes</option>
            <option>No</option>
          </select>

          <select
            name="TechSupport"
            onChange={handleChange}
          >
            <option>Yes</option>
            <option>No</option>
          </select>

          <select
            name="StreamingTV"
            onChange={handleChange}
          >
            <option>Yes</option>
            <option>No</option>
          </select>

          <select
            name="StreamingMovies"
            onChange={handleChange}
          >
            <option>Yes</option>
            <option>No</option>
          </select>

          <select
            name="Contract"
            onChange={handleChange}
          >
            <option>Month-to-month</option>
            <option>One year</option>
            <option>Two year</option>
          </select>

          <select
            name="PaperlessBilling"
            onChange={handleChange}
          >
            <option>Yes</option>
            <option>No</option>
          </select>

          <select
            name="PaymentMethod"
            onChange={handleChange}
          >
            <option>Electronic check</option>
            <option>Mailed check</option>
            <option>Bank transfer (automatic)</option>
            <option>Credit card (automatic)</option>
          </select>

          <input
            type="number"
            name="SeniorCitizen"
            placeholder="Senior Citizen (0/1)"
            onChange={handleChange}
          />

          <input
            type="number"
            name="tenure"
            placeholder="Tenure"
            onChange={handleChange}
          />

          <input
            type="number"
            name="MonthlyCharges"
            placeholder="Monthly Charges"
            onChange={handleChange}
          />

          <input
            type="number"
            name="TotalCharges"
            placeholder="Total Charges"
            onChange={handleChange}
          />

        </div>

        <br />

        <button type="submit">
          Predict Churn
        </button>

      </form>

      <ResultCard result={result} />

    </div>
  );
}

export default Predict;