import React, { useState } from 'react';
import './RequestForm.css';
import axios from 'axios';

const RequestForm = () => {
  const [name, setName] = useState('');
  const [employeeNumber, setEmployeeNumber] = useState('');
  const [destination, setDestination] = useState('');
  const [duration, setDuration] = useState('');
  const [distance, setDistance] = useState('');
  const [note, setNote] = useState('');

  const handleReset = () => {
    setName('');
    setEmployeeNumber('');
    setDestination('');
    setDuration('');
    setDistance('');
    setNote('');
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = {
      name,
      employeeNumber,
      destination,
      duration,
      distance,
      note,
    };

    try {
      // Make an API request to store the form data in the database
      await axios.post('https://your-api-url.com/trip-request', formData);

      // Reset the form fields
      handleReset();
    } catch (error) {
      console.log('Error occurred while storing the data:', error);
    }
  };

  return (
    <div className="request-form-container">
      <h2>short distance Request Form</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Name:
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </label>
        <label>
          Employee Number:
          <input
            type="text"
            value={employeeNumber}
            onChange={(e) => setEmployeeNumber(e.target.value)}
          />
        </label>
        <label>
          Destination:
          <input
            type="text"
            value={destination}
            onChange={(e) => setDestination(e.target.value)}
          />
        </label>
        <label>
          departure-time:
          <input
            type="text"
            value={duration}
            onChange={(e) => setDuration(e.target.value)}
          />
        </label>
        <label>
          Distance:
          <input
            type="text"
            value={distance}
            onChange={(e) => setDistance(e.target.value)}
          />
        </label>
        <label>
          Additional Note:
          <textarea
            value={note}
            onChange={(e) => setNote(e.target.value)}
          ></textarea>
        </label>
        <div>
          <button type="submit">Submit</button>
          
          <button type="button" onClick={handleReset}>
            Reset
          </button>
        </div>
      </form>
    </div>
  );
};

export default RequestForm;
