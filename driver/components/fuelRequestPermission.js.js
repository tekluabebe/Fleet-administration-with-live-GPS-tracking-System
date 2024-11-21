


import React, { useState, useEffect } from "react";
import { TextField } from "@mui/material";

import "./prmission.css";

const ViewFuelNotification = () => {
  const [fuels, setFuels] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    const fetchRequests = async () => {
      try {
        const response = await fetch("http://localhost:5000/api/fuelRequests");
        const data = await response.json();

        // Filter the fuelRequests to exclude entries where fuelStatus is taken
        const filteredFuels = data.fuelRequests.filter(
          (fuel) => fuel.fuelStatus !== "taken"
        );

        setFuels(filteredFuels);
      } catch (error) {
        console.log("error to fetch", error);
      }
    };

    fetchRequests();
  }, []);

  const handleSearch = (event) => {
    setSearchTerm(event.target.value);
  };

  const filteredFuels = fuels.filter((fuel) => {
    const driverFullName = `${fuel.driverName.firstName} ${fuel.driverName.lastName}`;
    return driverFullName.toLowerCase().includes(searchTerm.toLowerCase());
  });

  return (
    <div className="employee-list">
      <h2>Fuel Request List</h2>
      <div style={{ display: "flex", justifyContent: "flex-end", padding: "10px" }}>
        <TextField
          label="Search"
          variant="outlined"
          size="small"
          value={searchTerm}
          onChange={handleSearch}
          onKeyPress={(event) => {
            if (event.key === "Enter") {
              event.preventDefault();
              event.stopPropagation();
            }
          }}
        />
      </div>
      <table>
        <thead>
          <tr>
            <th>S.No</th>
            <th>Driver Full Name</th>
            <th>Volume</th>
            <th>Fuel Type</th>
            <th>Fuel Status</th>
          </tr>
        </thead>
        <tbody>
          {filteredFuels.map((fuel, index) => (
            <tr key={index}>
              <td>{index + 1}</td>
              <td>
                {fuel.driverName.firstName} {fuel.driverName.lastName}
              </td>
              <td>{fuel.volume}</td>
              <td>{fuel.feulType}</td>
              <td>{fuel.fuelStatus}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ViewFuelNotification;
