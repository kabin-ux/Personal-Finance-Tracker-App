import React, { useMemo } from 'react';
import { Link } from 'react-router-dom';

import useTransactions from '../hooks/useTransactions';

const Reports = () => {
  const { transactions } = useTransactions();

  const totalIncome = useMemo(
    () => transactions.filter(t => t.category === 'Income').reduce((sum, t) => sum + t.amount, 0),
    [transactions]
  );

  const totalExpenses = useMemo(
    () => transactions.filter(t => t.category === 'Expense').reduce((sum, t) => sum + t.amount, 0),
    [transactions]
  );

  const totalSavings = useMemo(
    () => transactions.filter(t => t.category === 'Savings').reduce((sum, t) => sum + t.amount, 0),
    [transactions]
  );

  return (
    <div id='reports'>
      <h2>Reports</h2>
      <p>Total Income: ${totalIncome}</p>
      <p>Total Expenses: ${totalExpenses}</p>
      <p>Total Savings: ${totalSavings}</p>
      <li><Link to="/" className='return-btn'>Return</Link></li>

    </div>
  );
};

export default Reports;
