import React, {useEffect, createContext, useState, useCallback, useMemo } from 'react';

// get data from localStorage
const getLocalData = () => {
  const lists = localStorage.getItem('myfinancetracker');
  if(lists){
    return JSON.parse(lists);
  }
    return [];
};

export const TransactionContext = createContext();

export const TransactionProvider = ({ children }) => { // The component takes children as a prop. The children prop in React is a special prop that contains any child elements passed to the component.
    
  // const [transactions, setTransactions] = useState([]);
  const [transactions, setTransactions] = useState(getLocalData());

  const addTransaction = useCallback((transaction) => {
    setTransactions((prev) => [...prev, transaction]);
  }, []);

  const editTransaction = useCallback((id, updatedTransaction) => {
    setTransactions((prev) => prev.map(txn => txn.id === id ? updatedTransaction : txn));
  }, []);

  const deleteTransaction = useCallback((id) => {
    setTransactions((prev) => prev.filter(txn => txn.id !== id));
  }, []);

  const contextValue = useMemo(() => ({
    transactions, addTransaction, editTransaction, deleteTransaction,
  }), [transactions, addTransaction, editTransaction, deleteTransaction]);

  //add localStorage
  useEffect(() => {
    localStorage.setItem('myfinancetracker',JSON.stringify(transactions));
  }, [transactions]);

  return (
    <TransactionContext.Provider value={contextValue}>
      {children}
    </TransactionContext.Provider>
  );
};
