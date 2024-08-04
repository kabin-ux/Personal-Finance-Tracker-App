import React, { useRef } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import useTransactions from '../hooks/useTransactions';

const EditTransaction = () => {
  const { transactions, editTransaction } = useTransactions();
  const { id } = useParams();  //You are destructuring the id parameter from the object returned by useParams. This is useful when you need to extract specific parameters from the URL, like in a route with a dynamic segment.

  const navigate = useNavigate();
  const transaction = transactions.find(txn => txn.id === parseInt(id));
  
  const amountRef = useRef();
  const descriptionRef = useRef();
  const categoryRef = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();
    const updatedTransaction = {
      ...transaction,
      amount: parseFloat(amountRef.current.value),
      description: descriptionRef.current.value,
      category: categoryRef.current.value,
    };
    editTransaction(transaction.id, updatedTransaction);
    navigate('/transactions');
  };

  if (!transaction) return <div>Transaction not found</div>;

  return (
    <div>
      <h2>Edit Transaction</h2>
      <form onSubmit={handleSubmit}>
        <input type="number" ref={amountRef} defaultValue={transaction.amount} required />
        <input type="text" ref={descriptionRef} defaultValue={transaction.description} required />
        <select ref={categoryRef} defaultValue={transaction.category} required>
          <option value="Income">Income</option>
          <option value="Expense">Expense</option>
          <option value="Savings">Savings</option>
        </select>
        <button type="submit">Save</button>
      </form>
    </div>
  );
};

export default EditTransaction;
