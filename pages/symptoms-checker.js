import React, { useEffect, useState } from "react";
import Layouts from "../src/layouts/Layouts";
import Select from "react-select";
import CreatableSelect from "react-select/creatable";
import PageBanner from "../src/components/PageBanner";
import { ApiPost } from "./api/hello";
import DiseaseCard from "../src/components/DiseaseCard";
import DiseaseTable from "../src/components/DiseaseCard";
import DoctorsTable from "../src/components/DoctorsTable";

const customStyles = {
  control: (provided) => ({
    ...provided,
    height: "65px",
    minHeight: "65px",
  }),
  valueContainer: (provided) => ({
    ...provided,
    height: "65px",
    padding: "0 16px",
  }),
  input: (provided) => ({
    ...provided,
    margin: "0px",
  }),
  indicatorsContainer: (provided) => ({
    ...provided,
    height: "65px",
  }),

  // Add more custom styles if needed for other parts of the Select
};

const SymptomsChecker = () => {
  const [selectedOptions, setSelectedOptions] = useState([]);
  const handleChange = (options) => {
    console.log("options", options);
    setSelectedOptions(options);
  };

  const [State, setState] = useState();
  console.log("state", State);
  const GetSymptoms = () => {
    const data = selectedOptions.map((item) => item.value);
    ApiPost("/check", { symptoms: data }).then((res) => {
      setState(res.data);
    });
  };

  const handleClear = () => {
    setSelectedOptions([]);
  };
  const [form, setForm] = useState({
    age: "",
    gender: "",
    hasDisease: "no",
    diseaseDescription: "",
    symptoms: [],
    currentMedication: "",
    symptomFrequency: null,
  });

  const Gender = [
    { value: "male", label: "Male" },
    { value: "female", label: "Female" },
  ];
  const Disease = [
    { value: "yes", label: "Yes" },
    { value: "no", label: "No" },
  ];
  const frequencyOptions = [
    { value: "daily", label: "Daily" },
    { value: "weekly", label: "Weekly" },
    { value: "monthly", label: "Monthly" },
    { value: "rarely", label: "Rarely" },
  ];

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    console.log("name", name, "value", value);
    setForm({ ...form, [name]: value });
  };

  const handleFrequencyChange = (selectedOption) => {
    setForm({ ...form, symptomFrequency: selectedOption });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(form);
    GetSymptoms();
  };

  return (
    <Layouts position={"absolute"}>
      <PageBanner title={"Symptoms Checker"} />
      <div
        style={{
          minHeight: "100vh",
          padding: "32px",
          display: "flex",
          gap: "40px",
        }}
      >
        <form onSubmit={handleSubmit} className="health-form">
          <label>
            Age:
            <input
              required
              name="age"
              type="number"
              value={form.age}
              onChange={handleInputChange}
            />
          </label>
          <div style={{ display: "flex", gap: "8px" }}>
            {Gender.map((item, index) => {
              return (
                <>
                  <input
                    required
                    style={{ width: "24px", height: "24px" }}
                    key={index}
                    type="radio"
                    name="gender"
                    onChange={() =>
                      setForm({
                        ...form,
                        gender: item.value,
                      })
                    }
                    checked={form.gender === item.value}
                  />
                  <label htmlFor="">{item.label}</label>
                </>
              );
            })}
          </div>
          <label>
            Are you suffering from some disease?
            <div style={{ display: "flex", gap: "8px" }}>
              {Disease.map((item, index) => {
                return (
                  <>
                    <input
                      required
                      style={{ width: "24px", height: "24px" }}
                      key={index}
                      type="radio"
                      name="hasDisease"
                      onChange={() =>
                        setForm({
                          ...form,
                          hasDisease: item.value,
                        })
                      }
                      checked={form.hasDisease === item.value}
                    />
                    <label htmlFor="">{item.label}</label>
                  </>
                );
              })}
            </div>
            {form.hasDisease === "yes" && (
              <textarea
                name="diseaseDescription"
                placeholder="Describe your condition..."
                value={form.diseaseDescription}
                onChange={handleInputChange}
              ></textarea>
            )}
          </label>

          <label>
            Symptoms:
            <CreatableSelect
              required
              styles={customStyles}
              isMulti
              onChange={handleChange}
              value={selectedOptions}
              placeholder="Type Symptoms and press enter.."
            />
          </label>

          <label>
            Current Medication (if any):
            <input
              name="currentMedication"
              type="text"
              value={form.currentMedication}
              onChange={handleInputChange}
            />
          </label>

          <label>
            How often are you experiencing the symptom?
            <Select
              required
              styles={customStyles}
              name="symptomFrequency"
              options={frequencyOptions}
              value={form.symptomFrequency}
              onChange={handleFrequencyChange}
              className="react-select-container"
              classNamePrefix="react-select"
            />
          </label>

          <button type="submit">Submit</button>
        </form>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            width: "100%",
            gap: "16px",
          }}
        >
          {State?.diseases && State?.diseases?.length > 0 ? (
            <>
              <h2>Disease</h2>
              <div
                style={{
                  maxHeight: "500px",
                  overflow: "auto",
                  width: "100%",
                }}
              >
                <DiseaseTable data={State?.diseases} />
              </div>
            </>
          ) : null}

          {State?.doctors && State?.doctors?.length > 0 ? (
            <>
              <h2>Doctors</h2>
              <div
                style={{
                  maxHeight: "500px",
                  overflow: "auto",
                  width: "100%",
                }}
              >
                <DoctorsTable data={State?.doctors} />
              </div>
            </>
          ) : null}
        </div>
      </div>
    </Layouts>
  );
};

export default SymptomsChecker;
