import React, { useState } from 'react';
import './App.css';
import { Report, History } from './comps/Report'; // Import both classes from Report

function App() {
  // Add history entries

  const [description, setDescription] = useState('');
  const [amount, setAmount] = useState('');

  const reportInstance = new Report();

  const handleSubmit = (event) => {
    event.preventDefault(); // Prevent default form submission behavior

    // Convert amount to number (assuming it should be a number)
    const amountValue = parseFloat(amount);

    // Check if the description and amount are not empty and amount is a valid number
    if (description.trim() !== '' && !isNaN(amountValue)) {
      // Call the addHistory method of the reportInstance

      reportInstance.addHistory(description, amountValue);
      // Clear the form fields after adding history
      setDescription('');
      setAmount('');
    }
  };
  //reportInstance.addHistory("Car bills", -10);
  //reportInstance.addHistory("Pay day", 100);
  reportInstance.addHistory("pc parts ", -30);


  return (
    <>
      {/* Title / header */}
      <h1>Expense Tracker</h1>
      <h3>Your Balance</h3>
      <h2>$ {reportInstance.balance}</h2>

      {/* Separate boxes for income and expense */}
      <div className="box">
        <div>
          <h3 style={{ color: 'green' }}>Income</h3>
          <h3>{reportInstance.income}</h3>
        </div>
      </div>

      <div className="box">
        <div>
          <h3 style={{ color: 'red' }}>Expenses</h3>
          <h3>{reportInstance.expense}</h3>
        </div>
      </div>

      {/* History */}
      <h3>History</h3>
      {/* Add for loop here to show each history in historys list */}
      <div>
        {/* Display all items in the historys array */}
        {reportInstance.historys.map((entry, index) => (
          <div key={index}>
            <p>{entry.description} {entry.amount}</p>
          </div>
        ))}
      </div>

      {/* Add a transaction */}
      <h3>Add new transaction</h3>

      {/* HTML form */}
      <form onSubmit={handleSubmit}>
        <label htmlFor="description">Description:</label><br />
        <input
          type="text"
          id="description"
          name="description"
          value={description}
          onChange={(event) => setDescription(event.target.value)}
        /><br />
        <label htmlFor="amount">Amount:</label><br />
        <input
          type="text"
          id="amount"
          name="amount"
          value={amount}
          onChange={(event) => setAmount(event.target.value)}
        /><br />
        <input type="submit" value="Submit" />
      </form>
    </>
  );
}

export default App;
