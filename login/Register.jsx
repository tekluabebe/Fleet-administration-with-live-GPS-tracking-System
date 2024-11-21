import React, { useState } from 'react';
import axios from 'axios';

const Register = ({ history }) => {
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });

  const { email, password } = formData;

  const handleChange = e =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = async e => {
    e.preventDefault();
    try {
      await axios.post('/api/register', formData);
      history.push('/login');
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type='email'
        placeholder='Email'
        name='email'
        value={email}
        onChange={handleChange}
        required
      />
      <input
        type='password'
        placeholder='Password'
        name='password'
        value={password}
        onChange={handleChange}
        required
      />
      <button type='submit'>Register</button>
    </form>
  );
};

export default Register;
