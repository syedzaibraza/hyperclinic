import React from "react";

const DiseaseTable = ({ data }) => {
  return (
    <table style={{ width: "100%" }} className="table table-striped">
      <thead>
        <tr>
          <th>Disease</th>
          <th>Category</th>
          <th>Symptoms</th>
          <th>Medications</th>
        </tr>
      </thead>
      <tbody>
        {data?.map((item) => (
          <tr key={item?._id}>
            <td>{item?.disease}</td>
            <td>{item?.category?.name}</td>
            <td>{item?.symptoms?.join(", ")}</td>
            <td>
              {item.medications
                .map((med) => `${med.name} (${med.dosage}, ${med.frequency})`)
                .join(", ")}
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default DiseaseTable;
