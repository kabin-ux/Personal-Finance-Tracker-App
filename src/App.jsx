import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import AddTransaction from './components/AddTransaction';
import EditTransaction from './components/EditTransaction';
import TransactionList from './components/TransactionList';
import Reports from './components/Reports';
import Settings from './components/Settings';
import { TransactionProvider } from './context/TransactionContext';
import './App.css';

function App() {
  return (
    <TransactionProvider>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/add-transaction" element={<AddTransaction />} />
          <Route path="/edit-transaction/:id" element={<EditTransaction />} />
          <Route path="/transactions" element={<TransactionList />} />
          <Route path="/reports" element={<Reports />} />
          <Route path="/settings" element={<Settings />} />
        </Routes>
      </Router>
    </TransactionProvider>
  );
}

export default App;
