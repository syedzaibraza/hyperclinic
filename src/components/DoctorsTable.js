import Link from "next/link";
import React from "react";

const DoctorsTable = ({ data }) => {
  return (
    <table style={{ width: "100%" }} className="table table-striped">
      <thead>
        <tr>
          <th>Name</th>
          <th>Specialty</th>
          <th>Email</th>
          <th>Phone</th>
          <th>Appointment</th>
        </tr>
      </thead>
      <tbody>
        {data?.map((item) => (
          <tr key={item?._id}>
            <td>{item?.name}</td>
            <td>{item?.specialty?.name}</td>
            <td>{item?.email}</td>
            <td>{item?.phoneNumber}</td>
            <td>
              <Link href={`/appointments/${item?._id}`}>
                <a className="template-btn template-btn-primary">
                  Appointment Now <i className="far fa-plus"></i>
                </a>
              </Link>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default DoctorsTable;
