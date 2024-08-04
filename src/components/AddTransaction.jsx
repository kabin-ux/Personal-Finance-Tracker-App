import React, { useRef } from 'react';
import {Link, useNavigate} from 'react-router-dom';
import useTransactions from '../hooks/useTransactions';

const AddTransaction = () => {
  const { addTransaction } = useTransactions(); //To extract the addTransaction function from the object returned by the useTransactions hook. It's a form of object destructuring in JavaScript.

  const amountRef = useRef();
  const descriptionRef = useRef();
  const categoryRef = useRef();

  const navigate = useNavigate()

  const handleSubmit = (e) => {
    e.preventDefault();
    const newTransaction = {
      id: Date.now(),
      amount: parseFloat(amountRef.current.value),
      description: descriptionRef.current.value,
      category: categoryRef.current.value,
    };
    addTransaction(newTransaction);
    navigate('/');
  };

  return (
    <div id='add-transaction'>
      <h2>Add Transaction</h2>
      <form onSubmit={handleSubmit}>
        <input type="number" ref={amountRef} placeholder="Amount" required />
        <input type="text" ref={descriptionRef} placeholder="Description" required />
        <select ref={categoryRef} required>
          <option value="Income">Income</option>
          <option value="Expense">Expense</option>
          <option value="Savings">Savings</option>
        </select>
        <button type="submit">Add</button>
      </form>

      </div>
  );
};

export default AddTransaction;
