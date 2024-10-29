import React, { useState } from 'react';
import './App.css';

function App() {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [fullName, setFullName] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault(); // Prevents page reload
    if (!firstName || !lastName) {
      setError('Both fields are required.');
    } else {
      setFullName(`${firstName} ${lastName}`);
      setError('');
      setFirstName('');
      setLastName('');
    }
  };

  return (
    <div className="form-container">
      <h1>Full Name Display</h1>
      <form onSubmit={handleSubmit} role="form">
        <div className="input-group">
          <label>First Name:</label>
          <input
            type="text"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
            required
          />
        </div>
        <div className="input-group">
          <label>Last Name:</label>
          <input
            type="text"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
            required
          />
        </div>
        <button type="submit">Submit</button>
      </form>
      {error && <p className="error-message">{error}</p>}
      {fullName && <p className="full-name-display">Full Name: {fullName}</p>}
    </div>
  );
}

export default App;
