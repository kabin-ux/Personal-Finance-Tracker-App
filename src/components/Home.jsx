import React from 'react';
import { Link } from 'react-router-dom';
import finance from '../img/finance.jpeg';

const Home = () => {
  return (
    <>
      <div id='home'>
        <h1>Personal Finance Tracker</h1>
        <nav>
          <ul>
            <li><Link to="/add-transaction">Add Transaction</Link></li>
            <li><Link to="/transactions">Transactions List</Link></li>
            <li><Link to="/reports">Reports</Link></li>
            <li><Link to="/settings">Settings</Link></li>
          </ul>
        </nav>
      </div>
      <div className='image'>
        <img src= {finance} alt="Description" />
      </div>
  </>
  );
};

export default Home;
