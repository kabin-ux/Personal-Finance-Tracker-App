import React from 'react';
import { Link } from 'react-router-dom';
import useTransactions from '../hooks/useTransactions';

const TransactionList = () => {
  const { transactions, deleteTransaction } = useTransactions();

  return (
    <div id='transaction'>
      <h2>Transactions List</h2>
      <ul>
        {transactions.map((transaction) => (
          <li key={transaction.id}>
            {transaction.description} - ${transaction.amount} ({transaction.category})
            <Link to={`/edit-transaction/${transaction.id}`} className='edit-btn'>Edit</Link>
            <button onClick={() => deleteTransaction(transaction.id)}>Delete</button>
          </li>
        ))}
      </ul>
      <li><Link to="/" className='return-btn'>Return</Link></li>
    </div>
  );
};

export default TransactionList;
